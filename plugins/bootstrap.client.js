//全局客户端完整注册
//bundle包括popper.js框架
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('bootstrap', bootstrap);
});