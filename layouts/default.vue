<template>
  <div class="app-box">
    <div>此区域使用默认布局。</div>
    <slot />
  </div>
</template>
<script setup>
  import headConfig from "~/assets/data/head.js"

  const route = useRoute();
  const head = route.meta.head || {};
  const heads = {
    titleTemplate: (appTitle) =>{
      if( !head.title) return appTitle;
      return `${head.title}-${appTitle}`;
    },
    meta: []
  };
  heads.meta.push( ...headConfig.buildMeta({
    title: head.title,
    keywords: head.keywords,
    description: head.description
  }));
  useHead(heads);
</script>