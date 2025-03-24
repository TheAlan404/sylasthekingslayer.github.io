---
layout: home

hero:
  name: "Diren"
  text: "Zulme karşı mukavemet!"
  tagline: "Haklarınızı ve güvenliğinizi korumak için pratik bilgiler"
  image:
    src: "" # Leave empty to avoid default image
    alt: Diren Projesi
  actions:
    - theme: brand
      text: "Projeye Katkıda Bulunun"
      link: /katki/
    - theme: brand
      text: "Hakkında"
      link: /hakkinda/
    - theme: brand
      text: "İletişim"
      link: /iletisim/

features:
  - icon: 🛡️
    title: "Haklarınızı Bilin"
    details: "Protestolar sırasında kendinizi korumak için hukuki kaynaklara, avukat iletişim bilgilerine ve haklarınız hakkında bilgilere erişin."
    link: /yasal-surecler/
  - icon: 🧰
    title: "Güvenlik Kılavuzları"
    details: "Gaza maruz kalmaktan korunma, olayları güvenli bir şekilde belgeleme ve temel ilk yardım gibi önemli güvenlik önlemleri hakkında bilgi edinin."
    link: /guvenlik/
  - icon: 📰
    title: "Doğrulanmış Güncellemeler"
    details: "Güvenilir bağımsız kaynaklardan en son doğrulanan haberler ve güncellemelerle bilgi sahibi olun."
    link: /haberler/ # Assuming /haberler/ is correct, otherwise needs translation
  - icon: 🗺️
    title: "Etkileşimli Harita"
    details: "Türkiye genelindeki protesto yerleri, polis varlığı ve sağlık istasyonları hakkında gerçek zamanlı bilgileri görüntüleyin."
    link: /harita/
  - icon: 👥
    title: "Topluluk Desteği"
    details: "Barışçıl protesto gruplarıyla bağlantı kurun, gönüllü fırsatlarını bulun ve kefalet fonlarına katkıda bulunun."
    link: /topluluklar/
  - icon: 🔒
    title: "Güvenli İletişim"
    details: "Protestolar sırasında dijital gizliliğinizi koruyarak güvenli iletişim kurma yöntemlerini öğrenin. Hükümetin kısıtladığı internet özgürlüğümüzü nasıl geri kazanacağımızı öğrenin."
    link: /guvenlik/digital/ # Assuming /guvenlik/digital/ is correct
  - icon: ✊
    title: "Protesto Kılavuzu"
    details: "Daha organize bir şekilde sesimizi duyurmamız için protesto kılavuzları."
    link: /rehber/
  - icon: 🚫
    title: "Boykot"
    details: "Ülkemizde olan adaletsizliklere karşı sesini çıkarmayanlar."
    link: /boykot/

---

<!-- Hero Image Section -->
<div class="hero-image-container">
  <img id="randomHeroImage" class="hero-image" alt="Diren Projesi" style="width: 100%; height: auto; object-fit: cover;">
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const numberOfImages = 2; // Update this number to match your actual images
  const randomNumber = Math.floor(Math.random() * numberOfImages) + 1;
  const imagePath = `/assets/${randomNumber}.jpg`; // Absolute path from root
  
  const heroImage = document.getElementById('randomHeroImage');
  if (heroImage) {
    heroImage.src = imagePath;
    heroImage.onerror = function() {
      // Fallback to placeholder if image fails to load
      this.src = '/assets/placeholder.jpg';
    };
  }
});
</script>

<!-- <div class="alert-banner">
  <strong>ACİL GÜNCELLEME:</strong> Ankara ve İstanbul'daki gözaltına alınan protestocular için yeni hukuki yardım hattı mevcut. <a href="/legal/hotlines">Hukuki Yardım Hattı</a> sayfamıza göz atın.
</div> -->

## Son Güncellemeler
<!--
<div class="news-grid">
  <div class="news-item">
    <h3>Yeni Hukuki Haklar Rehberi</h3>
    <p>Protestolar sırasında hukuki haklar hakkında kapsamlı rehberimiz güncellenmiştir.</p>
    <a href="/legal">Daha Fazla Oku</a>
  </div>

  <div class="news-item">
    <h3>İstanbul Protestoları İçin Doğrulanmış Bilgiler</h3>
    <p>İstanbul'daki yol kapanışları ve güvenli buluşma noktalarıyla ilgili güncel bilgiler.</p>
    <a href="/news/istanbul-updates">Detayları Görüntüle</a>
  </div>

  <div class="news-item">
    <h3>İlk Yardım Eğitim Oturumları</h3>
    <p>Protestolara katılanlar için temel ilk yardım konularında sanal eğitim oturumları düzenlenecek.</p>
    <a href="/safety/training">Eğitime Katıl</a>
  </div>
</div> -->
