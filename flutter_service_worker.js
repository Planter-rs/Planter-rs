'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fb5a6c3bba1bd0650cabb2334381a2d9",
"assets/AssetManifest.bin.json": "b8fb479f63c9c94bdfa9c56c1b30dfd1",
"assets/AssetManifest.json": "a6880efe40fc61aeab4368afa2d844cd",
"assets/assets/images/anthracnose.jpg": "8c4d82c85ec418e1004dcc19179b05c6",
"assets/assets/images/aphids.jpg": "8c2cbf0b91fe3eeed00fcd981c91c0f1",
"assets/assets/images/app_icon.png": "a5501e42a68ba19a5b755a79a97cecee",
"assets/assets/images/bacterial_black_spot.jpg": "5c9d0be925046740bdecb6e7e82b106a",
"assets/assets/images/black_citrus_aphid.jpg": "faeca0cb60cdc7b2e10c6ce9a5717895",
"assets/assets/images/chili_seeds.jpg": "76fab7375e4e927558fa3e55da55961e",
"assets/assets/images/climate_adaptation.png": "310307f2a84efaf69be9384fd297b0e3",
"assets/assets/images/composting.png": "ad5ac34b78e8c7d1004c71b715b171c5",
"assets/assets/images/crops/apple.png": "13b6e70923fa1150e4f2264fc7c5eeea",
"assets/assets/images/crops/banana.png": "6e1d7db1109819eb75edc159f278cd5d",
"assets/assets/images/crops/corn.png": "83bc0e0d30efd6fe24509d707b588c00",
"assets/assets/images/crops/cotton.png": "243268e46becd740a892a439ed7900b9",
"assets/assets/images/crops/grape.png": "c0016166d85fc0d4c84884dd5970a1e8",
"assets/assets/images/crops/groundnut.png": "75373d379f56e5c1d2669743fb2726eb",
"assets/assets/images/crops/jute.png": "dd67ecbec8af5252339a3e35318d8532",
"assets/assets/images/crops/mango.png": "8034ff72837a635a6611539b71f47533",
"assets/assets/images/crops/millets.png": "8314cc63137b87a26a0b86caca0b95a3",
"assets/assets/images/crops/orange.png": "226954602f7a4e399e7314428aa33ed6",
"assets/assets/images/crops/pulses.png": "a5d4ce7fd376e7ff3ef521056dd84bf5",
"assets/assets/images/crops/rice.png": "c842155ad9de3c9e94280417a6268bee",
"assets/assets/images/crops/sugarcane.png": "e1dccf42dabbb03eaa5ad338f390dccd",
"assets/assets/images/crops/tea.png": "a942e4f6357b9da825c2216aa58c7072",
"assets/assets/images/crops/wheat.png": "95874c52ea5b5bacd850cd7b3fefe699",
"assets/assets/images/crop_rotation.png": "507cdef2244952546551342ae7fa2b9f",
"assets/assets/images/damping_off.jpg": "24e157594e5d294dcae684ef2497e5df",
"assets/assets/images/fertilizer.png": "3f4048a1937f6c9248e4061c7d35beec",
"assets/assets/images/garden_tools.jpg": "c90ddb7fec11ea10eb6937003c1a85c6",
"assets/assets/images/google_logo.png": "f5f7a685898cdb3181257bcd6d2fa1e3",
"assets/assets/images/harvesting.png": "abaa0187c2568e30e3d4a30d4b9c5cc3",
"assets/assets/images/leaf_spot.jpg": "643026a6826a2d1a4c01f132e6b2ec9f",
"assets/assets/images/mulching.png": "aae00fee3a55b317b3839c278c829d1c",
"assets/assets/images/neem_oil.jpg": "4df8259b5067d945eab88ad0dfccf19a",
"assets/assets/images/npk_fertilizer.jpg": "99f08afbec974d1b601b8553bc97e22a",
"assets/assets/images/organic_fertilizer.jpg": "96cfcceb5d6123cddf474c52a266ee47",
"assets/assets/images/organic_pesticide.jpg": "e1402ce8709d49ceb90425f5c87b691a",
"assets/assets/images/pest_control.png": "316c179efb2f02d068c66b3d423b1b80",
"assets/assets/images/phoma_blight.jpg": "48a50f4f7da15e935128dbff0199b3b7",
"assets/assets/images/pineapple_disease.jpg": "2b3ea6fcccf2fb4e1c894d47f89c6395",
"assets/assets/images/powdery_mildew.jpg": "1b09ae696fe4e2287d253594085d3e9f",
"assets/assets/images/pruning.png": "095c32cbbaacc8c1b424fa2068ac28b4",
"assets/assets/images/soil.png": "1db121176ed85a481da7c84ccb994e59",
"assets/assets/images/sooty_mold.jpg": "491ee44e14392831cb3f90371f2bb927",
"assets/assets/images/tomato_seeds.jpg": "5263fd2f19563070ff5e2ec040a865f7",
"assets/assets/images/watering.png": "9033435b782c737fb7b7b8804a417b21",
"assets/assets/images/watering_can.jpg": "a9a0f91c2ef33fe5773de68eee9d95d7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d6f19bad46df7d850c2d7b42bcd80fda",
"assets/NOTICES": "49e4fbd6d9531df2377ddd44b339c97f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "478275d3d247c23933d82ae4a9ff652a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "736ca14e675e27788a396a664bda18b8",
"icons/Icon-192.png": "766345c822358abee842846088e3be41",
"icons/Icon-512.png": "8be809bfae7db434e147d730deacafe0",
"icons/Icon-maskable-192.png": "766345c822358abee842846088e3be41",
"icons/Icon-maskable-512.png": "8be809bfae7db434e147d730deacafe0",
"index.html": "3db68fdca80eefaa84e3f2959524e024",
"/": "3db68fdca80eefaa84e3f2959524e024",
"main.dart.js": "97529dc64bc038c5a1f295d16c120882",
"manifest.json": "c1db78359754daf1c83060d1267fed19",
"version.json": "881f4e866aa8263ba77a5c6c96646322"};
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
