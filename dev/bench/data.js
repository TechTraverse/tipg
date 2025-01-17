window.BENCHMARK_DATA = {
  "lastUpdate": 1737140805808,
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
          "id": "511a5eaa27b2747f281459b2aa217b05434b2756",
          "message": "Merge pull request #2 from TechTraverse/add-iam-role\n\nadd rds settings and rds.py for iam auth and boto3 dep",
          "timestamp": "2025-01-09T13:44:22-07:00",
          "tree_id": "35cc7d0796952a2a7c8400c806f0a01d81da1ff0",
          "url": "https://github.com/TechTraverse/tipg/commit/511a5eaa27b2747f281459b2aa217b05434b2756"
        },
        "date": 1736455794897,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-1]",
            "value": 447.96452791541594,
            "unit": "iter/sec",
            "range": "stddev: 0.003538482357210801",
            "extra": "mean: 2.232319609441975 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-10]",
            "value": 342.92434060858955,
            "unit": "iter/sec",
            "range": "stddev: 0.00011736677717808223",
            "extra": "mean: 2.9160951311455316 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-1]",
            "value": 398.54235624111885,
            "unit": "iter/sec",
            "range": "stddev: 0.00008682535463684468",
            "extra": "mean: 2.5091435937489117 msec\nrounds: 96"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-10]",
            "value": 294.5455290390802,
            "unit": "iter/sec",
            "range": "stddev: 0.00019858508621709145",
            "extra": "mean: 3.3950608697486637 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[json]",
            "value": 607.4330008435434,
            "unit": "iter/sec",
            "range": "stddev: 0.00008618051065215026",
            "extra": "mean: 1.6462720968589095 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[html]",
            "value": 446.2242164507958,
            "unit": "iter/sec",
            "range": "stddev: 0.0001351011698974234",
            "extra": "mean: 2.241025841120543 msec\nrounds: 107"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_queryables",
            "value": 703.6331443796621,
            "unit": "iter/sec",
            "range": "stddev: 0.00008710345127060675",
            "extra": "mean: 1.421195132701745 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-1]",
            "value": 215.06965359722508,
            "unit": "iter/sec",
            "range": "stddev: 0.00020755332777867356",
            "extra": "mean: 4.6496564404793475 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-10]",
            "value": 181.83909958489662,
            "unit": "iter/sec",
            "range": "stddev: 0.00031308302492176325",
            "extra": "mean: 5.499367310346377 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-50]",
            "value": 105.66331785560533,
            "unit": "iter/sec",
            "range": "stddev: 0.008211457859300728",
            "extra": "mean: 9.464022333337615 msec\nrounds: 96"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-100]",
            "value": 84.72392893234797,
            "unit": "iter/sec",
            "range": "stddev: 0.0002578743837052013",
            "extra": "mean: 11.803040918917956 msec\nrounds: 74"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-200]",
            "value": 42.894527449333054,
            "unit": "iter/sec",
            "range": "stddev: 0.009107382009803459",
            "extra": "mean: 23.312997239127963 msec\nrounds: 46"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-250]",
            "value": 34.635570992133275,
            "unit": "iter/sec",
            "range": "stddev: 0.01232453506521599",
            "extra": "mean: 28.872051805559334 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-1]",
            "value": 197.8101789627173,
            "unit": "iter/sec",
            "range": "stddev: 0.00020878916318699692",
            "extra": "mean: 5.055351576161696 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-10]",
            "value": 141.13171585485767,
            "unit": "iter/sec",
            "range": "stddev: 0.006830262698168823",
            "extra": "mean: 7.085579552001036 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-50]",
            "value": 76.69390482316577,
            "unit": "iter/sec",
            "range": "stddev: 0.0008798706697868579",
            "extra": "mean: 13.038845815788287 msec\nrounds: 76"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-100]",
            "value": 46.58566680397787,
            "unit": "iter/sec",
            "range": "stddev: 0.001260073083379576",
            "extra": "mean: 21.465829913045525 msec\nrounds: 46"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-200]",
            "value": 24.038598266880207,
            "unit": "iter/sec",
            "range": "stddev: 0.0038316752865247593",
            "extra": "mean: 41.59976338461364 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-250]",
            "value": 20.42886615873799,
            "unit": "iter/sec",
            "range": "stddev: 0.004016034982417809",
            "extra": "mean: 48.95034272728212 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-1]",
            "value": 178.78526627980048,
            "unit": "iter/sec",
            "range": "stddev: 0.0002648074964875853",
            "extra": "mean: 5.5933020701772564 msec\nrounds: 57"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-10]",
            "value": 147.76334898680196,
            "unit": "iter/sec",
            "range": "stddev: 0.0002012942619888346",
            "extra": "mean: 6.767578068965659 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-50]",
            "value": 88.22474973158971,
            "unit": "iter/sec",
            "range": "stddev: 0.0008400110625834422",
            "extra": "mean: 11.334687863012894 msec\nrounds: 73"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-100]",
            "value": 51.78080232367513,
            "unit": "iter/sec",
            "range": "stddev: 0.01197076180957697",
            "extra": "mean: 19.312176619997672 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-200]",
            "value": 30.69439408818872,
            "unit": "iter/sec",
            "range": "stddev: 0.01278691891646597",
            "extra": "mean: 32.57923896874715 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-250]",
            "value": 23.879358466921662,
            "unit": "iter/sec",
            "range": "stddev: 0.01849914485305217",
            "extra": "mean: 41.87717192592202 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-NewfoundlandandLabrador]",
            "value": 1.203604980345538,
            "unit": "iter/sec",
            "range": "stddev: 0.014888596632342637",
            "extra": "mean: 830.8373729999971 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-Saskatchewan]",
            "value": 25.32478445147372,
            "unit": "iter/sec",
            "range": "stddev: 0.01510187227678321",
            "extra": "mean: 39.487009333333425 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-NewfoundlandandLabrador]",
            "value": 0.8038019735607108,
            "unit": "iter/sec",
            "range": "stddev: 0.003144856380063967",
            "extra": "mean: 1.244087515199999 sec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-Saskatchewan]",
            "value": 16.80531055656298,
            "unit": "iter/sec",
            "range": "stddev: 0.018591219463980117",
            "extra": "mean: 59.504999722214 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WGS1984Quad]",
            "value": 8.681107348441525,
            "unit": "iter/sec",
            "range": "stddev: 0.0017164810022888973",
            "extra": "mean: 115.1926775999982 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WebMercatorQuad]",
            "value": 5.8433220362501705,
            "unit": "iter/sec",
            "range": "stddev: 0.0025020057988914927",
            "extra": "mean: 171.13552766667794 msec\nrounds: 6"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WGS1984Quad]",
            "value": 247.03419269965738,
            "unit": "iter/sec",
            "range": "stddev: 0.00011398490347105148",
            "extra": "mean: 4.048022620155233 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WebMercatorQuad]",
            "value": 164.27980084183318,
            "unit": "iter/sec",
            "range": "stddev: 0.00017935517217732274",
            "extra": "mean: 6.087175628869852 msec\nrounds: 97"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WGS1984Quad]",
            "value": 330.95508301492777,
            "unit": "iter/sec",
            "range": "stddev: 0.00011888720438995384",
            "extra": "mean: 3.0215580642854025 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WebMercatorQuad]",
            "value": 269.25205523537153,
            "unit": "iter/sec",
            "range": "stddev: 0.000799760120604688",
            "extra": "mean: 3.713992077519453 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets]",
            "value": 619.2576780485173,
            "unit": "iter/sec",
            "range": "stddev: 0.003423671621258245",
            "extra": "mean: 1.6148366591938363 msec\nrounds: 446"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WGS1984Quad]",
            "value": 857.2242046716724,
            "unit": "iter/sec",
            "range": "stddev: 0.00007864980276032902",
            "extra": "mean: 1.1665559541485562 msec\nrounds: 458"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WebMercatorQuad]",
            "value": 800.7613234276174,
            "unit": "iter/sec",
            "range": "stddev: 0.00010363692226933953",
            "extra": "mean: 1.2488115631253913 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles]",
            "value": 331.25185375572204,
            "unit": "iter/sec",
            "range": "stddev: 0.000054441182362079514",
            "extra": "mean: 3.018851030302275 msec\nrounds: 33"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WGS1984Quad]",
            "value": 439.38946672039515,
            "unit": "iter/sec",
            "range": "stddev: 0.00008758619518351418",
            "extra": "mean: 2.275885235629348 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WebMercatorQuad]",
            "value": 432.389327164458,
            "unit": "iter/sec",
            "range": "stddev: 0.00017877296492139886",
            "extra": "mean: 2.312730535135649 msec\nrounds: 185"
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
          "id": "4b6e9880d1846f2413ff854cc826729c71a31d88",
          "message": "Merge pull request #3 from TechTraverse/add-iam-role\n\nmove boto3 dep from optional",
          "timestamp": "2025-01-17T11:49:34-07:00",
          "tree_id": "1e5052505f8f5a4ad4457b74bb3ecd85d9b518d5",
          "url": "https://github.com/TechTraverse/tipg/commit/4b6e9880d1846f2413ff854cc826729c71a31d88"
        },
        "date": 1737140804393,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-1]",
            "value": 397.90398788220523,
            "unit": "iter/sec",
            "range": "stddev: 0.00554339584836272",
            "extra": "mean: 2.5131690821255055 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-10]",
            "value": 329.8010358298063,
            "unit": "iter/sec",
            "range": "stddev: 0.0000984730080207121",
            "extra": "mean: 3.0321311680659777 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-1]",
            "value": 408.6375750402111,
            "unit": "iter/sec",
            "range": "stddev: 0.00011436219749032222",
            "extra": "mean: 2.4471562604138817 msec\nrounds: 96"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-10]",
            "value": 290.738508697204,
            "unit": "iter/sec",
            "range": "stddev: 0.0001287129272221304",
            "extra": "mean: 3.4395168513486185 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[json]",
            "value": 593.6129380786473,
            "unit": "iter/sec",
            "range": "stddev: 0.00009100634530531008",
            "extra": "mean: 1.6845994011463254 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[html]",
            "value": 437.1602964996891,
            "unit": "iter/sec",
            "range": "stddev: 0.00012550989433564782",
            "extra": "mean: 2.2874904423089832 msec\nrounds: 104"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_queryables",
            "value": 668.4017593915114,
            "unit": "iter/sec",
            "range": "stddev: 0.00008813495406562188",
            "extra": "mean: 1.4961061755887113 msec\nrounds: 467"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-1]",
            "value": 214.9662719112078,
            "unit": "iter/sec",
            "range": "stddev: 0.00010690262409934486",
            "extra": "mean: 4.65189255555891 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-10]",
            "value": 185.2488243411883,
            "unit": "iter/sec",
            "range": "stddev: 0.00019926612913470185",
            "extra": "mean: 5.398144919711966 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-50]",
            "value": 109.29266826585555,
            "unit": "iter/sec",
            "range": "stddev: 0.007252354139082872",
            "extra": "mean: 9.149744588241633 msec\nrounds: 102"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-100]",
            "value": 75.54252474817757,
            "unit": "iter/sec",
            "range": "stddev: 0.00787303640293078",
            "extra": "mean: 13.237577157151138 msec\nrounds: 70"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-200]",
            "value": 41.53614582800914,
            "unit": "iter/sec",
            "range": "stddev: 0.012644713565027946",
            "extra": "mean: 24.07541624446215 msec\nrounds: 45"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-250]",
            "value": 35.24864008699772,
            "unit": "iter/sec",
            "range": "stddev: 0.013043033416462554",
            "extra": "mean: 28.369888810799065 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-1]",
            "value": 188.7160090322675,
            "unit": "iter/sec",
            "range": "stddev: 0.00037758620703044803",
            "extra": "mean: 5.298967507462579 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-10]",
            "value": 151.5423226296684,
            "unit": "iter/sec",
            "range": "stddev: 0.0005061836035443138",
            "extra": "mean: 6.598816638463107 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-50]",
            "value": 75.74248303837054,
            "unit": "iter/sec",
            "range": "stddev: 0.0009115135842711397",
            "extra": "mean: 13.202630279408822 msec\nrounds: 68"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-100]",
            "value": 45.075595158859514,
            "unit": "iter/sec",
            "range": "stddev: 0.0013921423678381424",
            "extra": "mean: 22.18495388637042 msec\nrounds: 44"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-200]",
            "value": 24.964374037942505,
            "unit": "iter/sec",
            "range": "stddev: 0.002965638922014078",
            "extra": "mean: 40.057082884599225 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-250]",
            "value": 20.226773641337186,
            "unit": "iter/sec",
            "range": "stddev: 0.0032959111325681465",
            "extra": "mean: 49.43942211111284 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-1]",
            "value": 185.94907007230674,
            "unit": "iter/sec",
            "range": "stddev: 0.00012928752908964553",
            "extra": "mean: 5.377816622643756 msec\nrounds: 53"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-10]",
            "value": 146.90261605217947,
            "unit": "iter/sec",
            "range": "stddev: 0.00015316171281632565",
            "extra": "mean: 6.80723071429036 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-50]",
            "value": 87.10291325940096,
            "unit": "iter/sec",
            "range": "stddev: 0.0003745114477660611",
            "extra": "mean: 11.48067225974294 msec\nrounds: 77"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-100]",
            "value": 55.664685327716896,
            "unit": "iter/sec",
            "range": "stddev: 0.007540281070046375",
            "extra": "mean: 17.96471127273352 msec\nrounds: 55"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-200]",
            "value": 27.826895433782607,
            "unit": "iter/sec",
            "range": "stddev: 0.01709839519523224",
            "extra": "mean: 35.93645587879605 msec\nrounds: 33"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-250]",
            "value": 22.46403978302201,
            "unit": "iter/sec",
            "range": "stddev: 0.022846718721341575",
            "extra": "mean: 44.515590679989145 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-NewfoundlandandLabrador]",
            "value": 1.1925544153038767,
            "unit": "iter/sec",
            "range": "stddev: 0.018590289463238933",
            "extra": "mean: 838.5361600000351 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-Saskatchewan]",
            "value": 25.96352895297537,
            "unit": "iter/sec",
            "range": "stddev: 0.0003145748409039727",
            "extra": "mean: 38.51556550002044 msec\nrounds: 8"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-NewfoundlandandLabrador]",
            "value": 0.8104875207446968,
            "unit": "iter/sec",
            "range": "stddev: 0.0026358597061400726",
            "extra": "mean: 1.2338252895999857 sec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-Saskatchewan]",
            "value": 16.425907786415486,
            "unit": "iter/sec",
            "range": "stddev: 0.022134148633104152",
            "extra": "mean: 60.87943588889604 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WGS1984Quad]",
            "value": 8.95347005171965,
            "unit": "iter/sec",
            "range": "stddev: 0.005350147194656701",
            "extra": "mean: 111.68854022222756 msec\nrounds: 9"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WebMercatorQuad]",
            "value": 6.113745732790942,
            "unit": "iter/sec",
            "range": "stddev: 0.008588182884510406",
            "extra": "mean: 163.5658471428607 msec\nrounds: 7"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WGS1984Quad]",
            "value": 241.15190627793396,
            "unit": "iter/sec",
            "range": "stddev: 0.00010071274986252428",
            "extra": "mean: 4.146763819679175 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WebMercatorQuad]",
            "value": 164.2469727225299,
            "unit": "iter/sec",
            "range": "stddev: 0.00019930241976216963",
            "extra": "mean: 6.088392275511505 msec\nrounds: 98"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WGS1984Quad]",
            "value": 302.75276197260143,
            "unit": "iter/sec",
            "range": "stddev: 0.00012194107988075823",
            "extra": "mean: 3.3030251928486063 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WebMercatorQuad]",
            "value": 290.16528346976725,
            "unit": "iter/sec",
            "range": "stddev: 0.00012241774440963465",
            "extra": "mean: 3.446311660864803 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets]",
            "value": 696.8734665809038,
            "unit": "iter/sec",
            "range": "stddev: 0.00009791588976704044",
            "extra": "mean: 1.4349807360385483 msec\nrounds: 394"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WGS1984Quad]",
            "value": 798.4204236254886,
            "unit": "iter/sec",
            "range": "stddev: 0.00009246783819489338",
            "extra": "mean: 1.2524729708931712 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WebMercatorQuad]",
            "value": 787.1040972831105,
            "unit": "iter/sec",
            "range": "stddev: 0.00007409394664872638",
            "extra": "mean: 1.2704799828278794 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles]",
            "value": 325.3622827695366,
            "unit": "iter/sec",
            "range": "stddev: 0.00032367819790422034",
            "extra": "mean: 3.0734969999836417 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WGS1984Quad]",
            "value": 453.9135051270866,
            "unit": "iter/sec",
            "range": "stddev: 0.0000516496098658261",
            "extra": "mean: 2.2030628934911736 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WebMercatorQuad]",
            "value": 410.9195620072937,
            "unit": "iter/sec",
            "range": "stddev: 0.00015656318371123977",
            "extra": "mean: 2.4335663045952782 msec\nrounds: 174"
          }
        ]
      }
    ]
  }
}