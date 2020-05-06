const cacheName = 'v2';

self.addEventListener('install', (e) => {
  console.info('Service worker installed');
});

self.addEventListener('activate', (e) => {
  console.info('Service worker activated');

  // Remove unwanted caches
  e.waitUntil(
    // Catch case where cacheName changes
    // loop through caches and check if any key
    // is not equal to current cacheName
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cache) => {
        if (cache !== cacheName) {
          return caches.delete(cache);
        }
      }),
    )),
  );
});

// Call fetch event for offline use
self.addEventListener('fetch', (e) => {
  e.respondWith((async function () {
    try {
      const res = await fetch(e.request);
      const resClone = res.clone();
      const cache = await caches.open(cacheName);
      cache.put(e.request, resClone);
      return res;
    } catch (err) {
      const res = await caches.match(e.request);
      return res;
    }
  })());
});
