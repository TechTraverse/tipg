"""tipg.dbmodel: database events."""

import datetime
import os
import re
from typing import Any, Dict, List, Optional, Tuple, TypedDict, Union

from buildpg import RawDangerous as raw
from buildpg import asyncpg, clauses
from buildpg import funcs as pg_funcs
from buildpg import logic, render
from ciso8601 import parse_rfc3339
from morecantile import Tile, TileMatrixSet
from pydantic import BaseModel, Field, model_validator
from pygeofilter.ast import AstType

from tipg.errors import (
    InvalidDatetime,
    InvalidDatetimeColumnName,
    InvalidGeometryColumnName,
    InvalidLimit,
    InvalidPropertyName,
    MissingDatetimeColumn,
)
from tipg.filter.evaluate import to_filter
from tipg.filter.filters import bbox_to_wkt
from tipg.logger import logger
from tipg.model import Extent
from tipg.settings import FeaturesSettings, MVTSettings, TableConfig, TableSettings

from fastapi import FastAPI

mvt_settings = MVTSettings()
features_settings = FeaturesSettings()


def debug_query(q, *p):
    """Utility to print raw statement to use for debugging."""

    qsub = re.sub(r"\$([0-9]+)", r"{\1}", q)

    def quote_str(s):
        """Quote strings."""

        if s is None:
            return "null"
        elif isinstance(s, str):
            return f"'{s}'"
        else:
            return s

    p = [quote_str(s) for s in p]
    logger.debug(qsub.format(None, *p))


# Links to geojson schema
geojson_schema = {
    "GEOMETRY": "https://geojson.org/schema/Geometry.json",
    "POINT": "https://geojson.org/schema/Point.json",
    "MULTIPOINT": "https://geojson.org/schema/MultiPoint.json",
    "LINESTRING": "https://geojson.org/schema/LineString.json",
    "MULTILINESTRING": "https://geojson.org/schema/MultiLineString.json",
    "POLYGON": "https://geojson.org/schema/Polygon.json",
    "MULTIPOLYGON": "https://geojson.org/schema/MultiPolygon.json",
    "GEOMETRYCOLLECTION": "https://geojson.org/schema/GeometryCollection.json",
}


class Feature(TypedDict, total=False):
    """Simple Feature model."""

    type: str
    # Geometry is either a dict or a str (wkt)
    geometry: Optional[Union[Dict, str]]
    properties: Optional[Dict]
    id: Optional[Any]
    bbox: Optional[List[float]]


class ItemList(TypedDict):
    """Items."""

    items: List[Feature]
    matched: Optional[int]
    next: Optional[int]
    prev: Optional[int]


class Column(BaseModel):
    """Model for database Column."""

    name: str
    type: str
    description: Optional[str] = None
    geometry_type: Optional[str] = None
    srid: Optional[int] = None
    bounds: Optional[List[float]] = None
    mindt: Optional[str] = None
    maxdt: Optional[str] = None

    @model_validator(mode="before")
    def sridbounds_default(cls, values):
        """Set default bounds and srid when this is a function."""
        if values.get("geometry_type"):
            values["srid"] = values.get("srid", 4326)
            values["bounds"] = values.get("bounds", [-180, -90, 180, 90])
        return values

    @property
    def json_type(self) -> str:
        """Return JSON field type."""
        if self.type.endswith("[]"):
            return "array"

        if self.type in [
            "smallint",
            "integer",
            "bigint",
            "decimal",
            "numeric",
            "real",
            "double precision",
            "smallserial",
            "serial",
            "bigserial",
            # Float8 is not a Postgres type name but is the name we give
            # internally do Double Precision type
            # ref: https://github.com/developmentseed/tipg/pull/60/files#r1011863866
            "float8",
        ]:
            return "number"

        if self.type.startswith("bool"):
            return "boolean"

        if any([self.type.startswith("json"), self.type.startswith("geo")]):
            return "object"

        return "string"

    @property
    def is_geometry(self) -> bool:
        """Returns true if this property is a geometry column."""
        return self.type in ("geometry", "geography")

    @property
    def is_datetime(self) -> bool:
        """Returns true if this property is a datetime column."""
        return self.type in ("timestamp", "timestamptz", "date")


