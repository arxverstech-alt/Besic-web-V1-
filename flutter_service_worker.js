'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "99dac525cd55aac91336e653efcc4cd7",
".git/config": "216d54ed65f511460ec299df8bdf0011",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "751753e75bc0b910f5f55133533a1bfc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "345eb2dc81bd673251fdd91836dd3c49",
".git/logs/refs/heads/main": "fe88ba0fc6ebf9c6688d902a679defa8",
".git/logs/refs/remotes/origin/main": "3841cf6e06f0582fdbf495f92de2ff86",
".git/objects/07/aa084c37bda89d14ab21370a92bdb978a2d613": "84be7db6f75529970906279b85504ce0",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0b/47bb558f8ab9bab66117bdb3dec40da01289a1": "1c8b349f3a959dffde311ffa18cf1138",
".git/objects/0b/c40d65f88e810ef526200ac8a905c3011986fd": "4736a4f65de8e1038aebef86e1a22edc",
".git/objects/12/a500f11a2e34ee51914034f059899a2ba7d85d": "c0f60ecbcdd3e943c1335144a2019916",
".git/objects/1c/96b07b1771594adfb459a51ad1733c8f3547c5": "f50a9c8e7eed3772a4cbcfd47a74ea0c",
".git/objects/20/d32da28ad26569f6532b96b6d9769b978abf3b": "9fd14a4399589fdfc1987e97b5be733f",
".git/objects/21/47eff1a5a1429f901918591f6dae3104ef1f7a": "d25e348181c69a400368404cda9b1aeb",
".git/objects/2f/0822dec1ffcacd54fd2fc60d93ee6c33dc6537": "4ce021d22669451350deda5811227ddb",
".git/objects/31/f74934ce66ddbd03f2e80d2579890d3f57d0be": "75562cf18f2c7c4e683b6ef5132736b6",
".git/objects/34/1b88b83405c3f1e001af089a5317c675c99b33": "ddb99da13879cc17d13e37853f090d56",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3c/2c5a25b216d10a4aa954d62d1899d93d7f9784": "67c190c5d7d6d1ab233641a8375a833e",
".git/objects/4d/82986778c4928db557c80d16971cf33e42400a": "231dd14186b89285cc54acc9ca627d06",
".git/objects/4f/b59c73afa37bcaae0ea372a1e077116f89ac44": "9479f4e72e3f2bc34eb2a0fc17c5be2f",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/56/384b0bc17ed125f1ad7d663e8b658ad22c73b3": "827b3d233c81c5c5f4bc277963803cd5",
".git/objects/58/7226c5cd85ff031b2c0411a8bd16909ae24e68": "b7ab1e83fea6419497124799d3dd3550",
".git/objects/59/e2ed483f7cafa9279ee28afbfa841475527d9f": "6d13718099629cf745355a52a775e51d",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/5cb9f727ae5d356414c21f2c1e417c8100c65b": "45fd8a36cd57cafa5c15dba1bda7f2c6",
".git/objects/6f/43650837d4b9665a50e90baa233701aca18efd": "b3f83bb04dc9a804d7171ddbb70f574a",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/71/f2aec2c588e650ec0921f03c542cb1872c7caa": "dc4ea64267dde87208ae7d9d73ee2bf3",
".git/objects/74/e10412f9d5c5d2910aee62db0b26ada9e0a85a": "cafed7014636960dcac199cb35d5d4d5",
".git/objects/75/9ca66306f1dd4cea53713163404eb68d868296": "ab87e8cbb5159a66d29506bc119bfa43",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/82/86ee026876fed00d95e31d86154c1e6f76cf14": "d55eb0171cd001494f17c8e25353256b",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/89/931c6bd2707c2b570e190890283b36b2b364ff": "b1500254206314bd0346533889884ad4",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/95/063e2459f65b69624b7ca27a926ffa6946d027": "8c64eadb0557a0c23228268a07c31325",
".git/objects/98/1988ce686a953b9a53c0546f5919421521eb32": "fbca5b0de4a1b49491df16c010077ddd",
".git/objects/9b/3a37ba76e6b51f036a6eb10f42073f536bd839": "c25b76dd29e9c38228fdeedfd4cbbc3c",
".git/objects/a2/f3d739df8d4806d4e2698be17b7f1fb14f34a8": "7562f14d4845816a767f790f582eb62b",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b6/c82b8d08fe0fc7e4668ce85c0709a13eeed6b8": "04926161783ae6e20af782ade6b306a0",
".git/objects/b7/2a0345d902408ad488d34ff1d64b3980499a04": "514f7709e0460959e9ba748c5adc3d60",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bb/6d4cc7b941111a29c95880b29efb8315513953": "1a25ce824a94dde7ee1a8971834f1311",
".git/objects/c4/bac03ee104319a22c9aa62b2de994d5a35ed7d": "e6a5f3e0a1b154de18a0f0495ec7d470",
".git/objects/c6/0a93b5d609cb034e5dce759db3515753e4077f": "61ee8e4600d499c37a17fd388415ce2b",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cb/1a81d9d3914fc9b9f523c3b85c8d86977d3815": "d59cf8a0fdaf5d4b83d5fb5928dff50e",
".git/objects/cb/746d24dd57ce60942fbae93c34444258cdd79d": "c9cab27ab01172e7cd5a503102392939",
".git/objects/d0/ce2f6acf6dfc7bb57a7a5fb63001e07aa4c53b": "dbe7de23e2a48de7f69cd623fe1370f9",
".git/objects/d2/1e08cad7003c2cf662e2337f5d115bf4d1a8b3": "30c225811144e0578888623a507af4bd",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/d27374029dd1501c9b194bce54daeb87d50e26": "0e6d9c243ed1d97a63a76af18a08fd7f",
".git/objects/d7/e5271d53219c0df1aff5aa9be34bcc6b7b7495": "2928b6e3c44408c0b6ff01ca57b9f3c1",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/de/7b82a71d7ba7305b5dd27726d98bd9c1384a83": "b961fce1dedb58ba5280e65060a4dd4c",
".git/objects/f2/5d8a6879f3e328a394bb2a08282bd8936e5a81": "116c407f5400db32c9e1f6a40e11d333",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f4/b0649e6880bd8324b6e00971b2b5b44b91bb40": "27e75e0bfccc5b13a3aa5f187ec8a9fd",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/ff/abfeb0cb3905262c737753f1845ab6f9007266": "b4b0d4564568208518bc2f2cdaf04546",
".git/refs/heads/main": "bc1700cb065d92e80b16f8f6a2c6e3f5",
".git/refs/remotes/origin/main": "bc1700cb065d92e80b16f8f6a2c6e3f5",
"assets/AssetManifest.bin": "d56c29fcbbb01580443531a903564b8b",
"assets/AssetManifest.bin.json": "f6d3171347b1f0284d13e884377bc445",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "2708b224f068d873d81b00eb70d097c5",
"assets/NOTICES": "ba5c4aee0da9b4706b72dae20c03a93d",
"assets/packages/mesh_gradient/shaders/animated_mesh_gradient.frag": "493d2d0ae7c3fde1106a18b240e9ba79",
"assets/packages/mesh_gradient/shaders/point_mesh_gradient.frag": "6721e3c3c3b65cb49c2709c828288ffd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "13295a02c4455ec9afa1e633cabfb60c",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "b5bd7a79d372656a931e6f6eac94e4dc",
"icons/Icon-192.png": "c55d7f1a6cc7cda6e898d96510f9a20a",
"icons/Icon-512.png": "bfc7a048aa92523dff818c1f85e81955",
"icons/Icon-maskable-192.png": "39828165d81c544108dbeea5526ded8a",
"icons/Icon-maskable-512.png": "b813de96cff8c33cfed02f5d3d653527",
"index.html": "d62182d89e9f995b7cb20951b09cfd4a",
"/": "d62182d89e9f995b7cb20951b09cfd4a",
"main.dart.js": "455b9561ed8e9cc6eb4e8615c73ddf6b",
"manifest.json": "3a8c40bbe58a623489547a2094bd3639",
"version.json": "c4ea1d1112fef85bd743c13b10a2a36f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
