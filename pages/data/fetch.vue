<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <div>日期列表api网址：{{menuUrl}}</div>
    <div>详细数据api网址：{{resultUrl || '请点击日期'}}</div>
    <div v-if="menuData">
      <div>
        <span>可选日期：</span>
        <span v-for="(item,index) in menuData" :key="index"
            class="app-margin-right app-color-blue app-cursor"
            @click="getData(item.id)">
          {{item.date}}
        </span>
      </div>
      <div>
        <span @click="getMenu(-1)" v-if="pageIndex>1"
            class="app-margin-right app-color-blue app-cursor">上页</span>
        <span class="app-margin-right">第{{pageIndex}}页</span>
        <span @click="getMenu(1)" v-if="menuData&&menuData.length>0"
            class="app-color-blue app-cursor">下页</span>
      </div>
    </div>
    <div v-if="resultData">
      <div>详细数据：</div>
      <div class="app-box">
        <pre>{{JSON.stringify(resultData,null,2)}}</pre>
      </div>
    </div>
    <div v-if="errorData">
      <div>请求异常返回数据：</div>
      <div class="app-box">
        <pre>{{JSON.stringify(errorData,null,2)}}</pre>
      </div>
    </div>
    <div @click="proxyGet" class="app-color-blue app-cursor">
      通过后台proxy请求第三方API的数据
    </div>
    <div class="app-box" v-if="proxyData">
      <pre>{{JSON.stringify(proxyData,null,2)}}</pre>
    </div>
  </div>
</template>
<script setup>

  const menuUrl = ref("");
  const resultUrl = ref("");
  const menuData = ref();
  const resultData = ref();
  const errorData = ref();
  const pageIndex = ref(1);

  const getMenu = async (pageOffset)=>{
    errorData.value = null;
    pageIndex.value += pageOffset;
    menuUrl.value = '/api/examples/list?page='+pageIndex.value;
    const resData = await $fetch(menuUrl.value,
        {method: 'GET'}).catch(error=>{
          errorData.value = error.message;
        });
    menuData.value = resData;
  }

  const getData = async (issueId)=>{
    resultData.value = null;
    errorData.value = null;
    resultUrl.value = `/api/examples/info?id=${issueId}`;
    try{
      const resData = await $fetch(resultUrl.value, {method: 'GET'});
      resultData.value = resData;
    }catch(error){
      errorData.value = error.message;
    }
  }

  const proxyData = ref();
  const proxyGet = async ()=>{
    try{
      const testData = await $fetch(
        "/proxy-api/nuxt/examples/3.0.0/server/china/hello/mike?type=web", 
        {method: 'GET'});
      proxyData.value = testData;
    }catch(error){
      proxyData.value = error;
    }
  }

  await getMenu(0);
</script>