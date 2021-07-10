import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import homepage from '../views/homepage/App.vue'
import login from '../views/auth/login/App.vue'
import sign_in from '../views/auth/sign_in/App.vue'
import planCreate from '../views/plan/planCreate/App.vue'

const routes: Array<RouteRecordRaw> = [
    // BASIC VIEWS

  {
    path: '/',
    name: 'homepage',
    component: homepage,
    meta: {
      loginRequired: true
    }
  },
  {
    path:'/plan/create',
    name:'planCreate',
    component: planCreate,
    meta: {
      loginRequired: true
    }
  },

    // AUTH VIEWS
  {
    path:'/login',
    name:'login',
    component: login,
    meta: {
      anonymousRequired: true
    }
  },
  {
    path:'/sign-in',
    name:'sign-in',
    component: sign_in,
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
