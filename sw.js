/* ═══════════════════════════════════════════════════════════
   Prepara & Gioca — Service Worker
   Strategia: Cache-first con aggiornamento in background.
   Modifica CACHE_VERSION per forzare un aggiornamento.
   ═══════════════════════════════════════════════════════════ */

const CACHE_VERSION = 'v2';
const CACHE_NAME    = `prepara-gioca-${CACHE_VERSION}`;

/* File core da precachare al momento dell'install */
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './games.json',
  './icon.png',
  './icon-192.png',
  './icon-512.png',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap',
  'https://cdn.jsdelivr.net/npm/markdown-it@14/dist/markdown-it.min.js',
  'https://cdn.jsdelivr.net/npm/markdown-it-attrs@4/markdown-it-attrs.browser.js',
  'https://cdn.jsdelivr.net/npm/markdown-it-container@4/index.js',
];

/* ── Install: precache core assets ─────────────────────────── */
self.addEventListener('install', event => {
  console.log('[SW] Installing…');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Pre-caching core assets');
        // addAll fallisce tutto se anche solo uno fallisce:
        // per risorse CDN usiamo add singolo con catch
        return cache.addAll(CORE_ASSETS.filter(u => !u.startsWith('http')))
          .then(() =>
            Promise.allSettled(
              CORE_ASSETS.filter(u => u.startsWith('http'))
                .map(u => cache.add(u).catch(e => console.warn('[SW] CDN skip:', u, e)))
            )
          );
      })
      .then(() => self.skipWaiting())
  );
});

/* ── Activate: pulisci vecchie cache ────────────────────────── */
self.addEventListener('activate', event => {
  console.log('[SW] Activating…');
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(k => k.startsWith('prepara-gioca-') && k !== CACHE_NAME)
          .map(k => { console.log('[SW] Deleting old cache:', k); return caches.delete(k); })
      ))
      .then(() => self.clients.claim())
  );
});

/* ── Fetch: Cache-first, poi network + aggiornamento cache ──── */
self.addEventListener('fetch', event => {
  const req = event.request;

  // Ignora richieste non-GET e cross-origin non CDN
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isTrustedCDN = url.hostname === 'cdn.jsdelivr.net' ||
                       url.hostname === 'fonts.googleapis.com' ||
                       url.hostname === 'fonts.gstatic.com';

  if (!isSameOrigin && !isTrustedCDN) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async cache => {
      const cached = await cache.match(req);

      // Network fetch (in background se già in cache)
      const fetchPromise = fetch(req)
        .then(response => {
          if (response.ok && req.method === 'GET') {
            cache.put(req, response.clone());
          }
          return response;
        })
        .catch(() => null);

      if (cached) {
        // Restituisce subito dalla cache, aggiorna in background
        fetchPromise; // fire-and-forget
        return cached;
      }

      // Non in cache: aspetta la rete
      const networkRes = await fetchPromise;
      if (networkRes) return networkRes;

      // Offline fallback per navigazione
      if (req.destination === 'document') {
        return cache.match('./index.html');
      }

      return new Response('Risorsa non disponibile offline', {
        status: 503,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    })
  );
});
