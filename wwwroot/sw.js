const CACHE_NAME = 'risc-v3';
const API_CACHE = 'risc-api-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/app.js',
  '/manifest.json',
  '/img/logoempresa.png',
  '/img/svc-tanque.svg',
  '/img/svc-grasa.svg',
  '/img/svc-agua.svg',
  '/img/svc-mantenimiento.svg',
  '/img/svc-trampas.svg',
  '/img/svc-tratamiento.svg',
  '/img/cat-lodos.svg',
  '/img/cat-grasas.svg',
  '/img/cat-gases.svg',
  '/img/cat-agua.svg'
];

const API_ENDPOINTS = [
  '/api/services',
  '/api/products',
  '/api/guides'
];

// Instalar: cachear archivos estáticos y pre-cargar datos de API
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS)),
      caches.open(API_CACHE).then(cache =>
        Promise.allSettled(
          API_ENDPOINTS.map(url => fetch(url).then(res => {
            if (res.ok) cache.put(url, res);
          }))
        )
      )
    ])
  );
  self.skipWaiting();
});

// Activar: limpiar caches viejos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME && k !== API_CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: network-first para API con fallback a cache, cache-first para estáticos
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (url.pathname.startsWith('/api/')) {
    // Network first para API — siempre actualiza cache
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(API_CACHE).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    // Cache first para estáticos — fallback a network
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          // Cache nuevos assets estáticos (fuentes, etc.)
          if (response.ok && url.origin === self.location.origin) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
  }
});
