<template>
  <div class="c-periodic-table-options">
    <button v-for="group in groups" type="button"
            @mouseover="addGroupOnHover(group)" @mouseout="removeGroupOnHover(group)"
            class="btn btn-primary btn-block" :class="'btn-' + group">{{ $t("element.group." + group) }}

    </button>

    <p class="text-muted mt-3">{{ $t("sidebar.simpleView") }}</p>
    <mdc-switch v-model="simpleView"></mdc-switch>
  </div>
</template>

<script>
  import * as types from '@/store/mutation-types'
  import MdcSwitch from '../shared/MaterialComponents/MdcSwitch'

  export default {
    name: 'periodic-table-options',
    components: {
      MdcSwitch
    },
    data () {
      return {
        groups: [
          'non-metal',
          'halogen',
          'metalloid',
          'metal',
          'alkali-metal',
          'alkaline-earth-metal',
          'transition-metal',
          'noble-gas',
          'lanthanoid',
          'actinoid'
        ]
      }
    },
    methods: {
      addGroupOnHover (group) {
        this.$store.commit(types.ADD_GROUP, group)
      },
      removeGroupOnHover (group) {
        setTimeout(() => this.$store.commit(types.REMOVE_GROUP, group), 125)
      }
    },
    computed: {
      simpleView: {
        get () {
          return this.$store.state.configuration.simpleView
        },
        set (value) {
          this.$store.commit(types.TOGGLE_SIMPLE_VIEW, value)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/trumps/colors';

  @each $name, $color in $groups {
    .btn-#{$name} {
      background-color: rgba($color, 0.25);
      border: none;
      text-align: left;

      &:hover {
        background-color: rgba($color, 0.5);
      }
    }
  }
</style>
