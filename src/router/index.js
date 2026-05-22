import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/years',
      name: 'years',
      component: () => import('../views/ChartYearsView.vue'),
    },
    {
      path: '/tags',
      name: 'tags',
      component: () => import('../views/ChartMarketView.vue'),
    }
  ],
})

export default router
