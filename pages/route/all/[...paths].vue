<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <h6>路由模式之通配路由的示例。</h6>
    <div>当前页面文件路径：~/pages/route/all/[...paths].vue</div>
    <div>当前页面访问路由：{{$route.fullPath}}</div>
    <div>路由中参数值：{{ $route.params.paths}}</div>
  </div>
</template>