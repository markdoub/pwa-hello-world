var cacheName = 'test-pwa';
var filesToCache = [
  '/pwa-hello-world/',
  '/pwa-hello-world/index.html',
  '/pwa-hello-world/css/style.css',
  '/pwa-hello-world/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
