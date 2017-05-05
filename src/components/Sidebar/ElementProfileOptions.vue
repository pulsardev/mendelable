<template>
  <div class="c-element-profile-options">
    <div class="btn-group w-100" role="group" aria-label="Navigation">
      <router-link :to="'/element/' + previousElementId" tag="button" type="button" class="btn btn-primary w-100" :disabled="previousElementId === 0">{{ $t("sidebar.elementProfile.previous") }}</router-link>
      <router-link :to="'/element/' + nextElementId" tag="button" type="button" class="btn btn-primary w-100" :disabled="nextElementId === numberOfElements + 1">{{ $t("sidebar.elementProfile.next") }}</router-link>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'element-profile-options',
    computed: {
      ...mapState({
        numberOfElements: state => Object.keys(state.elements.default).length
      }),
      previousElementId () {
        return +this.$route.params.id - 1
      },
      nextElementId () {
        return +this.$route.params.id + 1
      }
    }
  }
</script>
