<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <h6>使用AntD插件的示例。</h6>
    <div>antd图标：<StarOutlined/><StarFilled/><StarTwoTone/></div>
    <div>antd按钮：<a-button @click="msg" type="primary">消息</a-button></div>
    <div>
      <a-progress type="circle" :percent="30" :width="80" />
      <a-progress type="circle" :percent="70" :width="80" status="exception" />
      <a-progress type="circle" :percent="100" :width="80" />
    </div>
  </div>
</template>
<script setup>
  import {
    StarOutlined, StarFilled, StarTwoTone
  } from '@ant-design/icons-vue';
  import { message } from 'ant-design-vue';
  const msg = ()=>{
    message.info('欢迎使用antd插件示范！');
  }
</script>