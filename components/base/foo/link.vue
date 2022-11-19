<template>
  <div :class="{'app-box':box}">
    <div><slot name="extend"></slot></div>
    <div><NuxtLink to="/"><slot>&lt;&lt; 回到首页</slot></NuxtLink></div>
  </div>
</template>
<script setup>
  const { box } = defineProps({
    box: Boolean
  });
</script>