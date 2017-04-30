<template>
  <div class="c-element-profile">
    <div class="row no-gutters">
      <div class="col-md-8">
        <element-general-properties :element="element"></element-general-properties>
      </div>

      <div class="col-md-4">
        <element-atomic-properties :element="element"></element-atomic-properties>
        <element-atomic-properties :element="element"></element-atomic-properties>
        <element-atomic-properties :element="element"></element-atomic-properties>
      </div>
    </div>

    <div class="row no-gutters">
      <div class="col">
        <element-physical-properties :element="element"></element-physical-properties>
      </div>
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
  .c-element-profile {
    margin: -0.25vw;
  }

  .c-element-profile .card {
    margin: 0.25vw;
  }
</style>