class Parameter(Column):
    """Model for PostGIS function parameters."""

    default: Optional[str] = None


class Collection(BaseModel):
    """Model for DB Table and Function."""

    type: str
    id: str
    table: str
    dbschema: str = Field(alias="schema")
    title: Optional[str] = None
    description: Optional[str] = None
    table_columns: List[Column] = []
    properties: List[Column] = []
    id_column: Optional[Column] = None
    geometry_column: Optional[Column] = None
    datetime_column: Optional[Column] = None
    parameters: List[Parameter] = []

    @property
    def extent(self) -> Optional[Extent]:
        """Return extent."""
        extent: Dict[str, Any] = {}
        if cols := self.geometry_columns:
            if len(cols) == 1:
                bbox = [cols[0].bounds]
            else:
                minx, miny, maxx, maxy = zip(*[col.bounds for col in cols])
                bbox = [
                    [min(minx), min(miny), max(maxx), max(maxy)],
                    *[col.bounds for col in cols],
                ]

            extent["spatial"] = {
                "bbox": bbox,
                # The extent calculated in Pg is in WGS84 LON,LAT order
                # so we use `CRS84` as CRS
                "crs": "http://www.opengis.net/def/crs/OGC/1.3/CRS84",
            }

        if cols := [col for col in self.datetime_columns if col.mindt or col.maxdt]:
            intervals = []
            if len(cols) == 1:
                if cols[0].mindt or cols[0].maxdt:
                    intervals = [[cols[0].mindt, cols[0].maxdt]]

            else:
                mindt = [col.mindt for col in cols if col.mindt]
                maxdt = [col.maxdt for col in cols if col.maxdt]
                intervals = [
                    [min(mindt), max(maxdt)],
                    *[[col.mindt, col.maxdt] for col in cols if col.mindt or col.maxdt],
                ]

            if intervals:
                extent["temporal"] = {"interval": intervals}

        if extent:
            return Extent(**extent)

        return None

    @property
    def bounds(self) -> Optional[List[float]]:
        """Return spatial bounds from collection extent."""
        if self.extent and self.extent.spatial:
            return self.extent.spatial.bbox[0]

        return None

    @property
    def dt_bounds(self) -> Optional[List[str]]:
        """Return temporal bounds from collection extent."""
        if self.extent and self.extent.temporal:
            return self.extent.temporal.interval[0]

        return None

    @property
    def crs(self):
        """Return crs of set geometry column."""
        if self.geometry_column:
            return f"http://www.opengis.net/def/crs/EPSG/0/{self.geometry_column.srid}"

    @property
    def geometry_columns(self) -> List[Column]:
        """Return geometry columns."""
        return [c for c in self.table_columns if c.is_geometry]

    @property
    def datetime_columns(self) -> List[Column]:
        """Return datetime columns."""
        return [c for c in self.table_columns if c.is_datetime]

    def get_geometry_column(self, name: Optional[str] = None) -> Optional[Column]:
        """Return the name of the first geometry column."""
        if (not self.geometry_columns) or (name and name.lower() == "none"):
            return None

        if name is None:
            return self.geometry_column

        for col in self.geometry_columns:
            if col.name == name:
                return col

        return None

    def get_datetime_column(self, name: Optional[str] = None) -> Optional[Column]:
        """Return the Column for either the passed in tstz column or the first tstz column."""
        if not self.datetime_columns:
            return None

        if name is None:
            return self.datetime_column

        for col in self.datetime_columns:
            if col.name == name:
                return col

        return None

    def columns(self, properties: Optional[List[str]] = None) -> List[str]:
        """Return table columns optionally filtered to only include columns from properties."""
        if properties in [[], [""]]:
            return []

        cols = [
            c.name for c in self.properties if c.type not in ["geometry", "geography"]
        ]
        if properties is None:
            return cols

        return [c for c in cols if c in properties]

    def get_column(self, property_name: str) -> Optional[Column]:
        """Return column info."""
        for p in self.properties:
            if p.name == property_name:
                return p

        return None

    def _select_no_geo(self, properties: Optional[List[str]], addid: bool = True):
        nocomma = False
        columns = self.columns(properties)
        if columns:
            sel = logic.as_sql_block(clauses.Select(columns))
        else:
            sel = logic.as_sql_block(raw("SELECT "))
            nocomma = True

        if addid:
            if self.id_column:
                id_clause = logic.V(self.id_column.name).as_("tipg_id")
            else:
                id_clause = raw(" ROW_NUMBER () OVER () AS tipg_id ")
            if nocomma:
                sel = clauses.Clauses(sel, id_clause)
            else:
                sel = sel.comma(id_clause)

        return logic.as_sql_block(sel)

    def _select(
        self,
        properties: Optional[List[str]],
        geometry_column: Optional[Column],
        bbox_only: Optional[bool],
        simplify: Optional[float],
        geom_as_wkt: bool = False,
    ):
        sel = self._select_no_geo(properties)

        geom = self._geom(geometry_column, bbox_only, simplify)
        if geom_as_wkt:
            if geom:
                sel = sel.comma(logic.Func("ST_AsEWKT", geom).as_("tipg_geom"))
            else:
                sel = sel.comma(pg_funcs.cast(None, "text").as_("tipg_geom"))

        else:
            if geom:
                sel = sel.comma(
                    pg_funcs.cast(logic.Func("ST_AsGeoJSON", geom), "json").as_(
                        "tipg_geom"
                    )
                )
            else:
                sel = sel.comma(pg_funcs.cast(None, "json").as_("tipg_geom"))

        return sel

    def _select_mvt(
        self,
        properties: Optional[List[str]],
        geometry_column: Column,
        tms: TileMatrixSet,
        tile: Tile,
    ):
        """Create MVT from intersecting geometries."""
        geom = pg_funcs.cast(logic.V(geometry_column.name), "geometry")

        # make sure the geometries do not overflow the TMS bbox
        if not tms.is_valid(tile):
            geom = logic.Func(
                "ST_Intersection",
                logic.Func("ST_MakeEnvelope", *tms.bbox, 4326),
                logic.Func(
                    "ST_Transform",
                    geom,
                    pg_funcs.cast(4326, "int"),
                ),
            )

        # Transform the geometries to TMS CRS using EPSG code
        if tms_srid := tms.crs.to_epsg():
            transform_logic = logic.Func(
                "ST_Transform",
                geom,
                pg_funcs.cast(tms_srid, "int"),
            )

        # Transform the geometries to TMS CRS using PROJ String
        else:
            tms_proj = tms.crs.to_proj4()
            transform_logic = logic.Func(
                "ST_Transform",
                geom,
                pg_funcs.cast(tms_proj, "text"),
            )

        bbox = tms.xy_bounds(tile)
        sel = self._select_no_geo(properties, addid=False).comma(
            logic.Func(
                "ST_AsMVTGeom",
                transform_logic,
                logic.Func(
                    "ST_Segmentize",
                    logic.Func(
                        "ST_MakeEnvelope",
                        bbox.left,
                        bbox.bottom,
                        bbox.right,
                        bbox.top,
                    ),
                    bbox.right - bbox.left,
                ),
                mvt_settings.tile_resolution,
                mvt_settings.tile_buffer,
                mvt_settings.tile_clip,
            ).as_("geom")
        )

        return sel

    def _select_count(self):
        return clauses.Select(pg_funcs.count("*"))

    def _from(self, function_parameters: Optional[Dict[str, str]]):
        if self.type == "Function":
            if not function_parameters:
                return clauses.From(self.id) + raw("()")
            params = []
            for p in self.parameters:
                if p.name in function_parameters:
                    params.append(
                        pg_funcs.cast(
                            pg_funcs.cast(function_parameters[p.name], "text"),
                            p.type,
                        )
                    )
            return clauses.From(logic.Func(self.id, *params))
        return clauses.From(self.id)

    def _geom(
        self,
        geometry_column: Optional[Column],
        bbox_only: Optional[bool],
        simplify: Optional[float],
    ):
        if geometry_column is None:
            return None

        g = pg_funcs.cast(logic.V(geometry_column.name), "geometry")

        # Reproject to WGS64 if needed
        if geometry_column.srid != 4326:
            g = logic.Func("ST_Transform", g, pg_funcs.cast(4326, "int"))

        # Return BBOX Only
        if bbox_only:
            g = logic.Func("ST_Envelope", g)

        # Simplify the geometry
        elif simplify:
            g = logic.Func(
                "ST_SnapToGrid",
                logic.Func("ST_Simplify", g, simplify),
                simplify,
            )

        return g

    def _where(  # noqa: C901
        self,
        ids: Optional[List[str]] = None,
        datetime: Optional[List[str]] = None,
        bbox: Optional[List[float]] = None,
        properties: Optional[List[Tuple[str, Any]]] = None,
        cql: Optional[AstType] = None,
        geom: Optional[str] = None,
        dt: Optional[str] = None,
        tile: Optional[Tile] = None,
        tms: Optional[TileMatrixSet] = None,
    ):
        """Construct WHERE query."""
        wheres = [logic.S(True)]

        # `ids` filter
        if ids is not None:
            if len(ids) == 1:
                wheres.append(
                    logic.V(self.id_column.name)
                    == pg_funcs.cast(pg_funcs.cast(ids[0], "text"), self.id_column.type)
                )
            else:
                w = [
                    logic.V(self.id_column.name)
                    == logic.S(
                        pg_funcs.cast(pg_funcs.cast(i, "text"), self.id_column.type)
                    )
                    for i in ids
                ]
                wheres.append(pg_funcs.OR(*w))

        # `properties filter
        if properties is not None:
            w = []
            for prop, val in properties:
                col = self.get_column(prop)
                if not col:
                    raise InvalidPropertyName(f"Invalid property name: {prop}")

                w.append(
                    logic.V(col.name)
                    == logic.S(pg_funcs.cast(pg_funcs.cast(val, "text"), col.type))
                )

            if w:
                wheres.append(pg_funcs.AND(*w))

        # `bbox` filter
        geometry_column = self.get_geometry_column(geom)
        if bbox is not None and geometry_column is not None:
            wheres.append(
                logic.Func(
                    "ST_Intersects",
                    logic.S(bbox_to_wkt(bbox)),
                    logic.V(geometry_column.name),
                )
            )

        # `datetime` filter
        if datetime:
            if not self.datetime_columns:
                raise MissingDatetimeColumn(
                    "Must have timestamp/timestamptz/date typed column to filter with datetime."
                )

            datetime_column = self.get_datetime_column(dt)
            if not datetime_column:
                raise InvalidDatetimeColumnName(f"Invalid Datetime Column: {dt}.")

            wheres.append(self._datetime_filter_to_sql(datetime, datetime_column.name))

        # `CQL` filter
        if cql is not None:
            wheres.append(to_filter(cql, [p.name for p in self.properties]))

        if tile and tms and geometry_column:
            # Get Tile Bounds in Geographic CRS (usually epsg:4326)
            left, bottom, right, top = tms.bounds(tile)

            # Truncate bounds to the max TMS bbox
            left, bottom = tms.truncate_lnglat(left, bottom)
            right, top = tms.truncate_lnglat(right, top)

            wheres.append(
                logic.Func(
                    "ST_Intersects",
                    logic.Func(
                        "ST_Transform",
                        logic.Func(
                            "ST_Segmentize",
                            logic.Func(
                                "ST_MakeEnvelope",
                                left,
                                bottom,
                                right,
                                top,
                                4326,
                            ),
                            right - left,
                        ),
                        pg_funcs.cast(geometry_column.srid, "int"),
                    ),
                    logic.V(geometry_column.name),
                )
            )

        return clauses.Where(pg_funcs.AND(*wheres))

    def _datetime_filter_to_sql(self, interval: List[str], dt_name: str):
        if len(interval) == 1:
            return logic.V(dt_name) == logic.S(
                pg_funcs.cast(parse_rfc3339(interval[0]), "timestamptz")
            )

        else:
            start = (
                parse_rfc3339(interval[0]) if interval[0] not in ["..", ""] else None
            )
            end = parse_rfc3339(interval[1]) if interval[1] not in ["..", ""] else None

            if start is None and end is None:
                raise InvalidDatetime(
                    "Double open-ended datetime intervals are not allowed."
                )

            if start is not None and end is not None and start > end:
                raise InvalidDatetime("Start datetime cannot be before end datetime.")

            if not start:
                return logic.V(dt_name) <= logic.S(pg_funcs.cast(end, "timestamptz"))

            elif not end:
                return logic.V(dt_name) >= logic.S(pg_funcs.cast(start, "timestamptz"))

            else:
                return pg_funcs.AND(
                    logic.V(dt_name) >= logic.S(pg_funcs.cast(start, "timestamptz")),
                    logic.V(dt_name) < logic.S(pg_funcs.cast(end, "timestamptz")),
                )

    def _sortby(self, sortby: Optional[str]):
        sorts = []
        if sortby:
            for s in sortby.strip().split(","):
                parts = re.match("^(?P<direction>[+-]?)(?P<column>.*)$", s).groupdict()  # type:ignore

                direction = parts["direction"]
                column = parts["column"].strip()
                if self.get_column(column):
                    if direction == "-":
                        sorts.append(logic.V(column).desc())
                    else:
                        sorts.append(logic.V(column))
                else:
                    raise InvalidPropertyName(f"Property {column} does not exist.")

        else:
            if self.id_column is not None:
                sorts.append(logic.V(self.id_column.name))
            else:
                sorts.append(logic.V(self.properties[0].name))

        return clauses.OrderBy(*sorts)

    async def _features_query(
        self,
        *,
        pool: asyncpg.BuildPgPool,
        ids_filter: Optional[List[str]] = None,
        bbox_filter: Optional[List[float]] = None,
        datetime_filter: Optional[List[str]] = None,
        properties_filter: Optional[List[Tuple[str, str]]] = None,
        cql_filter: Optional[AstType] = None,
        sortby: Optional[str] = None,
        properties: Optional[List[str]] = None,
        geom: Optional[str] = None,
        dt: Optional[str] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None,
        bbox_only: Optional[bool] = None,
        simplify: Optional[float] = None,
        geom_as_wkt: bool = False,
        function_parameters: Optional[Dict[str, str]],
    ):
        """Build Features query."""
        limit = limit or features_settings.default_features_limit
        offset = offset or 0

        c = clauses.Clauses(
            self._select(
                properties=properties,
                geometry_column=self.get_geometry_column(geom),
                bbox_only=bbox_only,
                simplify=simplify,
                geom_as_wkt=geom_as_wkt,
            ),
            self._from(function_parameters),
            self._where(
                ids=ids_filter,
                datetime=datetime_filter,
                bbox=bbox_filter,
                properties=properties_filter,
                cql=cql_filter,
                geom=geom,
                dt=dt,
            ),
            self._sortby(sortby),
            clauses.Limit(limit),
            clauses.Offset(offset),
        )

        q, p = render(":c", c=c)
        async with pool.acquire() as conn:
            for r in await conn.fetch(q, *p):
                props = dict(r)
                g = props.pop("tipg_geom")
                id = props.pop("tipg_id")
                feature = Feature(type="Feature", geometry=g, id=id, properties=props)
                yield feature

    async def _features_count_query(
        self,
        *,
        pool: asyncpg.BuildPgPool,
        ids_filter: Optional[List[str]] = None,
        bbox_filter: Optional[List[float]] = None,
        datetime_filter: Optional[List[str]] = None,
        properties_filter: Optional[List[Tuple[str, str]]] = None,
        cql_filter: Optional[AstType] = None,
        geom: Optional[str] = None,
        dt: Optional[str] = None,
        function_parameters: Optional[Dict[str, str]],
    ) -> int:
        """Build features COUNT query."""
        c = clauses.Clauses(
            self._select_count(),
            self._from(function_parameters),
            self._where(
                ids=ids_filter,
                datetime=datetime_filter,
                bbox=bbox_filter,
                properties=properties_filter,
                cql=cql_filter,
                geom=geom,
                dt=dt,
            ),
        )

        q, p = render(":c", c=c)
        async with pool.acquire() as conn:
            count = await conn.fetchval(q, *p)
            return count

    async def features(
        self,
        pool: asyncpg.BuildPgPool,
        *,
        ids_filter: Optional[List[str]] = None,
        bbox_filter: Optional[List[float]] = None,
        datetime_filter: Optional[List[str]] = None,
        properties_filter: Optional[List[Tuple[str, str]]] = None,
        cql_filter: Optional[AstType] = None,
        sortby: Optional[str] = None,
        properties: Optional[List[str]] = None,
        geom: Optional[str] = None,
        dt: Optional[str] = None,
        limit: Optional[int] = None,
        offset: Optional[int] = None,
        bbox_only: Optional[bool] = None,
        simplify: Optional[float] = None,
        geom_as_wkt: bool = False,
        function_parameters: Optional[Dict[str, str]] = None,
    ) -> ItemList:
        """Build and run Pg query."""
        limit = limit or features_settings.default_features_limit
        offset = offset or 0

        function_parameters = function_parameters or {}

        if geom and geom.lower() != "none" and not self.get_geometry_column(geom):
            raise InvalidGeometryColumnName(f"Invalid Geometry Column: {geom}.")

        if limit and limit > features_settings.max_features_per_query:
            raise InvalidLimit(
                f"Limit can not be set higher than the `tipg_max_features_per_query` setting of {features_settings.max_features_per_query}"
            )

        matched = await self._features_count_query(
            pool=pool,
            ids_filter=ids_filter,
            datetime_filter=datetime_filter,
            bbox_filter=bbox_filter,
            properties_filter=properties_filter,
            function_parameters=function_parameters,
            cql_filter=cql_filter,
            geom=geom,
            dt=dt,
        )

        features = [
            f
            async for f in self._features_query(
                pool=pool,
                ids_filter=ids_filter,
                datetime_filter=datetime_filter,
                bbox_filter=bbox_filter,
                properties_filter=properties_filter,
                cql_filter=cql_filter,
                sortby=sortby,
                properties=properties,
                geom=geom,
                dt=dt,
                limit=limit,
                offset=offset,
                bbox_only=bbox_only,
                simplify=simplify,
                geom_as_wkt=geom_as_wkt,
                function_parameters=function_parameters,
            )
        ]
        returned = len(features)

        return ItemList(
            items=features,
            matched=matched,
            next=offset + returned if matched - returned > offset else None,
            prev=max(offset - limit, 0) if offset else None,
        )

    async def get_tile(
        self,
        *,
        pool: asyncpg.BuildPgPool,
        tms: TileMatrixSet,
        tile: Tile,
        ids_filter: Optional[List[str]] = None,
        bbox_filter: Optional[List[float]] = None,
        datetime_filter: Optional[List[str]] = None,
        properties_filter: Optional[List[Tuple[str, str]]] = None,
        function_parameters: Optional[Dict[str, str]] = None,
        cql_filter: Optional[AstType] = None,
        sortby: Optional[str] = None,
        properties: Optional[List[str]] = None,
        geom: Optional[str] = None,
        dt: Optional[str] = None,
        limit: Optional[int] = None,
    ):
        """Build query to get Vector Tile."""
        limit = limit or mvt_settings.max_features_per_tile

        geometry_column = self.get_geometry_column(geom)
        if not geometry_column:
            raise InvalidGeometryColumnName(f"Invalid Geometry Column Name {geom}")

        if limit > mvt_settings.max_features_per_tile:
            raise InvalidLimit(
                f"Limit can not be set higher than the `tipg_max_features_per_tile` setting of {mvt_settings.max_features_per_tile}"
            )

        c = clauses.Clauses(
            self._select_mvt(
                properties=properties,
                geometry_column=geometry_column,
                tms=tms,
                tile=tile,
            ),
            self._from(function_parameters),
            self._where(
                ids=ids_filter,
                datetime=datetime_filter,
                bbox=bbox_filter,
                properties=properties_filter,
                cql=cql_filter,
                geom=geom,
                dt=dt,
                tms=tms,
                tile=tile,
            ),
            clauses.Limit(limit),
        )

        q, p = render(
            """
            WITH
            t AS (:c)
            SELECT ST_AsMVT(t.*, :l) FROM t
            """,
            c=c,
            l=self.table if mvt_settings.set_mvt_layername is True else "default",
        )
        debug_query(q, *p)

        async with pool.acquire() as conn:
            return await conn.fetchval(q, *p)

    @property
    def queryables(self) -> Dict:
        """Return the queryables."""
        if self.geometry_columns:
            geoms = {
                col.name: {"$ref": geojson_schema.get(col.geometry_type.upper(), "")}
                for col in self.geometry_columns
            }
        else:
            geoms = {}

        props = {
            col.name: {"name": col.name, "type": col.json_type}
            for col in self.properties
            if col.name not in geoms
        }

        return {**geoms, **props}


