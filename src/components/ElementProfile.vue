<template>
  <div class="element-profile row no-gutters d-flex align-content-stretch flex-wrap">
    <div class="col-md-8 pr-3">
      <element-general-properties :element="element"></element-general-properties>
    </div>

    <div class="col-md-4">
      <element-atomic-properties :element="element"></element-atomic-properties>
    </div>

    <div class="col-md-12 pt-3">
      <element-physical-properties :element="element"></element-physical-properties>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ElementGeneralProperties from './ElementProfile/ElementGeneralProperties'
  import ElementAtomicProperties from './ElementProfile/ElementAtomicProperties'
  import ElementPhysicalProperties from './ElementProfile/ElementPhysicalProperties'

  export default {
    name: 'element-profile',
    components: {
      ElementGeneralProperties, ElementAtomicProperties, ElementPhysicalProperties
    },
    computed: {
      ...mapGetters({
        elements: 'localizedElements'
      }),
      element () {
        return this.elements[this.$route.params.symbol]
      }
    },
    data () {
      return {
        symbol: this.$route.params.symbol
      }
    }
  }
</script>

<style scoped>
  .card-title {
    text-transform: capitalize;
  }
</style>
