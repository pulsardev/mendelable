import * as types from '../mutation-types'

let getNavigatorLanguage = function () {
  console.log('navigator.language', window.navigator.language)
  let language = window.navigator.language.toLowerCase().replace('-', '_')

  switch (language) {
    case 'fr':
    case 'fr_fr':
      return 'fr_FR'
    default:
      return 'en_US'
  }
}

const state = {
  locale: localStorage.getItem('locale') ? localStorage.getItem('locale') : getNavigatorLanguage(),
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
