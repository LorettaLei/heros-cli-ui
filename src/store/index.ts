import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    token (state: any, data: any) {
      state.token = data
    }
  },
  actions: {
  },
  modules: {
  }
})
