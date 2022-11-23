<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <div>当前颜色useColor: {{color}}</div>
    <div>用户信息useUser: name={{user.name}},age={{user.age}}</div>
    <div class="app-cursor" @click="times++">
      点击次数useTimes: {{message(times)}}
    </div>
  </div>
</template>
<script setup>
  const color = useColor();
  const user = useUser();
  const times = useTimes();
  const message = strUtils.msg;
</script>