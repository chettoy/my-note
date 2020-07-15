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
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

    /* custom cache rules */
  workbox.routing.registerRoute(
    new workbox.routing.NavigationRoute(
      new workbox.strategies.NetworkFirst({
        cacheName: 'PRODUCTION',
      })
    )
  );
} else {
  // console.log('Workbox could not be loaded. No Offline support');
}