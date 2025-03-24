---
outline: deep
---

# Çalışma Zamanı API Örnekleri

Bu sayfa, VitePress tarafından sağlanan bazı çalışma zamanı API'lerinin kullanımını göstermektedir.

Ana `useData()` API'si, mevcut sayfa için site, tema ve sayfa verilerine erişmek için kullanılabilir. Hem `.md` hem de `.vue` dosyalarında çalışır:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Sonuçlar

### Tema Verileri
<pre>{{ theme }}</pre>

### Sayfa Verileri
<pre>{{ page }}</pre>

### Sayfa Ön Verileri (Frontmatter)
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Sonuçlar

### Tema Verileri
<pre>{{ theme }}</pre>

### Sayfa Verileri
<pre>{{ page }}</pre>

### Sayfa Ön Verileri (Frontmatter)
<pre>{{ frontmatter }}</pre>

## Daha Fazla Bilgi

Çalışma zamanı API'lerinin tam listesi için [belgelere](https://vitepress.dev/reference/runtime-api#usedata) göz atın.