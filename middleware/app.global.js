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
    let text = pageLink.text;
    const idx = text.indexOf(" ");
    if( idx>=0) text = text.substring(idx+1);
    if( text){
      const heads = {
        title: `${text}-${headConfig.data.title}`,
        meta: []
      };
      heads.meta.push( ...headConfig.buildMeta({
        title: text,
        keywords: text+","+headConfig.data.keywords,
        description: text+"-"+headConfig.data.description
      }));
      useHead(heads);
    }
  }
})