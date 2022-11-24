export default defineNuxtPlugin((NuxtApp) => {
  const user = useUser();  
  return {
    provide: {
    
      currentYear: (msg) => {
        const now = new Date();
        return `Hello ${user.value.name}, in ${now.getFullYear()}, ${msg}!`;
      }
    }
  }
})
