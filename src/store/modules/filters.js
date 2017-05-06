import * as types from '../mutation-types'

const state = {
  search: '',
  groups: []
}

const mutations = {
  [types.UPDATE_SEARCH] (state, payload) {
    state.search = payload
  },
  [types.ADD_GROUP] (state, payload) {
    if (state.groups.indexOf(payload) === -1) {
      state.groups.push(payload)
    }
  },
  [types.REMOVE_GROUP] (state, payload) {
    let index = state.groups.indexOf(payload)
    if (index !== -1) {
      state.groups.splice(index, 1)
    }
  }
}

export default {
  state,
  mutations
}
