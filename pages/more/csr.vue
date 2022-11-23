<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <div @click="tap" class="app-color-blue app-cursor">
      获取数据（客户端访问数据后渲染）
    </div>
    <ClientOnly fallback-tag="div" fallback="等待客户端渲染中">
      <div>数据显示：{{csrData}}</div>
    </ClientOnly>
  </div>
</template>
<script setup>
  const csrData = ref();
  if( process.client){
    //此处代码仅在客户端渲染时执行，因此html中无此数据
    csrData.value = "123 客户端渲染后数据内容";
  }
  const tap = ()=>{
    csrData.value = "888 用户点击后数据内容";
  }
</script>