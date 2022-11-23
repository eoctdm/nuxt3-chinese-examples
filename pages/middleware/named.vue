<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <div>请求页面时间戳（中间件携带）：{{$route.query.reqTime}}</div>
    <div>来源页面路由（中间件携带）：{{$route.meta.fromUrl}}</div>
    <div>当前页面路由：{{$route.fullPath}}</div>
  </div>
</template>
<script setup>
  definePageMeta({
    middleware: "logging",  //可支持Array
  })
</script>