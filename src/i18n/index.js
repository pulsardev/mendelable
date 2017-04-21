import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en_US: {
    sidebar: {
      subtitle: 'About the selected element'
    }
  },
  fr_FR: {
    sidebar: {
      subtitle: 'À propos de l\'élément sélectionné'
    }
  }
}

export default new VueI18n({
  locale: 'fr_FR',
  messages
})
