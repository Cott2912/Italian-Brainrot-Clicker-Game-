const cacheName = "Momo Games-Watermelon Suika Game-0.4";
const contentToCache = [
    "Build/d1b0f0d8dd368c4221afad23332aadce.loader.js",
    "Build/c0be1b9fae55f60ef4303d2f39d49481.framework.js.unityweb",
    "Build/18cba5d4a7dea94c8e4274fdbe85d255.data.unityweb",
    "Build/c67a167f60bf8526f8fff3e15a90f768.wasm.unityweb",
    "TemplateData/style.css"

];

self.addEventListener('install', function(e) {
    console.log('[Service Worker] Install');

    e.waitUntil((async function() {
        const cache = await caches.open(cacheName);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function(e) {
    e.respondWith((async function() {
        let response = await caches.match(e.request);
        console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
        if (response) {
            return response;
        }

        response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
        cache.put(e.request, response.clone());
        return response;
    })());
});