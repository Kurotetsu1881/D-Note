# D-Note – Bu güncelleme

**GitHub'a yüklenecek 3 dosya:** `index.html`, `sw.js`, `logo-home.png` (yeni logo dosyası). Yükledikten 1-2 dk sonra uygulamayı kapatıp açın.

- Ana sayfa: başlıklar ve "+ Yeni not defteri" kaldırıldı; satırlar daha ince, yazılar daha küçük; üstte yeni logo + tarih; arama çubuğu daha ince.
- Tüm Notlar sayfası da aynı ince ölçüye getirildi.
- Alt çubuk kısaldı. Ana Sayfa ↔ Notlar ↔ Not defterleri arasında sağa/sola kaydırarak geçilir (not satırında sola kaydırma yine satır eylemleridir; satır dışında kaydırın).
- **Şifre:** Ayarlar → Güvenlik. Tek bir şifre belirlenir; "Uygulama girişinde şifre iste" açılırsa uygulama açılırken şifre sorulur. Not defterini (⋯ → Kilitle) veya notu (not menüsü → Kilitle) kilitleyebilirsiniz. Kilitli not listede "Kilitli not" görünür, açmak için şifre ister; bir kez girince 5 dk açık kalır.
  - Önemli: Bu bir ekran kilididir; notlar şifreli saklanmaz (Firebase ve Drive yedeğinde okunabilir durumdadır). "Şifremi unuttum" Google ile yeniden giriş yaptırıp şifreyi kaldırır.
  - Firestore kuralınız zaten bu yolu kapsıyor, yeni kural gerekmez.

---

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
- **Yeni Ana Sayfa:** Alt menüde "Oluştur" yerine "Ana Sayfa". Not defterleri (resimli kartlar) ve hiçbir defterde olmayan bağımsız notlar burada görünür.
- **Sıralama:** Ana sayfada bir not defterine ya da nota basılı tutup yukarı/aşağı sürükleyin, bırakınca sıra kaydedilir.
- **Defter resmi/rengi:** Defterin ⋯ menüsü → Düzenle: ad, tema rengi, özel renk veya özel resim.
- **Sağ alttaki + düğmesi:** Dokununca Yeni not / görev / defter / etkinlik / kamera / sesle not menüsü, uzun basınca seçtiğiniz eylem (varsayılan: Yeni not). Ayarlar → "Artı (+) düğmesine uzun basınca"dan değişir. Karalama defteri kaldırıldı.
- **Hesap bilgisi** Ayarlar'a taşındı; "Yeni neler" ve "Yardım" da Ayarlar'da. Ayarlar'a Daha Fazla menüsündeki dişli ile girilir.
- **Yazı ayarları:** Ayarlar → Not yazısı: başlık ve içerik için ayrı yazı tipi, boyut (10–32 px, 1'er 1'er), kalınlık; satır aralığı, kenar boşluğu, sayfa genişliği. Editördeki boyut menüsü de 10–48 arası tek tek.
- **Listeler:** Onay kutuları, madde ve numaralar artık satır başından başlar.
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
