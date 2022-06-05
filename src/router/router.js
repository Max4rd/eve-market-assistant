import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from '@/components/views/ViewHome'

const routes = [
  {
    path: '/',
    component: ViewHome,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
