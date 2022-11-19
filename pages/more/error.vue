<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <h6>异常处理的示例。</h6>
    <div>打开浏览器开发者工具中的控制台，查看以下操作日志。</div>
    <div @click="throw1" class="app-color-blue app-cursor">
      在客户端抛出自定义异常（控制台里显示）
    </div>
    <div @click="throw2" class="app-color-blue app-cursor">
      访问不存在路由（抛出异常后在全局错误页面显示）
    </div>
    <div class="app-box">
      <div>NuxtErrorBoundary组件区域</div>
      <NuxtErrorBoundary @error="errorLogger">
        <!-- ThrowError组件在NuxtErrorBoundary中，所以异常会被捕捉和处理 -->
        <ThrowError></ThrowError>
        <!-- throw3在NuxtErrorBoundary中，
            但抛出异常位置在本页不在NuxtErrorBoundary中，
            因此throw3抛出异常不会被NuxtErrorBoundary捕捉并处理 -->
        <div @click="throw3" class="app-color-blue app-cursor">
          本页操作抛出异常（控制台里显示）
        </div>
        <template #error="{ error }">
          <div>此区域出现的异常数据：{{errorData}}</div>
          <div @click="clearError(error)" class="app-color-blue app-cursor">
            重新处理NuxtErrorBoundary
          </div>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
</template>
<script setup>
  const throw1 = ()=>{
    throw createError({message:'我主动抛出错误1'});
  }
  const throw2 = async ()=>{
    await navigateTo("/none-route");
  }
  const throw3 = async ()=>{
    throw createError({message:'我主动抛出错误3'});
  }
  const errorData = ref();
  const errorLogger = (error)=>{
    errorData.value = error.message;
  }
  const clearError = async(error)=>{
    //可以尝试解决异常或跳转到指定页显示异常
    //注意：在之前清除错误，会陷入循环。必须放在最后
    error.value = null;
  }
</script>