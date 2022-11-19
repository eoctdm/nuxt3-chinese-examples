export default defineNuxtPlugin((NuxtApp) => {
  const user = useUser(); //使用composables中模块
  return {
    provide: {
      //自动注入方法
      currentYear: (msg) => {
        const now = new Date();
        return `Hello ${user.value.name}, in ${now.getFullYear()}, ${msg}!`;
      }
    }
  }
})
