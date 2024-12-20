'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f9f08c848e07c070307fd7b8339779fb",
"version.json": "9121869202a8939650f998704535c20f",
"index.html": "5db337579c31c47069d1b9b04b165c2b",
"/": "5db337579c31c47069d1b9b04b165c2b",
"main.dart.js": "c0c2188d6fa1519a91a88d95e2eb8394",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/Icon-maskable-192%20copy.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/icon-192.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/Icon-maskable-512.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/icon-512.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"manifest.json": "6c9285118d3d3617711f846531134b34",
"assets/AssetManifest.json": "d5bb5caf6361e5055923f9ebb2b4bb29",
"assets/NOTICES": "d38ac8f202c450675971fc81c79c76ac",
"assets/FontManifest.json": "d0975c94afeb32ec4155750ce2543f5e",
"assets/AssetManifest.bin.json": "ba90350cf877c7593e2fa8da559d6211",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/rupay.png": "a10fbeeae8d386ee3623e6160133b8a8",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/unionpay.png": "87176915b4abdb3fcc138d23e4c8a58a",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "79b4667cb7daedb5de25592cd86806f3",
"assets/fonts/MaterialIcons-Regular.otf": "6e2f699699bf501b27c5b552daf7a69d",
"assets/assets/logo.jpg": "51a28e1b4ce85f58a0797518ad555fcb",
"assets/assets/logo.png": "53d747599736adb8bb493748471be9ad",
"assets/assets/parts/Sensors/Vibration%2520Sensor%2520Module.png": "c603171b3361d928a0fbddad26a0b843",
"assets/assets/parts/Sensors/Microphone%2520Sound%2520Sensor%2520Module.png": "ab1534c506b8cc433e9721fd6b01d56b",
"assets/assets/parts/Sensors/RFID%2520Reader%2520.Writer%2520RC522%2520SPI%2520S50%2520with%2520RFID%2520Card%2520and%2520Tag.png": "95021cb443ae3fe1467a61a579a5ab42",
"assets/assets/parts/Sensors/5V%2520Single%2520Channel%2520RELAY%2520Module.png": "126875a2009aaed0661d43e8fd693344",
"assets/assets/parts/Sensors/5v%25202%2520Channel%2520Relay%2520Module.png": "e19de5d77ddb43032560443e050d5744",
"assets/assets/parts/Sensors/5v%25204%2520Channel%2520Relay%2520Module.png": "45c8084118fa8c5d79a1b67e7e3f42e7",
"assets/assets/parts/Sensors/Flame%2520Sensor%2520infrared%2520Receiver%2520Ignition%2520source%2520detection%2520module.png": "e0e486bac080729b9b5209dfbdda4ca9",
"assets/assets/parts/Sensors/5v%25208%2520Channel%2520Relay%2520Module.png": "e7b1bbf7515a396819da4fd8a55e5b7f",
"assets/assets/parts/Sensors/Analog%2520Capacitive%2520Soil%2520Moisture%2520Sensor.png": "6dd51aa455ce885f52cf35e265784614",
"assets/assets/parts/Sensors/HC-SR04-Ultrasonic%2520Range%2520Finder.png": "4e5b6f8b85587d1a4d0b6eb985bdb5b8",
"assets/assets/parts/Sensors/2.2inch%2520Flex%2520Sensor.png": "2de49b9b96311061b7c28746044c26fb",
"assets/assets/parts/Sensors/Soil%2520Moisture%2520Sensor%2520Module.png": "0ef5dfeff2eac9bd625cc8377968b3a1",
"assets/assets/parts/Sensors/Ecg%2520module%2520AD8232%2520ecg%2520measurement%2520pulse%2520heart%2520ecg%2520monitoring%2520sensor%2520module%2520kit.png": "82fa57da03f881733927b20ed2fa4604",
"assets/assets/parts/Sensors/Infrared%2520Obstacle%2520Avoidance%2520IR%2520Sensor%2520Module%2520(Active%2520Low).png": "a8358c5fb7a00380776c1d9110a283b3",
"assets/assets/parts/Sensors/Tilt%2520Sensor%2520Vibration%2520Alarm%2520Vibration%2520Switch%2520Module%2520for%2520Arduino.png": "4936094b2f061f64418e4983ef15913d",
"assets/assets/parts/Sensors/37%2520in%25201%2520Sensors%2520Kit%2520for%2520Arduino.png": "051254b674dbb12db19a24556129affd",
"assets/assets/parts/Sensors/DHT11%2520Temperature%2520And%2520Humidity%2520Sensor%2520Module%2520with%2520LED.png": "5a596484e62a6bca19d6dbced3cceaa2",
"assets/assets/parts/Sensors/HCSR501%2520PIR%2520Motion%2520Sensor%2520(Passive%2520Infrared%2520Sensor).png": "6cff1a5a66f84f1cdd3a6bc675291b8f",
"assets/assets/parts/Sensors/ADXL345%2520Accelerometer%2520Module.png": "59413be4a270017769cafe3e1ea1f23f",
"assets/assets/parts/Sensors/MQ-5%2520Methane%2520LPG%2520Liquid%2520Propane%2520Gas%2520Sensor%2520Module.png": "05cd8b1b8efc8b478bda9f71fd309200",
"assets/assets/parts/Sensors/MQ-3%2520Alcohol%2520Detector%2520Gas%2520Sensor%2520Module.png": "a04793a421042e2dc9d65b8e9bde011c",
"assets/assets/parts/Sensors/EMG%2520Sensor%2520%2520%2520Muscle%2520Sensor%2520Module%2520For%2520Arduino.png": "dd607f38a04e36ea96e44a2ec37615a2",
"assets/assets/parts/Sensors/5%2520in%25201%2520Sensor%2520Kit%2520for%2520Arduino.png": "68e311ef0f6aa2241bde3bf9e0767bb3",
"assets/assets/parts/Dev_Boards/LilyPad%2520328%2520ATmega328P%2520Main%2520Board%252016M%2520Compatible%2520with%2520Arduino.png": "c1285e8d7859a7394dcf6f54a7dedbbd",
"assets/assets/parts/Dev_Boards/Raspberry%2520Pi%2520Camera%2520Module%25203%2520Wide.png": "3146084cfb5e8adfd17d57e987627f11",
"assets/assets/parts/Dev_Boards/Transparent%2520Acrylic%2520Case%2520Shell%2520Enclosure%2520Gloss%2520Box%2520For%2520Arduino%2520UNO%2520R3.png": "da4096976497b15c89a57a943a3080b7",
"assets/assets/parts/Dev_Boards/Official%2520Raspberry%2520Pi%25203%2520Model%2520B+.png": "1b9a716fde91f97caae39d15a2d74668",
"assets/assets/parts/Dev_Boards/Pro%2520Mini%2520ATMEGA328P%25205V16M%2520Blue_Standard%2520Version.png": "5439252312a2156e42aaeb7d48e3dba1",
"assets/assets/parts/Dev_Boards/Atmega16U2%2520Mega%25202560%2520R3%2520Improved%2520Version%2520CH340G.png": "db5b488d6061f80da865c0152a01c761",
"assets/assets/parts/Dev_Boards/Leonardo%2520R3%2520Board%2520Micro-USB%2520compatible%2520with%2520Arduino.png": "45cbe5d7dee5949fa4cc19da105eed1a",
"assets/assets/parts/Dev_Boards/Transparent%2520Injection%2520molded%2520Case%2520Shell%2520Enclosure%2520Gloss%2520Box%2520For%2520Arduino%2520UNO%2520R3-Good%2520quality.png": "b1ae56868765ac423074c947aa08236f",
"assets/assets/parts/Dev_Boards/Uno%2520R3%2520Board%2520without%2520Cable%2520compatible%2520with%2520Arduino.png": "b1be8af81d26bd02542f1c57123b9b64",
"assets/assets/parts/Dev_Boards/Raspberry%2520Pi%25205%2520Model%25208GB.png": "cb3f01d54b8468dae0c316cbedb72bda",
"assets/assets/parts/Dev_Boards/Raspberry%2520Pi%25205%2520Model%25204GB.png": "c48e942a4d45945300e44428d25d6b37",
"assets/assets/parts/Dev_Boards/ATmega328P%2520CH340%2520Module%2520with%25200.91Inch%2520OLED%2520Display%2520Development%2520Board%2520TYPE-C.png": "07af41075f6fb61c3157be533baff5d2",
"assets/assets/parts/Dev_Boards/Nano%2520CH340%2520Chip%2520Board%2520Without%2520USB%2520Cable%2520Compatible%2520with%2520Arduino%2520(Soldered).png": "986f8b06bdbcc4116c0fd3c3e70ddb96",
"assets/assets/parts/Dev_Boards/Arduino%2520UNO%2520R3%2520SMD%2520ATmega328%2520Compatible%2520Board.png": "d7462169031ff4328befe722a5f86781",
"assets/assets/parts/Dev_Boards/Raspberry%2520Pi%25204%2520Model%2520B%2520with%25202%2520GB%2520RAM.png": "3476d1c2ba50f5b3e2adb829e002cee8",
"assets/assets/parts/Dev_Boards/Raspberry%2520Pi%25204%2520Model-B%2520with%25208%2520GB%2520RAM.png": "d54742dc600bd5a359f92844b5352022",
"assets/assets/parts/Dev_Boards/Unsoldered%2520Nano%2520V3.0%2520ATmega328P%25205V%252016MHz%2520CH340.png": "590c26c3ebe136b09fd7a4842754518e",
"assets/assets/parts/Dev_Boards/Raspberry%2520Pi%25205%2520Model%25202GB.png": "c48e942a4d45945300e44428d25d6b37",
"assets/assets/parts/Dev_Boards/Raspberry%2520Pi%2520Pico.png": "eebb763d49aa3fe502fd16777a151f16",
"assets/assets/parts/Dev_Boards/Raspberry%2520Pi%2520Zero%2520v1.3%2520Development%2520Board.png": "38f1a935c607ca6f60be23f15e9f0a40",
"assets/assets/parts/Dev_Boards/Raspberry%2520Pi%25204%2520Model-B%2520with%25204%2520GB%2520RAM.png": "5b1c8c7f81ceedccbcebab01a0c38c26",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
