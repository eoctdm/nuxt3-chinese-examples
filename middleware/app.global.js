export default defineNuxtRouteMiddleware((to, from) => {
  //全局中间件，如发现请求为指定URL时，且有url参数直接打开外部网址
  if( to.fullPath.indexOf('/middleware/outside')==0 && to.query.url){
    return navigateTo( to.query.url, {
      external: true //允许外部导航
    });
  }
})