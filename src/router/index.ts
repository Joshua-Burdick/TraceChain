import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
<<<<<<< HEAD
=======
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
    path: '/communities',
    component: () => import('@/views/CommunitiesTab.vue')
  },
  {
    path: '/search',
    component: () => import('@/views/SearchTab.vue')
  },
  {
>>>>>>> origin/dev
    path: '/signIn',
    component: () => import('@/views/SignIn.vue')
  },
  {
    path: '/createAccount',
    component: () => import('@/views/CreateAccount.vue')
  },
  {
<<<<<<< HEAD
    path: '/accountSettings',
    component: () => import('@/views/AccountSettings.vue')
  },
  {
    path: '/',
    component: TabsPage
=======
    path: '/settings',
    component: () => import('@/views/AccountSettings.vue')
  },
  {
    path: '/settings/privacy',
    component: () => import('@/views/Privacy.vue')
  },
  {
    path: '/settings/appearance',
    component: () => import('@/views/Appearance.vue')
>>>>>>> origin/dev
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router