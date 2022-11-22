const data = {
  title: "手把手教您使用Nuxt3框架-Nuxt3中文开发教程",
  keywords: 'Nuxt3,Vue3,中文开发教程,示例源码,混合渲染,服务端渲染,客户端渲染',
  description: '手把手教您使用Nuxt3框架-Nuxt3中文开发教程，适合Nuxt3初学者学习和实践，资深者快速参考，爱好者持续跟踪新功能和最佳实践。'
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