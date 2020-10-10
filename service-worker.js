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
  workbox.precaching.precacheAndRoute([{"revision":"c1c28f553095fdddb4d2c13a11bd4cb9","url":"live2d-widget/live2d.min.js"},{"revision":"1ab8aaf74cb0cafc3257c6ffbd027570","url":"live2d-widget/waifu-tips.json"},{"revision":"1165b1888975a8d6ee01539b6ddefeb6","url":"static/css/2.8c4379df.chunk.css"},{"revision":"cc51ebd73f341dcaf8f7fa5ebd38def7","url":"static/css/3.bbfc64cf.chunk.css"},{"revision":"87640cfe009fc05a25667d55874a7b00","url":"static/css/main.f42fae53.chunk.css"},{"revision":"a36f9ec7c832fb897981553a25e00951","url":"static/js/2.429f1711.chunk.js"},{"revision":"a38dd7d92c1659f32fec513c37b52968","url":"static/js/3.2036d261.chunk.js"},{"revision":"e3165fc4645770c7dc444211acea22ee","url":"static/js/4.fab92389.chunk.js"},{"revision":"3e31e335daf6cc2d4f8e35d7c5f8962c","url":"static/js/main.fc5dd53f.chunk.js"},{"revision":"f9d4b33acabd09910bf67c7b788bd35b","url":"static/js/runtime-main.e31018df.js"},{"revision":"dc82002996fc9f772cbd0758ba7aad59","url":"index.html"}]);

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
      cacheName: 'jsdelivr-cdn',
    }),
  );

  // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
  workbox.routing.registerRoute(
    ({url}) => url.origin === 'https://fonts.googleapis.com',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    })
  );

  // Cache the underlying font files with a cache-first strategy for 1 year.
  workbox.routing.registerRoute(
    ({url}) => url.origin === 'https://fonts.gstatic.com',
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