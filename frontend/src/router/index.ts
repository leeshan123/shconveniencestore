import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',

    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/signup',
    name: 'signup',

    component: () => import('@/views/user/Signup.vue'),
  },
  {
    path: '/signin',
    name: 'signin',

    component: () => import('@/views/user/Signin.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
