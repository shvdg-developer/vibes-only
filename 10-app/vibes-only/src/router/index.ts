import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/guide',
    name: 'guide',
    component: () => import('@/pages/Guide.vue'),
    props: (route) => ({ tab: route.query.tab }),
  },
  {
    path: '/guide/:tab',
    name: 'guide-tab',
    component: () => import('@/pages/Guide.vue'),
    props: true,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router


