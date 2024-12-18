"""tipg middlewares."""

import re
import logging
import asyncio
from datetime import datetime, timedelta
from typing import Any, Optional, Protocol, Set

from tipg.collections import Catalog
from tipg.errors import MissingCollectionCatalog
from tipg.logger import logger

from starlette.background import BackgroundTask
from starlette.datastructures import MutableHeaders
from starlette.requests import Request
from starlette.types import ASGIApp, Message, Receive, Scope, Send

logger = logging.getLogger(__name__)

class CacheControlMiddleware:
    """MiddleWare to add CacheControl in response headers."""

    def __init__(
        self,
        app: ASGIApp,
        cachecontrol: Optional[str] = None,
        cachecontrol_max_http_code: Optional[int] = 500,
        exclude_path: Optional[Set[str]] = None,
    ) -> None:
        """Init Middleware.

        Args:
            app (ASGIApp): starlette/FastAPI application.
            cachecontrol (str): Cache-Control string to add to the response.
            exclude_path (set): Set of regex expression to use to filter the path.

        """
        self.app = app
        self.cachecontrol = cachecontrol
        self.cachecontrol_max_http_code = cachecontrol_max_http_code
        self.exclude_path = exclude_path or set()

    async def __call__(self, scope: Scope, receive: Receive, send: Send):
        """Handle call."""
        if scope["type"] != "http":
            await self.app(scope, receive, send)
            return

        async def send_wrapper(message: Message):
            """Send Message."""
            if message["type"] == "http.response.start":
                response_headers = MutableHeaders(scope=message)
                if self.cachecontrol and not response_headers.get("Cache-Control"):
                    if (
                        scope["method"] in ["HEAD", "GET"]
                        and message["status"] < self.cachecontrol_max_http_code
                        and not any(
                            re.match(path, scope["path"]) for path in self.exclude_path
                        )
                    ):
                        response_headers["Cache-Control"] = self.cachecontrol

            await send(message)

        await self.app(scope, receive, send_wrapper)


class CatalogUpdateFunc(Protocol):
    """Catalog update function protocol."""

    def __call__(self, app: ASGIApp, **kwargs: Any) -> None:
        """define input/output for the function."""
        ...


class CatalogUpdateMiddleware:
    """Middleware to update the catalog cache."""

    def __init__(
        self,
        app: ASGIApp,
        *,
        func: Any,
        ttl: int = 300,
        **kwargs: Any,
    ) -> None:
        """Initialize Middleware with lock and last update time tracking."""
        self.app = app
        self.func = func
        self.ttl = ttl
        self.kwargs = kwargs
        self.lock = asyncio.Lock()  # Async lock for strict sequential control
        self.last_updated = None
        self.update_in_progress = False  # Flag to prevent overlapping updates

    async def __call__(self, scope: Scope, receive: Receive, send: Send):
        """Handle HTTP calls and trigger catalog update if needed."""
        if scope["type"] != "http":
            await self.app(scope, receive, send)
            return

        request = Request(scope)
        background: Optional[BackgroundTask] = None

        catalog: Catalog = getattr(request.app.state, "collection_catalog", None)
        if not catalog:
            raise MissingCollectionCatalog("Could not find collections catalog.")

        if self.should_refresh_catalog():
            if not self.lock.locked():
                logger.debug(f"Running catalog refresh in background. Last Updated: {self.last_updated}")
                background = BackgroundTask(self.update_catalog, request.app)

        await self.app(scope, receive, send)
        if background:
            await background()

    def should_refresh_catalog(self) -> bool:
        """Determine if catalog refresh is needed based on TTL and lock status."""
        now = datetime.now()
        return (
            not self.last_updated
            or now > (self.last_updated + timedelta(seconds=self.ttl))
            and not self.update_in_progress
        )

    async def update_catalog(self, app: ASGIApp):
        """Execute catalog update function with async lock."""
        async with self.lock:
            self.update_in_progress = True
            try:
                await self.func(app, **self.kwargs)
                self.last_updated = datetime.now()
            except Exception as e:
                logger.error(f"Catalog refresh failed: {e}")
            finally:
                self.update_in_progress = False  # Reset flag after completion


class ProxyHostMiddleware:
    def __init__(self, app: ASGIApp, proxy_scheme: str, proxy_host: str) -> None:
        self.app = app
        self.proxy_scheme = proxy_scheme
        self.proxy_host = proxy_host

    async def __call__(self, scope: Scope, receive: Receive, send: Send) -> None:
        """Override scope values if proxy paramters are configured"""
        if scope["type"] == "http":
            if self.proxy_scheme:
                scope["scheme"] = self.proxy_scheme

            if self.proxy_host:
                scope["server"] = (self.proxy_host, 0)
                headers = MutableHeaders(scope=scope)
                headers["host"] = self.proxy_host

        return await self.app(scope, receive, send)
