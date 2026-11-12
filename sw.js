// Uygulamanın internetsiz de açılmasını sağlar (önbellek)
const CACHE = "notdefterim-v1";
self.addEventListener("install", e => { self.skipWaiting(); });
self.addEventListener("activate", e => e.waitUntil(clients.claim()));
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Firebase API çağrılarına karışma (Firestore kendi çevrimdışı önbelleğini yönetir)
  if (url.hostname.includes("googleapis.com") || url.hostname.includes("firebaseio.com")) return;
  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const cached = await cache.match(req);
      const network = fetch(req).then(res => { if (res.ok) cache.put(req, res.clone()); return res; }).catch(() => cached);
      return cached || network;
    })
  );
});
