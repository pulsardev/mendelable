import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import counters from './modules/counters'
import elements from './modules/elements'
import language from './modules/language'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    counters,
    elements,
    language
  },
  strict: debug
})
