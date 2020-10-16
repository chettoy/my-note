importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-sw.js');
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
  workbox.precaching.precacheAndRoute([{"revision":"c1c28f553095fdddb4d2c13a11bd4cb9","url":"live2d-widget/live2d.min.js"},{"revision":"9fb1bf8a7c971b7d700dd2a64aee4655","url":"live2d-widget/waifu-tips.json"},{"revision":"1165b1888975a8d6ee01539b6ddefeb6","url":"static/css/2.8c4379df.chunk.css"},{"revision":"cc51ebd73f341dcaf8f7fa5ebd38def7","url":"static/css/3.bbfc64cf.chunk.css"},{"revision":"61b62032a0fd7437a84d11de0b9f05a2","url":"static/css/main.40eb34f9.chunk.css"},{"revision":"9f34b536dc2375200a9e2412802ee100","url":"static/js/2.15299c94.chunk.js"},{"revision":"8bb8cc1159f5be1c9fe1e0abc803a34a","url":"static/js/3.f0d0550d.chunk.js"},{"revision":"e053b073a3128a2792f76c2561e4ec87","url":"static/js/4.2877098c.chunk.js"},{"revision":"a40c9299048ec1c7f65562732339d4ea","url":"static/js/main.abda64cc.chunk.js"},{"revision":"32bd31dcf7a9af4269e9ead99dee2f19","url":"static/js/runtime-main.fe9966e2.js"},{"revision":"2b3ab90c75a4f5a6992ca8b209cd24d9","url":"index.html"}]);

  /* custom cache rules */
  workbox.routing.registerRoute(
    new workbox.routing.NavigationRoute(
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'PRODUCTION',
      })
    )
  );

  workbox.routing.registerRoute(
    ({ url }) => url.origin === 'https://cdn.jsdelivr.net',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'jsdelivr-cdn',
    }),
  );

  // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
  workbox.routing.registerRoute(
    ({ url }) => url.origin === 'https://fonts.googleapis.com',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    })
  );

  // Cache the underlying font files with a cache-first strategy for 1 year.
  workbox.routing.registerRoute(
    ({ url }) => url.origin === 'https://fonts.gstatic.com',
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.ExpirationPlugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

} else {
  // console.log('Workbox could not be loaded. No Offline support');
}