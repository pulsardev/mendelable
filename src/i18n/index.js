import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@/store'

Vue.use(VueI18n)

const messages = {
  en_US: require('./data/en_US.json'),
  fr_FR: require('./data/fr_FR.json'),
  tr_TR: require('./data/tr_TR.json')
}

export default new VueI18n({
  locale: store.state.language.locale,
  fallbackLocale: store.state.language.fallbackLocale,
  messages
})
