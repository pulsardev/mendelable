import * as types from './mutation-types'
import i18n from '@/i18n'

export const decrementMain = ({commit}) => {
  commit(types.DECREMENT_MAIN_COUNTER)
}

export const incrementMain = ({commit}) => {
  commit(types.INCREMENT_MAIN_COUNTER)
}

// Language
export const changeLanguage = ({commit}, payload) => {
  i18n.locale = payload
  localStorage.setItem('locale', payload)
  commit(types.UPDATE_LOCALE, payload)
}
