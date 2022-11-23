<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <ClientOnly>
      <div v-if="message">{{message}}</div>
    </ClientOnly>
    <div>
      <button type="button" class="btn btn-primary"
        data-bs-toggle="tooltip" data-bs-title="按钮提示内容">提示</button>
    </div>
    <div>Bootstrap图标：<i class="bi-alarm app-text-size"></i></div>
    <div>Bootstrap加载中效果：
      <div class="spinner-border app-box-2rem" role="status">
        <span class="visually-hidden">加载中...</span>
      </div>
    </div>
  </div>
</template>
<script setup>
  const message = ref();
  const doTooltip = ()=>{
    if( !window.bootstrap){
      message.value = "bootstrap未完成客户端引用方式，部分功能失败！";
      return;
    }
    const tipList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tipList.forEach(e => new bootstrap.Tooltip(e));
  }
  onMounted(()=>{
    //如果开启pageTransition或layoutTransition，需要setTimeout在过渡时间后执行才行
    setTimeout(() => {
      //以下方法只允许在客服端上渲染
      process.client && doTooltip();
    }, 500);
  });
</script>