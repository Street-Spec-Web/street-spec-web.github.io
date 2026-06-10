import { createRouter, createWebHashHistory } from 'vue-router'
import DataHomeView from '@/views/Data/HomeView.vue'
import HomeView from '@/views/Main/HomeView.vue'

import DataLayout from '@/views/DataLayout.vue'
import MainLayout from '@/views/MainLayout.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'main-home',
          component: HomeView,
        }
      ],
    },
    {
      path: '/data',
      component: DataLayout,
      children: [
        {
          path: '',
          name: 'data-home',
          component: DataHomeView,
        },
        {
          path: 'years',
          name: 'data-years',
          component: () => import('@/views/Data/ChartYearsView.vue'),
        },
        {
          path: 'tags',
          name: 'data-tags',
          component: () => import('@/views/Data/ChartMarketView.vue'),
        },
        {
          path: 'brand',
          name: 'data-brand',
          component: () => import('@/views/Data/ChartBrandView.vue'),
        },
      ],
    },
  ],
})

export default router
