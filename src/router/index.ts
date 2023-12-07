import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/signIn',
    component: () => import('@/views/SignIn.vue')
  },
  {
    path: '/createAccount',
    component: () => import('@/views/CreateAccount.vue')
  },
  {
    path: '/accountSettings',
    component: () => import('@/views/AccountSettings.vue')
  },
  {
    path: '/',
    component: TabsPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router