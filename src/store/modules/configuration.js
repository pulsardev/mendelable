import * as types from '../mutation-types'

const state = {
  debug: false
}

const mutations = {
  [types.TOGGLE_DEBUG] (state) {
    state.debug = !state.debug
  }
}

export default {
  state,
  mutations
}
