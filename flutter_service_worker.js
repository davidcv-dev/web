'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "031974ad24be639df78dc7f821a15165",
"index.html": "e9572596e74910614b349d6f94bf15fe",
"/": "e9572596e74910614b349d6f94bf15fe",
"CNAME": "6198f2a8ad3e1920ed499e30a5141e5a",
"main.dart.js": "0d6d20f9ff4956b624977f31ae5aa275",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "15d2dd77d0a5800244d78caaf7e5e8cd",
".git/ORIG_HEAD": "6777adfaa12298e14d6d2ca23bb67886",
".git/config": "e126a7f9b7b17b8d0ccaf3394678b420",
".git/objects/50/342c704407578fc2f6d3f8657c6add18d26382": "b7428abf7101316878e89d5e263da76e",
".git/objects/57/4620905b793b5c055f3457a2c0de8b8a3353ab": "8cb7a724420429211110110774408c39",
".git/objects/03/ad109599f8e491f636fe8339e98562e2c6b001": "e546e0c72c542bf160fc8432c910c41d",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/3d/c72d964021d69a90743fe52ca547e9b1fb99a1": "94e252aae90532a8ba639712f007c9f4",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/60/56a69ede9138589cf209de85a51629fc3fd47a": "a09555d4156024ad70ca73dd36be4a3e",
".git/objects/5f/11df81e6ee52c89c626870e9d47f73f082070f": "190ead5934f63d88b9863efd36080782",
".git/objects/05/0ee5b972c4d8fc2ff19b26a228586d97f536db": "598ac1be8135992df541d9173676bd0a",
".git/objects/d9/7c68c37765ab4775eef3b42ff084221770c177": "5386a016c5b4b1fc1fc4dad0d61f02e9",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/e8d021465f01d1368c642a555f269c2b8c5708": "5b7cf5b58759ba6068e9a3ba2159af31",
".git/objects/e5/30b51e6b06b06f6f42042d947250e5d3ac2c76": "b26d14a907aa29949b67b77f6b9e8059",
".git/objects/e5/871464fc9c196fce9f97cc0ddbfd49c7af5759": "bfbbb55ffc5b3932324b04e3ac72e9af",
".git/objects/f4/a81a17973c9bf6341688e4ef50ad9b9dd549d4": "8b45398e7f6e65254d19b5fccf622aa7",
".git/objects/f4/c436e1f6a984e3af2714e0dfc17afccd239f47": "d4b760b96e60ebdc7337ac8606c59d93",
".git/objects/f4/28845ce513b05f8aeecb75ab58ea78a0ccdd0a": "f1573c0b2588a0eedbce7bd6093ae588",
".git/objects/f3/748c61bec6435200d8824ed581e0f38b3fd6f7": "f4d4ba809f572798fee868c85f23cc3c",
".git/objects/f3/a6aad1b995e8231798e81fee6b28a55f8a62b0": "ec6c75e28cc7ec8dbfb9733e8e3ac7cb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/daf242470d148bfa192cc59a654393e491dbec": "69712035e644822b99356552b936c01e",
".git/objects/fc/c45a615381b9df7cd2cb506042230872b35204": "fe35dce48791ff6f9591efb6cf2fdd0e",
".git/objects/fb/25a863761ce9f0ba254a8ff04d14a49bab6a63": "dafcddfc0085a3f2b1f92899b9abf0ae",
".git/objects/c6/ca36ccaccfea6335a420207db36fc4cefa32de": "3fb19026ed08609026e72fa824b8b880",
".git/objects/4e/3545aeb7e29d30f6e20c32a6945122ee8ef6e6": "548d030d72b3ff0d83059f4aa125c33a",
".git/objects/20/85a28a40e1dc7a19fa6b78a1da8663b4b12c4b": "8bbf4b094ac92c71373ef809bc08b49e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/6a46d3918d4eb2680ddebcc98d4c30d633be98": "e2b801d5e4c37b1a2c7a9adae002849d",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/1f/cbe759da19f2bb0da6690a662c82d41b1c0e69": "4bee03276dd07cd86c2496c8fbb07e38",
".git/objects/73/0e9a9b26821795421c5bb3f712e95edf2dd004": "10f9528b46900c9ec0d52cbfc22a9692",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/142bc53d3bb8be22bf3b6e4b9184a22cee0bf5": "64a1dff8d8440609afec27f2c7b6fb1d",
".git/objects/19/7332f06336f00fe08640a8055fdee1a1f5d55d": "1ea1bd8adc20e26955930a82628e1565",
".git/objects/19/9df0574f322f2c462534de2217a66675acd27f": "f7b51238030c9d8da05f9fa3c3c95e63",
".git/objects/4c/638df3dace69b75707cd30fbe70cb3aa16a6be": "3038323fe4794f38762a9d5e3d5431bd",
".git/objects/21/efd2ecb0920d305393b985001a25be8b91c2da": "c1cba38116871c8474472a450b19610b",
".git/objects/21/6717d4773f177a2d2742e0c3ae2de783c9e2b2": "e970e6e3181d5f657d916395ac25b1ca",
".git/objects/2f/8901e2a37e2b2460452a02a50f07e7389819bf": "bf0fb19737c2e68e33a59dbb997d8b3b",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/2e708e25f2acd753ed36bbd8ad288d467206c4": "5b2355042b74eb126d5cfd0f327d348d",
".git/objects/9f/46a4eeaecf1ac4f0cd9b4b7103a6056fe940b2": "6eddd7acd0db7e686ad109441acf6bfe",
".git/objects/6b/97569cedfcac98262ce877ea227bee56af49c9": "50532fcc0f798c9bd0088d6f4fd7dc79",
".git/objects/07/bd2ea54fd50627ee13818be2e0a25ac37b7329": "69de763d9bc6a6a2b3fe6b595e598f85",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/5d/dba7190103f973e587f277540527426e8ffc56": "7fb48476addf43a8e2aa5033f3ff039c",
".git/objects/65/1badfe2fde5dc69b9f523031cca532bdec0022": "109bc0c5859363a244da185569b73c15",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5b/5f562590f82bc0782bdd7df496c8b2d3a7027a": "08ad5966291cc120dca11c7e6b234b32",
".git/objects/5b/b4c012a18e5591085b10547236f9b05b947619": "adaba3a09c5aab7597e5eaa2b1643830",
".git/objects/99/ee6744f83e3ce70c9148d1d76a0648af74751c": "5c7d11b2272aa2b66dc0929e2b1778ed",
".git/objects/99/928be230088edb1a08f85530e43fbdfbcdc443": "50d233aafebd6f93fdc533bd3ff00cba",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b8/35155a4910277976b0c186e4421e6f09b83c01": "9b12695df127631d448a85798d5b71ad",
".git/objects/aa/6df1d745a5652eea7f8efb212912e9ca0358e4": "b4aa9ce15244607b6d1904d164e48b73",
".git/objects/aa/72a2d6d2f42d42f19707fdc160d8643bb527be": "e859e9600804b6effa1e4155a1038128",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/d07c322f366f844381225bf7510db74044761c": "afce2f7271b0360a00f9967a8b6eb353",
".git/objects/de/ffec1e6a8046ab9cd350906e5765fe73c5cbe6": "8b586462f32334c2f347d797cc9cdf54",
".git/objects/a6/97ca2c0bba9d0908f6f124a32b48122de14678": "afd4ca6cc06e7f7619acba7c0e1a2439",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/67bf5f8e116b598fec08b0141360d408f07593": "9fc8cbf839d679058027187f3a6ef2cc",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/7dfa6203e6df10919c94e1f70369393aae5fca": "a342c9a55be3923a6cd6016698757163",
".git/objects/f7/9855548021a402aca3791ae305dfce2a65ce9e": "4f09d97cf09609094f9c169fc64d03b9",
".git/objects/e7/98c967b82011d77549784e07262c67fcc3ed73": "11b960bb8e85abcf2f666e61b3e93fab",
".git/objects/cb/3d8d300aca2f2600da23a285ee9c8fd78cc356": "0638463e29e39d581235603b1ace48bd",
".git/objects/cb/a291d28c56ef148cb162bdddd45313e6d0e3c7": "da16f79b09c7ba2151015795b6cfa0e1",
".git/objects/79/85c78cff078186f08eaa1ddd8f48253c5fc823": "aa5a81d1a14f851b5336e094fa36612f",
".git/objects/41/8559e5870601998179fbea14fed258e85d32c7": "93cac64d277d2b92120ce5c80e97c645",
".git/objects/41/acc0d29453905271a8512906d7975e31302231": "680611e4a7d4b642352ab40ce201a68c",
".git/objects/77/6a7a905a2a426259ccb560f3cf6f133d68fa18": "b44a5cf60f95d06facfe7cfa0098276f",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/25392adf367b1322b93ecc3fe339767e522039": "de741e01cce67c11e63a2cf987d6ea9b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8d/484171e70bc8e7b351476aef7f88bb5c01dba4": "e32c25a01b05a669aabe6126e94fdb54",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/76/a98f60b3a5f1754817932ac8c9d6d5725645b1": "86b69d3fa90cc946711b3913be45fe14",
".git/objects/1c/61658abbf56fe8b2264786008023ec6e211793": "bec51ca2ef21b1f5c040d23aa7d570db",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/78/784dfcf442678fb957c96df46ede8a20ccedb5": "3a278c07836fc87b87a84ffc143dbf48",
".git/objects/8b/f366458c4308c8254f018396721a6047bec71b": "4f82832565f39048bd0c4a59249c0a33",
".git/objects/7a/40c174324dc80f1623c29d9ebcca89eae952e4": "cf346b3053024af8e60276d4fc9e2b04",
".git/objects/14/e5921595e48116f579cdf1c744e45c7e96e3d5": "01860399bf026f1c8c04eb08a8cb891d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bae974b7870a582644763583b3f6453d",
".git/logs/refs/heads/main": "068fbaee8326b7362fc27febbefbea96",
".git/logs/refs/remotes/origin/main": "84622e1143d3b7035a28cdef08421c34",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6777adfaa12298e14d6d2ca23bb67886",
".git/refs/remotes/origin/main": "6777adfaa12298e14d6d2ca23bb67886",
".git/index": "f87281664a48b37a679affc24263c979",
".git/COMMIT_EDITMSG": "69a904ac9adfbefaa69a720e4c13780a",
".git/FETCH_HEAD": "1026ae8820a1c155f2f25821415d5650",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/NOTICES": "415bd97c7c98c424fcbd0f96027e0243",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "4446c963dde6091a6b6de4cb1ae02947",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "22a762f3b6332b1e6653bd94c6610a69",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "373234d664ffe656d0fb4039a86ad513",
"assets/fonts/MaterialIcons-Regular.otf": "d5c0ba78ae907fd2301cadf0401accab",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
