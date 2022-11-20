<template>
  <div>
    <BaseFooLink></BaseFooLink>
    <h6>SEO配置之组件化和编程化使用的示例。</h6>
    <div>请查看此网页源代码检查head中对应内容是否设置正确。</div>
    <div>
      <div>当前页面SEO数据：</div>
      <div class="app-box">
        <pre>{{JSON.stringify(head,null,2)}}</pre>
      </div>
    </div>
  </div>
</template>
<script setup>
  //通过useHead设置head元素
  const head = {
    title: 'SEO组件化和编程化',
    keywords: '索引擎优化,SEO,组件化,编程化',
    description: '组件化和编程化快速配置页面SEO元素。'
  };
  useHead({
    //title: head.title,
    titleTemplate: head.title+'-%s',
    //titleTemplate: (appTitle) => `${head.title}-${appTitle}`,
    meta: [
      { name: 'keywords', content: head.keywords },
      { name: 'description', content: head.description },
      { property: 'og:title', content: head.title},
      { property: 'og:keywords', content: head.keywords},
      { property: 'og:description', content: head.description}
    ]
  });
</script>