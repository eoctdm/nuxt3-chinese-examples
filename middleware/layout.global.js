export default defineNuxtRouteMiddleware((to, from) => {

  if( to.fullPath.indexOf("/component/dynamic")==0){
    setPageLayout('custom-first');
  }
})