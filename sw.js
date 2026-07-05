/* Service Worker - Rony Cozzi Portfolio */
const VERSION = 'v101';
const PRECACHE = `rony-portfolio-precache-${VERSION}`;
const RUNTIME = `rony-portfolio-runtime-${VERSION}`;
const MAX_RUNTIME_ENTRIES = 60;
const offlineResponse = () => new Response('', { status: 504, statusText: 'Offline' });

const SHELL = [
  '/',
  '/index.html',
  '/work',
  '/about.html',
  '/about',
  '/work.html',
  '/contact',
  '/services',
  '/contact.html',
  '/services.html',
  '/process',
  '/process.html',
  '/faq',
  '/faq.html',
  '/404',
  '/404.html',
  '/privacy',
  '/privacy.html',
  '/terms',
  '/terms.html',
  '/css/styles.css',
  '/css/styles.css?v=49',
  '/assets/fonts/fraunces-normal-500-latin.woff2',
  '/assets/fonts/fraunces-italic-400-latin.woff2',
  '/assets/fonts/fraunces-normal-400-latin.woff2',
  '/assets/fonts/inter-normal-400-latin.woff2',
  '/assets/fonts/inter-normal-500-latin.woff2',
  '/assets/fonts/jetbrainsmono-normal-400-latin.woff2',
  '/js/main.js',
  '/js/main.js?v=65',
  '/manifest.json',
  '/favicon.svg',
  '/og-image.png',
  '/assets/icons/icon-180.png',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(PRECACHE)
      .then((cache) => cache.addAll(SHELL).catch(() => Promise.all(SHELL.map((u) => cache.add(u).catch(() => null)))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  const keep = new Set([PRECACHE, RUNTIME]);
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k.startsWith('rony-portfolio-') && !keep.has(k)).map((k) => caches.delete(k)))
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
  // Avoid caching frequently-updated documents (e.g. CV PDF) in the SW runtime cache.
  if (url.pathname === '/assets/Rony_Cozzi_CV.pdf') return;

  // Network-first for HTML documents (always show fresh content)
  if (e.request.mode === 'navigate' || e.request.destination === 'document') {
    e.respondWith(
      fetch(e.request).then(async (res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(RUNTIME).then((cache) => {
            cache.put(e.request, clone).then(() => trimCache(RUNTIME, MAX_RUNTIME_ENTRIES));
          });
          return res;
        }

        // When running without server-side cleanUrls (e.g. local static servers),
        // navigations like `/work` may 404. Try serving the corresponding `.html`
        // from cache instead of returning the raw 404 response.
        if (res && res.status === 404) {
          const cached = await caches.match(e.request);
          if (cached) return cached;
          let path = url.pathname;
          if (path && !path.endsWith('.html')) {
            if (path.endsWith('/')) path = path.slice(0, -1);
            if (path) {
              const htmlCached = await caches.match(`${path}.html`);
              if (htmlCached) return htmlCached;
            }
          }
          return caches.match('/404.html');
        }

        return res;
      }).catch(() =>
        caches.match(e.request).then(async (cached) => {
          if (cached) return cached;
          let path = url.pathname;
          if (path && !path.endsWith('.html')) {
            if (path.endsWith('/')) path = path.slice(0, -1);
            if (path) {
              const htmlCached = await caches.match(`${path}.html`);
              if (htmlCached) return htmlCached;
            }
          }
          return caches.match('/404.html');
        })
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
          caches.open(RUNTIME).then((cache) => {
            cache.put(e.request, clone).then(() => trimCache(RUNTIME, MAX_RUNTIME_ENTRIES));
          });
        }
        return res;
      }).catch(() => null);
      return cached || fetchPromise.then((res) => res || cached || offlineResponse());
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
