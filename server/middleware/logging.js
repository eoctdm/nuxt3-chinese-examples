export default defineEventHandler((event) => {
  //显示所有服务端渲染的路由请求日志
  const time = new Date().toLocaleString();
  console.log(`[${time}] request url: ${event.req.url}`);
  //统一附加数据内容
  event.context.reqTime = time;
})