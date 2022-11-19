<template>
  <div>
    <BaseFooLink :box="true">
      点我回到首页
      <template #extend>组件的第二个插槽内容</template>
    </BaseFooLink>
    <h6>约定引用组件的示例。</h6>
    <LazyTheFooter v-if="show" :pdate="20221220"></LazyTheFooter>
    <div v-else>组件懒加载中...</div>
  </div>
</template>
<script setup>
const show = ref(false);
setTimeout(() => {
  //Lazy组件两秒后才会真实加载，示范懒加载效果
  show.value = true;
}, 2000);
</script>
