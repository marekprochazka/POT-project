import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import homepage from '../views/homepage/App.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homepage',
    component: homepage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
