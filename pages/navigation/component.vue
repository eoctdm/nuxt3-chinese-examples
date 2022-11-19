<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <h6>组件式导航的示例。</h6>
    <div>
      <NuxtLink to="/route/all/china/gd/sz">
        访问“通配路由”
      </NuxtLink>
    </div>
    <div>
      <NuxtLink href="https://www.163.com" target="_blank">
        访问网易
      </NuxtLink>
    </div>
  </div>
</template>