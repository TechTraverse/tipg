window.BENCHMARK_DATA = {
  "lastUpdate": 1741707095872,
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
          "id": "e34d13eb5a62f2c2a3290dcca24ddd5ceda7fd8d",
          "message": "Merge pull request #4 from TechTraverse/add-iam-role\n\nupdate iam code in main",
          "timestamp": "2025-02-18T08:33:33-07:00",
          "tree_id": "983d10606e1ff1d8e65ccb9e7020b89dbfe42be0",
          "url": "https://github.com/TechTraverse/tipg/commit/e34d13eb5a62f2c2a3290dcca24ddd5ceda7fd8d"
        },
        "date": 1739893185416,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-1]",
            "value": 449.3870209708626,
            "unit": "iter/sec",
            "range": "stddev: 0.0034267654520126092",
            "extra": "mean: 2.225253408163825 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-10]",
            "value": 332.9245502551227,
            "unit": "iter/sec",
            "range": "stddev: 0.00008470816435723388",
            "extra": "mean: 3.0036835650410643 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-1]",
            "value": 398.70899144955195,
            "unit": "iter/sec",
            "range": "stddev: 0.00007493873159107442",
            "extra": "mean: 2.5080949299999133 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-10]",
            "value": 293.68185304852744,
            "unit": "iter/sec",
            "range": "stddev: 0.00011821893130006057",
            "extra": "mean: 3.4050452543104934 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[json]",
            "value": 623.6208708713762,
            "unit": "iter/sec",
            "range": "stddev: 0.00009975811286945594",
            "extra": "mean: 1.6035383783783808 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[html]",
            "value": 456.0726799810136,
            "unit": "iter/sec",
            "range": "stddev: 0.00014207709801455998",
            "extra": "mean: 2.1926329813082206 msec\nrounds: 107"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_queryables",
            "value": 697.8973374247588,
            "unit": "iter/sec",
            "range": "stddev: 0.00007542772044303878",
            "extra": "mean: 1.4328755052856341 msec\nrounds: 473"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-1]",
            "value": 213.2999297111566,
            "unit": "iter/sec",
            "range": "stddev: 0.00018061425095488608",
            "extra": "mean: 4.688234081249654 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-10]",
            "value": 180.17968313276947,
            "unit": "iter/sec",
            "range": "stddev: 0.00024618049995451526",
            "extra": "mean: 5.5500153103451035 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-50]",
            "value": 109.26864143179847,
            "unit": "iter/sec",
            "range": "stddev: 0.00729692963790079",
            "extra": "mean: 9.15175650485381 msec\nrounds: 103"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-100]",
            "value": 75.84773882532014,
            "unit": "iter/sec",
            "range": "stddev: 0.007323821921974789",
            "extra": "mean: 13.184308662161087 msec\nrounds: 74"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-200]",
            "value": 43.75726618499205,
            "unit": "iter/sec",
            "range": "stddev: 0.009702628614310224",
            "extra": "mean: 22.853347276594302 msec\nrounds: 47"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-250]",
            "value": 34.44318093410779,
            "unit": "iter/sec",
            "range": "stddev: 0.013380780462850898",
            "extra": "mean: 29.03332308107866 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-1]",
            "value": 202.70115295845025,
            "unit": "iter/sec",
            "range": "stddev: 0.00018887476943286988",
            "extra": "mean: 4.933371050952928 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-10]",
            "value": 153.13570181961674,
            "unit": "iter/sec",
            "range": "stddev: 0.0003323043071089389",
            "extra": "mean: 6.5301558559997375 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-50]",
            "value": 74.06617332130871,
            "unit": "iter/sec",
            "range": "stddev: 0.0008967544429456321",
            "extra": "mean: 13.50144006578914 msec\nrounds: 76"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-100]",
            "value": 40.74504100255069,
            "unit": "iter/sec",
            "range": "stddev: 0.011199018029417031",
            "extra": "mean: 24.542863999999376 msec\nrounds: 45"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-200]",
            "value": 23.89091958264296,
            "unit": "iter/sec",
            "range": "stddev: 0.0029251526080375065",
            "extra": "mean: 41.85690703703644 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-250]",
            "value": 20.27275444585267,
            "unit": "iter/sec",
            "range": "stddev: 0.005179705492612419",
            "extra": "mean: 49.32728814285897 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-1]",
            "value": 183.5742315050052,
            "unit": "iter/sec",
            "range": "stddev: 0.00014679200839702616",
            "extra": "mean: 5.447387641509668 msec\nrounds: 53"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-10]",
            "value": 151.05507380758678,
            "unit": "iter/sec",
            "range": "stddev: 0.00021101120226887446",
            "extra": "mean: 6.620102024999142 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-50]",
            "value": 90.18738872002825,
            "unit": "iter/sec",
            "range": "stddev: 0.00026911650468338733",
            "extra": "mean: 11.088024769231689 msec\nrounds: 78"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-100]",
            "value": 56.47317122996034,
            "unit": "iter/sec",
            "range": "stddev: 0.006576366708626494",
            "extra": "mean: 17.70752338181916 msec\nrounds: 55"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-200]",
            "value": 29.580444368944562,
            "unit": "iter/sec",
            "range": "stddev: 0.014576887306231159",
            "extra": "mean: 33.80611824242451 msec\nrounds: 33"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-250]",
            "value": 24.708053596566433,
            "unit": "iter/sec",
            "range": "stddev: 0.016917271272984237",
            "extra": "mean: 40.47263359259369 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-NewfoundlandandLabrador]",
            "value": 1.1852258715486659,
            "unit": "iter/sec",
            "range": "stddev: 0.0392036203659998",
            "extra": "mean: 843.7210358000016 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-Saskatchewan]",
            "value": 27.450097111792665,
            "unit": "iter/sec",
            "range": "stddev: 0.00033017136144728023",
            "extra": "mean: 36.42974361538401 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-NewfoundlandandLabrador]",
            "value": 0.7971136707838954,
            "unit": "iter/sec",
            "range": "stddev: 0.04543818574793182",
            "extra": "mean: 1.254526219600001 sec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-Saskatchewan]",
            "value": 18.418506954261023,
            "unit": "iter/sec",
            "range": "stddev: 0.000308707995786282",
            "extra": "mean: 54.293217277780236 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WGS1984Quad]",
            "value": 8.976355123552349,
            "unit": "iter/sec",
            "range": "stddev: 0.00531817484183007",
            "extra": "mean: 111.40379210000049 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WebMercatorQuad]",
            "value": 6.158150698477372,
            "unit": "iter/sec",
            "range": "stddev: 0.008080744806722592",
            "extra": "mean: 162.3864125714322 msec\nrounds: 7"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WGS1984Quad]",
            "value": 255.01983381897097,
            "unit": "iter/sec",
            "range": "stddev: 0.0001291262204313285",
            "extra": "mean: 3.9212636328116446 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WebMercatorQuad]",
            "value": 166.0517631500732,
            "unit": "iter/sec",
            "range": "stddev: 0.00015676378951694992",
            "extra": "mean: 6.022218500000065 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WGS1984Quad]",
            "value": 326.137011463142,
            "unit": "iter/sec",
            "range": "stddev: 0.00010255133809499342",
            "extra": "mean: 3.0661959999992634 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WebMercatorQuad]",
            "value": 293.53950006553794,
            "unit": "iter/sec",
            "range": "stddev: 0.0000873859786118805",
            "extra": "mean: 3.4066965426347466 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets]",
            "value": 688.2300146155412,
            "unit": "iter/sec",
            "range": "stddev: 0.00008566604849422207",
            "extra": "mean: 1.453002599078187 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WGS1984Quad]",
            "value": 800.135891170385,
            "unit": "iter/sec",
            "range": "stddev: 0.00009085226039572827",
            "extra": "mean: 1.2497877061073552 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WebMercatorQuad]",
            "value": 805.5467294230159,
            "unit": "iter/sec",
            "range": "stddev: 0.00008652520861167756",
            "extra": "mean: 1.2413929117634976 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles]",
            "value": 335.19489707987486,
            "unit": "iter/sec",
            "range": "stddev: 0.00015803900804003103",
            "extra": "mean: 2.983338972972808 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WGS1984Quad]",
            "value": 450.6464330670747,
            "unit": "iter/sec",
            "range": "stddev: 0.00010565546684015206",
            "extra": "mean: 2.219034539326219 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WebMercatorQuad]",
            "value": 421.6903271027254,
            "unit": "iter/sec",
            "range": "stddev: 0.00015777173848210665",
            "extra": "mean: 2.3714084382030327 msec\nrounds: 178"
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
          "id": "5c8ce23a4f746235f4c74ff280be92b09eb27d5f",
          "message": "Merge pull request #5 from TechTraverse/add-iam-role\n\nremove ssm parameters",
          "timestamp": "2025-02-25T09:52:34-07:00",
          "tree_id": "1174ea4c844d5c8419ea67a8676112b7e7b47104",
          "url": "https://github.com/TechTraverse/tipg/commit/5c8ce23a4f746235f4c74ff280be92b09eb27d5f"
        },
        "date": 1740502707195,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-1]",
            "value": 424.7593299710182,
            "unit": "iter/sec",
            "range": "stddev: 0.0036611404529291874",
            "extra": "mean: 2.354274360655553 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-10]",
            "value": 320.58356832966734,
            "unit": "iter/sec",
            "range": "stddev: 0.00023728246465519787",
            "extra": "mean: 3.119311464434337 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-1]",
            "value": 392.18875307359207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000939261380988046",
            "extra": "mean: 2.5497926500007395 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-10]",
            "value": 295.23730908941377,
            "unit": "iter/sec",
            "range": "stddev: 0.00011399908876143346",
            "extra": "mean: 3.387105793249003 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[json]",
            "value": 609.278616019877,
            "unit": "iter/sec",
            "range": "stddev: 0.00008729405029121915",
            "extra": "mean: 1.641285240786091 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[html]",
            "value": 457.85198227952196,
            "unit": "iter/sec",
            "range": "stddev: 0.00015287332792729847",
            "extra": "mean: 2.1841119809534706 msec\nrounds: 105"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_queryables",
            "value": 683.5160420230171,
            "unit": "iter/sec",
            "range": "stddev: 0.00006384307904860264",
            "extra": "mean: 1.4630234530272013 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-1]",
            "value": 210.00133968646608,
            "unit": "iter/sec",
            "range": "stddev: 0.00017984777708334414",
            "extra": "mean: 4.7618743837206425 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-10]",
            "value": 190.52389789434554,
            "unit": "iter/sec",
            "range": "stddev: 0.00012858470708787087",
            "extra": "mean: 5.2486853935486195 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-50]",
            "value": 112.98812322890593,
            "unit": "iter/sec",
            "range": "stddev: 0.0069959822781475115",
            "extra": "mean: 8.850487745283377 msec\nrounds: 106"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-100]",
            "value": 80.35434209603142,
            "unit": "iter/sec",
            "range": "stddev: 0.00705629696479264",
            "extra": "mean: 12.444878197184424 msec\nrounds: 71"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-200]",
            "value": 43.32628324285,
            "unit": "iter/sec",
            "range": "stddev: 0.010747769981027423",
            "extra": "mean: 23.080678173912524 msec\nrounds: 46"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-250]",
            "value": 36.427374054622746,
            "unit": "iter/sec",
            "range": "stddev: 0.011239982340398786",
            "extra": "mean: 27.451882710527055 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-1]",
            "value": 207.71293343064985,
            "unit": "iter/sec",
            "range": "stddev: 0.00014474103775648204",
            "extra": "mean: 4.8143367073185885 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-10]",
            "value": 162.66056693424758,
            "unit": "iter/sec",
            "range": "stddev: 0.00013061300133812554",
            "extra": "mean: 6.1477715149255 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-50]",
            "value": 81.18843356968472,
            "unit": "iter/sec",
            "range": "stddev: 0.00038788227883648687",
            "extra": "mean: 12.317025418918712 msec\nrounds: 74"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-100]",
            "value": 44.63443943013804,
            "unit": "iter/sec",
            "range": "stddev: 0.0017502116467642225",
            "extra": "mean: 22.404224468085975 msec\nrounds: 47"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-200]",
            "value": 25.34454705508778,
            "unit": "iter/sec",
            "range": "stddev: 0.0031626575070016383",
            "extra": "mean: 39.45621903703564 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-250]",
            "value": 20.27146732656568,
            "unit": "iter/sec",
            "range": "stddev: 0.003979282850628758",
            "extra": "mean: 49.33042013636101 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-1]",
            "value": 183.350080071169,
            "unit": "iter/sec",
            "range": "stddev: 0.00008915840909246158",
            "extra": "mean: 5.454047250003059 msec\nrounds: 56"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-10]",
            "value": 150.94589054544025,
            "unit": "iter/sec",
            "range": "stddev: 0.00019807180155408677",
            "extra": "mean: 6.624890524588103 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-50]",
            "value": 86.496207032389,
            "unit": "iter/sec",
            "range": "stddev: 0.006263978967405546",
            "extra": "mean: 11.561200592594128 msec\nrounds: 81"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-100]",
            "value": 58.077563735482016,
            "unit": "iter/sec",
            "range": "stddev: 0.007356528271357781",
            "extra": "mean: 17.21835310714072 msec\nrounds: 56"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-200]",
            "value": 31.772832760878384,
            "unit": "iter/sec",
            "range": "stddev: 0.008548127042428796",
            "extra": "mean: 31.473429125000507 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-250]",
            "value": 25.476431874592894,
            "unit": "iter/sec",
            "range": "stddev: 0.01453228393477019",
            "extra": "mean: 39.25196451851952 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-NewfoundlandandLabrador]",
            "value": 1.2157441432254124,
            "unit": "iter/sec",
            "range": "stddev: 0.0032848265596568966",
            "extra": "mean: 822.5414908000005 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-Saskatchewan]",
            "value": 27.97634080646666,
            "unit": "iter/sec",
            "range": "stddev: 0.0003043662979752041",
            "extra": "mean: 35.74448877777656 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-NewfoundlandandLabrador]",
            "value": 0.8169210813738981,
            "unit": "iter/sec",
            "range": "stddev: 0.012722197293198517",
            "extra": "mean: 1.2241084516 sec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-Saskatchewan]",
            "value": 18.57295485558661,
            "unit": "iter/sec",
            "range": "stddev: 0.00019876141230481607",
            "extra": "mean: 53.84172888888531 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WGS1984Quad]",
            "value": 8.986841951304461,
            "unit": "iter/sec",
            "range": "stddev: 0.005225678788706949",
            "extra": "mean: 111.27379399999882 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WebMercatorQuad]",
            "value": 6.242831579455727,
            "unit": "iter/sec",
            "range": "stddev: 0.009485053389328629",
            "extra": "mean: 160.18372228571056 msec\nrounds: 7"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WGS1984Quad]",
            "value": 255.4826370689908,
            "unit": "iter/sec",
            "range": "stddev: 0.00015863848502013048",
            "extra": "mean: 3.9141603181822444 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WebMercatorQuad]",
            "value": 167.02969066665253,
            "unit": "iter/sec",
            "range": "stddev: 0.00019896877818585833",
            "extra": "mean: 5.986959540000214 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WGS1984Quad]",
            "value": 327.6610629729582,
            "unit": "iter/sec",
            "range": "stddev: 0.00009295107172593042",
            "extra": "mean: 3.0519341875007275 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WebMercatorQuad]",
            "value": 285.63950067484467,
            "unit": "iter/sec",
            "range": "stddev: 0.00017245211712096727",
            "extra": "mean: 3.5009163565873256 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets]",
            "value": 734.9191208756014,
            "unit": "iter/sec",
            "range": "stddev: 0.00007500177721686435",
            "extra": "mean: 1.3606939479388895 msec\nrounds: 461"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WGS1984Quad]",
            "value": 792.3692164474855,
            "unit": "iter/sec",
            "range": "stddev: 0.00008422695977462226",
            "extra": "mean: 1.2620379227797465 msec\nrounds: 518"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WebMercatorQuad]",
            "value": 808.2250973692999,
            "unit": "iter/sec",
            "range": "stddev: 0.00011712407410931498",
            "extra": "mean: 1.2372790739299115 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles]",
            "value": 325.69005127240007,
            "unit": "iter/sec",
            "range": "stddev: 0.00008907449843882383",
            "extra": "mean: 3.0704038888913487 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WGS1984Quad]",
            "value": 448.4978433699465,
            "unit": "iter/sec",
            "range": "stddev: 0.00007152945043526523",
            "extra": "mean: 2.2296651250007087 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WebMercatorQuad]",
            "value": 422.03551431570423,
            "unit": "iter/sec",
            "range": "stddev: 0.00010545011021402561",
            "extra": "mean: 2.369468838709978 msec\nrounds: 186"
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
          "id": "a02865de6d09bd140d11d57995e38636f746709e",
          "message": "Merge pull request #8 from TechTraverse/add-iam-role\n\nAdd iam role",
          "timestamp": "2025-02-27T10:19:41-07:00",
          "tree_id": "660a3355e6e2b98b2db3ce2005008571c03d0df1",
          "url": "https://github.com/TechTraverse/tipg/commit/a02865de6d09bd140d11d57995e38636f746709e"
        },
        "date": 1740677392814,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-1]",
            "value": 426.88311803645354,
            "unit": "iter/sec",
            "range": "stddev: 0.003968057866319309",
            "extra": "mean: 2.342561599998914 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-10]",
            "value": 330.80805809016954,
            "unit": "iter/sec",
            "range": "stddev: 0.00015599227821410289",
            "extra": "mean: 3.0229009709534536 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-1]",
            "value": 401.3324904723527,
            "unit": "iter/sec",
            "range": "stddev: 0.00012701974312648778",
            "extra": "mean: 2.491699585107199 msec\nrounds: 94"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-10]",
            "value": 285.9027833253423,
            "unit": "iter/sec",
            "range": "stddev: 0.00016223808490758055",
            "extra": "mean: 3.497692426666769 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[json]",
            "value": 621.0017479194827,
            "unit": "iter/sec",
            "range": "stddev: 0.00014981885293866742",
            "extra": "mean: 1.6103014256405237 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[html]",
            "value": 444.0965908195872,
            "unit": "iter/sec",
            "range": "stddev: 0.00016003397178507176",
            "extra": "mean: 2.2517623883454823 msec\nrounds: 103"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_queryables",
            "value": 688.1006165832774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000875471998887566",
            "extra": "mean: 1.453275837718967 msec\nrounds: 456"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-1]",
            "value": 198.192396458019,
            "unit": "iter/sec",
            "range": "stddev: 0.0003125348284709596",
            "extra": "mean: 5.045602242424166 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-10]",
            "value": 170.0333580519141,
            "unit": "iter/sec",
            "range": "stddev: 0.0005087464146362291",
            "extra": "mean: 5.881198909773239 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-50]",
            "value": 91.9109284800074,
            "unit": "iter/sec",
            "range": "stddev: 0.010282522331201126",
            "extra": "mean: 10.880098988636822 msec\nrounds: 88"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-100]",
            "value": 73.52429547389195,
            "unit": "iter/sec",
            "range": "stddev: 0.000993903846329942",
            "extra": "mean: 13.60094637499919 msec\nrounds: 72"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-200]",
            "value": 42.10776879176437,
            "unit": "iter/sec",
            "range": "stddev: 0.008476436563409852",
            "extra": "mean: 23.748586749996228 msec\nrounds: 44"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-250]",
            "value": 35.2685592101007,
            "unit": "iter/sec",
            "range": "stddev: 0.010171105640872924",
            "extra": "mean: 28.353865947367826 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-1]",
            "value": 194.07851340600504,
            "unit": "iter/sec",
            "range": "stddev: 0.00031423985274894265",
            "extra": "mean: 5.152553894042032 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-10]",
            "value": 148.73798187087252,
            "unit": "iter/sec",
            "range": "stddev: 0.00047240969374549787",
            "extra": "mean: 6.723232273436075 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-50]",
            "value": 71.94334006800322,
            "unit": "iter/sec",
            "range": "stddev: 0.0008476376770135675",
            "extra": "mean: 13.899827267607634 msec\nrounds: 71"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-100]",
            "value": 43.13172847774734,
            "unit": "iter/sec",
            "range": "stddev: 0.001710384276657898",
            "extra": "mean: 23.18478844444927 msec\nrounds: 45"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-200]",
            "value": 24.638827739771678,
            "unit": "iter/sec",
            "range": "stddev: 0.0028975846229430317",
            "extra": "mean: 40.58634649999249 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-250]",
            "value": 20.511241481909664,
            "unit": "iter/sec",
            "range": "stddev: 0.003895400820998871",
            "extra": "mean: 48.75375295454309 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-1]",
            "value": 183.46605083978076,
            "unit": "iter/sec",
            "range": "stddev: 0.0003269866130434981",
            "extra": "mean: 5.45059969091116 msec\nrounds: 55"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-10]",
            "value": 140.60086302039548,
            "unit": "iter/sec",
            "range": "stddev: 0.0005242045153427298",
            "extra": "mean: 7.112331877045025 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-50]",
            "value": 77.61614290758418,
            "unit": "iter/sec",
            "range": "stddev: 0.010049539613785472",
            "extra": "mean: 12.883917733333874 msec\nrounds: 75"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-100]",
            "value": 57.43439532697129,
            "unit": "iter/sec",
            "range": "stddev: 0.0004885865460380185",
            "extra": "mean: 17.411169636365933 msec\nrounds: 55"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-200]",
            "value": 29.19276109511153,
            "unit": "iter/sec",
            "range": "stddev: 0.013330604123302269",
            "extra": "mean: 34.255067437504394 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-250]",
            "value": 26.760833902159096,
            "unit": "iter/sec",
            "range": "stddev: 0.0005662762902440591",
            "extra": "mean: 37.36804330000041 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-NewfoundlandandLabrador]",
            "value": 1.2037969344323893,
            "unit": "iter/sec",
            "range": "stddev: 0.0028833861663324265",
            "extra": "mean: 830.7048900000041 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-Saskatchewan]",
            "value": 26.935452899037937,
            "unit": "iter/sec",
            "range": "stddev: 0.00044336309402380757",
            "extra": "mean: 37.125791192310615 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-NewfoundlandandLabrador]",
            "value": 0.8092622800015548,
            "unit": "iter/sec",
            "range": "stddev: 0.013747781698838306",
            "extra": "mean: 1.2356933280000135 sec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-Saskatchewan]",
            "value": 17.752947655828788,
            "unit": "iter/sec",
            "range": "stddev: 0.0007068739391447505",
            "extra": "mean: 56.328673941179126 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WGS1984Quad]",
            "value": 8.88099902689696,
            "unit": "iter/sec",
            "range": "stddev: 0.005228168049793256",
            "extra": "mean: 112.59994477776696 msec\nrounds: 9"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WebMercatorQuad]",
            "value": 5.808112345202589,
            "unit": "iter/sec",
            "range": "stddev: 0.01303385144860573",
            "extra": "mean: 172.1729781666473 msec\nrounds: 6"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WGS1984Quad]",
            "value": 259.9253753436004,
            "unit": "iter/sec",
            "range": "stddev: 0.0001395329857633448",
            "extra": "mean: 3.8472580781236942 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WebMercatorQuad]",
            "value": 158.68140035792584,
            "unit": "iter/sec",
            "range": "stddev: 0.00029197530535567237",
            "extra": "mean: 6.301935814433036 msec\nrounds: 97"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WGS1984Quad]",
            "value": 311.9334630331028,
            "unit": "iter/sec",
            "range": "stddev: 0.00016814501907283264",
            "extra": "mean: 3.2058118749955296 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WebMercatorQuad]",
            "value": 283.2711513752026,
            "unit": "iter/sec",
            "range": "stddev: 0.00021195367161250383",
            "extra": "mean: 3.5301865196836264 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets]",
            "value": 735.1413056845619,
            "unit": "iter/sec",
            "range": "stddev: 0.0000825927090959164",
            "extra": "mean: 1.3602826997577049 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WGS1984Quad]",
            "value": 684.6589990888152,
            "unit": "iter/sec",
            "range": "stddev: 0.0036214133232715033",
            "extra": "mean: 1.4605811087429792 msec\nrounds: 469"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WebMercatorQuad]",
            "value": 830.7578855658865,
            "unit": "iter/sec",
            "range": "stddev: 0.00008983495720461895",
            "extra": "mean: 1.2037201420228845 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles]",
            "value": 332.86806303559837,
            "unit": "iter/sec",
            "range": "stddev: 0.00008096324902805929",
            "extra": "mean: 3.004193285713492 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WGS1984Quad]",
            "value": 466.08693220455103,
            "unit": "iter/sec",
            "range": "stddev: 0.00008638591843063692",
            "extra": "mean: 2.1455224999982 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WebMercatorQuad]",
            "value": 430.22810299041055,
            "unit": "iter/sec",
            "range": "stddev: 0.0001612079756420225",
            "extra": "mean: 2.324348393443487 msec\nrounds: 183"
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
          "id": "f968cbfc5529d8747b49ce90513e3d72801bc3c4",
          "message": "Merge pull request #9 from TechTraverse/add-iam-role\n\nwrap password/token in quote function",
          "timestamp": "2025-03-05T13:33:03-07:00",
          "tree_id": "400e1aca2ab469dd1c428adbfde51be46b0211ac",
          "url": "https://github.com/TechTraverse/tipg/commit/f968cbfc5529d8747b49ce90513e3d72801bc3c4"
        },
        "date": 1741207137743,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-1]",
            "value": 414.33741228293786,
            "unit": "iter/sec",
            "range": "stddev: 0.00455239035811796",
            "extra": "mean: 2.4134919279679523 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-10]",
            "value": 330.9167086091626,
            "unit": "iter/sec",
            "range": "stddev: 0.0001048032119759883",
            "extra": "mean: 3.0219084560673393 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-1]",
            "value": 397.9952993706113,
            "unit": "iter/sec",
            "range": "stddev: 0.00010432686392726784",
            "extra": "mean: 2.5125924893620537 msec\nrounds: 94"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-10]",
            "value": 289.1561627127218,
            "unit": "iter/sec",
            "range": "stddev: 0.00012339226287931706",
            "extra": "mean: 3.4583388803423336 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[json]",
            "value": 611.4052523073505,
            "unit": "iter/sec",
            "range": "stddev: 0.00009094160886220941",
            "extra": "mean: 1.6355763975303648 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[html]",
            "value": 464.8635331399367,
            "unit": "iter/sec",
            "range": "stddev: 0.0001248287825796404",
            "extra": "mean: 2.1511689532742344 msec\nrounds: 107"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_queryables",
            "value": 706.5827716364583,
            "unit": "iter/sec",
            "range": "stddev: 0.00008376579895201729",
            "extra": "mean: 1.4152623586957578 msec\nrounds: 460"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-1]",
            "value": 208.0886205042763,
            "unit": "iter/sec",
            "range": "stddev: 0.0001654432438553826",
            "extra": "mean: 4.805644814101931 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-10]",
            "value": 180.70630492548142,
            "unit": "iter/sec",
            "range": "stddev: 0.0003132354700274744",
            "extra": "mean: 5.533841226029019 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-50]",
            "value": 107.98720901674409,
            "unit": "iter/sec",
            "range": "stddev: 0.007370539423049019",
            "extra": "mean: 9.260356009802456 msec\nrounds: 102"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-100]",
            "value": 76.85112374946844,
            "unit": "iter/sec",
            "range": "stddev: 0.007285642931989041",
            "extra": "mean: 13.012171471427791 msec\nrounds: 70"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-200]",
            "value": 41.092982941682784,
            "unit": "iter/sec",
            "range": "stddev: 0.01156303496056413",
            "extra": "mean: 24.335055000002136 msec\nrounds: 45"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-250]",
            "value": 33.22092099284311,
            "unit": "iter/sec",
            "range": "stddev: 0.014940263010430882",
            "extra": "mean: 30.10151344736749 msec\nrounds: 38"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-1]",
            "value": 171.31226997594896,
            "unit": "iter/sec",
            "range": "stddev: 0.00047741725287199055",
            "extra": "mean: 5.837293499995026 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-10]",
            "value": 131.00690068626332,
            "unit": "iter/sec",
            "range": "stddev: 0.0005358982747306142",
            "extra": "mean: 7.633185692979718 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-50]",
            "value": 75.23251929232879,
            "unit": "iter/sec",
            "range": "stddev: 0.0009057480628962266",
            "extra": "mean: 13.292124328767049 msec\nrounds: 73"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-100]",
            "value": 42.824575546075145,
            "unit": "iter/sec",
            "range": "stddev: 0.0013493393374132763",
            "extra": "mean: 23.351077909087405 msec\nrounds: 44"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-200]",
            "value": 24.63258288069257,
            "unit": "iter/sec",
            "range": "stddev: 0.0028980936345451647",
            "extra": "mean: 40.596635961542496 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-250]",
            "value": 17.424003058401524,
            "unit": "iter/sec",
            "range": "stddev: 0.012183293088776586",
            "extra": "mean: 57.39209277272359 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-1]",
            "value": 163.35282220466175,
            "unit": "iter/sec",
            "range": "stddev: 0.0008951542207879743",
            "extra": "mean: 6.121718538459766 msec\nrounds: 52"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-10]",
            "value": 138.6617840633065,
            "unit": "iter/sec",
            "range": "stddev: 0.0006657196826022084",
            "extra": "mean: 7.211792396551358 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-50]",
            "value": 86.85595051497337,
            "unit": "iter/sec",
            "range": "stddev: 0.0004322724627216985",
            "extra": "mean: 11.513315945205237 msec\nrounds: 73"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-100]",
            "value": 58.2039236045594,
            "unit": "iter/sec",
            "range": "stddev: 0.0009903560005548788",
            "extra": "mean: 17.180972313723284 msec\nrounds: 51"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-200]",
            "value": 30.57532327440192,
            "unit": "iter/sec",
            "range": "stddev: 0.009138662577493517",
            "extra": "mean: 32.706113718745655 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-250]",
            "value": 22.01463521942479,
            "unit": "iter/sec",
            "range": "stddev: 0.015895663313230425",
            "extra": "mean: 45.424327499991556 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-NewfoundlandandLabrador]",
            "value": 1.2103881956149647,
            "unit": "iter/sec",
            "range": "stddev: 0.002569905623775976",
            "extra": "mean: 826.1812231999897 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-Saskatchewan]",
            "value": 25.87208102372491,
            "unit": "iter/sec",
            "range": "stddev: 0.0003349449462119408",
            "extra": "mean: 38.65170331999934 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-NewfoundlandandLabrador]",
            "value": 0.7987550445402739,
            "unit": "iter/sec",
            "range": "stddev: 0.020202474855028487",
            "extra": "mean: 1.2519482748000086 sec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-Saskatchewan]",
            "value": 17.383813764732956,
            "unit": "iter/sec",
            "range": "stddev: 0.0006581266896028609",
            "extra": "mean: 57.5247764117635 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WGS1984Quad]",
            "value": 8.558649822552422,
            "unit": "iter/sec",
            "range": "stddev: 0.006652831481351886",
            "extra": "mean: 116.84085933332098 msec\nrounds: 9"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WebMercatorQuad]",
            "value": 5.77948558280333,
            "unit": "iter/sec",
            "range": "stddev: 0.005398617961988917",
            "extra": "mean: 173.02577983332412 msec\nrounds: 6"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WGS1984Quad]",
            "value": 225.38137933765017,
            "unit": "iter/sec",
            "range": "stddev: 0.00022591849444493327",
            "extra": "mean: 4.436923773112027 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WebMercatorQuad]",
            "value": 138.0318539508681,
            "unit": "iter/sec",
            "range": "stddev: 0.009945567548896913",
            "extra": "mean: 7.244704547371695 msec\nrounds: 95"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WGS1984Quad]",
            "value": 315.5978833809868,
            "unit": "iter/sec",
            "range": "stddev: 0.00012028756458505131",
            "extra": "mean: 3.168589057971626 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WebMercatorQuad]",
            "value": 237.42421708418524,
            "unit": "iter/sec",
            "range": "stddev: 0.00033508357459971727",
            "extra": "mean: 4.211870264461787 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets]",
            "value": 687.0900657606659,
            "unit": "iter/sec",
            "range": "stddev: 0.00010803006658593628",
            "extra": "mean: 1.4554132708830783 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WGS1984Quad]",
            "value": 787.183744260046,
            "unit": "iter/sec",
            "range": "stddev: 0.00011051666754703017",
            "extra": "mean: 1.2703514361059396 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WebMercatorQuad]",
            "value": 823.3308285203459,
            "unit": "iter/sec",
            "range": "stddev: 0.00007634913700796413",
            "extra": "mean: 1.21457859387721 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles]",
            "value": 328.2522111572716,
            "unit": "iter/sec",
            "range": "stddev: 0.0001086516271287305",
            "extra": "mean: 3.046437970591101 msec\nrounds: 34"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WGS1984Quad]",
            "value": 319.85007003374227,
            "unit": "iter/sec",
            "range": "stddev: 0.00848916734063061",
            "extra": "mean: 3.12646484615278 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WebMercatorQuad]",
            "value": 400.138074611345,
            "unit": "iter/sec",
            "range": "stddev: 0.0001251829733762642",
            "extra": "mean: 2.4991373314606515 msec\nrounds: 178"
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
          "id": "11fea34b45213d108d59a4344a84bbb5fccb32d7",
          "message": "Merge pull request #10 from TechTraverse/add-iam-role\n\nadd print statement",
          "timestamp": "2025-03-07T13:33:08-07:00",
          "tree_id": "224d8645de9725bf776bd3e52feaac306762d0fe",
          "url": "https://github.com/TechTraverse/tipg/commit/11fea34b45213d108d59a4344a84bbb5fccb32d7"
        },
        "date": 1741379988463,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-1]",
            "value": 433.91905553496696,
            "unit": "iter/sec",
            "range": "stddev: 0.003978074883876491",
            "extra": "mean: 2.3045772875015302 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-10]",
            "value": 337.5043933099839,
            "unit": "iter/sec",
            "range": "stddev: 0.00011235860977524543",
            "extra": "mean: 2.962924393939788 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-1]",
            "value": 406.7995371043673,
            "unit": "iter/sec",
            "range": "stddev: 0.00007030906310752442",
            "extra": "mean: 2.4582132200004025 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-10]",
            "value": 299.9029802175043,
            "unit": "iter/sec",
            "range": "stddev: 0.0001338376998858706",
            "extra": "mean: 3.3344116796530368 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[json]",
            "value": 635.9583261805868,
            "unit": "iter/sec",
            "range": "stddev: 0.00007029720262993618",
            "extra": "mean: 1.572430077306732 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[html]",
            "value": 448.0644251590391,
            "unit": "iter/sec",
            "range": "stddev: 0.00013224012471548555",
            "extra": "mean: 2.2318219074077414 msec\nrounds: 108"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_queryables",
            "value": 717.0942041319024,
            "unit": "iter/sec",
            "range": "stddev: 0.00011002968821384889",
            "extra": "mean: 1.3945169187506916 msec\nrounds: 480"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-1]",
            "value": 207.01760869231651,
            "unit": "iter/sec",
            "range": "stddev: 0.00023806131443376244",
            "extra": "mean: 4.830506961783464 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-10]",
            "value": 182.43568847808743,
            "unit": "iter/sec",
            "range": "stddev: 0.0002936709966257573",
            "extra": "mean: 5.481383649998454 msec\nrounds: 140"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-50]",
            "value": 104.62974245005758,
            "unit": "iter/sec",
            "range": "stddev: 0.008655887014471725",
            "extra": "mean: 9.557511818184254 msec\nrounds: 99"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-100]",
            "value": 73.84449614593379,
            "unit": "iter/sec",
            "range": "stddev: 0.007603013775992212",
            "extra": "mean: 13.541970657146456 msec\nrounds: 70"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-200]",
            "value": 40.71967947337839,
            "unit": "iter/sec",
            "range": "stddev: 0.013418446500422702",
            "extra": "mean: 24.558150086956786 msec\nrounds: 46"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-250]",
            "value": 34.67748011189892,
            "unit": "iter/sec",
            "range": "stddev: 0.011202774360947073",
            "extra": "mean: 28.83715877777604 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-1]",
            "value": 195.26351237208877,
            "unit": "iter/sec",
            "range": "stddev: 0.00022833602093549454",
            "extra": "mean: 5.121284503447974 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-10]",
            "value": 145.0127398261544,
            "unit": "iter/sec",
            "range": "stddev: 0.000471504547837608",
            "extra": "mean: 6.895945840336718 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-50]",
            "value": 71.59507555996407,
            "unit": "iter/sec",
            "range": "stddev: 0.0010526554303711018",
            "extra": "mean: 13.967441086956537 msec\nrounds: 69"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-100]",
            "value": 45.01036386132665,
            "unit": "iter/sec",
            "range": "stddev: 0.0018239573540929357",
            "extra": "mean: 22.217105444446535 msec\nrounds: 45"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-200]",
            "value": 24.394088185965884,
            "unit": "iter/sec",
            "range": "stddev: 0.0030615306983747975",
            "extra": "mean: 40.99353877778093 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-250]",
            "value": 19.66039544436732,
            "unit": "iter/sec",
            "range": "stddev: 0.016680532237028478",
            "extra": "mean: 50.86367681818418 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-1]",
            "value": 177.7490943166648,
            "unit": "iter/sec",
            "range": "stddev: 0.0003007286513681394",
            "extra": "mean: 5.625907709090618 msec\nrounds: 55"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-10]",
            "value": 138.81812238042124,
            "unit": "iter/sec",
            "range": "stddev: 0.0011598814501971122",
            "extra": "mean: 7.2036704059400165 msec\nrounds: 101"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-50]",
            "value": 82.99665871731943,
            "unit": "iter/sec",
            "range": "stddev: 0.006303022124113496",
            "extra": "mean: 12.048677807692561 msec\nrounds: 78"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-100]",
            "value": 52.4032773367258,
            "unit": "iter/sec",
            "range": "stddev: 0.009655545878243459",
            "extra": "mean: 19.082775941175147 msec\nrounds: 51"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-200]",
            "value": 28.142051051624335,
            "unit": "iter/sec",
            "range": "stddev: 0.017127663772423633",
            "extra": "mean: 35.534012718745345 msec\nrounds: 32"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-250]",
            "value": 22.934786403605255,
            "unit": "iter/sec",
            "range": "stddev: 0.01835228044764059",
            "extra": "mean: 43.60188851999965 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-NewfoundlandandLabrador]",
            "value": 1.2117325890640371,
            "unit": "iter/sec",
            "range": "stddev: 0.0032823704936074723",
            "extra": "mean: 825.2645914000027 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-Saskatchewan]",
            "value": 26.56407504709712,
            "unit": "iter/sec",
            "range": "stddev: 0.0009285240452735917",
            "extra": "mean: 37.644826640002975 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-NewfoundlandandLabrador]",
            "value": 0.8075226510345801,
            "unit": "iter/sec",
            "range": "stddev: 0.00471518699734505",
            "extra": "mean: 1.238355356000011 sec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-Saskatchewan]",
            "value": 17.610111140746778,
            "unit": "iter/sec",
            "range": "stddev: 0.0008383533545556106",
            "extra": "mean: 56.78555870588298 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WGS1984Quad]",
            "value": 8.810881814186965,
            "unit": "iter/sec",
            "range": "stddev: 0.005261300009102329",
            "extra": "mean: 113.49601788890595 msec\nrounds: 9"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WebMercatorQuad]",
            "value": 6.071760952633665,
            "unit": "iter/sec",
            "range": "stddev: 0.009338703590214836",
            "extra": "mean: 164.69686600001003 msec\nrounds: 7"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WGS1984Quad]",
            "value": 245.49066658043344,
            "unit": "iter/sec",
            "range": "stddev: 0.00016756622125716484",
            "extra": "mean: 4.073474620968355 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WebMercatorQuad]",
            "value": 167.13008536947603,
            "unit": "iter/sec",
            "range": "stddev: 0.0001524518699708364",
            "extra": "mean: 5.98336318556465 msec\nrounds: 97"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WGS1984Quad]",
            "value": 311.0816957070127,
            "unit": "iter/sec",
            "range": "stddev: 0.00015527772251385246",
            "extra": "mean: 3.2145896521723794 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WebMercatorQuad]",
            "value": 277.0311722568302,
            "unit": "iter/sec",
            "range": "stddev: 0.00022581718333048657",
            "extra": "mean: 3.60970208461927 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets]",
            "value": 687.5992318264146,
            "unit": "iter/sec",
            "range": "stddev: 0.00010942316530415562",
            "extra": "mean: 1.4543355398227837 msec\nrounds: 452"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WGS1984Quad]",
            "value": 812.7362139118939,
            "unit": "iter/sec",
            "range": "stddev: 0.00010795524745841393",
            "extra": "mean: 1.2304115196082637 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WebMercatorQuad]",
            "value": 796.8612329497515,
            "unit": "iter/sec",
            "range": "stddev: 0.0001222446835692225",
            "extra": "mean: 1.254923641219547 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles]",
            "value": 329.9948427300255,
            "unit": "iter/sec",
            "range": "stddev: 0.00017178583788465587",
            "extra": "mean: 3.0303503888941603 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WGS1984Quad]",
            "value": 457.68249010059117,
            "unit": "iter/sec",
            "range": "stddev: 0.00011370375091772272",
            "extra": "mean: 2.1849208165691816 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WebMercatorQuad]",
            "value": 426.2713652417677,
            "unit": "iter/sec",
            "range": "stddev: 0.00013493688152955315",
            "extra": "mean: 2.3459234692736906 msec\nrounds: 179"
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
          "id": "92a92cea89d5c33634b2d558317dcf29903ed738",
          "message": "Merge pull request #11 from TechTraverse/add-iam-role\n\nfix schema list in database.py",
          "timestamp": "2025-03-07T14:37:45-07:00",
          "tree_id": "85369787077a6b5eb9f74b05d2156bc1281da34f",
          "url": "https://github.com/TechTraverse/tipg/commit/92a92cea89d5c33634b2d558317dcf29903ed738"
        },
        "date": 1741383810269,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-1]",
            "value": 461.38272973979525,
            "unit": "iter/sec",
            "range": "stddev: 0.0032931788702277157",
            "extra": "mean: 2.167397987705277 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-10]",
            "value": 337.4052082906463,
            "unit": "iter/sec",
            "range": "stddev: 0.00012523036069288338",
            "extra": "mean: 2.9637953873509377 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-1]",
            "value": 404.12127074764373,
            "unit": "iter/sec",
            "range": "stddev: 0.000119926613877482",
            "extra": "mean: 2.4745047400003273 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-10]",
            "value": 295.6999479895266,
            "unit": "iter/sec",
            "range": "stddev: 0.00012937579544924417",
            "extra": "mean: 3.3818064791658977 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[json]",
            "value": 617.0550298646475,
            "unit": "iter/sec",
            "range": "stddev: 0.00008848606029018051",
            "extra": "mean: 1.6206010025059716 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[html]",
            "value": 454.8174855542256,
            "unit": "iter/sec",
            "range": "stddev: 0.0001349794119584313",
            "extra": "mean: 2.1986841574075213 msec\nrounds: 108"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_queryables",
            "value": 732.2376333729344,
            "unit": "iter/sec",
            "range": "stddev: 0.00006099837114438193",
            "extra": "mean: 1.365676871036608 msec\nrounds: 473"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-1]",
            "value": 216.9622550032682,
            "unit": "iter/sec",
            "range": "stddev: 0.0001949122600312431",
            "extra": "mean: 4.6090966375000875 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-10]",
            "value": 188.84956401408616,
            "unit": "iter/sec",
            "range": "stddev: 0.00023578327433494372",
            "extra": "mean: 5.295220061643408 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-50]",
            "value": 109.71500743607474,
            "unit": "iter/sec",
            "range": "stddev: 0.007159538910299963",
            "extra": "mean: 9.114523376235912 msec\nrounds: 101"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-100]",
            "value": 84.10890055820529,
            "unit": "iter/sec",
            "range": "stddev: 0.0003149496567283786",
            "extra": "mean: 11.889348135135556 msec\nrounds: 74"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-200]",
            "value": 42.10721485794528,
            "unit": "iter/sec",
            "range": "stddev: 0.012562367616088376",
            "extra": "mean: 23.74889917021687 msec\nrounds: 47"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-250]",
            "value": 35.40534621762349,
            "unit": "iter/sec",
            "range": "stddev: 0.013292179383165107",
            "extra": "mean: 28.244322025644717 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-1]",
            "value": 189.30772256843505,
            "unit": "iter/sec",
            "range": "stddev: 0.004989224438924833",
            "extra": "mean: 5.282404681819034 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-10]",
            "value": 152.4704624430999,
            "unit": "iter/sec",
            "range": "stddev: 0.0003194569531725377",
            "extra": "mean: 6.558647386363033 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-50]",
            "value": 75.80750596699987,
            "unit": "iter/sec",
            "range": "stddev: 0.000884990832355765",
            "extra": "mean: 13.191305890412945 msec\nrounds: 73"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-100]",
            "value": 45.94520150123281,
            "unit": "iter/sec",
            "range": "stddev: 0.0018691017894556313",
            "extra": "mean: 21.765058533330578 msec\nrounds: 45"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-200]",
            "value": 25.087532961430874,
            "unit": "iter/sec",
            "range": "stddev: 0.0033900087100847817",
            "extra": "mean: 39.86043591999987 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-250]",
            "value": 19.974324470681683,
            "unit": "iter/sec",
            "range": "stddev: 0.0038586899627026214",
            "extra": "mean: 50.064271333320946 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-1]",
            "value": 183.82511700320293,
            "unit": "iter/sec",
            "range": "stddev: 0.00020463675412186124",
            "extra": "mean: 5.439953017859774 msec\nrounds: 56"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-10]",
            "value": 144.38281174318675,
            "unit": "iter/sec",
            "range": "stddev: 0.0006573430075505036",
            "extra": "mean: 6.926032177422178 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-50]",
            "value": 83.88594145289731,
            "unit": "iter/sec",
            "range": "stddev: 0.007557696076503595",
            "extra": "mean: 11.920948643838118 msec\nrounds: 73"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-100]",
            "value": 56.55669926246279,
            "unit": "iter/sec",
            "range": "stddev: 0.008548601628777122",
            "extra": "mean: 17.681371314816268 msec\nrounds: 54"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-200]",
            "value": 29.91085691785895,
            "unit": "iter/sec",
            "range": "stddev: 0.014170884064328749",
            "extra": "mean: 33.43267639393265 msec\nrounds: 33"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-250]",
            "value": 23.946903202043814,
            "unit": "iter/sec",
            "range": "stddev: 0.01632873611567648",
            "extra": "mean: 41.75905299999928 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-NewfoundlandandLabrador]",
            "value": 1.1992216240985647,
            "unit": "iter/sec",
            "range": "stddev: 0.002969681189157366",
            "extra": "mean: 833.8742230000094 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-Saskatchewan]",
            "value": 27.137445739351598,
            "unit": "iter/sec",
            "range": "stddev: 0.0004711294604142909",
            "extra": "mean: 36.84945184615939 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-NewfoundlandandLabrador]",
            "value": 0.810623362220731,
            "unit": "iter/sec",
            "range": "stddev: 0.012509047708534206",
            "extra": "mean: 1.2336185293999733 sec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-Saskatchewan]",
            "value": 18.06775862987019,
            "unit": "iter/sec",
            "range": "stddev: 0.000493196886082704",
            "extra": "mean: 55.34720827777543 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WGS1984Quad]",
            "value": 9.077960914665262,
            "unit": "iter/sec",
            "range": "stddev: 0.005821226093245534",
            "extra": "mean: 110.15689639999664 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WebMercatorQuad]",
            "value": 6.30832480543169,
            "unit": "iter/sec",
            "range": "stddev: 0.008433952469143031",
            "extra": "mean: 158.52068985714953 msec\nrounds: 7"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WGS1984Quad]",
            "value": 251.6553788403249,
            "unit": "iter/sec",
            "range": "stddev: 0.0001140581493919983",
            "extra": "mean: 3.973688162789078 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WebMercatorQuad]",
            "value": 160.24431870587583,
            "unit": "iter/sec",
            "range": "stddev: 0.0007445930918846028",
            "extra": "mean: 6.240470851484435 msec\nrounds: 101"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WGS1984Quad]",
            "value": 318.32502916343424,
            "unit": "iter/sec",
            "range": "stddev: 0.0001792942031734253",
            "extra": "mean: 3.1414432054809636 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WebMercatorQuad]",
            "value": 288.1883477003872,
            "unit": "iter/sec",
            "range": "stddev: 0.00017786547909403206",
            "extra": "mean: 3.469952924813054 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets]",
            "value": 684.0232988598293,
            "unit": "iter/sec",
            "range": "stddev: 0.00008485084176079135",
            "extra": "mean: 1.4619385065784447 msec\nrounds: 456"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WGS1984Quad]",
            "value": 828.167368803996,
            "unit": "iter/sec",
            "range": "stddev: 0.00010769631935715337",
            "extra": "mean: 1.2074853920460031 msec\nrounds: 528"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WebMercatorQuad]",
            "value": 795.4193320009243,
            "unit": "iter/sec",
            "range": "stddev: 0.00008639830688832973",
            "extra": "mean: 1.2571985112361312 msec\nrounds: 534"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles]",
            "value": 348.5445905820164,
            "unit": "iter/sec",
            "range": "stddev: 0.000060188685497734714",
            "extra": "mean: 2.8690733611161554 msec\nrounds: 36"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WGS1984Quad]",
            "value": 452.73231337140567,
            "unit": "iter/sec",
            "range": "stddev: 0.0002401247131991039",
            "extra": "mean: 2.208810748570613 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WebMercatorQuad]",
            "value": 432.6047697010095,
            "unit": "iter/sec",
            "range": "stddev: 0.00009312050027422511",
            "extra": "mean: 2.311578766667645 msec\nrounds: 180"
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
          "id": "43ff648205b1a2098780d1da157ef89ae0d65efa",
          "message": "Merge pull request #12 from TechTraverse/add-iam-role\n\nAdd iam role",
          "timestamp": "2025-03-07T15:15:07-07:00",
          "tree_id": "b4f9af4d9d457e49fcb74d4ae7cf549e4a46438f",
          "url": "https://github.com/TechTraverse/tipg/commit/43ff648205b1a2098780d1da157ef89ae0d65efa"
        },
        "date": 1741386018870,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-1]",
            "value": 452.43409058016204,
            "unit": "iter/sec",
            "range": "stddev: 0.003308315360761196",
            "extra": "mean: 2.2102666903762427 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-10]",
            "value": 329.46002156953665,
            "unit": "iter/sec",
            "range": "stddev: 0.00011279104114421306",
            "extra": "mean: 3.0352696367712024 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-1]",
            "value": 395.0944178755096,
            "unit": "iter/sec",
            "range": "stddev: 0.00013882154010865733",
            "extra": "mean: 2.5310405684220276 msec\nrounds: 95"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-10]",
            "value": 282.7828715679523,
            "unit": "iter/sec",
            "range": "stddev: 0.00015528191077441612",
            "extra": "mean: 3.536282075555985 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[json]",
            "value": 605.8858061692425,
            "unit": "iter/sec",
            "range": "stddev: 0.0000947761308490517",
            "extra": "mean: 1.6504760300007248 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[html]",
            "value": 445.0611948634345,
            "unit": "iter/sec",
            "range": "stddev: 0.00015088398279425704",
            "extra": "mean: 2.2468820277778803 msec\nrounds: 108"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_queryables",
            "value": 688.1930639181475,
            "unit": "iter/sec",
            "range": "stddev: 0.00012770344699000028",
            "extra": "mean: 1.453080614190756 msec\nrounds: 451"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-1]",
            "value": 217.1381119279358,
            "unit": "iter/sec",
            "range": "stddev: 0.0001348326508762866",
            "extra": "mean: 4.6053637987415215 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-10]",
            "value": 185.11965458911112,
            "unit": "iter/sec",
            "range": "stddev: 0.00019514243763338335",
            "extra": "mean: 5.401911548612087 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-50]",
            "value": 107.88017660771393,
            "unit": "iter/sec",
            "range": "stddev: 0.007240329264507757",
            "extra": "mean: 9.269543594059108 msec\nrounds: 101"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-100]",
            "value": 82.56248324207756,
            "unit": "iter/sec",
            "range": "stddev: 0.00012165815903863658",
            "extra": "mean: 12.112038794520595 msec\nrounds: 73"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-200]",
            "value": 44.540384657948806,
            "unit": "iter/sec",
            "range": "stddev: 0.007919684187119498",
            "extra": "mean: 22.45153488636379 msec\nrounds: 44"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-250]",
            "value": 35.834453892040514,
            "unit": "iter/sec",
            "range": "stddev: 0.011718753933288379",
            "extra": "mean: 27.906104081081534 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-1]",
            "value": 195.57637407075677,
            "unit": "iter/sec",
            "range": "stddev: 0.00023360778378233064",
            "extra": "mean: 5.113092032467144 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-10]",
            "value": 145.04772712739856,
            "unit": "iter/sec",
            "range": "stddev: 0.000493519140018601",
            "extra": "mean: 6.894282453124401 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-50]",
            "value": 76.09053494515571,
            "unit": "iter/sec",
            "range": "stddev: 0.0006980501100608124",
            "extra": "mean: 13.14223905405287 msec\nrounds: 74"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-100]",
            "value": 43.21209714167565,
            "unit": "iter/sec",
            "range": "stddev: 0.0017701753621964767",
            "extra": "mean: 23.14166786956415 msec\nrounds: 46"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-200]",
            "value": 24.58785895090239,
            "unit": "iter/sec",
            "range": "stddev: 0.0024422850761419315",
            "extra": "mean: 40.67047895454514 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-250]",
            "value": 19.84603127619221,
            "unit": "iter/sec",
            "range": "stddev: 0.003573759046917483",
            "extra": "mean: 50.3879080952384 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-1]",
            "value": 183.37680158169266,
            "unit": "iter/sec",
            "range": "stddev: 0.0002071873087158823",
            "extra": "mean: 5.453252490907413 msec\nrounds: 55"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-10]",
            "value": 149.12293917812372,
            "unit": "iter/sec",
            "range": "stddev: 0.00012206372066244735",
            "extra": "mean: 6.705876409836078 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-50]",
            "value": 86.97414775026017,
            "unit": "iter/sec",
            "range": "stddev: 0.0002677665062833933",
            "extra": "mean: 11.497669432432106 msec\nrounds: 74"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-100]",
            "value": 58.052179472028676,
            "unit": "iter/sec",
            "range": "stddev: 0.0007744685441438134",
            "extra": "mean: 17.2258821132087 msec\nrounds: 53"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-200]",
            "value": 29.08706909777812,
            "unit": "iter/sec",
            "range": "stddev: 0.014305331949563101",
            "extra": "mean: 34.3795380909102 msec\nrounds: 33"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-250]",
            "value": 24.820493206052237,
            "unit": "iter/sec",
            "range": "stddev: 0.014548346317947639",
            "extra": "mean: 40.28928803703867 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-NewfoundlandandLabrador]",
            "value": 1.2093326554869275,
            "unit": "iter/sec",
            "range": "stddev: 0.0014707735515671256",
            "extra": "mean: 826.9023377999815 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-Saskatchewan]",
            "value": 27.203421107261196,
            "unit": "iter/sec",
            "range": "stddev: 0.00030932898625868447",
            "extra": "mean: 36.76008234615306 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-NewfoundlandandLabrador]",
            "value": 0.8112932307185433,
            "unit": "iter/sec",
            "range": "stddev: 0.011667771306236772",
            "extra": "mean: 1.232599955400002 sec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-Saskatchewan]",
            "value": 18.292523685207513,
            "unit": "iter/sec",
            "range": "stddev: 0.0003567718092211233",
            "extra": "mean: 54.66714255554924 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WGS1984Quad]",
            "value": 8.87541598113169,
            "unit": "iter/sec",
            "range": "stddev: 0.004581551801796073",
            "extra": "mean: 112.67077533333729 msec\nrounds: 9"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WebMercatorQuad]",
            "value": 6.2272539818231065,
            "unit": "iter/sec",
            "range": "stddev: 0.007952206241655855",
            "extra": "mean: 160.58442499999614 msec\nrounds: 7"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WGS1984Quad]",
            "value": 239.51276135287642,
            "unit": "iter/sec",
            "range": "stddev: 0.00008744748075534121",
            "extra": "mean: 4.175142879033032 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WebMercatorQuad]",
            "value": 166.5577993336535,
            "unit": "iter/sec",
            "range": "stddev: 0.00016603860356512287",
            "extra": "mean: 6.003921785714582 msec\nrounds: 98"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WGS1984Quad]",
            "value": 314.4470523850374,
            "unit": "iter/sec",
            "range": "stddev: 0.00011145884165150204",
            "extra": "mean: 3.180185638297889 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WebMercatorQuad]",
            "value": 289.2711678685462,
            "unit": "iter/sec",
            "range": "stddev: 0.00017590398826343315",
            "extra": "mean: 3.456963953125225 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets]",
            "value": 698.2535668842712,
            "unit": "iter/sec",
            "range": "stddev: 0.00008587036148954892",
            "extra": "mean: 1.4321444922396513 msec\nrounds: 451"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WGS1984Quad]",
            "value": 758.1863059069715,
            "unit": "iter/sec",
            "range": "stddev: 0.00006275943750174527",
            "extra": "mean: 1.318937037254665 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WebMercatorQuad]",
            "value": 831.4205821210916,
            "unit": "iter/sec",
            "range": "stddev: 0.00005423556267281189",
            "extra": "mean: 1.2027606983806371 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles]",
            "value": 334.9095550983062,
            "unit": "iter/sec",
            "range": "stddev: 0.00009908403043475328",
            "extra": "mean: 2.985880769231769 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WGS1984Quad]",
            "value": 449.5080916703994,
            "unit": "iter/sec",
            "range": "stddev: 0.00019501963580584428",
            "extra": "mean: 2.2246540574696647 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WebMercatorQuad]",
            "value": 433.9195486548593,
            "unit": "iter/sec",
            "range": "stddev: 0.0001276774771294772",
            "extra": "mean: 2.304574668507047 msec\nrounds: 181"
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
          "id": "0953a95263586851f9b859d204fc1d373f3a882e",
          "message": "Merge pull request #13 from TechTraverse/add-iam-role\n\nAdd iam role",
          "timestamp": "2025-03-07T16:14:13-07:00",
          "tree_id": "5d3cda31643fbb16b72f7d0694fd5923f24777e9",
          "url": "https://github.com/TechTraverse/tipg/commit/0953a95263586851f9b859d204fc1d373f3a882e"
        },
        "date": 1741389588855,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-1]",
            "value": 440.7047579264415,
            "unit": "iter/sec",
            "range": "stddev: 0.0037314867628984974",
            "extra": "mean: 2.2690928155736203 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-10]",
            "value": 327.7532636616342,
            "unit": "iter/sec",
            "range": "stddev: 0.00025484363715789636",
            "extra": "mean: 3.0510756440014575 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-1]",
            "value": 403.152516097719,
            "unit": "iter/sec",
            "range": "stddev: 0.00013160016990741767",
            "extra": "mean: 2.480450846938564 msec\nrounds: 98"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-10]",
            "value": 291.1400165172187,
            "unit": "iter/sec",
            "range": "stddev: 0.00018912391364290444",
            "extra": "mean: 3.4347734535518843 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[json]",
            "value": 599.4355847039357,
            "unit": "iter/sec",
            "range": "stddev: 0.00007793106249130599",
            "extra": "mean: 1.6682359631584187 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[html]",
            "value": 466.65989602070255,
            "unit": "iter/sec",
            "range": "stddev: 0.00013661138330346324",
            "extra": "mean: 2.142888233009071 msec\nrounds: 103"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_queryables",
            "value": 707.0378048314487,
            "unit": "iter/sec",
            "range": "stddev: 0.00009726841048677729",
            "extra": "mean: 1.4143515285415194 msec\nrounds: 473"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-1]",
            "value": 211.39219136046464,
            "unit": "iter/sec",
            "range": "stddev: 0.0001680384264764433",
            "extra": "mean: 4.730543704402052 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-10]",
            "value": 180.58394799228432,
            "unit": "iter/sec",
            "range": "stddev: 0.00018531835798707563",
            "extra": "mean: 5.5375907499969275 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-50]",
            "value": 106.41142545418744,
            "unit": "iter/sec",
            "range": "stddev: 0.008087557951846317",
            "extra": "mean: 9.397487118810592 msec\nrounds: 101"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-100]",
            "value": 79.1168420043052,
            "unit": "iter/sec",
            "range": "stddev: 0.0003457552549109252",
            "extra": "mean: 12.63953381690316 msec\nrounds: 71"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-200]",
            "value": 42.84562884928592,
            "unit": "iter/sec",
            "range": "stddev: 0.010180927093874453",
            "extra": "mean: 23.339603755557114 msec\nrounds: 45"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-250]",
            "value": 34.64428983372418,
            "unit": "iter/sec",
            "range": "stddev: 0.01308300459793424",
            "extra": "mean: 28.86478564864559 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-1]",
            "value": 198.57584012157452,
            "unit": "iter/sec",
            "range": "stddev: 0.00022932795888918085",
            "extra": "mean: 5.0358593441567105 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-10]",
            "value": 149.4112872530264,
            "unit": "iter/sec",
            "range": "stddev: 0.00034886601730305084",
            "extra": "mean: 6.692934773438575 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-50]",
            "value": 73.64816205518532,
            "unit": "iter/sec",
            "range": "stddev: 0.0008121462551392732",
            "extra": "mean: 13.578071361111357 msec\nrounds: 72"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-100]",
            "value": 43.52291232081487,
            "unit": "iter/sec",
            "range": "stddev: 0.0018862949144260689",
            "extra": "mean: 22.976403615383738 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-200]",
            "value": 24.92932400014102,
            "unit": "iter/sec",
            "range": "stddev: 0.003131921886540201",
            "extra": "mean: 40.113402192307476 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-250]",
            "value": 18.51545670081918,
            "unit": "iter/sec",
            "range": "stddev: 0.0018989313563482566",
            "extra": "mean: 54.008929736837494 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-1]",
            "value": 181.7468350254925,
            "unit": "iter/sec",
            "range": "stddev: 0.00020164421421680237",
            "extra": "mean: 5.502159087720764 msec\nrounds: 57"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-10]",
            "value": 151.75717503266793,
            "unit": "iter/sec",
            "range": "stddev: 0.00026477162129376667",
            "extra": "mean: 6.589474268908442 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-50]",
            "value": 87.532514648858,
            "unit": "iter/sec",
            "range": "stddev: 0.0004994455923476976",
            "extra": "mean: 11.424326194803848 msec\nrounds: 77"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-100]",
            "value": 53.73729372564378,
            "unit": "iter/sec",
            "range": "stddev: 0.009841373325597641",
            "extra": "mean: 18.609050264151907 msec\nrounds: 53"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-200]",
            "value": 31.50441627647253,
            "unit": "iter/sec",
            "range": "stddev: 0.000694136361846621",
            "extra": "mean: 31.741581599999332 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-250]",
            "value": 22.968418474067715,
            "unit": "iter/sec",
            "range": "stddev: 0.01916704883860712",
            "extra": "mean: 43.538043384617055 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-NewfoundlandandLabrador]",
            "value": 1.213746486931254,
            "unit": "iter/sec",
            "range": "stddev: 0.00559516315848181",
            "extra": "mean: 823.8952786000027 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-Saskatchewan]",
            "value": 27.097422045170134,
            "unit": "iter/sec",
            "range": "stddev: 0.0002454238444671503",
            "extra": "mean: 36.903879576922364 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-NewfoundlandandLabrador]",
            "value": 0.7937331345182551,
            "unit": "iter/sec",
            "range": "stddev: 0.05724925440074101",
            "extra": "mean: 1.2598692891999974 sec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-Saskatchewan]",
            "value": 17.871190100640007,
            "unit": "iter/sec",
            "range": "stddev: 0.0006601599171830724",
            "extra": "mean: 55.95598247059035 msec\nrounds: 17"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WGS1984Quad]",
            "value": 8.75797511796749,
            "unit": "iter/sec",
            "range": "stddev: 0.007083988612880171",
            "extra": "mean: 114.18164433333938 msec\nrounds: 9"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WebMercatorQuad]",
            "value": 6.183328956670066,
            "unit": "iter/sec",
            "range": "stddev: 0.009310196510022087",
            "extra": "mean: 161.72518185714222 msec\nrounds: 7"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WGS1984Quad]",
            "value": 240.9690265782848,
            "unit": "iter/sec",
            "range": "stddev: 0.00023062496843251503",
            "extra": "mean: 4.149910941666708 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WebMercatorQuad]",
            "value": 165.87460657366012,
            "unit": "iter/sec",
            "range": "stddev: 0.00022882970315763474",
            "extra": "mean: 6.028650319998974 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WGS1984Quad]",
            "value": 318.3990445666679,
            "unit": "iter/sec",
            "range": "stddev: 0.00011321547073260754",
            "extra": "mean: 3.1407129420283644 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WebMercatorQuad]",
            "value": 286.5966476816951,
            "unit": "iter/sec",
            "range": "stddev: 0.00014056268359802912",
            "extra": "mean: 3.4892243440008315 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets]",
            "value": 715.8108019123342,
            "unit": "iter/sec",
            "range": "stddev: 0.00009579904032708441",
            "extra": "mean: 1.3970171969023606 msec\nrounds: 452"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WGS1984Quad]",
            "value": 844.7168116724208,
            "unit": "iter/sec",
            "range": "stddev: 0.00008002296177837729",
            "extra": "mean: 1.1838286940449785 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WebMercatorQuad]",
            "value": 841.8373939077895,
            "unit": "iter/sec",
            "range": "stddev: 0.00008550269836286634",
            "extra": "mean: 1.1878778576917608 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles]",
            "value": 192.41065000644176,
            "unit": "iter/sec",
            "range": "stddev: 0.013564342245970423",
            "extra": "mean: 5.197217513513523 msec\nrounds: 37"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WGS1984Quad]",
            "value": 441.8774917511562,
            "unit": "iter/sec",
            "range": "stddev: 0.00013303685780777192",
            "extra": "mean: 2.263070689654297 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WebMercatorQuad]",
            "value": 437.3453316257919,
            "unit": "iter/sec",
            "range": "stddev: 0.0001378590427946844",
            "extra": "mean: 2.2865226348309013 msec\nrounds: 178"
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
          "id": "16f34129a2d677837dcb7b2aedf7a379526f73da",
          "message": "Merge pull request #15 from TechTraverse/add-iam-role\n\nmake auth token callable",
          "timestamp": "2025-03-11T09:24:21-06:00",
          "tree_id": "8aa5fa239ba4456f91bab14100dff3702611ab87",
          "url": "https://github.com/TechTraverse/tipg/commit/16f34129a2d677837dcb7b2aedf7a379526f73da"
        },
        "date": 1741707094374,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-1]",
            "value": 418.1740792320615,
            "unit": "iter/sec",
            "range": "stddev: 0.004532056881055303",
            "extra": "mean: 2.391348602563814 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[json-10]",
            "value": 332.0160206425382,
            "unit": "iter/sec",
            "range": "stddev: 0.00011868485278521547",
            "extra": "mean: 3.0119028535572996 msec\nrounds: 239"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-1]",
            "value": 394.3300043770219,
            "unit": "iter/sec",
            "range": "stddev: 0.00010367235855778297",
            "extra": "mean: 2.5359470212768604 msec\nrounds: 94"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collections[html-10]",
            "value": 293.3983938208166,
            "unit": "iter/sec",
            "range": "stddev: 0.0001591474965450607",
            "extra": "mean: 3.4083349502271547 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[json]",
            "value": 606.5028784172599,
            "unit": "iter/sec",
            "range": "stddev: 0.00010797072181189709",
            "extra": "mean: 1.6487967915496407 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_collection[html]",
            "value": 466.27321359872803,
            "unit": "iter/sec",
            "range": "stddev: 0.00013050451186190885",
            "extra": "mean: 2.144665339623378 msec\nrounds: 106"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_queryables",
            "value": 674.0731160086078,
            "unit": "iter/sec",
            "range": "stddev: 0.0000870989146986868",
            "extra": "mean: 1.4835185920502283 msec\nrounds: 478"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-1]",
            "value": 207.9521483806964,
            "unit": "iter/sec",
            "range": "stddev: 0.0002759082768656883",
            "extra": "mean: 4.808798599999591 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-10]",
            "value": 185.01383848269063,
            "unit": "iter/sec",
            "range": "stddev: 0.0003141894140081389",
            "extra": "mean: 5.405001097220937 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-50]",
            "value": 101.08080426518582,
            "unit": "iter/sec",
            "range": "stddev: 0.009996866488274164",
            "extra": "mean: 9.89307522105282 msec\nrounds: 95"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-100]",
            "value": 81.02574616616137,
            "unit": "iter/sec",
            "range": "stddev: 0.000658488606095255",
            "extra": "mean: 12.341756136984866 msec\nrounds: 73"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-200]",
            "value": 43.38579145995336,
            "unit": "iter/sec",
            "range": "stddev: 0.007333069920365321",
            "extra": "mean: 23.049020574467008 msec\nrounds: 47"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[geojson-250]",
            "value": 32.897049430316585,
            "unit": "iter/sec",
            "range": "stddev: 0.01724139969139342",
            "extra": "mean: 30.39786294871906 msec\nrounds: 39"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-1]",
            "value": 199.3993318297306,
            "unit": "iter/sec",
            "range": "stddev: 0.0002619149071360233",
            "extra": "mean: 5.015061940397631 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-10]",
            "value": 145.7380007147918,
            "unit": "iter/sec",
            "range": "stddev: 0.00042314384242322434",
            "extra": "mean: 6.861628367998492 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-50]",
            "value": 74.3191274145316,
            "unit": "iter/sec",
            "range": "stddev: 0.0006997836095819565",
            "extra": "mean: 13.455486289852084 msec\nrounds: 69"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-100]",
            "value": 43.07106181623337,
            "unit": "iter/sec",
            "range": "stddev: 0.001444078638804996",
            "extra": "mean: 23.217444795454348 msec\nrounds: 44"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-200]",
            "value": 24.731428317002965,
            "unit": "iter/sec",
            "range": "stddev: 0.0024689674010481364",
            "extra": "mean: 40.4343811923105 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[csv-250]",
            "value": 20.76823635847834,
            "unit": "iter/sec",
            "range": "stddev: 0.0023917331385732163",
            "extra": "mean: 48.15045354545786 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-1]",
            "value": 170.13003945239697,
            "unit": "iter/sec",
            "range": "stddev: 0.00037659120866710493",
            "extra": "mean: 5.877856745456194 msec\nrounds: 55"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-10]",
            "value": 138.47427302146735,
            "unit": "iter/sec",
            "range": "stddev: 0.0005600781641639562",
            "extra": "mean: 7.22155804237349 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-50]",
            "value": 82.04923282593536,
            "unit": "iter/sec",
            "range": "stddev: 0.001497773372674072",
            "extra": "mean: 12.187804389609173 msec\nrounds: 77"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-100]",
            "value": 55.16281482419221,
            "unit": "iter/sec",
            "range": "stddev: 0.0008922646866599978",
            "extra": "mean: 18.128153960001328 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-200]",
            "value": 28.781873807220766,
            "unit": "iter/sec",
            "range": "stddev: 0.010753519556756715",
            "extra": "mean: 34.74408951612877 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_items[html-250]",
            "value": 23.116235925821808,
            "unit": "iter/sec",
            "range": "stddev: 0.014782356987164545",
            "extra": "mean: 43.259638083333364 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-NewfoundlandandLabrador]",
            "value": 1.1754586585555766,
            "unit": "iter/sec",
            "range": "stddev: 0.03786807829783881",
            "extra": "mean: 850.7317486000034 msec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[geojson-Saskatchewan]",
            "value": 27.156796541497453,
            "unit": "iter/sec",
            "range": "stddev: 0.00038136443258713433",
            "extra": "mean: 36.82319446153862 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-NewfoundlandandLabrador]",
            "value": 0.7999000040525456,
            "unit": "iter/sec",
            "range": "stddev: 0.047066143764067765",
            "extra": "mean: 1.2501562632000058 sec\nrounds: 5"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_item[html-Saskatchewan]",
            "value": 17.631363798332178,
            "unit": "iter/sec",
            "range": "stddev: 0.0004923494152193269",
            "extra": "mean: 56.71710999999865 msec\nrounds: 18"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WGS1984Quad]",
            "value": 8.653580830065708,
            "unit": "iter/sec",
            "range": "stddev: 0.005325864709633463",
            "extra": "mean: 115.55909855555215 msec\nrounds: 9"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[0/0/0-WebMercatorQuad]",
            "value": 6.0918261713119115,
            "unit": "iter/sec",
            "range": "stddev: 0.00799425260074078",
            "extra": "mean: 164.1543884999995 msec\nrounds: 6"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WGS1984Quad]",
            "value": 244.94550540567946,
            "unit": "iter/sec",
            "range": "stddev: 0.0003991716446032568",
            "extra": "mean: 4.0825407200013615 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[4/8/5-WebMercatorQuad]",
            "value": 162.3794656592079,
            "unit": "iter/sec",
            "range": "stddev: 0.00020832003087509538",
            "extra": "mean: 6.158414156250143 msec\nrounds: 96"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WGS1984Quad]",
            "value": 318.9670924388656,
            "unit": "iter/sec",
            "range": "stddev: 0.00015398832794056948",
            "extra": "mean: 3.1351196524815914 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tile[6/33/25-WebMercatorQuad]",
            "value": 286.9278289752061,
            "unit": "iter/sec",
            "range": "stddev: 0.0001357360289166171",
            "extra": "mean: 3.485196969466533 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets]",
            "value": 701.6129287629389,
            "unit": "iter/sec",
            "range": "stddev: 0.00012427736425701821",
            "extra": "mean: 1.4252873044445853 msec\nrounds: 450"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WGS1984Quad]",
            "value": 788.5682449091771,
            "unit": "iter/sec",
            "range": "stddev: 0.00014767506665586502",
            "extra": "mean: 1.2681210617543628 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/tileMatrixSets/WebMercatorQuad]",
            "value": 795.3603882703285,
            "unit": "iter/sec",
            "range": "stddev: 0.00009497635091999623",
            "extra": "mean: 1.2572916815416235 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles]",
            "value": 343.6512358619933,
            "unit": "iter/sec",
            "range": "stddev: 0.00011114576791285565",
            "extra": "mean: 2.9099269714298055 msec\nrounds: 35"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WGS1984Quad]",
            "value": 449.0052673915528,
            "unit": "iter/sec",
            "range": "stddev: 0.00010362091424449497",
            "extra": "mean: 2.2271453647067236 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks.py::test_benchmark_tilematrixset_endpoints[/collections/public.landsat_wrs/tiles/WebMercatorQuad]",
            "value": 422.8439897619733,
            "unit": "iter/sec",
            "range": "stddev: 0.00011545884840388782",
            "extra": "mean: 2.364938426966689 msec\nrounds: 178"
          }
        ]
      }
    ]
  }
}