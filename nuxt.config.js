//
// In order to fix cache problem, we are adding a random number for every build
// [contenthash] generates for changes, but Math.random() generates for every build

import { GET_ENV } from './constants/project/env';

const version = Math.random();

const baseUrl = process.env.NUXT_ENV_BASE_URL;

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

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '~/assets/styles/main.scss',
  ],

  env: {
    baseUrl,
  },

  target: 'static',

  loading: '~/components/PageLoading/PageLoading.vue',

  // Middleware
  // middleware: ['global/index'],

  router: {
    base: baseUrl,
    // middleware: 'global/index',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // Plugins
    '~/plugins/env.js',
    '~/plugins/clipboard.js',
    '~/plugins/vee-validate.js',
    '~/plugins/vueSelect/vueSelect.js',
    { src: '~/plugins/vueToasted/vueToasted.js', ssr: false },

    // Mixins
    '~/mixins/global/data.js',
    '~/mixins/global/methods.js',

    // Directives
    '~/directives/tooltip/Tooltip.js',
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
        httpEndpoint: GET_ENV().APOLLO_ENDPOINT,
      },
    },
    authenticationType: GET_ENV().APOLLO_AUTHENTICATION_TYPE,
  },

  i18n: {
    locales: [{ code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr' }],
    langDir: 'constants/project/locales/',
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
    analyze: false, // true || false
    filenames: {
      app: ({ isDev, isModern }) =>
        isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[contenthash:7]${isModern ? '.modern' : ''}.${version}.js`,
      chunk: ({ isDev, isModern }) =>
        isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[contenthash:7]${isModern ? '.modern' : ''}.${version}.js`,
      css: ({ isDev }) => (isDev ? '[name].css' : `css/[contenthash:7].${version}.css`),
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : `img/[name].[contenthash:7].${version}.[ext]`),
      font: ({ isDev }) => (isDev ? '[path][name].[ext]' : `fonts/[name].[contenthash:7].${version}.[ext]`),
      video: ({ isDev }) => (isDev ? '[path][name].[ext]' : `videos/[name].[contenthash:7].${version}.[ext]`),
    },
  },
};
