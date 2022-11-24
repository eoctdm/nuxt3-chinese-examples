export default defineEventHandler((event) => {

  const time = new Date().toLocaleString();
  console.log(`[${time}] request url: ${event.req.url}`);

  event.context.reqTime = time;
})