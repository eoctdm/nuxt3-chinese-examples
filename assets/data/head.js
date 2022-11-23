const appname = "Nuxt3中文开发教程";
const data = {
  appname,
  title: "在线示例目录-"+appname,
  keywords: '在线示例目录,Nuxt3',
  description: '开发示例共有35类，包括组件、路由、中间件、导航、页面过渡动画、插件、服务端处理、数据获取、渲染、模块等在线示例效果。'
};
const buildMeta = ( params)=>{
  const metaArray = [];
  if( params.title){
    metaArray.push({ property: 'og:title', content: params.title});
  }
  if( params.keywords){
    metaArray.push({ name: 'keywords', content: params.keywords});
    metaArray.push({ property: 'og:keywords', content: params.keywords});
  }
  if( params.description){
    metaArray.push({ name: 'description', content: params.description});
    metaArray.push({ property: 'og:description', content: params.description});
  }
  return metaArray;
}
export default {
  data,
  buildMeta
}