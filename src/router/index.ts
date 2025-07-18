import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/tree1',
      name: 'tree1',
      component: () => import('@/views/Tress/Tree1View.vue'),
    },
    {
      path: '/less_sleep_more_social_media',
      name: 'less_sleep_more_social_media',
      component: () => import('@/views/Linear_Regresion/Less_sleep_more_social_media.vue'),
    },

    {
      path: '/form',
      name: 'form',
      component: () => import('@/views/Form.vue'),
    },
    {
      path: '/:pathMatch(.*)',
      name: 'Not found',
      component: () => import('@/views/NotFoundView.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/Test.vue'),
    },
  ],
})

export default router
