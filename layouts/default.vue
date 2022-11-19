<template>
  <div class="app-box">
    <div>此区域使用默认布局。</div>
    <slot />
  </div>
</template>
<script setup>
  //获取页面定义的definePageMeta路由元数据设置head元素
  const route = useRoute();
  const head = route.meta.head || {};
  const heads = {
    titleTemplate: (appTitle) =>{
      if( !head.title) return appTitle;
      return `${head.title} - ${appTitle}`;
    },
    meta: []
  };
  if( head.title){
    heads.meta.push({ property: 'og:title', content: head.title});
  }
  if( head.keywords){
    heads.meta.push({ name: 'keywords', content: head.keywords});
    heads.meta.push({ property: 'og:keywords', content: head.keywords});
  }
  if( head.description){
    heads.meta.push({ name: 'description', content: head.description});
    heads.meta.push({ property: 'og:description', content: head.description});
  }
  useHead(heads);
</script>