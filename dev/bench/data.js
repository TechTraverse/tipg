window.BENCHMARK_DATA = {
  "lastUpdate": 1736452092608,
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
      },
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
          "id": "118e3fca6be995c5ee1ba21207d8bec20699fdc2",
          "message": "Merge pull request #1 from TechTraverse/add-readonly-capability\n\nadd flag to support readonly tipg",
          "timestamp": "2025-01-09T12:42:30-07:00",
          "tree_id": "e0e96baf9254550c2099eb48f7be221aaf6da5e5",
          "url": "https://github.com/TechTraverse/tipg/commit/118e3fca6be995c5ee1ba21207d8bec20699fdc2"
        },
        "date": 1736452090550,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-1]",
            "value": 487.20862634586445,
            "unit": "iter/sec",
            "range": "stddev: 0.00010693858623950915",
            "extra": "mean: 2.0525088143453973 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-10]",
            "value": 325.96186238007607,
            "unit": "iter/sec",
            "range": "stddev: 0.0001320733165817315",
            "extra": "mean: 3.0678435590541144 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-1]",
            "value": 398.81837765542286,
            "unit": "iter/sec",
            "range": "stddev: 0.0000756178843076776",
            "extra": "mean: 2.507407020405652 msec\nrounds: 98"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-10]",
            "value": 296.94623270110696,
            "unit": "iter/sec",
            "range": "stddev: 0.00017364171512525148",
            "extra": "mean: 3.367613021737023 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[json]",
            "value": 634.9074773537405,
            "unit": "iter/sec",
            "range": "stddev: 0.00010318539439540823",
            "extra": "mean: 1.5750326396657743 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[html]",
            "value": 457.077289924191,
            "unit": "iter/sec",
            "range": "stddev: 0.0001214101969519694",
            "extra": "mean: 2.187813794393189 msec\nrounds: 107"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_queryables",
            "value": 693.4398022279788,
            "unit": "iter/sec",
            "range": "stddev: 0.00015210061182124095",
            "extra": "mean: 1.442086244237874 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-1]",
            "value": 212.7654145061817,
            "unit": "iter/sec",
            "range": "stddev: 0.000197071394330212",
            "extra": "mean: 4.700011993589051 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-10]",
            "value": 187.31661728624348,
            "unit": "iter/sec",
            "range": "stddev: 0.00026072690040811924",
            "extra": "mean: 5.338554659418569 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-50]",
            "value": 112.06470933090355,
            "unit": "iter/sec",
            "range": "stddev: 0.006311813729049681",
            "extra": "mean: 8.923415819044425 msec\nrounds: 105"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-100]",
            "value": 78.25999773182714,
            "unit": "iter/sec",
            "range": "stddev: 0.008325472005037316",
            "extra": "mean: 12.777920125000405 msec\nrounds: 72"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-200]",
            "value": 43.33473344715806,
            "unit": "iter/sec",
            "range": "stddev: 0.011313977304483485",
            "extra": "mean: 23.07617747826671 msec\nrounds: 46"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-250]",
            "value": 35.565838550469515,
            "unit": "iter/sec",
            "range": "stddev: 0.013097267799433841",
            "extra": "mean: 28.1168683421018 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-1]",
            "value": 191.79744673785922,
            "unit": "iter/sec",
            "range": "stddev: 0.0003515271585476847",
            "extra": "mean: 5.213833744965116 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-10]",
            "value": 145.46991582121188,
            "unit": "iter/sec",
            "range": "stddev: 0.0004496063330815137",
            "extra": "mean: 6.874273586774041 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-50]",
            "value": 75.6454724148753,
            "unit": "iter/sec",
            "range": "stddev: 0.000458615579238835",
            "extra": "mean: 13.219561833331284 msec\nrounds: 72"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-100]",
            "value": 45.89669432203207,
            "unit": "iter/sec",
            "range": "stddev: 0.0010510254084910727",
            "extra": "mean: 21.788061531916558 msec\nrounds: 47"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-200]",
            "value": 24.764463559051002,
            "unit": "iter/sec",
            "range": "stddev: 0.0028955121359974015",
            "extra": "mean: 40.3804426296372 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-250]",
            "value": 21.870093398983546,
            "unit": "iter/sec",
            "range": "stddev: 0.0007678647218827586",
            "extra": "mean: 45.72454180952318 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-1]",
            "value": 188.5877624269195,
            "unit": "iter/sec",
            "range": "stddev: 0.00016019998730182618",
            "extra": "mean: 5.302571000000674 msec\nrounds: 57"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-10]",
            "value": 148.6426919917334,
            "unit": "iter/sec",
            "range": "stddev: 0.0007637900716602067",
            "extra": "mean: 6.727542313722454 msec\nrounds: 102"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-50]",
            "value": 84.81714284718589,
            "unit": "iter/sec",
            "range": "stddev: 0.007138284091380111",
            "extra": "mean: 11.79006939436393 msec\nrounds: 71"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-100]",
            "value": 56.90404891432799,
            "unit": "iter/sec",
            "range": "stddev: 0.009027827415133832",
            "extra": "mean: 17.57344194444849 msec\nrounds: 54"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-200]",
            "value": 29.893320882815654,
            "unit": "iter/sec",
            "range": "stddev: 0.014975781738169996",
            "extra": "mean: 33.452288687499276 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-250]",
            "value": 24.335626224881654,
            "unit": "iter/sec",
            "range": "stddev: 0.01669642745219504",
            "extra": "mean: 41.09201837500128 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-NewfoundlandandLabrador]",
            "value": 1.2078840655055454,
            "unit": "iter/sec",
            "range": "stddev: 0.00844012874566668",
            "extra": "mean: 827.8940243999841 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-Saskatchewan]",
            "value": 27.396761457759983,
            "unit": "iter/sec",
            "range": "stddev: 0.00033501066201133893",
            "extra": "mean: 36.50066455999877 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-NewfoundlandandLabrador]",
            "value": 0.807623405425709,
            "unit": "iter/sec",
            "range": "stddev: 0.002005444791291377",
            "extra": "mean: 1.2382008660000223 sec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-Saskatchewan]",
            "value": 17.733037874913368,
            "unit": "iter/sec",
            "range": "stddev: 0.0007552605438090808",
            "extra": "mean: 56.391917000001634 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WGS1984Quad]",
            "value": 8.6321069560877,
            "unit": "iter/sec",
            "range": "stddev: 0.0024400473500819334",
            "extra": "mean: 115.84657199998674 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WebMercatorQuad]",
            "value": 5.752951040716638,
            "unit": "iter/sec",
            "range": "stddev: 0.004683362876475067",
            "extra": "mean: 173.8238328333542 msec\nrounds: 6"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WGS1984Quad]",
            "value": 256.7426818727012,
            "unit": "iter/sec",
            "range": "stddev: 0.00014113369632837587",
            "extra": "mean: 3.8949503553749687 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WebMercatorQuad]",
            "value": 141.07752710945414,
            "unit": "iter/sec",
            "range": "stddev: 0.007952089174131103",
            "extra": "mean: 7.088301166663887 msec\nrounds: 96"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WGS1984Quad]",
            "value": 319.3842178051295,
            "unit": "iter/sec",
            "range": "stddev: 0.00010664793368693455",
            "extra": "mean: 3.1310250921983394 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WebMercatorQuad]",
            "value": 305.29571491255723,
            "unit": "iter/sec",
            "range": "stddev: 0.00010998248077487445",
            "extra": "mean: 3.2755127280001943 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets]",
            "value": 720.3659441359265,
            "unit": "iter/sec",
            "range": "stddev: 0.00011702391877193411",
            "extra": "mean: 1.3881833367337937 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WGS1984Quad]",
            "value": 854.4593782152274,
            "unit": "iter/sec",
            "range": "stddev: 0.00006686958255332687",
            "extra": "mean: 1.170330650579053 msec\nrounds: 518"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WebMercatorQuad]",
            "value": 794.461767775771,
            "unit": "iter/sec",
            "range": "stddev: 0.00010723204307743602",
            "extra": "mean: 1.2587138117415866 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles]",
            "value": 339.7645261955853,
            "unit": "iter/sec",
            "range": "stddev: 0.00010935363702558481",
            "extra": "mean: 2.94321485293715 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WGS1984Quad]",
            "value": 450.5440830690113,
            "unit": "iter/sec",
            "range": "stddev: 0.00012109656231902447",
            "extra": "mean: 2.219538636903654 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WebMercatorQuad]",
            "value": 419.52154342461057,
            "unit": "iter/sec",
            "range": "stddev: 0.00011873538493067941",
            "extra": "mean: 2.383667813187533 msec\nrounds: 182"
          }
        ]
      }
    ]
  }
}