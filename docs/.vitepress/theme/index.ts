// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import enhanceApp from './enhanceApp'

// Bileşenlerimizi içe aktarıyoruz
import RandomContent from './components/RandomContent.vue'
import HomeLayout from './components/HomeLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    // Özel düzeni kullanıyoruz
    return h(HomeLayout)
  },
  enhanceApp({ app }) {
    // Global bileşen olarak kayıt
    app.component('RandomContent', RandomContent)
  }
} satisfies Theme