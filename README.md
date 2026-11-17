# D-Note – Güncelleme Rehberi

## 1) GitHub'a yüklenecek dosyalar
Zip'i bilgisayarınızda **klasöre çıkarın**, sonra **içindeki dosyaların hepsini** yükleyin:

`index.html`, `sw.js`, `manifest.json`, `logo.png`, `logo-wordmark.png`, `favicon.ico`, `favicon-v2-32.png`, `favicon-v2-64.png`, `icon-v2-192.png`, `icon-v2-512.png`, `icon-v2-maskable-512.png`, `apple-touch-icon-v2.png`

Nasıl: https://github.com/Kurotetsu1881/D-Note → **Add file → Upload files** → dosyaları sürükleyin (eskilerin üzerine yazılır) → **Commit changes**. 1-2 dakika sonra site güncellenir.

(`firestore.rules` ve bu README GitHub'a yüklenmez. GitHub'daki eski `logo.svg`, `favicon.svg`, `favicon-32.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` dosyalarını silebilirsiniz, artık kullanılmıyor.)

## 2) Firebase kuralını güncelleyin (paylaşım bağlantısı için – 1 dakika)
Not paylaşma özelliğinin çalışması için:
1. Firebase → **Firestore Database** → **Rules** sekmesi
2. Kutudaki her şeyi silin, `firestore.rules` dosyasının içeriğini yapıştırın
3. **Publish**'e basın

Bunu yapmazsanız diğer her şey çalışır, yalnızca "Bağlantı oluştur" düğmesi hata verir.

## 4) Google Drive otomatik yedek (bir kereliğe mahsus kurulum, ~5 dakika, ücretsiz)
Notlarınız her değiştiğinde Drive'ınızdaki **D-Note** klasörüne kendiliğinden yazılır; izin penceresi çıkmaz.
1. Bilgisayarda https://script.google.com adresini açın (D-Note'ta kullandığınız Google hesabıyla) → **Yeni proje**.
2. Soldaki dosyada (Kod.gs) her şeyi silin, `drive-yedek-kodu.txt` dosyasının içeriğini yapıştırın → **Kaydet** (disket simgesi). Proje adı: D-Note Drive.
3. Sağ üstte **Dağıt → Yeni dağıtım** → dişli simgesi → **Web uygulaması**.
   - Şu kullanıcı olarak yürüt: **Ben**
   - Erişimi olan kişiler: **Herkes**
   - **Dağıt**'a basın.
4. Google izin isteyecek: **Erişimi yetkilendir** → hesabınızı seçin → "Gelişmiş" → "D-Note Drive (güvenli değil) sayfasına git" → **İzin ver**. (Betiği siz yazdırdınız, güvenli.)
5. Çıkan **Web uygulaması URL**'sini kopyalayın (…/exec ile biter).
6. D-Note → **Ayarlar → Google Drive otomatik yedek** → URL'yi yapıştırın → **Kaydet ve yedekle**.
URL tüm cihazlarınızda otomatik paylaşılır, bir kez girmeniz yeter. Kod yalnızca sizin D-Note girişinizi kabul eder; başkası URL'yi bilse bile yazamaz.

## 3) Yeni neler var?
- **Google Drive otomatik yedek:** Drive'da D-Note/Notlar (her not .html), D-Note/Ekler (görsel ve dosyalar) ve d-note-yedek.json kendiliğinden güncellenir (Adım 4).
- **1 MB not sınırı kalktı (görsel/dosya için):** Görseller ve dosyalar artık notun içine gömülmüyor, Firestore'da ayrı parçalar halinde saklanıyor. Dosya başına 20 MB'a kadar. Eski notlardaki görseller olduğu gibi çalışmaya devam eder.
- **Kaydırma eylemleri:** Notlar listesinde bir notu **sola kaydırın** → Daha fazla / İndir / Sil. Çöp kutusunda: Geri yükle / Kalıcı sil.
- **Daha küçük yazılar:** Arayüz ve editör yazı boyutu bir kademe daha küçültüldü.
- **Windows logosu:** Simgeler yeni dosya adlarıyla yüklendi, eski önbellek artık kullanılmaz.
- **Logo:** Yeni D logosu uygulama simgesi, sekme simgesi ve uygulama içinde; "D-Note – Your Smart Notes" görseli giriş ekranında ve Yardım'da.
- **Evernote mobil yapısı:** Oluştur / Notlar / Not defterleri / Daha Fazla alt menüsü, ana ekranda Yeni not, Yeni görev, Etkinlik, Not defteri, Kaydedici, Kamera ve Karalama Defteri.
- **Yazı tipleri:** Editörün alt çubuğundaki **Aa** ile seçili metnin yazı tipini, boyut düğmesiyle boyutunu değiştirin. Tüm notlar için varsayılan yazı tipi: **Ayarlar**.
- **Not eylemleri (⋯):** Bul, Paylaş, Taşı, Bağlantıyı kopyala, Notu çoğalt, Başlık öner, Etiket ekle, Hatırlatıcı, Kısayollara ekle, Sabitle, Çöpe taşı, Yazdır.
- **Daha Fazla:** Kısayollar, Görevler, Takvim, Etiketler, Paylaşılan, Şablonlar, Çöp Kutusu. Ayarlar ve Yardım için sol üstteki profil resmine dokunun.
- **Evernote'tan taşıma:** Ana ekran → **İçe aktar** → Evernote'tan dışa aktardığınız `.enex` dosyasını seçin. Yedek için `.json` dosyası da desteklenir.
- Evernote'taki yapay zekâ, ekip alanları ve Android widget özellikleri yoktur.

## 4) Uygulama olarak yükleme
- **Android / bilgisayar (Chrome, Edge):** Ana ekranda üstte beliren **şimşek** düğmesine ya da Ayarlar'daki **Uygulamayı yükle**'ye basın.
- **iPhone (Safari):** Paylaş → Ana Ekrana Ekle.

## Değişiklik görünmüyorsa
Siteyi bir kez yenileyin (Ctrl+Shift+R). Yeni sürüm kendiliğinden bir kez yeniden yüklenir. Yüklü uygulamayı kapatıp yeniden açmak da yeterlidir.

## Windows'ta hâlâ eski logo görünüyorsa
Yüklü uygulamanın simgesi yalnızca yeniden yüklenince güncellenir:
1. Windows'taki D-Note uygulamasını kaldırın (uygulama penceresi → ⋮ → Kaldır; ya da Başlat menüsünde sağ tık → Kaldır).
2. Tarayıcıda siteyi açıp **Ctrl+Shift+R** yapın.
3. Adres çubuğundaki **Yükle** simgesiyle uygulamayı tekrar yükleyin. Masaüstü/görev çubuğu kısayolunu da yeniden oluşturun.
Sekmedeki küçük simge hâlâ eskiyse sekmeyi kapatıp açın.
