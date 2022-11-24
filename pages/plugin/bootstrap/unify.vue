<template>
  <div>
    <BaseFooLink></BaseFooLink>
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
  const { $bootstrap } = useNuxtApp();
  const doTooltip = ()=>{
    if( !$bootstrap){
      alert("bootstrap未完成安装融合方式");
      return;
    }
    const tipList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tipList.forEach(e => new $bootstrap.Tooltip(e));
  }
  onMounted(()=>{
  
    setTimeout(() => {
    
      process.client && doTooltip();
    }, 500);
  });
</script>