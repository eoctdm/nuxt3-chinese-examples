

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('bootstrap', bootstrap);
});