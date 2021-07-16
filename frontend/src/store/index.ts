import { createStore } from 'vuex'
import state from './_state'
import mutations from './_mutations'
import actions from './_actions'
import getters from './_getters'

export default createStore({
  state,
  mutations,
  actions,
  getters
})
