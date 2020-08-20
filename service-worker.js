importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js');
/* global workbox */
if (workbox) {
  console.log('Workbox is loaded');

  addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      skipWaiting();
    }
  });

  workbox.core.clientsClaim();

  /* injection point for manifest files.  */
  workbox.precaching.precacheAndRoute([{"revision":"c1c28f553095fdddb4d2c13a11bd4cb9","url":"live2d-widget/live2d.min.js"},{"revision":"1ab8aaf74cb0cafc3257c6ffbd027570","url":"live2d-widget/waifu-tips.json"},{"revision":"1165b1888975a8d6ee01539b6ddefeb6","url":"static/css/2.8c4379df.chunk.css"},{"revision":"cc51ebd73f341dcaf8f7fa5ebd38def7","url":"static/css/3.bbfc64cf.chunk.css"},{"revision":"15db525a3e5ffd6b378b57022c5f7cfd","url":"static/css/main.b4dd0116.chunk.css"},{"revision":"f7e779e78755f3e3c4f92d9c5781a9bf","url":"static/js/2.bb4a3fbf.chunk.js"},{"revision":"f505e90cbcc2e5e1910e45db7e28c455","url":"static/js/3.6c990c75.chunk.js"},{"revision":"1a06a7c4eb93a26c8bc9771ab3092534","url":"static/js/4.2d8e2951.chunk.js"},{"revision":"1db803863fa336be79e1ccd1850a48af","url":"static/js/main.269b3aca.chunk.js"},{"revision":"14886cc3b07f63d6a2c9c4ea87634266","url":"static/js/runtime-main.746e8b35.js"},{"revision":"d04c129bcf91745767f64c1393b451fa","url":"index.html"}]);

  /* custom cache rules */
  workbox.routing.registerRoute(
    new workbox.routing.NavigationRoute(
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'PRODUCTION',
      })
    )
  );

  workbox.routing.registerRoute(
    ({url}) => url.origin === 'https://cdn.jsdelivr.net',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'cdn-jsdelivr',
    }),
  );

  // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
  registerRoute(
    ({url}) => url.origin === 'https://fonts.googleapis.com',
    new StaleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    })
  );

  // Cache the underlying font files with a cache-first strategy for 1 year.
  registerRoute(
    ({url}) => url.origin === 'https://fonts.gstatic.com',
    new CacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new ExpirationPlugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

} else {
  // console.log('Workbox could not be loaded. No Offline support');
}