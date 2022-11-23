import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/index/index.vue')
    },
    {
      path: '/login',
      component: () => import('../views/login/index.vue')
    }
  ]
})

export default router
