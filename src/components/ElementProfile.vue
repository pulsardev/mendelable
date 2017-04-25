<template>
  <div class="element-profile row no-gutters d-flex align-content-stretch flex-wrap">
    <div class="col-md-8 pr-3">
      <element-general-properties></element-general-properties>
    </div>

    <div class="col-md-4">
      <element-atomic-properties></element-atomic-properties>
    </div>

    <div class="col-md-12 pt-3">
      <element-physical-properties></element-physical-properties>
    </div>
  </div>
</template>

<script>
  import ElementGeneralProperties from './ElementProfile/ElementGeneralProperties'
  import ElementAtomicProperties from './ElementProfile/ElementAtomicProperties'
  import ElementPhysicalProperties from './ElementProfile/ElementPhysicalProperties'

  export default {
    name: 'element-profile',
    components: {
      ElementGeneralProperties, ElementAtomicProperties, ElementPhysicalProperties
    }
  }
</script>

<style scoped>
  .card-title {
    text-transform: capitalize;
  }
</style>
