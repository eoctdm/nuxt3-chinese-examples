export default defineNuxtRouteMiddleware((to, from) => {
  to.query.reqTime = Date.now();
  to.meta.fromUrl = from.fullPath;
})