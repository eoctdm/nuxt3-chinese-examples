<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <div>请查看此网页源代码检查head中对应内容是否设置正确。</div>
    <div>当前页面路由：{{$route.fullPath}}</div>
    <div>
      <div>当前页面路由元数据：</div>
      <div class="app-box">
        <pre>{{JSON.stringify(head,null,2)}}</pre>
      </div>
    </div>
  </div>
</template>
<script setup>

  const head = {
    title: 'SEO配置之路由元数据使用',
    keywords: '索引擎优化,SEO,路由元数据',
    description: 'SEO配置之路由元数据为当前路由下组件或布局使用。'
  };
  definePageMeta({
    head: {
      title: 'SEO配置之路由元数据使用',
      keywords: '索引擎优化,SEO,路由元数据',
      description: 'SEO配置之路由元数据为当前路由下组件或布局使用。'
    }
  });
</script>