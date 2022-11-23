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
    <div v-if="resultLoading">详细数据查询中...</div>
    <div v-else-if="resultData">
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
  const resultLoading = ref(false); //详细数据获取进度
  const resultData = ref();
  const errorData = ref();
  const pageIndex = ref(1);
  //获取列表
  const getMenu = async (pageOffset)=>{
    errorData.value = null;
    menuUrl.value = '/api/examples/list?page='+pageIndex.value;
    pageIndex.value += pageOffset;
    const uniqueKey = "vk_"+pageIndex.value; //保证不同的请求KEY不同，以请求到数据
    const { data: resData,error:  resError} = await useAsyncData( uniqueKey,
      ()=>$fetch(menuUrl.value, {method: 'GET'}));
    menuData.value = resData.value;
    errorData.value = resError.value;
  }
  //获取详细，客户端渲染
  const getData = async (issueId)=>{
    resultData.value = null;
    errorData.value = null;
    resultUrl.value = `/api/examples/info?id=${issueId}&timeout=1000`;
    const uniqueKey = "vk_"+issueId; //保证不同的请求KEY不同，以请求到数据
    const { pending, data: resData, error:  resError} = useAsyncData( uniqueKey,
        ()=>$fetch(resultUrl.value, {method: 'GET'}),{
        lazy: true, //异常请求，等同useLazyAsyncData，不要使用awiat
      });
    //通过pending显示数据加载进度
    resultLoading.value = pending.value;
    watch(pending, () => {
      resultLoading.value = pending.value;
      resultData.value = resData.value;
      errorData.value = resError.value;
    });
  }
  //初始化加载数据，服务端渲染
  await getMenu(0);
</script>