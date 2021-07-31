import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.css"
import "./dj-reverse/reverse"

import './styles/_entry.scss'

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.loginRequired)) {
        if (!store.getters.isLoggedIn) {
            next({name: 'login'})
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.anonymousRequired)) {
        if (store.getters.isLoggedIn) {
            next({name: 'homepage'})
        } else {
            next()
        }
    } else {
        next()
    }
})

createApp(App).use(store).use(router).mount('#app')
