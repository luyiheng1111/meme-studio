const CACHE_NAME = 'meme-studio-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './tailwindcss.js',
  './react.production.min.js',
  './react-dom.production.min.js',
  './babel.min.js',
  './lucide.js',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
