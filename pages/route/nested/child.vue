<template>
  <div>
    <div>当前页面子文件路径：~/pages/route/nested/child.vue</div>
    <div>父级传入的参数值：{{ ptype}}</div>
  </div>
</template>
<script setup>
  const {ptype} = defineProps(['ptype'])
</script>