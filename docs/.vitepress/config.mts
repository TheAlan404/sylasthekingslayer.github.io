import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Diren",
  description: "Protestocular için kapsamlı bilgi ve güvenlik kaynağı",
  themeConfig: {
    logo: '/logo.svg',
    nav: [],
    sidebar: {
      '/safety/': [
        {
          text: 'Güvenlik Bilgileri',
          items: [
            { text: 'Temel Güvenlik', link: '/safety/' },
            { text: 'Gazla Müdahale', link: '/safety/tear-gas' },
            { text: 'Dijital Güvenlik', link: '/safety/digital' },
            { text: 'İlk Yardım', link: '/safety/first-aid' },
            { text: 'Belgeleme Rehberi', link: '/safety/documentation' },
          ]
        }
      ],
      '/news/': [
        {
          text: 'Haberler ve Güncellemeler',
          items: [
            { text: 'Son Haberler', link: '/news/' },
            { text: 'Medya Kaynakları', link: '/news/sources' },
            { text: 'Doğrulanmış Bilgiler', link: '/news/verified' },
          ]
        }
      ],
      '/groups/': [
        {
          text: 'Protesto Grupları',
          items: [
            { text: 'Rehber', link: '/groups/' },
            { text: 'İletişim kanalları', link: '/groups/telegram' },
          ]
        }
      ],
    },
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
