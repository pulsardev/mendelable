<template>
  <form class="language-switcher">
    <div class="form-group">
      <select v-model="selected" @change="e => changeLanguage(e.target.value)" class="form-control" id="languageSelect">
        <option v-for="option in options" :value="option.value">{{ option.text }}</option>
      </select>
    </div>
  </form>
</template>

<script>
  import i18n from '@/i18n'
  import { mapActions } from 'vuex'

  export default {
    name: 'language-switcher',
    data () {
      return {
        selected: i18n.locale,
        options: [
          {text: 'English', value: 'en_US'},
          {text: 'Français', value: 'fr_FR'},
          {text: 'Türkçe', value: 'tr_TR'}
        ]
      }
    },
    methods: mapActions([
      'changeLanguage'
    ])
  }
</script>
