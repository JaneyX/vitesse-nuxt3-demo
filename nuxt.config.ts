import { pwa } from './config/pwa'
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
  ],
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/css/main.css',
    'aos/dist/aos.css',
  ],
  plugins: ['~/plugins/mdi.js'],
  colorMode: {
    classSuffix: '',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },
  devServer: {
    port: 5177,
  },
  app: {
    head: {
      title: 'Website',
      viewport: 'width=device-width,initial-scale=1',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
        },
      ],
    },
    baseURL: '/website/',
  },
  pwa,
})
