//此种方式为默认导出，使用文件名来命名，只能有一个export
export default function () {
  //通过下行代码访问插件注入
  //return useNuxtApp().$hello;
  return useState('times', () => parseInt(Math.random()*100));
}