<template>
  <div>
    <BaseFooLink></BaseFooLink>
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
const tkdData = usePageTKD();
  //通过useHead设置head元素
  const head = {
    title: tkdData.value.title,
    keywords: tkdData.value.keywords,
    description: tkdData.value.description
  };
  useHead({
    title: head.title,
    //titleTemplate: head.title+'-%s',
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