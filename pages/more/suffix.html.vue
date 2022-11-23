<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <div>当前页面路由：{{$route.fullPath}}</div>
    <div>
      <NuxtLink to="/index.html">访问首页/index.html</NuxtLink>
    </div>
  </div>
</template>