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
    path: '/profile/:id',
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
    path: '/login',
    component: () => import('@/views/SignIn.vue')
  },
  {
    path: '/createAccount',
    component: () => import('@/views/CreateAccount.vue')
  },
  {
    path: '/settings',
    component: () => import('@/views/AccountSettings.vue')
  },
  {
    path: '/settings/appearance',
    component: () => import('@/views/Appearance.vue')
  },
  {
    path: '/settings/privacy',
    component: () => import('@/views/Privacy.vue')
  },
  {
    path: '/forgotpass',
    component: () => import('@/views/ForgotPass.vue')
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/createAccount', '/forgotpass'];
  const authRequired = !publicPages.includes(to.path);
  const loggedInId = sessionStorage.getItem('userId');

  if (authRequired && !loggedInId) {
    return next('/login');
  }

  next();
});

export default router
