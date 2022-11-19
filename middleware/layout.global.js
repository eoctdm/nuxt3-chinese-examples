export default defineNuxtRouteMiddleware((to, from) => {
  //全局中间件，指定此路由页面的布局
  if( to.fullPath.indexOf("/component/dynamic")==0){
    setPageLayout('custom-first');
  }
})