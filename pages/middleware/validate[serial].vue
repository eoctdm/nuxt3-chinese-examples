<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <div>当前页面路由：{{$route.fullPath}}</div>
    <div>
      <ClientOnly>
        复制不符合要求URL访问测试：{{originUrl}}middleware/validatemike
      </ClientOnly>
    </div>
  </div>
</template>
<script setup>
  definePageMeta({
    validate: async (route) => {
    
      return /^\d+$/.test(route.params.serial);
    }
  });
  const config = useRuntimeConfig();
  const baseURL = config.app.baseURL;
  const originUrl = ref();
  if( process.client){
    originUrl.value = window.location.origin+baseURL;
  }
</script>