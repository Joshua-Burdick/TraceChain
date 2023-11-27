import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/feed',
  },
  {
    path: '/feed',
    component: () => import('@/views/FeedTab.vue')
  },
  {
    path: '/create_post',
    component: () => import('@/views/CreatePostTab.vue')
  },
  {
    path: '/profile',
    component: () => import('@/views/ProfileTab.vue')
  },
  {
    path: '/signIn',
    component: () => import('@/views/SignIn.vue')
  },
  {
    path: '/createAccount',
    component: () => import('@/views/CreateAccount.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router