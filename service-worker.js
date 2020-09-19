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
  workbox.precaching.precacheAndRoute([{"revision":"c1c28f553095fdddb4d2c13a11bd4cb9","url":"live2d-widget/live2d.min.js"},{"revision":"1ab8aaf74cb0cafc3257c6ffbd027570","url":"live2d-widget/waifu-tips.json"},{"revision":"1165b1888975a8d6ee01539b6ddefeb6","url":"static/css/2.8c4379df.chunk.css"},{"revision":"cc51ebd73f341dcaf8f7fa5ebd38def7","url":"static/css/3.bbfc64cf.chunk.css"},{"revision":"15db525a3e5ffd6b378b57022c5f7cfd","url":"static/css/main.b4dd0116.chunk.css"},{"revision":"b6ce4a1d8a619e09494c121e86d8e240","url":"static/js/2.1d7bfd14.chunk.js"},{"revision":"a38dd7d92c1659f32fec513c37b52968","url":"static/js/3.2036d261.chunk.js"},{"revision":"e3165fc4645770c7dc444211acea22ee","url":"static/js/4.fab92389.chunk.js"},{"revision":"8396c3cd6843456f2e9303156530597f","url":"static/js/main.68e38fd8.chunk.js"},{"revision":"f9d4b33acabd09910bf67c7b788bd35b","url":"static/js/runtime-main.e31018df.js"},{"revision":"e4c286a64b72d659f87d19750ef4468d","url":"index.html"}]);

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