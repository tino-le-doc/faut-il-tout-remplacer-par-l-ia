// Service Worker - TLD PWA
const CACHE_NAME = 'tld-cache-v5';
const OFFLINE_URL = '/offline.html';

// Ressources essentielles a mettre en cache lors de l'installation
// Inclut les images optimisees (AVIF+WebP) pour performances LCP
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/offline.html',
  '/css/common.css?v=2',
  '/js/firebase-config.js?v=3',
  '/js/consent.js?v=1',
  '/js/i18n.js',
  '/img/1000074494.avif',
  '/img/1000074494.webp',
  '/img/tldia.webp',
  '/img/favicon.ico',
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

// Activation : nettoyage des anciens caches (toutes versions sauf la courante)
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

// Push notifications
self.addEventListener('push', (event) => {
  let data = { title: '🔥 TLD - Débat du Jour', body: 'Un nouveau débat vous attend !', url: '/debat.html' };
  try { if (event.data) data = { ...data, ...event.data.json() }; } catch (e) {}

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/img/1000074494.png',
      badge: '/img/1000074494.png',
      data: { url: data.url },
      vibrate: [200, 100, 200],
      tag: 'debat-du-jour'
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      const url = event.notification.data?.url || '/debat.html';
      for (const client of clientList) {
        if (client.url.includes(url) && 'focus' in client) return client.focus();
      }
      return clients.openWindow(url);
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
