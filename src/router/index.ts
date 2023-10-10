import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import CreateAccount from '../views/CreateAccount.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/createAccount'
  },
  {
    path: '/createAccount',
    component: () => import('@/views/CreateAccount.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
