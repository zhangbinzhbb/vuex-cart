import Vue from 'vue'
import Vuex from 'vuex'
import defaultState from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import shop from './modules/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: defaultState,
  mutations,
  actions,
  getters,
  modules: {
    shop
  }
})
