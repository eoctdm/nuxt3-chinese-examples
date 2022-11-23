<template>
  <div>
    <div>
      <div class="app-color-blue app-cursor" @click="home">返回首页</div>
      <h1>异常处理之全局错误页面的示例。</h1>
      <div class="app-color-grey">当Nuxt3遇到致命错误时，统一跳转到此全局错误页面进行异常处理。</div>
      <div>异常数据：</div>
      <div class="app-box"><pre>{{JSON.stringify(error,null,2)}}</pre></div>
    </div>
  </div>
</template>
<script setup>
  import headConfig from "~/assets/data/head.js"
  const props = defineProps({
    error: Object
  });
  const home = ()=>{
    //必须要在清除异常后再跳转到首页
    clearError({ redirect: '/' });
  }
  const pageTKD = {
    title: "异常处理之全局错误页面",
    keywords: "全局错误页面,异常处理",
    description: '当Nuxt3遇到致命错误时展示内容。'
  };
  const heads = {
    title: `${pageTKD.title}-${headConfig.data.appname}`,
    meta: []
  };
  heads.meta.push( ...headConfig.buildMeta(pageTKD));
  useHead(heads);
</script>