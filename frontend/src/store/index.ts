import { createStore } from 'vuex'
import { ILoginData } from './interface'

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
    }
  },
  actions: {
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
