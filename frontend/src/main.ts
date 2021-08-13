import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Icon from './views/utils/icon/App.vue'
import ModalBase from './views/utils/modalBase/App.vue'
import TextField from './views/utils/TextField/App.vue'

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


createApp(App)
    .component('vue-icon', Icon)
    .component('vue-modal', ModalBase)
    .component('vue-text-field', TextField)
    .use(store).use(router)
    .mount('#app')
