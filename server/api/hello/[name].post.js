//目录或文件名有参数时，不能有参数外的内容，例：[name].js或[name]/[...].js
export default defineEventHandler(async(event) =>{
  const query = getQuery(event);
  const body = await readBody(event); //get方法无此数据
  const cookies = parseCookies(event);
  return {
    //time为server/middleware/logging.js附加数据
    time: event.context.reqTime,
    params: event.context.params,
    query,
    body,
    cookies
  }
})
