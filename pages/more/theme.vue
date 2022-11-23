<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <div class="text">使用全局变量的样式效果</div>
    <div>
      <span @click="tap(-2)"
          class="app-margin-right app-color-blue app-cursor">
        - 减小字体
      </span>
      <span @click="tap(2)" class="app-color-blue app-cursor">
        + 增大字体
      </span>
    </div>
    <div class="text-custom">本面修改全局动态变量的样式效果</div>
  </div>
</template>
<script setup>
  const varKey = "--vars-text-size-custom";
  const fontSize = useState("fontSizeCustom",()=>20);
  const tap = ( size)=>{
    fontSize.value += size;
    //设置全局样式的值
    document.documentElement.style.setProperty(varKey,fontSize.value+"px");
  }
  //仅在客户端渲染时设置
  process.client && tap(0);
</script>
<style lang="scss" scoped>
.text{
  color: $app-text-color;
  font-size: $app-text-size;
}
.text-custom{
  font-size: $app-text-size-custom;
}
</style>