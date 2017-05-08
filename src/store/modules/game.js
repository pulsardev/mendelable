import * as types from '../mutation-types'

export const gameStates = {
  IS_RUNNING: 'IS_RUNNING',
  IS_NOT_RUNNING: 'IS_NOT_RUNNING'
}

const state = {
  state: gameStates.IS_NOT_RUNNING
}

const mutations = {
  [types.UPDATE_GAME_STATE] (state, payload) {
    state.state = payload
  }
}

export default {
  state,
  mutations
}
