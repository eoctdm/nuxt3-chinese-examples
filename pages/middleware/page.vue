<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <h6>内联路由中间件的示例。</h6>
    <div>中间件携带数据：{{$route.meta.welcome}}</div>
    <div>当前页面路由：{{$route.fullPath}}</div>
  </div>
</template>
<script setup>
  definePageMeta({
    // middleware支持Array
    middleware: function(to, from){
      to.meta.welcome = "我是内联（匿名）路由守卫携带数据";
    },
  })
</script>