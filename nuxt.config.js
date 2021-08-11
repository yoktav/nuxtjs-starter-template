export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    // eslint-disable-next-line quotes
    title: 'NuxtJS Starter Template',
    htmlAttrs: {
      lang: 'en',
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { hid: 'description', name: 'description', content: 'Starter Template' },
      { name: 'theme-color', content: '#1620d7' },
      { name: 'msapplication-TileColor', content: '#1620d7' },
    ],

    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `${process.env.NUXT_ENV_BASE_URL}/favicon/favicon.ico`,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '~/assets/styles/main.scss',
  ],

  env: {
    baseUrl: process.env.NUXT_ENV_BASE_URL,
  },

  target: 'static',

  loading: '~/components/PageLoading/PageLoading.vue',

  // Middleware
  middleware: ['page-restrictions/page-restrictions'],

  router: {
    base: process.env.NUXT_ENV_BASE_URL,
    middleware: 'page-restrictions/page-restrictions',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // Plugins
    '~/plugins/vueSelect/vueSelect.js',
    '~/plugins/clipboard/clipboard.js',
    { src: '~/plugins/vueToasted/vueToasted.js', ssr: false },
    '~/plugins/veeValidate/veeValidate.js',

    // Mixins
    '~/mixins/forLoopkey.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/apollo',
    'nuxt-i18n',
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.NUXT_ENV_APOLLO_ENDPOINT,
      },
    },
    authenticationType: process.env.NUXT_ENV_APOLLO_AUTHENTICATION_TYPE,
  },

  i18n: {
    locales: [{ code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr' }],
    langDir: 'project-constants/locales/',
    defaultLocale: 'en',

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true, // recommended
    },
  },

  svgSprite: {
    input: '~/assets/svg/original',
    output: '~/assets/svg/generated',
    defaultSprite: 'sprite',
    elementClass: 'c-icon',
    spriteClassPrefix: '',
  },

  // Storybook Options: https://storybook.nuxtjs.org/options/
  storybook: {},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
  },
};
