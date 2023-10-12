import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '/feed',
        component: () => import('@/views/FeedTab.vue')
      },
      {
        path: 'create_post',
        component: () => import('@/views/CreatePostTab.vue')
      },
      {
        path: 'account',
        component: () => import('@/views/ProfileTab.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
