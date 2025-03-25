import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Ana Menü  ",
  description: "Protestocular için kapsamlı bilgi ve güvenlik kaynağı",
  themeConfig: {
    nav: [],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sylasthekingslayer' },
      { icon: 'x', link: 'https://x.com/geryuz42' },
      { icon: 'telegram', link: 'https://t.me/geris3' },
    ],
    footer: {
      message: 'MIT Lisansı ile yayımlanmıştır.',
      copyright: 'Copyright © 2025 Diren Projesi'
    }
  },

  vite: {
    optimizeDeps: {
      exclude: ['leaflet'],
    },
  },

  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css' }]
  ]
})
