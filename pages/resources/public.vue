<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <div class="resource-text-right">样式效果，文本右对齐，大号字体！</div>
    <div><img :src="baseURL+'resource/img/public.png'"></div>
  </div>
</template>
<script setup>
  const config = useRuntimeConfig();
  const baseURL = config.app.baseURL;
</script>
<style scoped>
  @import "/resource/css/resource.css";
</style>