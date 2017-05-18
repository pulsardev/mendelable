<template>
  <div class="c-element-profile-options">
    <div class="btn-group w-100" role="group" aria-label="Navigation">
      <router-link :to="'/element/' + previousElementId" tag="button" type="button" class="btn btn-primary w-100" :disabled="previousElementId === 0">{{ $t("sidebar.elementProfile.previous") }}</router-link>
      <router-link :to="'/element/' + nextElementId" tag="button" type="button" class="btn btn-primary w-100" :disabled="nextElementId === numberOfElements + 1">{{ $t("sidebar.elementProfile.next") }}</router-link>
    </div>

    <p class="text-muted mt-3">Debug</p>
    <mdc-switch v-model="debug"></mdc-switch>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import * as types from '@/store/mutation-types'
  import MdcSwitch from '../shared/MaterialComponents/MdcSwitch'

  export default {
    name: 'element-profile-options',
    components: {
      MdcSwitch
    },
    computed: {
      ...mapState({
        numberOfElements: state => Object.keys(state.elements.default).length
      }),
      previousElementId () {
        return +this.$route.params.id - 1
      },
      nextElementId () {
        return +this.$route.params.id + 1
      },
      debug: {
        get () {
          return this.$store.state.configuration.debug
        },
        set (value) {
          this.$store.commit(types.TOGGLE_DEBUG, value)
        }
      }
    }
  }
</script>

<style scoped>
  .btn-group > .btn {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
