import{_ as a,c as i,o as n,ae as l}from"./chunks/framework.CAs8kUtx.js";const c=JSON.parse('{"title":"Markdown Uzantı Örnekleri","description":"","frontmatter":{},"headers":[],"relativePath":"markdown-examples.md","filePath":"markdown-examples.md"}'),e={name:"markdown-examples.md"};function t(p,s,r,h,k,d){return n(),i("div",null,s[0]||(s[0]=[l(`<h1 id="markdown-uzantı-ornekleri" tabindex="-1">Markdown Uzantı Örnekleri <a class="header-anchor" href="#markdown-uzantı-ornekleri" aria-label="Permalink to &quot;Markdown Uzantı Örnekleri&quot;">​</a></h1><p>Bu sayfa, VitePress tarafından sağlanan bazı yerleşik markdown uzantılarını göstermektedir.</p><h2 id="sozdizimi-vurgulama" tabindex="-1">Sözdizimi Vurgulama <a class="header-anchor" href="#sozdizimi-vurgulama" aria-label="Permalink to &quot;Sözdizimi Vurgulama&quot;">​</a></h2><p>VitePress, <a href="https://github.com/shikijs/shiki" target="_blank" rel="noreferrer">Shiki</a> tarafından desteklenen Sözdizimi Vurgulama özelliğini, satır vurgulama gibi ek özelliklerle birlikte sunar:</p><p><strong>Giriş</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`js{4}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export default {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  data () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    return {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      msg: &#39;Vurgulandı!&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span></code></pre></div><p><strong>Çıktı</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      msg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Vurgulandı!&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="ozel-kapsayıcılar" tabindex="-1">Özel Kapsayıcılar <a class="header-anchor" href="#ozel-kapsayıcılar" aria-label="Permalink to &quot;Özel Kapsayıcılar&quot;">​</a></h2><p><strong>Giriş</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: info</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Bu bir bilgi kutusudur.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: tip</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Bu bir ipucu.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: warning</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Bu bir uyarı.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: danger</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Bu tehlikeli bir uyarıdır.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: details</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Bu bir detaylar bloğudur.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><p><strong>Çıktı</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Bu bir bilgi kutusudur.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Bu bir ipucu.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Bu bir uyarı.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Bu tehlikeli bir uyarıdır.</p></div><details class="details custom-block"><summary>Details</summary><p>Bu bir detaylar bloğudur.</p></details><h2 id="daha-fazla-bilgi" tabindex="-1">Daha Fazla Bilgi <a class="header-anchor" href="#daha-fazla-bilgi" aria-label="Permalink to &quot;Daha Fazla Bilgi&quot;">​</a></h2><p><a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">Markdown uzantılarının tam listesi</a> için belgelere göz atın.</p>`,19)]))}const o=a(e,[["render",t]]);export{c as __pageData,o as default};
