import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import homepage from '../views/homepage/App.vue'
import login from '../views/auth/login/App.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homepage',
    component: homepage
  },
  {
    path:'/login',
    name:'login',
    component: login
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
