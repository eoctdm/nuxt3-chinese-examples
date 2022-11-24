<template>
  <div>
    <h1 class="app-text-center">手把手教您使用Nuxt3框架(Nuxt3中文开发教程)</h1>
    <h6 class="app-text-center">配套源代码运行效果，助您开启Nuxt3之旅！</h6>
    <div class="app-text-right">------基于2022年11月16日发布的Nuxt v3.0.0稳定版</div>
    <div class="app-text-center">
      在线示例目录搜索：<input v-model="searchKey" style="width: 16em;" placeholder="输入关键字">
      <span class="app-margin-left">共{{links.length}}项</span>
      <span v-if="searchKey" class="app-margin-left app-color-blue app-cursor" @click="searchKey=''">清除内容</span>
    </div>
    <div v-for="(item,index) in links" :key="index">
      <NuxtLink :to="item.url.replaceAll('${baseURL}',baseURL)"
          :external="item.external?true:false">
        <span v-html="item.text"></span>
      </NuxtLink>
      <span class="app-margin-left-s app-color-grey">{{item.description}}</span>
    </div>
    <div v-if="true">
      <div>https://www.dvtop.cn/nuxt/examples/3.0.0/</div>
      <div v-for="(item,index) in links" :key="index">
        <div v-if="item.url.toLowerCase().indexOf('http')==0">{{item.url}}</div>
        <div v-else>https://www.dvtop.cn/nuxt/examples/3.0.0{{item.url.replaceAll('${baseURL}',baseURL)}}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import pageLinks from "~/assets/data/pages"
  const config = useRuntimeConfig();
  const baseURL = config.app.baseURL;
  //得到搜索内容
  const searchKey = ref();
  const links = computed(()=>{
    if( !searchKey.value) return pageLinks;
    const filterLinks = [];
    pageLinks.forEach(item=>{
      if( item.url.indexOf(searchKey.value)!=-1 ||
          item.text.indexOf(searchKey.value)!=-1)
        filterLinks.push( item);
    });
    return filterLinks;
  });
</script>