export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Teman Tumbuh — Digital Growth Partner untuk UMKM Indonesia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Teman Tumbuh membantu UMKM tampil profesional, mudah ditemukan di Google, dan mendapat lebih banyak pelanggan.' },
        { property: 'og:title', content: 'Teman Tumbuh — Digital Growth Partner UMKM' },
        { name: 'theme-color', content: '#1f7a3a' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400&display=swap' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-04-03',
})
