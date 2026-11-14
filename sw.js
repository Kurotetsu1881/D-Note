// D-Note service worker: uygulamanın internetsiz açılmasını sağlar ve "Uygulamayı yükle" şartını karşılar
const CACHE = "dnote-v7";
const FONTS_CSS = "https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Dancing+Script:wght@400;700&family=Inter:wght@400;500;600;700&family=Lora:wght@400;700&family=Merriweather:wght@400;700&family=Nunito:wght@400;700&family=Open+Sans:wght@400;600;700&family=Playfair+Display:wght@400;700&family=Poppins:wght@400;600&family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@400;700&family=Source+Code+Pro:wght@400;700&display=swap";
const LOCAL = [
  "./", "index.html", "manifest.json",
  "logo.png", "logo-wordmark.png", "favicon.ico", "favicon-v3-32.png", "favicon-v3-64.png",
  "icon-v4-192.png", "icon-v4-512.png", "apple-touch-icon-v3.png"
];
const REMOTE = [
  "https://cdn.jsdelivr.net/npm/quill@1.3.7/dist/quill.snow.css",
  "https://cdn.jsdelivr.net/npm/quill@1.3.7/dist/quill.min.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js",
  FONTS_CSS
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => Promise.all([
      // kendi dosyalarımız: tarayıcı önbelleğini atlayıp en yenisini al
      ...LOCAL.map(u => cache.add(new Request(u, { cache: "reload" })).catch(() => {})),
      ...REMOTE.map(u => cache.add(u).catch(() => {}))   // biri indirilemezse diğerleri yine kaydedilir
    ])).then(() => self.skipWaiting())
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
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") return true;   // yazı tipleri
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
