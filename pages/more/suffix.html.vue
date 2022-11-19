<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <h6>常用配置之增加路由后缀（如访问URL后加.html）的示例。</h6>
    <div>当前页面路由：{{$route.fullPath}}</div>
    <div>
      <NuxtLink to="/index.html">访问首页/index.html</NuxtLink>
    </div>
  </div>
</template>