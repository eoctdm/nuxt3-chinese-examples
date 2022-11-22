// https://v3.nuxtjs.org/api/configuration/nuxt.config
import headConfig from "./assets/data/head.js"
const baseURL = "/"; // /nuxt/examples/3.0.0/ #结尾必须加/
export default defineNuxtConfig({
  routeRules: {
    // '/**': { ssr: false }, //将所有路由ssr关闭，即整个网站为客户端渲染
    // '/navigation/**': { ssr: false }, //匹配的路由为客户端渲染
    // '/navigation/component': { ssr: false }, //匹配的页面为客户端渲染
  },
  css: [
    '~/assets/css/app.scss',
    //bootstrap V5.2.2引用scss后台终端会有错误提示，本处引用css；新版本可尝试
    //'bootstrap/scss/bootstrap.scss',
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.scss',
    'ant-design-vue/dist/antd.css',
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode'
  ],
  app: {
    baseURL, //在头部定义
    //pageTransition: false, //全局关闭页面过渡动画
    pageTransition: { name: 'page', mode: 'out-in' },
    //layoutTransition: false, //全局关闭布局过渡动画
    layoutTransition: { name: 'rotate', mode: 'out-in' },
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      title: headConfig.data.title,
      htmlAttrs: {
        lang: 'zh'
      },
      meta: [
        { name: 'content-type', content: 'text/html;charset=utf-8' },
        { name: 'keywords', content:  headConfig.data.keywords},
        { name: 'description', content:  headConfig.data.description},
        { ['http-equiv']: 'x-ua-compatible', content: 'ie=edge,chrome=1' },
        { name: 'baidu-site-verification', content: '' },
        { property: 'og:title', content: headConfig.data.title },
        { property: 'og:keywords', content: headConfig.data.keywords },
        { property: 'og:description', content: headConfig.data.description },
      ],
      link: [
        { rel: 'shortcut icon', href: baseURL+'favicon.ico', type: 'image/x-icon'},
        /* 客户端引用bootstrap方式，不推荐
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css', integrity: 'sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css', integrity: '', crossorigin: 'anonymous' },
        */
      ],
      script: [
        //放在script最前，为异步加载；?号后更换为您申请的KEY。
        { src: 'https://hm.baidu.com/hm.js?f6f1fef5f3a52df081128b261a04438c' },
        /* 客户端引用bootstrap方式，不推荐；在script和link中，使用body: true配置将其添加到body里最后元素
        { body: true, src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js', integrity: 'sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3', crossorigin: 'anonymous' },
        { body: true, src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js', integrity: 'sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk', crossorigin: 'anonymous' },
        */
      ],
    }
  },
  /* 全局动态引用组件，页面无需resolveComponent，不推荐
  components: {
    global: true,
    dirs: ['~/components']
  },
  */
  imports: {
    dirs: [
      'composables/**', //配置全子目录支持自动导入
    ]
  },
  vite: {
    css: {
      //引入scss全局变量
      preprocessorOptions: {
        scss: {
          additionalData: '@import "assets/css/variable.scss";',
        }
      }
    }
  }
})
