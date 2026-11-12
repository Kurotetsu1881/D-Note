# D-Note – Güncelleme Rehberi

## GitHub'a yüklenecek dosyalar (hepsi aynı klasörde, depo ana dizininde)
1. `index.html`
2. `sw.js`
3. `manifest.json`
4. `logo.svg`
5. `favicon.svg`
6. `favicon-32.png`
7. `icon-192.png`
8. `icon-512.png`
9. `icon-maskable-512.png`
10. `apple-touch-icon.png`

(`logo-maskable.svg` ve `firestore.rules` yüklenmek zorunda değil. `firestore.rules` zaten Firebase'e yapıştırıldı.)

## Nasıl yüklenir
1. https://github.com/Kurotetsu1881/D-Note → **Add file → Upload files**
2. Yukarıdaki 10 dosyayı birlikte sürükleyin (eski `index.html`, `sw.js`, `manifest.json` üzerine yazılır).
3. **Commit changes**'e basın. 1-2 dakika sonra site güncellenir.

## "Uygulama olarak yükle" neden artık çalışır?
Eski manifest, var olmayan simge dosyalarına işaret ediyordu. Tarayıcılar simgesiz uygulamaya yükleme düğmesi vermez. Artık simgeler (192, 512 ve maskable) dahil.

- **Android / bilgisayar (Chrome, Edge):** Sitede sol alttaki **Uygulamayı yükle** düğmesi görünür. Adres çubuğunda da yükleme simgesi çıkar.
- **iPhone (Safari):** **Uygulamayı yükle** düğmesine basınca Paylaş → Ana Ekrana Ekle ipucu açılır.
- Uygulama yüklüyse düğme kendiliğinden gizlenir.

## Değişiklik görünmüyorsa
Eski sürüm önbellekte kalmış olabilir. Siteyi açıp sayfayı bir kez yenileyin (Ctrl+Shift+R). Yeni sürüm kendiliğinden bir kez yeniden yükler.

Telefonda yüklü uygulamayı kapatıp yeniden açmak da yeterlidir.
