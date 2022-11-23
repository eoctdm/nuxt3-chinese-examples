<template>
  <div>
    <div>
      <span>本页面禁用全局默认布局，在此页面内可选择布局：</span>
      <span @click="tap(1)" class="app-margin-left app-color-blue app-cursor">默认布局</span>
      <span @click="tap(2)" class="app-margin-left app-color-blue app-cursor">自定义布局</span>
    </div>
    <NuxtLayout :name="layoutName">
      <div class="app-box">
        <h1>{{tkdData.title}}</h1>
        <div class="app-color-grey">{{tkdData.description}}</div>
        <div></div>
        <BaseFooLink :tkd="false"></BaseFooLink>
      </div>
    </NuxtLayout>
  </div>
</template>
<script setup>
  const tkdData = usePageTKD();
  definePageMeta({
    layout: false, //页面初始化时禁用默认布局
    //layout: "custom-first", //页面初始化时自定义更改布局
  });
  //本示例通过标签的name来动态更改布局
  const layoutName = ref("custom-first");
  function tap(type) {
    if (type == 1) layoutName.value = 'default';
    else layoutName.value = "custom-first";
  }
</script>