"""tipg app."""

import logging
from contextlib import asynccontextmanager
from pathlib import Path
from typing import Any, List

import jinja2
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.openapi.docs import (
    get_swagger_ui_html,
    get_swagger_ui_oauth2_redirect_html,
)
from starlette.middleware.cors import CORSMiddleware
from starlette.templating import Jinja2Templates
from starlette_cramjam.middleware import CompressionMiddleware

from secure import Secure, ContentSecurityPolicy

from tipg import __version__ as tipg_version
from tipg.collections import register_collection_catalog
from tipg.database import close_db_connection, connect_to_db
from tipg.errors import DEFAULT_STATUS_CODES, add_exception_handlers
from tipg.factory import Endpoints
from tipg.middleware import CacheControlMiddleware, ProxyHostMiddleware, CatalogUpdateMiddleware
from tipg.rds import rds_connect_args
from tipg.settings import CustomSQLSettings, DatabaseSettings, PostgresSettings, CustomApiSettings, RDSSettings
from uvicorn.logging import TRACE_LOG_LEVEL
from uvicorn.middleware.message_logger import MessageLoggerMiddleware

settings = CustomApiSettings()
rds_settings = RDSSettings()
postgres_settings = PostgresSettings()
db_settings = DatabaseSettings()
custom_sql_settings = CustomSQLSettings()

def create_app(
        settings: CustomApiSettings,
        postgres_settings: PostgresSettings,
        rds_settings: RDSSettings,
        db_settings: DatabaseSettings,
        custom_sql_settings: CustomSQLSettings
    ):
    """Create a custom TiPG app with the given settings"""
    @asynccontextmanager
    async def lifespan(app: FastAPI):
        """FastAPI Lifespan."""
        # Create Connection Pool
        pg_settings, conn_kwargs = rds_connect_args(postgres_settings, rds_settings)

        await connect_to_db(
            app,
            settings=pg_settings,
            schemas=db_settings.schemas,
            user_sql_files=custom_sql_settings.sql_files,
            skip_sql_execution=settings.skip_sql_execution,
            **conn_kwargs
        )

        # Register Collection Catalog
        await register_collection_catalog(
            app,
            schemas=db_settings.schemas,
            tables=db_settings.tables,
            exclude_tables=db_settings.exclude_tables,
            exclude_table_schemas=db_settings.exclude_table_schemas,
            functions=db_settings.functions,
            exclude_functions=db_settings.exclude_functions,
            exclude_function_schemas=db_settings.exclude_function_schemas,
            spatial=db_settings.only_spatial_tables,
        )

        yield

        # Close the Connection Pool
        await close_db_connection(app)

    return FastAPI(
        title=settings.name,
        version=tipg_version,
        openapi_url="/api",
        docs_url=None,
        redoc_url=None,
        root_path=settings.root_path,
        lifespan=lifespan,
        debug=settings.debug,
    )


app = create_app(settings, postgres_settings, rds_settings, db_settings, custom_sql_settings)

# custom template directory
templates_location: List[Any] = (
    [jinja2.FileSystemLoader(settings.template_directory)]
    if settings.template_directory
    else []
)
# default template directory
templates_location.append(jinja2.PackageLoader(str(__package__), "templates"))

jinja2_env = jinja2.Environment(loader=jinja2.ChoiceLoader(templates_location), 
                                autoescape=jinja2.select_autoescape(['html']))
templates = Jinja2Templates(env=jinja2_env)


ogc_api = Endpoints(
    title=settings.name,
    templates=templates,
    with_common=settings.add_common_paths,
    with_tiles_viewer=settings.add_tiles_viewer,
)

static_dir = Path(__file__).parent.joinpath("static").resolve()
app.mount("/static", StaticFiles(directory=static_dir), name="static")

app.include_router(
    ogc_api.router, tags=["OGC Features API"]
)

app.add_middleware(
    ProxyHostMiddleware,
    proxy_scheme=settings.proxy_scheme,
    proxy_host=settings.proxy_host,
)

# app.add_middleware(KMLMiddleware)

# Set all CORS enabled origins
if settings.cors_origins:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_credentials=True,
        allow_methods=["GET"],
        allow_headers=["*"],
    )

app.add_middleware(CacheControlMiddleware, cachecontrol=settings.cachecontrol)
app.add_middleware(CompressionMiddleware)

csp = ContentSecurityPolicy().upgrade_insecure_requests().form_action("'self'").frame_ancestors("'self'")
secure_headers = Secure(csp=csp)

@app.middleware("http")
async def add_security_headers(request, call_next):
    response = await call_next(request)
    await secure_headers.set_headers_async(response)
    return response

if settings.catalog_ttl:
    app.add_middleware(
        CatalogUpdateMiddleware,
        func=register_collection_catalog,
        ttl=settings.catalog_ttl,
        schemas=db_settings.schemas,
        tables=db_settings.tables,
        exclude_tables=db_settings.exclude_tables,
        exclude_table_schemas=db_settings.exclude_table_schemas,
        functions=db_settings.functions,
        exclude_functions=db_settings.exclude_functions,
        exclude_function_schemas=db_settings.exclude_function_schemas,
        spatial=db_settings.only_spatial_tables,
        # spatial_extent=db_settings.spatial_extent,
        # datetime_extent=db_settings.datetime_extent,
    )


@app.get("/api.html", include_in_schema=False)
async def swagger_ui_html():
    return get_swagger_ui_html(
        openapi_url=settings.root_path + app.openapi_url,
        title=app.title + " - Swagger UI",
        oauth2_redirect_url=app.swagger_ui_oauth2_redirect_url,
        swagger_js_url=f"{settings.root_path}/static/swagger-ui-bundle.js",
        swagger_css_url=f"{settings.root_path}/static/swagger-ui.css",
        swagger_favicon_url=f"{settings.root_path}/static/favicon_32.svg"
    )


@app.get(app.swagger_ui_oauth2_redirect_url, include_in_schema=False)
async def swagger_ui_redirect():
    return get_swagger_ui_oauth2_redirect_html()

@app.get(
    "/healthz",
    description="Health Check.",
    summary="Health Check.",
    operation_id="healthCheck",
    tags=["Health Check"],
)
def ping():
    """Health check."""
    return {"ping": "pong!"}


add_exception_handlers(app, DEFAULT_STATUS_CODES)

# if settings.debug:

#     @app.get("/rawcatalog", tags=["debug"])
#     async def raw_catalog(request: Request):
#         """Return parsed catalog data for testing."""
#         return request.app.state.collection_catalog

#     @app.get("/refresh", tags=["debug"])
#     async def refresh(request: Request):
#         """Return parsed catalog data for testing."""
#         await register_collection_catalog(
#             request.app,
#             schemas=db_settings.schemas,
#             tables=db_settings.tables,
#             exclude_tables=db_settings.exclude_tables,
#             exclude_table_schemas=db_settings.exclude_table_schemas,
#             functions=db_settings.functions,
#             exclude_functions=db_settings.exclude_functions,
#             exclude_function_schemas=db_settings.exclude_function_schemas,
#             spatial=db_settings.only_spatial_tables,
#         )
#         return request.app.state.collection_catalog


if settings.trace:
    app.add_middleware(MessageLoggerMiddleware)
    logging.getLogger("uvicorn.asgi").level = TRACE_LOG_LEVEL
