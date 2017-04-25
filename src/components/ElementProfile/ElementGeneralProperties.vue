<template>
  <div class="element-general-properties card">
    <div v-if="Object.keys(element).length > 0" class="card-block">
      <div class="row">
        <element-badge class="col-1" :element="element"></element-badge>

        <div class="col">
          <h4 class="card-title">{{ element.name }}</h4>
          <h6 class="card-subtitle mb-2 text-muted">{{ element.atomicNumber }}</h6>
        </div>
      </div>

      <p class="card-text">{{ element }}</p>

      <chart></chart>
    </div>
  </div>
</template>

<script>
  import ElementBadge from '../ElementBadge'
  import Chart from '../shared/Chart'

  export default {
    name: 'element-general-properties',
    props: ['element'],
    components: {
      Chart, ElementBadge
    }
  }
</script>

<style scoped>
  .card-title {
    text-transform: capitalize;
  }
</style>
