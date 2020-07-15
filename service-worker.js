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
  workbox.precaching.precacheAndRoute([{"revision":"c1c28f553095fdddb4d2c13a11bd4cb9","url":"live2d-widget/live2d.min.js"},{"revision":"1ab8aaf74cb0cafc3257c6ffbd027570","url":"live2d-widget/waifu-tips.json"},{"revision":"1165b1888975a8d6ee01539b6ddefeb6","url":"static/css/2.8c4379df.chunk.css"},{"revision":"cc51ebd73f341dcaf8f7fa5ebd38def7","url":"static/css/3.bbfc64cf.chunk.css"},{"revision":"15db525a3e5ffd6b378b57022c5f7cfd","url":"static/css/main.b4dd0116.chunk.css"},{"revision":"93329b671cdf142dcd47d6459456fbb8","url":"static/js/2.a694c19a.chunk.js"},{"revision":"0ab435b8e68cb25865c28bab93488816","url":"static/js/3.10d59795.chunk.js"},{"revision":"5054bc2d2720f31ecb7404b145b2b88f","url":"static/js/4.234bfb55.chunk.js"},{"revision":"3db4650ae76bc018a3cc2139a4e010c8","url":"static/js/main.5b6617fb.chunk.js"},{"revision":"a736af114f53168801930af9519f9559","url":"static/js/runtime-main.0ff27787.js"},{"revision":"46c51f0f5f4dce5982fa27412746477a","url":"index.html"}]);

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