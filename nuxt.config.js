export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Macaiki Project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      // { 'http-equiv': 'Content-Security-Policy', content:'upgrade-insecure-requests' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],
  target: 'static',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/api',
    '~/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
    // '@nuxtjs/auth-next'
  ],
  auth: {
  },
  // router: {
  //   middleware: ['auth']
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'http://108.136.47.34:8080/api/v1',
    baseURL: '/',
    browserBaseURL: '/',
    proxy: true,
  },
  proxy: {
    // '/api/login': {
    //   target: 'http://108.136.47.34:8080/api/v1/login',
    //   pathRewrite: {
    //     '^/api/login': ''
    //   },
    // },
    // '/api/register': 'http://108.136.47.34:8080/api/v1/register',
    '/api': {
      target: 'http://108.136.47.34:8080/api/v1',
      // pathRewrite: {  
      //   '^/api/': ''
      // }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
