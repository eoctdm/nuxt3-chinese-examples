<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <div>当前页面路由：{{$route.fullPath}}</div>
    <div>当前页面父文件路径：~/pages/route/nested.vue</div>
    <div class="app-box">
      <NuxtPage ptype="demo"></NuxtPage>
    </div>
  </div>
</template>