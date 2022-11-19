<template>
  <div class="app-box">
    <div>ThrowError组件处理正常内容</div>
    <div @click="tap" class="app-color-blue app-cursor">
      登录（会出现异常，被上级组件捕捉并自定义处理）
    </div>
  </div>
</template>
<script setup>
  const tap = ()=>{
    throw new Error('点击登录后人为处理异常（ThrowError中返回）')
  }
</script>