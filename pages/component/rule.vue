<template>
  <div>
    <BaseFooLink :box="true">
      点我回到目录
      <template #extend>组件的第二个插槽内容</template>
    </BaseFooLink>
    <LazyTheFooter v-if="show" :pdate="20221220"></LazyTheFooter>
    <div v-else>组件懒加载中...</div>
  </div>
</template>
<script setup>
const show = ref(false);
setTimeout(() => {

  show.value = true;
}, 2000);
</script>
