<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <div>
      页面过渡动画需要在页面间切换才会有效果，
      如果使用网址直接访问是没有过渡效果。
    </div>
  </div>
</template>
<script setup>
definePageMeta({

  pageTransition: {
    name: 'rotate'
  }
})
</script>