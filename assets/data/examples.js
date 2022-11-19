//测试api的数据；仅供个人实验使用，严禁传播或商用。
const issues = [
  {id:2795,serial:2022001,date:"2022-01-02",red:"6,13,15,17,20,21",blue:"3"},
  {id:2796,serial:2022002,date:"2022-01-04",red:"2,12,21,23,25,31",blue:"8"},
  {id:2797,serial:2022003,date:"2022-01-06",red:"2,5,16,17,18,30",blue:"6"},
  {id:2798,serial:2022004,date:"2022-01-09",red:"5,19,24,28,30,32",blue:"14"},
  {id:2799,serial:2022005,date:"2022-01-11",red:"7,10,12,16,19,31",blue:"16"},
  {id:2800,serial:2022006,date:"2022-01-13",red:"3,6,9,15,22,31",blue:"2"},
  {id:2801,serial:2022007,date:"2022-01-16",red:"1,20,22,23,25,28",blue:"16"},
  {id:2802,serial:2022008,date:"2022-01-18",red:"2,3,7,9,20,21",blue:"13"},
  {id:2803,serial:2022009,date:"2022-01-20",red:"4,15,17,19,25,28",blue:"16"},
  {id:2804,serial:2022010,date:"2022-01-23",red:"12,18,19,20,21,32",blue:"15"},
  {id:2805,serial:2022011,date:"2022-01-25",red:"6,15,23,24,25,33",blue:"15"},
  {id:2806,serial:2022012,date:"2022-01-27",red:"4,7,8,29,30,31",blue:"1"},
  {id:2807,serial:2022013,date:"2022-02-08",red:"2,3,4,7,10,18",blue:"15"},
  {id:2808,serial:2022014,date:"2022-02-10",red:"6,7,13,14,15,27",blue:"4"},
  {id:2809,serial:2022015,date:"2022-02-13",red:"6,14,16,27,28,31",blue:"7"},
  {id:2810,serial:2022016,date:"2022-02-15",red:"5,10,19,20,29,31",blue:"14"},
  {id:2811,serial:2022017,date:"2022-02-17",red:"6,9,24,29,30,32",blue:"7"},
  {id:2812,serial:2022018,date:"2022-02-20",red:"7,11,16,17,30,32",blue:"16"},
  {id:2813,serial:2022019,date:"2022-02-22",red:"5,6,14,20,21,25",blue:"8"},
  {id:2814,serial:2022020,date:"2022-02-24",red:"9,11,14,22,30,32",blue:"1"},
  {id:2815,serial:2022021,date:"2022-02-27",red:"3,7,22,24,26,31",blue:"14"}
];
const _parseInt = ( str)=>{
  if( str && /^\d+$/.test( str)){
    return parseInt( str);
  }
  return 0;
}
//模拟数据库分页查询，返回列表；立即返回
const find = (page,size=5)=>{
  page = _parseInt( page);
  size = _parseInt( size);
  if( !size || size<1) size=5;
  if( !page || page<1) page=1;
  const start = (page-1)*size;
  return issues.slice(start,start+size).map(item=>{
    return {
      id: item.id,
      date: item.date
    }
  });
}
//模拟数据库查询，返回某项详情；timeout秒内返回数据
const info = (id,timeout=0)=>{
  id = _parseInt( id);
  timeout = _parseInt( timeout);
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let idx = issues.findIndex(item=>item.id==id);
      if( idx<0) idx=0;
      resolve( issues[idx]);
    }, timeout);
  });
}
export default {
  find,
  info
};