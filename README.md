# D-Note – Güncelleme Rehberi

## 1) GitHub'a yüklenecek dosyalar
Zip'i bilgisayarınızda **klasöre çıkarın**, sonra **içindeki dosyaların hepsini** yükleyin:

`index.html`, `sw.js`, `manifest.json`, `logo.png`, `logo-wordmark.png`, `favicon-32.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`

Nasıl: https://github.com/Kurotetsu1881/D-Note → **Add file → Upload files** → dosyaları sürükleyin (eskilerin üzerine yazılır) → **Commit changes**. 1-2 dakika sonra site güncellenir.

(`firestore.rules` ve bu README GitHub'a yüklenmez. Eski `logo.svg` ve `favicon.svg` dosyalarını GitHub'dan silebilirsiniz, artık kullanılmıyor.)

## 2) Firebase kuralını güncelleyin (paylaşım bağlantısı için – 1 dakika)
Not paylaşma özelliğinin çalışması için:
1. Firebase → **Firestore Database** → **Rules** sekmesi
2. Kutudaki her şeyi silin, `firestore.rules` dosyasının içeriğini yapıştırın
3. **Publish**'e basın

Bunu yapmazsanız diğer her şey çalışır, yalnızca "Bağlantı oluştur" düğmesi hata verir.

## 3) Yeni neler var?
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
