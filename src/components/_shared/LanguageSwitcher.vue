<template>
  <form class="language-switcher">
    <div class="form-group">
      <label for="languageSelect">{{ $t("language.label") }}</label>
      <select v-model="selected" @change="changeLanguage" class="form-control" id="languageSelect">
        <option v-for="option in options" :value="option.value">{{ option.text }}</option>
      </select>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'language-switcher',
    data () {
      return {
        selected: this.$i18n.locale,
        options: [
          {text: 'English', value: 'en_US'},
          {text: 'Français', value: 'fr_FR'}
        ]
      }
    },
    methods: {
      changeLanguage (e) {
        this.$i18n.locale = e.target.value
      }
    }
  }
</script>
