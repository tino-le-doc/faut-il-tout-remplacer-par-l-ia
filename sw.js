// Service Worker - TLD PWA
const CACHE_NAME = 'tld-cache-v1';
const OFFLINE_URL = '/offline.html';

// Ressources essentielles a mettre en cache lors de l'installation
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/offline.html',
  '/css/common.css',
  '/js/firebase-config.js',
  '/js/i18n.js',
  '/img/1000074494.png',
  '/manifest.json'
];

// Installation : pre-cache des ressources essentielles
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activation : nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Strategie de fetch : Network First avec fallback cache, puis page offline
self.addEventListener('fetch', (event) => {
  // Ignorer les requetes non-GET et les requetes vers des APIs externes
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Ne pas intercepter les requetes Firebase, Google, Stripe, etc.
  if (
    url.origin !== self.location.origin ||
    url.pathname.startsWith('/api')
  ) {
    return;
  }

  // Pour les pages HTML : Network First
  if (event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Mettre en cache la reponse fraiche
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
          return response;
        })
        .catch(() => {
          // Essayer le cache, sinon page offline
          return caches.match(event.request).then((cached) => {
            return cached || caches.match(OFFLINE_URL);
          });
        })
    );
    return;
  }

  // Pour les assets statiques (CSS, JS, images) : Cache First
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        // Rafraichir le cache en arriere-plan (stale-while-revalidate)
        fetch(event.request).then((response) => {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response);
          });
        }).catch(() => {});
        return cached;
      }

      // Pas en cache : aller chercher sur le reseau
      return fetch(event.request).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, clone);
        });
        return response;
      }).catch(() => {
        return new Response('', { status: 408 });
      });
    })
  );
});
