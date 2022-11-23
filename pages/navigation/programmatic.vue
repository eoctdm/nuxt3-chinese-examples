<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <div @click="inside" class="app-color-blue app-cursor">访问“通配路由”</div>
    <div @click="outside" class="app-color-blue app-cursor">访问网易</div>
  </div>
</template>
<script setup>
  const router = useRouter();
  const inside = async function(){
    /* 官方不建议使用router.push，推荐navigateTo
    router.push({
      path: '/route/all/china/gd/sz',
      query: {
        page: 1
      }
    });
    */
    /* 推荐方式 */
    await navigateTo({
      path: '/route/all/china/gd/sz',
      query: {
        page: 1
      }
    });
  }
  const outside = async function(){
    await navigateTo('https://www.163.com',{
      external: true
    });
  }
</script>