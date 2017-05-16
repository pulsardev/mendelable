<template>
  <div class="c-element-profile-options">
    <div class="btn-group w-100" role="group" aria-label="Navigation">
      <router-link :to="'/element/' + previousElementId" tag="button" type="button" class="btn btn-primary w-100" :disabled="previousElementId === 0">{{ $t("sidebar.elementProfile.previous") }}</router-link>
      <router-link :to="'/element/' + nextElementId" tag="button" type="button" class="btn btn-primary w-100" :disabled="nextElementId === numberOfElements + 1">{{ $t("sidebar.elementProfile.next") }}</router-link>
    </div>

    <p class="text-muted mt-3">Debug</p>
    <div class="mdc-theme--dark">
      <div class="mdc-switch">
        <input v-model="debug" type="checkbox" id="basic-switch" class="mdc-switch__native-control"/>
        <div class="mdc-switch__background">
          <div class="mdc-switch__knob"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import * as types from '@/store/mutation-types'

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

<style lang="scss">
  @import "../../assets/scss/bootstrap/_variables";
  @import "../../../node_modules/@material/switch/dist/mdc.switch.css";

  .mdc-switch__native-control:checked ~ .mdc-switch__background::before,
  .mdc-switch__native-control:checked ~ .mdc-switch__background .mdc-switch__knob,
  .mdc-switch__native-control:checked ~ .mdc-switch__background .mdc-switch__knob::before {
    background-color: var(--mdc-theme-primary, $brand-primary);
  }

  .mdc-switch__knob::before {
    opacity: 0 !important;
  }
</style>
