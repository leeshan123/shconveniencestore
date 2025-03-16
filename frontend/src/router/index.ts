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

    component: () => import('@/views/user/SignupView.vue'),
  },
  {
    path: '/signin',
    name: 'signin',

    component: () => import('@/views/user/SigninView.vue'),
  },
  {
    path: '/find-id',
    name: 'findId',

    component: () => import('@/views/user/FindIdView.vue'),
  },
  {
    path: '/find-pw',
    name: 'findPw',

    component: () => import('@/views/user/FindPwView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
