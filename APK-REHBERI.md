# D-Note'u uygulama olarak kurma (Android / iPhone / Windows)

D-Note zaten bir PWA: yani **mağazasız, ücretsiz** olarak her cihaza gerçek uygulama gibi kurulabilir.
APK / Windows paketi istiyorsanız aşağıdaki adımlar yeterli; kod yazmak gerekmiyor.

## A) Hemen, ücretsiz kurulum (önerilen, 1 dakika)
- **Android (Chrome / Brave):** siteyi açın → ⋮ menü → **Uygulamayı yükle** (veya "Ana ekrana ekle"). Ana ekranda D-Note simgesi çıkar, tam ekran açılır.
- **iPhone / iPad (Safari):** siteyi Safari'de açın → Paylaş simgesi → **Ana Ekrana Ekle**. (iOS'ta yalnızca Safari bu menüyü gösterir.)
- **Windows (Edge / Chrome):** siteyi açın → adres çubuğunun sağındaki **Yükle** simgesi (veya ⋯ → Uygulamalar → Bu siteyi uygulama olarak yükle). Başlat menüsüne ve masaüstüne eklenir, kendi penceresinde açılır.

## B) APK (Android) ve Windows paketi — PWABuilder ile (ücretsiz)
1. Bilgisayarda https://www.pwabuilder.com adresini açın.
2. Kutuya D-Note adresinizi yazın: `https://kurotetsu1881.github.io/D-Note/` → **Start**.
3. Sonuçta manifest/service worker onay işaretleri yeşil olmalı (bu güncellemeden sonra olur).
4. **Package for stores** düğmesi:
   - **Android** → "Other Android / Sideload" (APK) veya Google Play için AAB seçin. Uygulama kimliği (package id) olarak örn. `io.github.kurotetsu1881.dnote` bırakın. İndirdiğiniz zip içinde **.apk** ve **imza dosyası (signing.keystore + parolası)** gelir. **Keystore'u mutlaka saklayın**, ileride güncelleme için gerekir.
   - **Windows** → .msix paketi indirilir. Microsoft Store'a yüklemek için Partner Center hesabı (tek seferlik ~19 USD, bireysel) gerekir; kendi bilgisayarınıza kurmak için A bölümündeki PWA kurulumu daha kolaydır.
   - **iOS** → bir Xcode projesi verir. Bunu derlemek için **Mac + Apple Developer hesabı (yıllık 99 USD)** gerekir. Kendi iPhone'unuz için tek pratik yol A bölümündeki "Ana Ekrana Ekle"dir.
5. APK'yı telefona atıp açın (Ayarlar'dan "bilinmeyen kaynaklardan yüklemeye" izin verin).

### Adres çubuğunun görünmemesi için (Android APK)
APK, Chrome'un "güvenilir web etkinliği" (TWA) kipiyle açılır. Üstteki adres çubuğunun kaybolması için siteniz ile uygulamanın eşleştiğini kanıtlayan `assetlinks.json` dosyası gerekir. PWABuilder bu dosyanın içeriğini verir. GitHub'da bu dosyanın **şu adreste** durması gerekir:
`https://kurotetsu1881.github.io/.well-known/assetlinks.json`
Bunun için GitHub'da adı tam olarak `Kurotetsu1881.github.io` olan **ayrı bir depo** açıp Pages'i etkinleştirin, içine `.well-known/assetlinks.json` ve boş bir `.nojekyll` dosyası koyun. (Bunu yapmazsanız uygulama yine çalışır, sadece üstte ince bir adres çubuğu görünür.)

## Notlar
- Google ile giriş APK içinde de çalışır (Chrome tabanlı). Giriş yapılamazsa Firebase → Authentication → Settings → Authorized domains listesinde `kurotetsu1881.github.io` bulunduğundan emin olun.
- Uygulama GitHub'daki siteyi açtığı için, siteyi GitHub'da güncellediğinizde APK'yı yeniden yapmanıza gerek kalmaz.
- Bu ortamdan APK üretemem (internet erişimi ve Android derleme araçları yok); PWABuilder bunu sizin yerinize bulutta yapar.
