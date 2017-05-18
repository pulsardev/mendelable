import * as types from '../mutation-types'

const state = {
  debug: false,
  simpleView: true
}

const mutations = {
  [types.TOGGLE_DEBUG] (state) {
    state.debug = !state.debug
  },
  [types.TOGGLE_SIMPLE_VIEW] (state) {
    state.simpleView = !state.simpleView
  }
}

export default {
  state,
  mutations
}
