
export default {
  /*
  ** Headers of the page
  */
  components: true,
  head: {
    title: 'Tatsuya Amano | 天野辰哉',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Tatsuya Amano, 天野辰哉' },
      { hid: 'description', name: 'description', content: 'Tatsuya Amano, Osaka University Ph.D. Course Student' }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/70f0b55891.js"
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap'

      },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~plugins/ga.js", ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/style-resources'],  
  styleResources: {  
    css: ['~/static/reset.scss']  ,
    scss: ['~/static/global.scss']  ,
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  /*
  router: {
    base: "/~t-amano/"
  }
  */
}
