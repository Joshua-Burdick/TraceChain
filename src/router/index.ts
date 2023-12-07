import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

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
  },
  {
    path: '/settings',
    component: () => import('@/views/AccountSettings.vue'),
    children: [
      {
        path: '/privacy',
        component: () => import('@/views/Privacy.vue')
      }
    ]
  },
  {
    path: '/settings/appearance',
    component: () => import('@/views/Appearance.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router