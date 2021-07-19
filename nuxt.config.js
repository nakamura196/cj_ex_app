import colors from 'vuetify/es5/util/colors'
const fs = require('fs')

const environment = process.env.NODE_ENV
const env = require(`./env/${environment}.ts`)

env.bc = true

env.index = "data/index.json"

env.aggs = {
  category: {
    key: "category",
    sort: '',
    label: '分類',
    value: {},
    more: false,
    open:true
  },
  図: {
    key: "図",
    sort: '',
    label: '図',
    value: {},
    more: false,
    open:true
  }
}

env.hide = []

env.list = [
  "図", "category"
]

env.detail = [
  {
    label: "図",
    value: "図"
  },
  {
    label: "分類",
    value: "category"
  },
  {
    label: "現在の地名",
    value: "現在の地名",
    type: "text"
  },
  {
    label: "リンク",
    value: "リンク",
    type: "link"
  },
  {
    label: "備考",
    value: "備考",
    type: "text"
  },
  {
    label: "沖縄県教育委員会編『琉球国絵図史料集』第１集の番号",
    value: "番号",
    type: "text"
  }
]

env.sort = [
  {label: "適合度", value: "_score"},
]

env.defaultSort = "_score:desc"

env.layout = [
  {
    label: 'list',
    value: 'list',
    icon: 'mdi-view-list',
    component: "search-layout-list"
  },
  {
    label: 'grid',
    value: 'grid',
    icon: 'mdi-view-grid',
    component: "search-layout-grid"
  },
  {
    label: 'table',
    value: 'table',
    icon: 'mdi-table',
    component: "custom-search-layout-table"
  },
  {
    label: 'graph',
    value: 'graph',
    icon: 'mdi-chart-bar',
    component: "search-layout-graph"
  },
  {
    label: 'map',
    value: 'map',
    icon: 'mdi-map',
    component: "custom-search-layout-map",
    hidePagination: true
  }
]

env.defaultLayout = "table"

const legend = JSON.parse(fs.readFileSync('static/data/legend.json'))
env.legend = legend


env.advanced = [
  {
    label: "図",
    type: "select",
    key: "図",
    value: "",
    values: ["正保琉球国絵図写"]
  },
  /*
  {
    label: "地名/記述",
    type: "text",
    key: "地名/記述",
    value: "",
  },
  {
    label: "備考",
    type: "text",
    key: "備考",
    value: "",
  }
  */
]

env.viewer = "curation"
env.visualization = "https://nakamura196.github.io/dd2"

const settings = JSON.parse(fs.readFileSync('static/data/settings.json'))
env.settings = settings

const norm = JSON.parse(fs.readFileSync('static/data/norm.json'))
env.itaiji =norm


// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/cj_ex_app/',
        },
      }
    : {}

// path
const baseUrl = env.BASE_URL || ''
const baseDir = env.BASE_DIR || '/'
const basePath = baseUrl + baseDir

// meta
const lang = 'ja'
const siteName = 'CJ Gallery'
env.siteName = siteName

const siteDesc = ''
env.siteDesc = siteDesc

const footer = ''
env.footer = footer

const siteKeywords = ''

// images
const iconImages = baseDir + 'img/icons/'
const ogpImages = basePath + 'img/ogp/' // cdnPath + 'img/ogp/'

env.top = basePath + 'img/ogp/home.jpg'

// pwa
const shortName = '琉球国絵図'
const manifestIcon = 'img/icons/icon-512.png'
// const splashscreens = cdnPath + 'img/splashscreens/'

env.DATA_URL = "https://hi-ut.github.io/ryukyu_data"

export default {
  server: {
    port: 8003 // デフォルト: 3000
  },
  // Target (https://go.nuxtjs.dev/config-target)

  ssr: false,
  target: 'static',
  // srcDir: 'src/',

  env,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang,
    },
    titleTemplate: `%s - ${siteName}`,
    title: siteName,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'format-detection',
        content: 'telephone=no, email=no, address=no',
      },
      // SEO関連
      { hid: 'description', name: 'description', content: siteDesc },
      { hid: 'keywords', name: 'keywords', content: siteKeywords },
      // ogp関連
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteName,
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: basePath },
      { hid: 'og:title', property: 'og:title', content: siteName },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDesc,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${ogpImages}home.jpg`,
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      // pwa iOS
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
    ],
    link: [
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: iconImages + 'favicon-16.png',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: iconImages + 'favicon-32.png',
      },
      {
        rel: 'icon',
        sizes: '48x48',
        type: 'image/png',
        href: iconImages + 'favicon-48.png',
      },
      {
        rel: 'icon',
        sizes: '72x72',
        type: 'image/png',
        href: iconImages + 'favicon-72.png',
      },
      // apple touch icon
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: iconImages + 'apple-touch-icon.png',
      },
      {
        rel: 'stylesheet',
        href:
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      },
    ],
  },

  manifest: {
    lang,
    name: siteName,
    short_name: shortName,
    description: siteDesc,
    background_color: '#ffffff',
    theme_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait',
  },
  icon: {
    iconFileName: manifestIcon,
  },

  loading: { color: '#E64A19', height: '5px' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/utils.ts',
    '@/plugins/searchUtils.ts',
    '@/plugins/leaflet.js',
    '@/plugins/vue-reactivesearch.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  moment: {
    // ここにオプションが記述できる
    locales: ['ja'],
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'nuxt-i18n',
    // Simple usage
    // '@nuxtjs/amp',
    '@nuxt/content',
    '@nuxtjs/google-gtag'
  ],

  'google-gtag': {
    id: 'G-4HCHKW275B',  //サイトのID
    debug: true,  // 開発環境でも表示したい場合
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: baseUrl,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en_US', file: 'en.json' },
      { code: 'ja', iso: 'ja_JP', file: 'ja.json' },
    ],
    defaultLocale: 'ja',
    vueI18nLoader: true,
    lazy: true,
    langDir: 'lang/',
    // strategy: 'no_prefix'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
    //standalone: true, // これを追加！
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
      ]
    }
    */
  },

  ...routerBase,

  generate: {},
}
