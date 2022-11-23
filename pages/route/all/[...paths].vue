<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <div>当前页面文件路径：~/pages/route/all/[...paths].vue</div>
    <div>当前页面访问路由：{{$route.fullPath}}</div>
    <div>路由中参数值：{{ $route.params.paths}}</div>
  </div>
</template>