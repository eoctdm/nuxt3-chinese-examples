export default [
  {
    url: "https://www.dvtop.cn/",
    text: "&lt;&lt; 网站首页",
    external: true
  },
  {
    url: "/more/source-code",
    text: "&gt;&gt; 教程目录和示例源代码下载",
    title: "教程目录和示例源代码下载",
    keywords: "教程目录,示例源代码,Nuxt3",
    description: "教程适合Nuxt3初学者学习和实践，资深者快速参考，爱好者持续跟踪新功能和最佳实践。"
  },
  {
    url: "/component/rule",
    text: "4.3.1 约定引用组件",
    title: "约定引用组件",
    keywords: "约定引用组件",
    description: '组件名称约定为目录加上组件文件名的camelCase（驼峰式）命名方法。'
  },
  {
    url: "/component/dynamic",
    text: "4.3.2 动态引用组件",
    title: "动态引用组件",
    keywords: "动态引用组件",
    description: '使用Vue的<component :is="someComputedComponent">语法。'
  },
  {
    url: "/layout/custom",
    text: "4.4.2 自定义布局",
    title: "页面内自定义布局和动态更改布局",
    keywords: "自定义布局",
    description: '在页面中通过<NuxtLayout name="布局名称（kebab-case）">可以指定布局。'
  },
  {
    url: "/composable/state",
    text: "4.5 模块化代码",
    title: "模块化代码",
    keywords: "模块化代码",
    description: '模块化代码包括工具包（utils）和公共函数代码（composables）。'
  },
  {
    url: "/route/static",
    text: "4.6.1 页面路径",
    title: "页面路径",
    keywords: "页面路径",
    description: 'Nuxt3采用约定路由方式。'
  },
  {
    url: "/route/dynamic/by20221218",
    text: "4.6.2 动态路由",
    title: "动态路由",
    keywords: "动态路由",
    description: '在pages目录下的路径或文件名中如果包含方括号，他们将被转换为动态路由参数。'
  },
  {
    url: "/route/all/china/gd/sz",
    text: "4.6.3 通配路由",
    title: "通配路由",
    keywords: "通配路由",
    description: '在pages目录下的文件名可以通过“[...参数名]”来设置通配路由。'
  },
  {
    url: "/route/nested/child",
    text: "4.6.4 嵌套路由",
    title: "嵌套路由",
    keywords: "嵌套路由",
    description: '在pages目录下的目录名与此目录下文件名一致时，Nuxt3会自动生成嵌套路由。'
  },
  {
    url: "/route/custom/my/wel",
    text: "4.6.5 自定义路由",
    title: "自定义路由",
    keywords: "自定义路由",
    description: '创建自定义路由配置，可以替换或新增Nuxt3自动生成的路由。'
  },
  {
    url: "/middleware/outside?url="+encodeURIComponent("https://www.163.com"),
    text: "4.7.1 全局路由中间件（跳转到外部网址）",
    title: "全局路由中间件",
    keywords: "全局路由中间件",
    description: '全局路由中间件配置后会在项目所有导航前执行此配置文件中的逻辑，以决定是继续、异常还是导航到新页面。'
  },
  {
    url: "/middleware/named",
    text: "4.7.2 命名路由中间件",
    title: "命名路由中间件",
    keywords: "命名路由中间件",
    description: '页面通过配置使用那个路由中间件。'
  },
  {
    url: "/middleware/page",
    text: "4.7.3 内联路由中间件",
    title: "内联路由中间件",
    keywords: "内联路由中间件",
    description: '内联路由中间件也叫匿名路由中间件，直接在使用他们的页面中定义。'
  },
  {
    url: "/middleware/validate998",
    text: "4.7.4 页面路由验证器",
    title: "页面路由验证器",
    keywords: "页面路由验证器",
    description: '如果是简单的路由验证逻辑，可以使用路由验证器解决。'
  },
  {
    url: "/navigation/component",
    text: "4.8.1 组件式导航",
    title: "组件式导航",
    keywords: "组件式导航",
    description: '在应用程序的页面之间导航，可使用组件跳转页面'
  },
  {
    url: "/navigation/programmatic",
    text: "4.8.2 编程式导航",
    title: "编程式导航",
    keywords: "编程式导航",
    description: '通过路由器助手函数，允许通过Nuxt应用程序以编程方式导航，支持内部路由和跳转到外部网址。'
  },
  {
    url: "/transition/page",
    text: "4.9.1 页面过渡动画之页面自定义过渡名称",
    title: "页面过渡动画",
    keywords: "页面过渡动画",
    description: '页面过渡动画配置pageTransition开启，同时需要在app.vue中配置过渡动画样式即可。'
  },
  {
    url: "/plugin/base",
    text: "4.10.1 自主开发插件",
    title: "自主开发插件",
    keywords: "开发插件",
    description: 'Nuxt3会自动读取插件目录顶层的文件，并在创建Vue应用程序时加载和注册。'
  },
  {
    url: "/plugin/antd",
    text: "4.10.2 使用AntD插件",
    title: "使用AntD插",
    keywords: "AntD插",
    description: 'ant-design-vue（简称antd）为 Web 应用提供了丰富的基础 UI 组件，并持续探索企业级应用的最佳 UI 实践。'
  },
  {
    url: "/plugin/bootstrap/link",
    text: "4.10.3 使用Bootstrap插件：浏览器引用方式",
    title: "Bootstrap插件浏览器引用",
    keywords: "Bootstrap插件",
    description: '浏览器引用即是在Nuxt3配置中增加在客户端渲染时加载Bootstrap的css和js。'
  },
  {
    url: "/plugin/bootstrap/unify",
    text: "4.10.3 使用Bootstrap插件：安装融合方式",
    title: "Bootstrap插件安装使用",
    keywords: "Bootstrap插件",
    description: '安装融合方式即是在Nuxt3项目中安装Bootstrap，并且通过插件的方式来使用。'
  },
  {
    url: "/content/simple",
    text: "4.11 内容管理（content）",
    title: "内容管理（content）",
    keywords: "内容管理",
    description: 'Nuxt3 Content为独立模块，需要单独安装和使用。'
  },
  {
    url: "/resources/public",
    text: "4.12.1 public目录（静态资源）",
    title: "public目录（静态资源）",
    keywords: "public目录",
    description: '目录public内容按原样在服务端根目录下提供。'
  },
  {
    url: "/resources/assets",
    text: "4.12.2 assets目录（静态资源）",
    title: "assets目录（静态资源）",
    keywords: "assets目录",
    description: '目录assets内容通过构建工具（Vite或Webpack）直接打包。'
  },
  {
    url: "/service/api",
    text: "4.13.2 API接口：服务端处理（server）",
    title: "API接口：服务端处理（server）",
    keywords: "API接口",
    description: 'api接口可以将后台数据存取操作统一封装，方便开发和运维。'
  },
  {
    url: "${baseURL}server/china/hello/mike?type=web",
    text: "4.13.3 ROUTES路由：服务端处理（server）",
    external: true,
    title: "ROUTES路由：服务端处理（server）",
    keywords: "ROUTES路由",
    description: '可以作为数据API或直接在浏览器中访问。'
  },
  {
    url: "/data/fetch",
    text: "4.14.2 $fetch：数据获取",
    title: "$fetch：数据获取",
    keywords: "$fetch",
    description: '$fetch是Nuxt3对ohmyfetch的封装. 全局公开方便直接调用的API。'
  },
  {
    url: "/data/use-async-data",
    text: "4.14.3 useAsyncData和useLazyAsyncData：数据获取",
    title: "useAsyncData和useLazyAsyncData：数据获取",
    keywords: "useAsyncData,useLazyAsyncData",
    description: 'useLazyAsyncData是通过将lazy选项设置为true的useAsyncData的包装器。'
  },
  {
    url: "/data/use-fetch",
    text: "4.14.4 useFetch和useLazyFetch：数据获取",
    title: "useFetch和useLazyFetch：数据获取",
    keywords: "useFetch,useLazyFetch",
    description: 'useLazyFetch是通过将lazy选项设置为true的useFetch的包装器。'
  },
  {
    url: "/more/error",
    text: "4.15 异常处理",
    title: "异常处理",
    keywords: "异常处理",
    description: '获取在不同的上下文中可能会发生一些不可预见的用户运行时错误进行异常处理。'
  },
  {
    url: "/more/csr",
    text: "4.16.3 混合渲染之指定客户端渲染",
    title: "混合渲染之指定客户端渲染",
    keywords: "客户端渲染",
    description: '传统的Vue渲染方式。在浏览器下载并解析包含创建当前界面的指令的所有JavaScript代码后生成HTML元素。'
  },
  {
    url: "/seo/meta",
    text: "4.17.2 SEO配置之路由元数据使用",
    title: "SEO配置之路由元数据使用",
    keywords: "SEO",
    description: 'SEO（Search Engine Optimization）即搜索引擎优化，利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名。'
  },
  {
    url: "/seo/base",
    text: "4.17.2 SEO配置之组件化和编程化使用",
    title: "SEO配置之组件化和编程化使用",
    keywords: "组件化SEO,编程化SEO",
    description: 'Nuxt3提供Title等组件化SEO和useHead等编程化SEO以便可以在模板或JS中直接与SEO元数据交互。'
  },
  {
    url: "/more/theme",
    text: "4.18.1 全局sass变量和动态样式",
    title: "全局sass变量和动态样式",
    keywords: "sass变量",
    description: '为了让项目的风格能统一调整，可以将大小、颜色等通过使用sass变量管理起来，统一定义和各处使用。'
  },
  {
    url: "/more/module-color-mode",
    text: "4.18.2 Nuxt3模块（color-mode示例）",
    title: "Nuxt3模块（color-mode示例）",
    keywords: "color-mode",
    description: 'Nuxt3提供了一个模块系统来扩展框架核心并简化集成，使用color-mode（自动检测和切换深色模式的Nuxt3模块）为例。'
  },
  {
    url: "/more/suffix.html",
    text: "4.18.3 常用配置之增加路由后缀（如访问URL后加.html）",
    title: "常用配置之增加路由后缀（如访问URL后加.html）",
    keywords: "路由后缀",
    keywords: "路由后缀",
    description: '根据用户访问URL习惯，可直接在page的文件名中增加自己需要的后缀，实现访问。'
  },
]