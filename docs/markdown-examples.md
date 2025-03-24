# Markdown Uzantı Örnekleri

Bu sayfa, VitePress tarafından sağlanan bazı yerleşik markdown uzantılarını göstermektedir.

## Sözdizimi Vurgulama

VitePress, [Shiki](https://github.com/shikijs/shiki) tarafından desteklenen Sözdizimi Vurgulama özelliğini, satır vurgulama gibi ek özelliklerle birlikte sunar:

**Giriş**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Vurgulandı!'
    }
  }
}
```
````

**Çıktı**

```js{4}
export default {
  data () {
    return {
      msg: 'Vurgulandı!'
    }
  }
}
```

## Özel Kapsayıcılar

**Giriş**

```md
::: info
Bu bir bilgi kutusudur.
:::

::: tip
Bu bir ipucu.
:::

::: warning
Bu bir uyarı.
:::

::: danger
Bu tehlikeli bir uyarıdır.
:::

::: details
Bu bir detaylar bloğudur.
:::
```

**Çıktı**

::: info
Bu bir bilgi kutusudur.
:::

::: tip
Bu bir ipucu.
:::

::: warning
Bu bir uyarı.
:::

::: danger
Bu tehlikeli bir uyarıdır.
:::

::: details
Bu bir detaylar bloğudur.
:::

## Daha Fazla Bilgi

[Markdown uzantılarının tam listesi](https://vitepress.dev/guide/markdown) için belgelere göz atın.