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
  workbox.precaching.precacheAndRoute([{"revision":"c1c28f553095fdddb4d2c13a11bd4cb9","url":"live2d-widget/live2d.min.js"},{"revision":"9fb1bf8a7c971b7d700dd2a64aee4655","url":"live2d-widget/waifu-tips.json"},{"revision":"a75d7725b2fc99ad834a0cc7f0b8521a","url":"static/css/2.2fdf272c.chunk.css"},{"revision":"0a0f28f2d30dc6842818162167ba5b33","url":"static/css/3.e609140e.chunk.css"},{"revision":"38edc83395d0d937181caa619533dd78","url":"static/css/main.569f2e14.chunk.css"},{"revision":"8295f89ee167447a009571f01cf7edf1","url":"static/js/2.6a89df2f.chunk.js"},{"revision":"822ffaa28289075981b85822d6f48982","url":"static/js/3.eebbe29f.chunk.js"},{"revision":"6b40fa288019fcdb5631bf17f14b5cd2","url":"static/js/4.ca58bf84.chunk.js"},{"revision":"cb438c299c885a7069751fcabb1a5351","url":"static/js/main.88de95c3.chunk.js"},{"revision":"70af9cb5cddb0ca00b60158f883c29b1","url":"static/js/runtime-main.c347fb7a.js"},{"revision":"a892a5f4bb41ac4d4d45cd10b581a66c","url":"index.html"}]);

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