import type { RouterConfig } from '@nuxt/schema'

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
  
    pages.forEach((page:any)=>{
      if( _routes.findIndex((item:any)=>item.path==page.path)==-1){
        _routes.push( page);
      }
    });
  
    return _routes;
  }
}
