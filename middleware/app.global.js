import pageLinks from "~/assets/data/pages"
import headConfig from "~/assets/data/head.js"
export default defineNuxtRouteMiddleware((to, from) => {
  const toPath = to.fullPath;
  //全局中间件，如发现请求为指定URL时，且有url参数直接打开外部网址
  if( toPath.indexOf('/middleware/outside')==0 && to.query.url){
    return navigateTo( to.query.url, {
      external: true //允许外部导航
    });
  }
  //统一设置页面meta内容
  const pageLink = pageLinks.find(item=>item.url.indexOf(toPath)==0);
  if( toPath && toPath!="/" && toPath!="/index.html" && pageLink && pageLink.text){
    const pageTKD = {
      title: `${pageLink.title}-${headConfig.data.appname}`,
      keywords: pageLink.keywords,
      description: pageLink.description
    };
    if( pageLink.title){
      const heads = {
        title: pageTKD.title,
        meta: []
      };
      heads.meta.push( ...headConfig.buildMeta(pageTKD));
      useHead(heads);
      const tkdData = usePageTKD();
      tkdData.value = pageTKD;
    }
  }
})