class CollectionList(TypedDict):
    """Collections."""

    collections: List[Collection]
    matched: Optional[int]
    next: Optional[int]
    prev: Optional[int]


class Catalog(TypedDict):
    """Internal Collection Catalog."""

    collections: Dict[str, Collection]
    last_updated: datetime.datetime


async def get_collection_index(  # noqa: C901
    db_pool: asyncpg.BuildPgPool,
    schemas: Optional[List[str]] = None,
    tables: Optional[List[str]] = None,
    exclude_tables: Optional[List[str]] = None,
    exclude_table_schemas: Optional[List[str]] = None,
    functions: Optional[List[str]] = None,
    exclude_functions: Optional[List[str]] = None,
    exclude_function_schemas: Optional[List[str]] = None,
    spatial: bool = True,
    spatial_extent: bool = True,
    datetime_extent: bool = True,
) -> Catalog:
    """Fetch Table and Functions index."""
    schemas = schemas or ["public"]

    read_only = os.getenv("TIPG_SKIP_SQL_EXECUTION")

    if read_only == "TRUE":
        query = """
            SELECT public.tipg_catalog(
                :schemas,
                :tables,
                :exclude_tables,
                :exclude_table_schemas,
                :functions,
                :exclude_functions,
                :exclude_function_schemas,
                :spatial,
                :spatial_extent,
                :datetime_extent
            );
        """  # noqa: W605
    else:
        query = """
            SELECT pg_temp.tipg_catalog(
                :schemas,
                :tables,
                :exclude_tables,
                :exclude_table_schemas,
                :functions,
                :exclude_functions,
                :exclude_function_schemas,
                :spatial,
                :spatial_extent,
                :datetime_extent
            );
        """  # noqa: W605

    async with db_pool.acquire() as conn:
        rows = await conn.fetch_b(
            query,
            schemas=schemas,
            tables=tables,
            exclude_tables=exclude_tables,
            exclude_table_schemas=exclude_table_schemas,
            functions=functions,
            exclude_functions=exclude_functions,
            exclude_function_schemas=exclude_function_schemas,
            spatial=spatial,
            spatial_extent=spatial_extent,
            datetime_extent=datetime_extent,
        )

        catalog: Dict[str, Collection] = {}
        table_settings = TableSettings()
        table_confs = table_settings.table_config
        fallback_key_names = table_settings.fallback_key_names

        for row in rows:
            table = row[0]
            table_id = table["schema"] + "." + table["name"]
            confid = table["schema"] + "_" + table["name"]

            if "tipg_catalog" in table_id:
                continue

            table_conf = table_confs.get(confid, TableConfig())

            # Make sure that any properties set in conf exist in table
            columns = table.get("properties", [])
            if table_settings.sort_columns:
                columns = sorted(columns, key=lambda d: d["name"])

            properties_setting = table_conf.properties or [c["name"] for c in columns]

            # ID Column
            id_column = None
            if id_name := table_conf.pk or table.get("pk"):
                for p in columns:
                    if id_name == p["name"]:
                        id_column = p
                        break

            if id_column is None and fallback_key_names:
                for p in columns:
                    if p["name"] in fallback_key_names:
                        id_column = p
                        break

            datetime_column = None
            geometry_column = None

            for c in columns:
                if c.get("type") in ("timestamp", "timestamptz", "date"):
                    if table_conf.datetimecol == c["name"] or datetime_column is None:
                        datetime_column = c

                if c.get("type") in ("geometry", "geography"):
                    if table_conf.geomcol == c["name"] or geometry_column is None:
                        geometry_column = c

            catalog[table_id] = Collection(
                type=table["entity"],
                id=table_id,
                table=table["name"],
                schema=table["schema"],
                description=table.get("description", None),
                table_columns=columns,
                properties=[p for p in columns if p["name"] in properties_setting],
                id_column=id_column,
                datetime_column=datetime_column,
                geometry_column=geometry_column,
                parameters=table.get("parameters") or [],
            )

        return Catalog(collections=catalog, last_updated=datetime.datetime.now())


async def register_collection_catalog(app: FastAPI, **kwargs: Any) -> None:
    """Register Table catalog."""
    app.state.collection_catalog = await get_collection_index(app.state.pool, **kwargs)
