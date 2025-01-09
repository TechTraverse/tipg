window.BENCHMARK_DATA = {
  "lastUpdate": 1736450856692,
  "repoUrl": "https://github.com/TechTraverse/tipg",
  "entries": {
    "TiPg Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "patricia.fricke@techtraverse.io",
            "name": "Patty Fricke",
            "username": "pc-ef"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f94bc4e2d4ffc7dd5dcf2a373198bd8cc4fe57d",
          "message": "update ci.yml to convert repository name to lowercase",
          "timestamp": "2025-01-09T12:21:53-07:00",
          "tree_id": "aec1a211a0c6ae12079f4501744956e669fb9aeb",
          "url": "https://github.com/TechTraverse/tipg/commit/5f94bc4e2d4ffc7dd5dcf2a373198bd8cc4fe57d"
        },
        "date": 1736450856340,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-1]",
            "value": 483.35559373814345,
            "unit": "iter/sec",
            "range": "stddev: 0.00013156565313968477",
            "extra": "mean: 2.0688702333333238 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-10]",
            "value": 335.4812087978716,
            "unit": "iter/sec",
            "range": "stddev: 0.00021538426706906445",
            "extra": "mean: 2.9807928842968456 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-1]",
            "value": 411.4606624033581,
            "unit": "iter/sec",
            "range": "stddev: 0.00011535404084406536",
            "extra": "mean: 2.4303659896889296 msec\nrounds: 97"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-10]",
            "value": 285.9142359487121,
            "unit": "iter/sec",
            "range": "stddev: 0.00011807623918436686",
            "extra": "mean: 3.497552322576138 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[json]",
            "value": 594.5977000611432,
            "unit": "iter/sec",
            "range": "stddev: 0.0001902703052762679",
            "extra": "mean: 1.681809398013428 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[html]",
            "value": 443.5756995410164,
            "unit": "iter/sec",
            "range": "stddev: 0.00016349908253750962",
            "extra": "mean: 2.2544066346166747 msec\nrounds: 104"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_queryables",
            "value": 691.2750680581402,
            "unit": "iter/sec",
            "range": "stddev: 0.00011392457325867218",
            "extra": "mean: 1.4466021504422235 msec\nrounds: 452"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-1]",
            "value": 211.99732056572958,
            "unit": "iter/sec",
            "range": "stddev: 0.0002977053927461249",
            "extra": "mean: 4.717040750003021 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-10]",
            "value": 178.35064549332964,
            "unit": "iter/sec",
            "range": "stddev: 0.0002851025726876951",
            "extra": "mean: 5.606932328357624 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-50]",
            "value": 109.8645988324952,
            "unit": "iter/sec",
            "range": "stddev: 0.006587274891562168",
            "extra": "mean: 9.102113061229556 msec\nrounds: 98"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-100]",
            "value": 74.3722022524706,
            "unit": "iter/sec",
            "range": "stddev: 0.008287964624945743",
            "extra": "mean: 13.445883942031319 msec\nrounds: 69"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-200]",
            "value": 39.77931317500491,
            "unit": "iter/sec",
            "range": "stddev: 0.01326287148239079",
            "extra": "mean: 25.138694466659217 msec\nrounds: 45"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-250]",
            "value": 33.31897700450274,
            "unit": "iter/sec",
            "range": "stddev: 0.015265489933249105",
            "extra": "mean: 30.012926263158068 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-1]",
            "value": 178.2253162461761,
            "unit": "iter/sec",
            "range": "stddev: 0.005932528121080141",
            "extra": "mean: 5.6108751610727206 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-10]",
            "value": 146.13922326604566,
            "unit": "iter/sec",
            "range": "stddev: 0.0005233709943750866",
            "extra": "mean: 6.8427898934395275 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-50]",
            "value": 75.9739443710962,
            "unit": "iter/sec",
            "range": "stddev: 0.0007470582183337725",
            "extra": "mean: 13.162407300001178 msec\nrounds: 70"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-100]",
            "value": 45.039305576777686,
            "unit": "iter/sec",
            "range": "stddev: 0.0015609739474876012",
            "extra": "mean: 22.202829000001305 msec\nrounds: 45"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-200]",
            "value": 24.833121378349713,
            "unit": "iter/sec",
            "range": "stddev: 0.002581176688715511",
            "extra": "mean: 40.2688000740749 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-250]",
            "value": 20.654517158395166,
            "unit": "iter/sec",
            "range": "stddev: 0.0025792051747409277",
            "extra": "mean: 48.41555928571021 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-1]",
            "value": 177.69844980514787,
            "unit": "iter/sec",
            "range": "stddev: 0.000319820647801512",
            "extra": "mean: 5.627511107139834 msec\nrounds: 56"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-10]",
            "value": 150.58567810654623,
            "unit": "iter/sec",
            "range": "stddev: 0.0003134891260831606",
            "extra": "mean: 6.640737768517763 msec\nrounds: 108"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-50]",
            "value": 81.28903044667383,
            "unit": "iter/sec",
            "range": "stddev: 0.00733119923953744",
            "extra": "mean: 12.301782842102009 msec\nrounds: 76"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-100]",
            "value": 53.710699546722054,
            "unit": "iter/sec",
            "range": "stddev: 0.010583776453797291",
            "extra": "mean: 18.61826430188489 msec\nrounds: 53"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-200]",
            "value": 30.250300362798836,
            "unit": "iter/sec",
            "range": "stddev: 0.011992240323130276",
            "extra": "mean: 33.057522999995676 msec\nrounds: 33"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-250]",
            "value": 24.167602949441875,
            "unit": "iter/sec",
            "range": "stddev: 0.015320723579930811",
            "extra": "mean: 41.37770725925857 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-NewfoundlandandLabrador]",
            "value": 1.1924649830069944,
            "unit": "iter/sec",
            "range": "stddev: 0.00884544985753769",
            "extra": "mean: 838.5990484000104 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-Saskatchewan]",
            "value": 27.00917505728428,
            "unit": "iter/sec",
            "range": "stddev: 0.00022740771627873573",
            "extra": "mean: 37.02445549999512 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-NewfoundlandandLabrador]",
            "value": 0.8086731044410056,
            "unit": "iter/sec",
            "range": "stddev: 0.00855519584727217",
            "extra": "mean: 1.2365936180000063 sec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-Saskatchewan]",
            "value": 16.54525280024929,
            "unit": "iter/sec",
            "range": "stddev: 0.016860025168764666",
            "extra": "mean: 60.44029741177075 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WGS1984Quad]",
            "value": 8.59654164361948,
            "unit": "iter/sec",
            "range": "stddev: 0.0022915414219884995",
            "extra": "mean: 116.3258484000039 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WebMercatorQuad]",
            "value": 5.664533688709364,
            "unit": "iter/sec",
            "range": "stddev: 0.0025537313430945285",
            "extra": "mean: 176.5370381666571 msec\nrounds: 6"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WGS1984Quad]",
            "value": 238.86199830398914,
            "unit": "iter/sec",
            "range": "stddev: 0.00022539832086143838",
            "extra": "mean: 4.186517768001522 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WebMercatorQuad]",
            "value": 154.76421230673523,
            "unit": "iter/sec",
            "range": "stddev: 0.00025354548060341436",
            "extra": "mean: 6.461442119564747 msec\nrounds: 92"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WGS1984Quad]",
            "value": 302.16704465538686,
            "unit": "iter/sec",
            "range": "stddev: 0.00014628523240337797",
            "extra": "mean: 3.3094277410048876 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WebMercatorQuad]",
            "value": 275.8732830683891,
            "unit": "iter/sec",
            "range": "stddev: 0.00018656288195031823",
            "extra": "mean: 3.6248526456695687 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets]",
            "value": 692.4027244913557,
            "unit": "iter/sec",
            "range": "stddev: 0.00008508942642368571",
            "extra": "mean: 1.4442461946327663 msec\nrounds: 447"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WGS1984Quad]",
            "value": 843.9292777846495,
            "unit": "iter/sec",
            "range": "stddev: 0.00007820583772623548",
            "extra": "mean: 1.184933413644616 msec\nrounds: 469"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WebMercatorQuad]",
            "value": 832.3130236451027,
            "unit": "iter/sec",
            "range": "stddev: 0.00008909043648461774",
            "extra": "mean: 1.201471047059332 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles]",
            "value": 338.86719929078293,
            "unit": "iter/sec",
            "range": "stddev: 0.00010088489498334498",
            "extra": "mean: 2.951008542853677 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WGS1984Quad]",
            "value": 456.4588194989095,
            "unit": "iter/sec",
            "range": "stddev: 0.00010224522306148173",
            "extra": "mean: 2.1907781321823907 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WebMercatorQuad]",
            "value": 436.80927639419815,
            "unit": "iter/sec",
            "range": "stddev: 0.0001342132772034853",
            "extra": "mean: 2.2893286705238163 msec\nrounds: 173"
          }
        ]
      }
    ]
  }
}