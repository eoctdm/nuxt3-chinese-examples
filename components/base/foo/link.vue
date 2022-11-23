<template>
  <div>
    <div :class="{'app-box':box}">
      <slot name="extend"></slot>
      <div><NuxtLink to="/"><slot>&lt;&lt; 回到目录</slot></NuxtLink></div>
    </div>
    <h1 v-if="tkd">{{tkdData.title}}</h1>
    <div v-if="tkd" class="app-color-grey">{{tkdData.description}}</div>
  </div>
</template>
<script setup>
  const tkdData = usePageTKD();
  const { box,tkd } = defineProps({
    box: Boolean,
    tkd: {
      type: Boolean,
      default: true
    },
  });
</script>