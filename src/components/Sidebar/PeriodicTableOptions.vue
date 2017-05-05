<template>
  <div class="c-periodic-table-options">
    <button v-for="group in groups" type="button" class="btn btn-primary btn-block" :class="'btn-' + group">{{ $t("element.group." + group) }}</button>
  </div>
</template>

<script>
  export default {
    name: 'periodic-table-options',
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
