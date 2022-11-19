<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <h6>Nuxt3模块（color-mode示例）的示例。</h6>
    <ClientOnly fallback-tag="div" fallback="获取主题中">
      <div>当前主题：{{ $colorMode.value }}</div>
    </ClientOnly>
    <div>
      切换主题：
      <select style="width: 200px;" v-model="$colorMode.preference">
        <option value="system">系统默认</option>
        <option value="light">亮色</option>
        <option value="dark">暗色</option>
        <option value="sepia">自定义</option>
      </select>
    </div>
    <div>主题设置后影响整个应用程序效果。</div>
  </div>
</template>
<script setup>
  definePageMeta({
    //colorMode: 'dark', //强制此页面的主题，动态设置无效
  })
  const colorMode = useColorMode()
</script>
<style lang="scss">
/* 主题是全局，此style不能使用scoped，否则无权限设置全局body等样式 */
body, select, h6 {
  background-color: #FFFFFF;
  color: rgba(0, 0, 0, 0.8);
}
@mixin dark{
  background-color: #091a28;
  color: #ebf4f1;
}
.dark-mode body {
  @include dark;
}
.dark-mode select {
  @include dark;
}
.dark-mode h5 {
  @include dark;
}
.dark-mode h6 {
  @include dark;
}
@mixin sepia{
  background-color: yellow;
  color: red;
}
.sepia-mode body {
  @include sepia;
}
.sepia-mode select {
  @include sepia;
}
.sepia-mode h5 {
  @include sepia;
}
.sepia-mode h6 {
  @include sepia;
}
</style>
