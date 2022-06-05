import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from '@/components/ViewHome'
import ViewEveAuth from "@/components/ViewEveAuth";

const routes = [
  {
    path: '/',
    component: ViewHome,
  },
  {
    path: '/eveauth/',
    component: ViewEveAuth,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
