self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open('promille-v1').then(cache => cache.addAll([
    './','./index.html','./manifest.webmanifest','./sw.js','./icon-192.png','./icon-512.png'
  ])));
});
self.addEventListener('fetch', (e)=>{
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
