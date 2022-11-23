<template>
  <div><BaseFooLink></BaseFooLink>
    <div>
      <span>组件选择：</span>
      <span @click="isLink=true;"
          class="app-margin-left app-color-blue app-cursor">显示链接组件</span>
      <span @click="isLink=false;"
          class="app-margin-left app-color-blue app-cursor">显示页脚组件</span>
    </div>
    <component :is="isLink?BaseFooLink:TheFooter" />
  </div>
</template>
<script setup>
  //动态引用开启全局注册所有组件后，注释掉resolveComponent
  const BaseFooLink = resolveComponent('BaseFooLink'); //"BaseFooLink";
  const TheFooter = resolveComponent('TheFooter'); //"TheFooter"
  const isLink = ref(true);
</script>