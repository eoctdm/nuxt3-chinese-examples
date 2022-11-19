import type { RouterConfig } from '@nuxt/schema'
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
  routes: (_routes: any) => {
    const pages = [
      {
        name: 'route-custom-my-wel',
        path: '/route/custom/my/wel',
        component: () => import('~/pages/route/custom/welcome.vue'),
        meta: {
          middleware: ["logging"],
          layout:"custom-first"
        }
      },
      {
        name: 'index.html',
        path: '/index.html',
        component: () => import('~/pages/index.vue')
      }
    ];
    //在默认路由中增加一项，原路由可用；判断不重复添加
    pages.forEach((page:any)=>{
      if( _routes.findIndex((item:any)=>item.path==page.path)==-1){
        _routes.push( page);
      }
    });
    //也可替换原路由，原路由不能使用；也可直接返回全新路由集
    return _routes;
  }
}
