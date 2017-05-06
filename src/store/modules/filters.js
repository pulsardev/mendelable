import * as types from '../mutation-types'

const state = {
  search: '',
  groups: []
}

const mutations = {
  [types.UPDATE_SEARCH] (state, payload) {
    state.search = payload
  }
}

export default {
  state,
  mutations
}
