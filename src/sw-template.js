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
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

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