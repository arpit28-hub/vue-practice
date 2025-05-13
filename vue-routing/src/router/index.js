import { createRouter, createWebHistory } from 'vue-router/auto'
// import generatedRoutes from 'vue-router/auto'
// import HomeView from '../views/HomeView.vue'
import { routes } from 'virtual:vue-router' // ✅ Correct debug import

console.log('Generated Routes:', routes)
const router = createRouter({
  history: createWebHistory(),
  // routes: [
    //   {
      //     path: '/',
      //     name: 'home',
      //     component: HomeView,
      //   },
      // ],
    })

export default router
