import { fromJS } from 'immutable'

export const mainCounter = state => state.counters.main

// Elements
export const localizedElements = state => {
  let locale = state.language.locale === 'en_US' ? 'default' : state.language.locale
  let defaultElements = state.elements.default
  let localizedData = state.elements[locale]
  return fromJS(defaultElements).mergeDeep(localizedData).toJS()
}
