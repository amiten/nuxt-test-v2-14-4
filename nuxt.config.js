// path
const baseHost = process.env.BASE_HOST || 'http://localhost:3000'
const baseDir = process.env.BASE_DIR || '/'
const baseUrl = baseHost + baseDir

// meta
const lang = 'ja'
const siteName = '株式会社サイト名'
const siteDesc = '共通のディスクリプション。'
const siteKeywords = '１つ目,２つ目,３つ目,４つ目'

// images
const ogpImages = baseUrl + 'img/ogp/'

// pwa
const shortName = 'サイト名ショート'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  srcDir: 'src/',
  router: {
    base: baseDir
  },
  // Doc: http://ogp.me/
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang
    },
    titleTemplate: `%s - ${siteName}`,
    meta: [
      // 設定関連
      { charset: 'utf-8' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no, email=no, address=no' },

      // SEO関連
      { hid: 'description', name: 'description', content: siteDesc },
      { hid: 'keywords', name: 'keywords', content: siteKeywords },

      // OGP関連
      { hid: 'og:site_name', property: 'og:site_name', content: siteName },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: baseUrl },
      { hid: 'og:title', property: 'og:title', content: siteName },
      { hid: 'og:description', property: 'og:description', content: siteDesc },
      { hid: 'og:image', property: 'og:image', content: `${ogpImages}home.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      // { name: 'twitter:site', content: '@Twitter' },
      // { property: 'article:publisher', content: 'FacebookURL' },
      // { property: 'fb:app_id', content: 'FacebookAppID' },
    ],
    script: [
      { src: '//polyfill.io/v3/polyfill.min.js?features=es2015%2CWebAnimations%2CIntersectionObserver' }
    ],
    link: [
      // favicon
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' },

      // fonts ※キャッシュ例のために記載
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/css/yakuhanmp.min.css', crossorigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif+JP&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap' },

      // pwa splash screens
      // Doc: https://appsco.pe/developer/splash-screens
      { href: 'iphone5_splash.png', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { href: 'iphone6_splash.png', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { href: 'iphoneplus_splash.png', media: '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)', rel: 'apple-touch-startup-image' },
      { href: 'iphonex_splash.png', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)', rel: 'apple-touch-startup-image' },
      { href: 'iphonexr_splash.png', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { href: 'iphonexsmax_splash.png', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)', rel: 'apple-touch-startup-image' },
      { href: 'ipad_splash.png', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { href: 'ipadpro1_splash.png', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { href: 'ipadpro3_splash.png', media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
      { href: 'ipadpro2_splash.png', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' }
    ],
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/style-resources-module/
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~assets/css/variables.scss'
    ]
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    // Docs: https://github.com/nuxt-community/gtm-module
    '@nuxtjs/gtm',
    // Doc: https://github.com/nuxt-community/sitemap-module
    // ↓ 配列の最後でsitemapモジュールを宣言
    '@nuxtjs/sitemap'
  ],
  pwa: {
    icon: {},
    meta: {
      // mobileAppIOSオプションを有効にする前に、以下記事を一読すること。
      // https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb
      // mobileAppIOS: true
    },
    manifest: {
      lang,
      name: siteName,
      short_name: shortName,
      description: siteDesc,
      background_color: '#ffffff',
      theme_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait'
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://polyfill.io/.*',
          handler: 'cacheFirst'
        },
        {
          urlPattern: '^https://fonts.(?:googleapis|gstatic).com/(.*)',
          handler: 'cacheFirst'
        },
        {
          urlPattern: 'https://cdn.jsdelivr.net/.*',
          handler: 'cacheFirst'
        },
        {
          urlPattern: baseDir + '.*',
          handler: 'staleWhileRevalidate',
          strategyOptions: {
            cacheName: 'my-cache',
            cacheExpiration: {
              maxAgeSeconds: 24 * 60 * 60 * 30
            }
          }
        }
      ]
    }
  },
  gtm: {
    id: 'GTM-MQ3TQLM',
    pageTracking: true,
    // enabled: true, // 常に（npm run devの場合も）GTMイベントを送信
  },
  sitemap: {
    hostname: 'https://example.com',
    // ↓除外ディレクトリやページを指定
    // exclude: [
    //   '/admin/**',
    //   ...
    // ],
    // ↓動的なルーティングで生成したページは明示的に宣言
    // routes: [
    //   '/kind/apple',
    //   '/kind/banana',
    //   ...
    //  ]
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    postcss: {
      preset: {
        autoprefixer: { grid: 'autoplace' }
      }
    }
  },
  generate: {
    fallback: true
  }
}
