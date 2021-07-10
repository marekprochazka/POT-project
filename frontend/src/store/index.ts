import { createStore } from 'vuex'
import { ILoginData } from './interface'
import reverse from "django-reverse";
import axios from "axios";

export default createStore({
  state: {
    accessToken: localStorage.getItem('access_token') || null,
    refreshToken: localStorage.getItem('refresh_token') || null,
    username: localStorage.getItem('username') || null,

  },
  mutations: {
    updateUserLocalStorage(state, data:ILoginData) {
      localStorage.setItem('access_token',data.accessToken)
      localStorage.setItem('refresh_token',data.refreshToken)
      localStorage.setItem('username',data.username)
      state.accessToken = data.accessToken
      state.refreshToken = data.refreshToken
      state.username = data.username
    },
    updateAccess(state, access){
      state.accessToken = access
      localStorage.setItem('access_token',access)
    }
  },
  actions: {
    refreshToken(context) {
      return new Promise((resolve,reject) => {
        axios.post(reverse('core_api:refresh_token'), {
          refresh: context.state.refreshToken
        })
            .then(response => {
              console.log('token update')
              console.log(response.data.access)
              context.commit('updateAccess', response.data.access)
              resolve(response.data.access)
            })
            .catch(err => {
              console.log('error while token update')
              reject(err)
            })
      })
    }
  },
  getters: {
    getAccessToken: state => {
      return state.accessToken
    },
    isLoggedIn: state => {
      return state.accessToken != null
    }
  },
  modules: {
  }
})
