/* Service Worker — Rony Cozzi Portfolio */
const VERSION = 'v35';
const CACHE = `rony-portfolio-${VERSION}`;
const MAX_RUNTIME_ENTRIES = 60;

const SHELL = [
  '/',
  '/index.html',
  '/about.html',
  '/work.html',
  '/contact.html',
  '/process.html',
  '/faq.html',
  '/404.html',
  '/privacy.html',
  '/terms.html',
  '/case/cucu.html',
  '/case/luco.html',
  '/case/sellink.html',
  '/case/cognition.html',
  '/css/styles.css',
  '/css/styles.css?v=29',
  '/css/case.css',
  '/css/case.css?v=3',
  '/js/main.js',
  '/js/main.js?v=18',
  '/manifest.json',
  '/favicon.svg',
  '/og-image.png',
  '/assets/icons/icon-180.png',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png',
  '/assets/work/cucu.webp',
  '/assets/work/luco.webp',
  '/assets/work/sellink.webp',
  '/assets/work/cognition-v2.webp',
  '/assets/work/cucu-thumb.webp',
  '/assets/work/luco-thumb.webp',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(SHELL).catch(() => Promise.all(SHELL.map((u) => cache.add(u).catch(() => null)))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

async function trimCache(cacheName, max) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  const extras = keys.length - max;
  if (extras <= 0) return;
  for (let i = 0; i < extras; i++) {
    await cache.delete(keys[i]);
  }
}

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  // Network-first for HTML documents (always show fresh content)
  if (e.request.mode === 'navigate' || e.request.destination === 'document') {
    e.respondWith(
      fetch(e.request).then((res) => {
        if (!res || res.status !== 200 || res.type !== 'basic') return res;
        const clone = res.clone();
        caches.open(CACHE).then((cache) => cache.put(e.request, clone));
        return res;
      }).catch(() =>
        caches.match(e.request).then((cached) => cached || caches.match('/404.html'))
      )
    );
    return;
  }

  // Stale-while-revalidate for assets (CSS/JS/images): instant from cache, update in background
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const fetchPromise = fetch(e.request).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE).then((cache) => {
            cache.put(e.request, clone).then(() => trimCache(CACHE, SHELL.length + MAX_RUNTIME_ENTRIES));
          });
        }
        return res;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
