<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <h5 class="app-text-center">手把手教您使用Nuxt3框架(Nuxt3中文开发教程)</h5>
    <h6 class="app-text-center">教程文档和示例源代码下载</h6>
    <div class="app-text-center">
      <img style="width: 120px;height: 120px;" :src="baseURL+'resource/img/qrcode.jpg'">
    </div>
    <div class="app-text-center">原创不易，请关注“nuxt”微信订阅号后浏览各章节内容或有偿提前下载全文档。</div>
    <div class="app-text-center">“nuxt”微信订阅号提供持续中文操作指南，关键功能示例代码，项目开发实例和源代码，SEO优化，技术咨询等混合渲染应用相关内容。</div>
    <h6 class="app-margin-top-s">1. 示例源代码下载</h6>
    <div class="app-box">
      <div v-for="(item,index) in links" :key="index">
        <NuxtLink :to="item" :external="true" target="_blank">
          {{item}}
        </NuxtLink>
      </div>
    </div>
    <h6 class="app-margin-top-s">2. 中文教程全文目录</h6>
    <div class="app-box">
      <div v-for="(item,index) in manual" :key="index" class="line app-flex"
          :class="{'app-text-weight':index==0}">
        <div class="page">
          <span v-if="index==0">{{item.page}}</span>
          <span v-else>第{{item.page}}页</span>
        </div>
        <div class="chapter">{{item.chapter}}</div>
        <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import manual from '~/assets/data/manual.js'
  const config = useRuntimeConfig();
  const baseURL = config.app.baseURL;
  const links = ref([
    'https://github.com/eoctdm/nuxt3-chinese-examples',
    'https://gitee.com/eoctdm/nuxt3-chinese-examples',
  ]);
</script>
<style scoped>
.page,.chapter{
  width: 5em;
  text-align: left;
}
.line:hover{
  background-color: rgb(242, 242, 255);
}
</style>