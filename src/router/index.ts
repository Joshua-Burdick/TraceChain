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
    path: '/profile/:id/:redirect?',
    component: () => import('@/views/ProfileTab.vue')
  },
  {
    path: '/post/:id',
    component: () => import('@/views/PostView.vue')
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
  },
  {
    path: '/createCommunity',
    component: () => import('@/views/CreateCommunity.vue')
  },
  {
    path: '/passReset',
    component: () => import('@/views/PasswordReset.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/createAccount', '/forgotpass', '/passReset'];
  const authRequired = !publicPages.includes(to.path);
  const loggedInToken = sessionStorage.getItem('user_token') || localStorage.getItem('user_token');
  const loggedInId = sessionStorage.getItem('userId') || localStorage.getItem('userId');
  

  if (authRequired && (!loggedInToken && !loggedInId)) {
    return next('/login');
  }

  next();
});

router.afterEach((to, from, next) => {
  if (to.params.redirect) {
    to.fullPath = to.fullPath.replace("/redirect", "");
    window.location.href = to.fullPath;
  }
});

export default router
