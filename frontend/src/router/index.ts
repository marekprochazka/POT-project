import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import homepage from '../views/homepage/App.vue'
import login from '../views/auth/login/App.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homepage',
    component: homepage,
    meta: {
      loginRequired: true
    }
  },
  {
    path:'/login',
    name:'login',
    component: login,
    meta: {
      anonymousRequired: true
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
