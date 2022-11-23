<template>
  <NuxtLayout>
    <div class="app-box">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
<style>
  /* 过渡动画：样式名为page，需与~/nuxt.config.ts中过渡名称一致 */
  .page-enter-active,.page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
  /* 过渡动画：样式名为rotate，需与页面的definePageMeta中过渡名称一致 */
  .rotate-enter-active,.rotate-leave-active {
    transition: all 0.4s;
  }
  .rotate-enter-from,.rotate-leave-to {
    opacity: 0;
    transform: rotate3d(1, 1, 1, 15deg);
  }
</style>