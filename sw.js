// D-Note service worker: uygulamanın internetsiz açılmasını sağlar ve "Uygulamayı yükle" şartını karşılar
const CACHE = "dnote-v2";
const SHELL = [
  "./", "index.html", "manifest.json",
  "logo.svg", "favicon.svg", "favicon-32.png",
  "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png",
  "https://cdn.jsdelivr.net/npm/quill@1.3.7/dist/quill.snow.css",
  "https://cdn.jsdelivr.net/npm/quill@1.3.7/dist/quill.min.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      Promise.all(SHELL.map(u => cache.add(u).catch(() => {})))   // biri indirilemezse diğerleri yine kaydedilir
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))   // eski sürümleri sil
      .then(() => self.clients.claim())
  );
});

function cacheable(url) {
  if (url.origin === self.location.origin) return true;
  if (url.hostname === "cdn.jsdelivr.net") return true;
  if (url.hostname === "www.gstatic.com" && url.pathname.startsWith("/firebasejs/")) return true;
  return false;
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (!cacheable(url)) return;   // Firebase API / giriş istekleri: tarayıcı kendisi halleder

  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(req, { ignoreSearch: req.mode === "navigate" });
    const network = fetch(req).then(res => {
      if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
      return res;
    }).catch(() => null);

    if (cached) { e.waitUntil(network); return cached; }   // önce önbellek, arka planda güncelle
    const res = await network;
    if (res) return res;
    if (req.mode === "navigate") return (await cache.match("index.html")) || (await cache.match("./")) || Response.error();
    return Response.error();
  })());
});
