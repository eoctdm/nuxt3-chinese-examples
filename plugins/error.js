
export default defineNuxtPlugin((nuxtApp) => {
  const side = process.client ? "客户" : (process.server ? "服务" : "未知");
  nuxtApp.hook('vue:error', (...args) => {
    console.error(side + "端vue错误处理", ...args);
  })
  nuxtApp.hook('app:error', (...args) => {
    console.error(side + "端app错误处理", ...args);
  })
  nuxtApp.vueApp.config.errorHandler = (...args) => {
    console.error(side + "端global错误处理", ...args);
  }
})
