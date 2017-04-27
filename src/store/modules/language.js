import * as types from '../mutation-types'

const state = {
  locale: localStorage.getItem('locale') ? localStorage.getItem('locale') : 'fr_FR',
  fallbackLocale: 'en_US'
}

const mutations = {
  [types.UPDATE_LOCALE] (state, payload) {
    state.locale = payload
  }
}

export default {
  state,
  mutations
}
