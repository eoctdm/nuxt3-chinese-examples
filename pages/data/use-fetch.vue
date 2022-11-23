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
  </div>
</template>
<script setup>
  //本示例访问Nuxt3的server下api，因此不需要指定baseURL
  const menuUrl = ref("");
  const resultUrl = ref("");
  const menuData = ref();
  const resultData = ref();
  const errorData = ref();
  const pageIndex = ref(1);
  //初始化加载列表数据，服务端渲染
  menuUrl.value = '/api/examples/list?page='+pageIndex.value;
  const { data: resDataMenu,refresh,error: resErrorMenu} = await useFetch(
    //刷新时每次动态构建URL，必须使用()=>动态生成
    ()=>`/api/examples/list?page=${pageIndex.value}`, {method: 'GET'});
  menuData.value = resDataMenu.value;
  errorData.value = resErrorMenu.value;
  //通过refresh获取列表，先必须deep watch
  watch(resDataMenu, () => {
    menuData.value = resDataMenu.value;
    errorData.value = resErrorMenu.value;
  },{deep: true});
  const getMenu = async (pageOffset)=>{
    errorData.value = null;
    menuUrl.value = '/api/examples/list?page='+pageIndex.value;
    pageIndex.value += pageOffset;
    refresh();
  }
  //获取详细，客户端渲染
  const getData = async (issueId)=>{
    resultData.value = null;
    errorData.value = null;
    resultUrl.value = `/api/examples/info?id=${issueId}`;
    const uniqueKey = "vk_"+issueId; //保证不同的请求KEY不同，以请求到数据
    const { data: resData,error:  resError} = await useFetch(
      resultUrl.value, {
      key: uniqueKey,method: 'GET'});
    resultData.value = resData.value;
    errorData.value = resError.value;
  }
</script>