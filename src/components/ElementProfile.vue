<template>
  <div>
    <element-general-properties></element-general-properties>
    <element-atomic-properties></element-atomic-properties>
    <element-physical-properties></element-physical-properties>
  </div>
</template>

<script>
  import ElementGeneralProperties from './elementProperties/ElementGeneralProperties'
  import ElementAtomicProperties from './elementProperties/ElementAtomicProperties'
  import ElementPhysicalProperties from './elementProperties/ElementPhysicalProperties'

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
