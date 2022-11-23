<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <div>api请求URL：{{url}}</div>
    <div v-if="resData">
      <div>api请求成功数据：</div>
      <div class="app-box">
        <pre>{{JSON.stringify(resData,null,2)}}</pre>
      </div>
    </div>
    <div v-if="resError">
      <div>api请求异常信息：</div>
      <div class="app-box">
        <pre>{{JSON.stringify(resError,null,2)}}</pre>
      </div>
    </div>
  </div>
</template>
<script setup>
  const url = "/api/hello/mike?type=web";
  const { data: resData,error: resError} = await useFetch(url,{
    method: 'POST',
    headers: { mode: "test"},
    body: { age: 26 },
  });
</script>