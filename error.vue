<template>
  <div>
    <div>
      <div class="app-color-blue app-cursor" @click="home">返回首页</div>
      <h6>异常处理之全局错误页面的示例。</h6>
      <div>异常数据：</div>
      <div class="app-box"><pre>{{JSON.stringify(error,null,2)}}</pre></div>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
    error: Object
  });
  const home = ()=>{
    //必须要在清除异常后再跳转到首页
    clearError({ redirect: '/' });
  }
</script>