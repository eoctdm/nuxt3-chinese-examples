//测试数据的api，返回详情
import examples from '~/assets/data/examples.js'
export default defineEventHandler(async(event) =>{
  const query = getQuery(event);
  return await examples.info( query.id, query.timeout);
});
