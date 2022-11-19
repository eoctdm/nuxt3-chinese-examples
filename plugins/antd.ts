//全局完整注册
import Antd from 'ant-design-vue';
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Antd);
})
