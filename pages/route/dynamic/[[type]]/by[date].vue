<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <h6>路由模式之动态路由的示例。</h6>
    <div>当前页面文件路径：~/pages/route/dynamic/[[type]]/by[date].vue</div>
    <div>当前页面访问路由：{{$route.fullPath}}</div>
    <div>路由中参数值：type={{ params.type}}, date={{ params.date}}</div>
  </div>
</template>
<script setup>
  const { params } = useRoute();
</script>