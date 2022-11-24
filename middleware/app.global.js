import pageLinks from "~/assets/data/pages"
import headConfig from "~/assets/data/head.js"
export default defineNuxtRouteMiddleware((to, from) => {
  const toPath = to.fullPath;

  if( toPath.indexOf('/middleware/outside')==0 && to.query.url){
    return navigateTo( to.query.url, {
      external: true  
    });
  }

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