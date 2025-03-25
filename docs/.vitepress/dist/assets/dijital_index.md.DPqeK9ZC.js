import{_ as a,c as i,o as r,ae as n}from"./chunks/framework.tuuL-SzM.js";const b=JSON.parse('{"title":"Basın ve İletişim Özgülrüğü","description":"Kısıtlanan basın ve iletişim özgürlüğümüzü geri kazanmak için tavsiyeler.","frontmatter":{"title":"Basın ve İletişim Özgülrüğü","description":"Kısıtlanan basın ve iletişim özgürlüğümüzü geri kazanmak için tavsiyeler."},"headers":[],"relativePath":"dijital/index.md","filePath":"dijital/index.md"}'),l={name:"dijital/index.md"};function t(o,e,s,d,u,k){return r(),i("div",null,e[0]||(e[0]=[n('<h1 id="vpn-nedir-ne-ise-yarar" tabindex="-1">VPN nedir? Ne işe yarar? <a class="header-anchor" href="#vpn-nedir-ne-ise-yarar" aria-label="Permalink to &quot;VPN nedir? Ne işe yarar?&quot;">​</a></h1><p>Normalde bir internet servis sağlayıcı (İSS), internet trafiğinizi. HTTPS gibi şifreleme protokolleri internette yaygın olarak kullanıldığı için ne yazdığınız veya okuduğunuzu tam olarak göremeseler de eriştiğiniz siteler hakkında bir fikir edinebilirler. Bu şekilde, devletler sansür uygulamaktadır.</p><p>VPN kullanarak, ilk olarak başka bir ülkedeki bir sunucuya, ardından bağlanmak istediğiniz yere bağlanabilirsiniz. Bu şekilde İSS&#39;niz yalnızca bir VPN&#39;e bağlı olduğunuzu görür ve içeriği hakkında bilgi edinemez. Bu şekilde devletler inernete erişiminizi sansürleyemez.</p><h2 id="onerilen-vpnler-listesi" tabindex="-1">Önerilen VPNler listesi <a class="header-anchor" href="#onerilen-vpnler-listesi" aria-label="Permalink to &quot;Önerilen VPNler listesi&quot;">​</a></h2><ol><li><strong>ProtonVPN (ücretsiz:)</strong> <a href="https://play.google.com/store/apps/details?id=ch.protonvpn.android&amp;hl=tr" target="_blank" rel="noreferrer">Android: Google Play Store</a>, <a href="https://apps.apple.com/tr/app/proton-vpn-fast-secure/id1437005085" target="_blank" rel="noreferrer">iOS: App Store</a>, <a href="https://github.com/ProtonVPN/ios-mac-app/releases" target="_blank" rel="noreferrer">macOS</a>, <a href="https://github.com/ProtonVPN/win-app/releases" target="_blank" rel="noreferrer">Windows</a></li></ol><ul><li><p>Eğer uygulama Google Play Store&#39;dan kaldırılırsa Proton VPN&#39;in <a href="https://github.com/ProtonVPN/android-app/releases" target="_blank" rel="noreferrer">GitHub reposundan</a> da indirilebilir.</p></li><li><p>Proton VPN&#39;i kullanırken, ilk olarak &quot;Connect&quot; tuşuna basarak bağlanmayı deneyin. Eğer bu başarısız olursa, Settings -&gt; Protocol -&gt; Stealth seçeneğini seçtikten sonra bağlanmayı deneyin. Bu özellik, VPN bağlantınızı gizlemeye çalışacaktır.</p></li><li><p>Eğer bu da çalışmaz ise, Settings -&gt; Advanced Settings -&gt; Alternative routing&#39;i açıp deneyin.</p></li></ul><ol start="2"><li><strong>Mullvad (ücretli):</strong> <a href="https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn" target="_blank" rel="noreferrer">Android: Google Play Store</a>, <a href="https://f-droid.org/tr/packages/net.mullvad.mullvadvpn/" target="_blank" rel="noreferrer">Android: F-Droid</a>, <a href="https://apps.apple.com/tr/app/mullvad-vpn/id1488466513" target="_blank" rel="noreferrer">iOS: App Store</a>, <a href="https://github.com/mullvad/mullvadvpn-app/releases/download/2025.4/MullvadVPN-2025.4.exe" target="_blank" rel="noreferrer">macOS</a>, <a href="https://github.com/mullvad/mullvadvpn-app/releases/download/2025.4/MullvadVPN-2025.4.exe" target="_blank" rel="noreferrer">Windows</a></li></ol><ul><li>Eğer bağlantı kuramazsanız, sağ üstteki dişli çark ikonuna tıklayıp ayarlara girin ve &quot;VPN Settings&quot; -&gt; &quot;WireGuard obfuscation&quot; altından &quot;UDP-over-TCP&quot; seçeneğini seçin. Bu da başarısız olursa aynı menü altındaki &quot;Shadowsocks&quot; seçeneğini kullanmayı deneyebilirsiniz.</li></ul><h1 id="dns-over-https-dns-over-tls" tabindex="-1">DNS over HTTPS / DNS over TLS <a class="header-anchor" href="#dns-over-https-dns-over-tls" aria-label="Permalink to &quot;DNS over HTTPS / DNS over TLS&quot;">​</a></h1><h2 id="dns-nedir" tabindex="-1">DNS nedir? <a class="header-anchor" href="#dns-nedir" aria-label="Permalink to &quot;DNS nedir?&quot;">​</a></h2><p>DNS servisleri, bir web sitesini ziyaret etmek istediğinizde, o alan adını IP adresine dönüştüren servislerdir. Örneğin <code>wikipedia.org</code>&#39;u ziyaret etmek istediğinizde size <code>185.15.58.224</code> IP adresini verecektir.</p><p>DNS servisleri, genelde sisteminizin varsayılan ayarlarında şifresiz olarak çalışacaktır. Bu demektir ki, İSS&#39;niz sizin erişmek istediğiniz siteler için yaptğınız DNS isteklerini görebilecek ve bu şekilde sansür veya gözetim uygulayabilecektir.</p><p>DNS over HTTP veya DNS over TLS gibi Şifrelenmiş DNS protokolleri kullanarak bu problem çözülebilir ve sansür ile gözetim daha zor bir hale getirilebilir.</p><p><strong>Not: Şifreli DNS servisleri kullanmak, VPNlerin aksine eriştiğiniz IP adresini İSS&#39;nizden saklamayacaktır. Girilen sitelerin gizli kalması için VPNlerin yerine KULLANILMAMALIDIR. Sansür ve gözetimi zorlaştırmak için tek başına veya VPN&#39;e ek olarak kullanımını tavsiye ediyoruz.</strong></p><h3 id="android" tabindex="-1">Android <a class="header-anchor" href="#android" aria-label="Permalink to &quot;Android&quot;">​</a></h3><p>Eğer telefoununuz Android 9 ve üzeri ise aşağıdaki adımları izleyerek DNS over TLS&#39;i aktif hale getirebilirsiniz:</p><ol><li>Ayarlar -&gt; Ağ ve İnternet -&gt; Gelişmiş -&gt; Gizli DNS&#39;e tıklayın.</li><li>&quot;Gizli DNS sağlayıcının ana makine adı&quot; seçeneğini etkin hale getirin ve aşağıdaki alan adlarından birini girin: <ul><li><code>dns.quad9.net</code></li><li><code>dns.mullvad.net</code></li><li><code>one.one.one.one</code></li></ul></li></ol><h3 id="ios" tabindex="-1">iOS <a class="header-anchor" href="#ios" aria-label="Permalink to &quot;iOS&quot;">​</a></h3><ol><li><a href="https://docs.quad9.net/Setup_Guides/iOS/iOS_14_and_later_%28Encrypted%29/" target="_blank" rel="noreferrer">Quad9 web sitesinden</a> DNS profilini indirin. Bunu &quot;Download Profile&quot; bölümü altındaki &quot;Recommended: HTTPS (.9)&quot; tuşuna basarak yapabilirsiniz.</li><li>Telefonunuzdaki Dosyalar uygulamasına gidin, ekranın en alt kısmındaki &quot;Göz At&quot; tuşuna tıklayın ve İndirilenler klasörüne girin. Bu klasörde, indirdiğiniz &quot;Quad9...mobileconfig&quot; dosyasına tıklayın.</li><li>Ayarlar -&gt; Profil İndirildi seçeneğine tıklayın -&gt; Sağ üst köşedeki yükle tuşuna basın.</li></ol><h3 id="windows-11" tabindex="-1">Windows 11 <a class="header-anchor" href="#windows-11" aria-label="Permalink to &quot;Windows 11&quot;">​</a></h3><ol><li><p>Başlat düğmesine sağ tıklayın ve Ayarlar butonunu seçin -&gt; Soldaki menüden &quot;Ağ ve internet&quot;&#39;i seçin -&gt; Eğer kablosuz internet ile bağlıysanız &quot;Wi-Fi&quot; seçeneğine, kablolu internet ile bağlıysanız &quot;Ethernet&quot; seçeneğine tıklayın.</p></li><li><p>“DNS sunucusu ataması”nın yanındaki ”Düzenle” tuşuna tıklayın -&gt; Menüden &quot;El ile girilen&quot; seçeneğini seçin -&gt; IPv4&#39;ü açın ve aşağıdaki değişiklikleri yapın.</p><ul><li>Tercih edilen DNS: 9.9.9.9 (Eğer olmazsa: 194.242.2.2)</li><li>HTTPS üzerinden DNS: Açık (otomatik şablon)</li><li>Altetnatif DNS: 149.112.112.112 (Eğer olmazsa: 1.1.1.1)</li><li>HTTP üzerinden DNS: Açık (otomatik şablo)</li></ul></li></ol><h3 id="macos-big-sur-ve-sonrası" tabindex="-1">macOS (Big Sur ve sonrası) <a class="header-anchor" href="#macos-big-sur-ve-sonrası" aria-label="Permalink to &quot;macOS (Big Sur ve sonrası)&quot;">​</a></h3><ol><li><a href="https://docs.quad9.net/Setup_Guides/MacOS/Big_Sur_and_later_%28Encrypted%29/" target="_blank" rel="noreferrer">Quad9 web sitesinden</a> DNS profilini indirin. Bunu &quot;Download Profile&quot; bölümü altındaki &quot;Recommended: HTTPS (.9)&quot; tuşuna basarak yapabilirsiniz.</li><li>İndirilenler klasörüne gidin, ve indirdiğiniz &quot;Quad9...mobileconfig&quot; dosyasına tıklayın.</li><li>Sistem Tercihleri -&gt; Profiller&#39;e tıklayın &gt; Sağ üst köşedeki yükle tuşuna basın.</li></ol><h1 id="tor" tabindex="-1">Tor <a class="header-anchor" href="#tor" aria-label="Permalink to &quot;Tor&quot;">​</a></h1><p><strong>Uyarı: Eğer Tor kullanacaksanız köprüleri etkinleştirdiğinizden emin olun. Aksi takdirde İSS&#39;niz, Tor kullandığınızı kolayca tespit edebilir. Köprü kullansanız dahi, İSS&#39;niz çeşitli trafik analizi teknikleriyle Tor kullandığınızı tespit edebilir ve bu ekstra dikkat çekebilir.</strong></p><p>Köprüleri etkinleştirmek için aşağıdaki adımları takip edin:</p><p>Tor Browser: Tor Browser&#39;ı açtıktan sonra Bağlantıyı yapılandır tuşuna basın ve &quot;Köprüler kullanılsın&quot; seçeneğini etkinleştirin. Eğer varsayılan köprüler çalışmıyorsa &quot;Köprüler isteyin&quot; tuşu ile veya <a href="https://t.me/GetBridgesBot" target="_blank" rel="noreferrer">Tor&#39;un Telegram botuyla</a> yeni köprü adresleri alabilirsiniz.</p><p>Orbot: Orbot&#39;u açtıktan sonra &quot;Nasil bağlanılacağını seç&quot; tuşuna basın ve &quot;Tor&#39;dan köprü (Obfs4)&quot; seçeneğini seçip &quot;Sonraki&quot; tuşuna girin ve ekrandaki karakterleri girdikten sonra Bağlan tuşuna basın.</p><ul><li>Tor Browser: <a href="https://play.google.com/store/apps/details?id=org.torproject.torbrowser&amp;hl=tr" target="_blank" rel="noreferrer">Android: Google Play Store</a>, <a href="https://www.torproject.org/tr/download/" target="_blank" rel="noreferrer">Windows, macOS, Linux, Android: Tor web sitesi</a></li><li>Orbot: <a href="https://play.google.com/store/apps/details?id=org.torproject.android&amp;hl=tr" target="_blank" rel="noreferrer">Android: Google Play Store</a>, <a href="https://apps.apple.com/us/app/orbot/id1609461599?platform=iphone" target="_blank" rel="noreferrer">iOS, macOS: App Store</a></li></ul><p>Tor Browser, trafiğinizi Tor ağından geçiren bir tarayıcıyken Orbot, cihazınızın tüm trafiğini Tor üzerinden geçirir. Bu demektir ki Orbot kullandığınızda Twitter, WhatsApp vb. gibi uygulamaları yasaklı olsa dahi kullanabilirsiniz.</p><p>Eğer VPN servislerine erişmekte zorluk çekiyorsanız Tor ağı aracılığıyla sansürü aşabilirsiniz.</p><p>Tor üzerinden internet bağlantısı kurduğunuzda trafiğiniz, konumunuzu ve etkinliğinizi sizi izlemeye çalışanlardan gizleyen ve dünya çapındaki gönüllüler tarafından işletilen bir aktarıcı ağı üzerinden geçirilir.</p><h1 id="dpi-nedir-ne-ise-yarar" tabindex="-1">DPI nedir? Ne işe yarar? <a class="header-anchor" href="#dpi-nedir-ne-ise-yarar" aria-label="Permalink to &quot;DPI nedir? Ne işe yarar?&quot;">​</a></h1><p>DPI (Derin Paket İncelemesi - Deep Packet Inspection), internet trafiğini analiz eden gelişmiş bir ağ gözetim teknolojisidir. Standart ağ analiz araçlarından farklı olarak, sadece paket başlıklarını değil, içeriğini de inceleyebilir.</p><p>Bu teknoloji, internet servis sağlayıcıları (İSS&#39;ler), hükümetler ve büyük şirketler tarafından trafik yönetimi, sansür, güvenlik ve gözetim amaçlarıyla kullanılır.</p><p>DPI araçları ile ilgili olan ve meraklısına teknik bilgi içeren aşağıdaki videoları öneriyoruz. <br><a href="https://youtu.be/TrtUh1njQgA" target="_blank" rel="noreferrer">https://youtu.be/TrtUh1njQgA</a><br><a href="https://youtu.be/aeHO7xxje68" target="_blank" rel="noreferrer">https://youtu.be/aeHO7xxje68</a></p><h1 id="goodbyedpi" tabindex="-1">GoodbyeDPI <a class="header-anchor" href="#goodbyedpi" aria-label="Permalink to &quot;GoodbyeDPI&quot;">​</a></h1><p>GoodByeDPI açık kaynak kodlu özgür bir yazılımdır, maalesef Türkiye&#39;ye benzer şekilde basın ve iletişim özgürlüğünü kısıtlayan Rus hükümetine karşı Rus yazılımcılar tarafından geliştirilmiştir, VPN&#39;den farklı olarak bu kendi bilgisayarınızda çalışır.</p><p><a href="https://www.technopat.net/sosyal/konu/discorda-vpnsiz-giris-goodbyedpi-tuerkiye-versiyonu.3462776/" target="_blank" rel="noreferrer">https://www.technopat.net/sosyal/konu/discorda-vpnsiz-giris-goodbyedpi-tuerkiye-versiyonu.3462776/</a></p><h1 id="byedpi" tabindex="-1">ByeDPI <a class="header-anchor" href="#byedpi" aria-label="Permalink to &quot;ByeDPI&quot;">​</a></h1><p>GoodByeDPI&#39;ın Android için olan versiyonu [ByeDPI] (<a href="https://github.com/dovecoteescapee/ByeDPIAndroid" target="_blank" rel="noreferrer">https://github.com/dovecoteescapee/ByeDPIAndroid</a>)</p>',41)]))}const g=a(l,[["render",t]]);export{b as __pageData,g as default};
