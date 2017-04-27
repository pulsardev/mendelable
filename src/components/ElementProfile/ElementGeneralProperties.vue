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

      <div class="row">
        <featured-value :value="element.atomicNumber" title="atomicNumber" class="col-md-6 mt-4"></featured-value>
        <featured-value :value="element.weight" title="weight" class="col-md-6 mt-4"></featured-value>
      </div>

      <p class="card-text">{{ element }}</p>

      <chart></chart>
    </div>
  </div>
</template>

<script>
  import ElementBadge from '../ElementBadge'
  import Chart from '../shared/Chart'
  import FeaturedValue from './FeaturedValue'

  export default {
    name: 'element-general-properties',
    props: ['element'],
    components: {
      FeaturedValue, Chart, ElementBadge
    }
  }
</script>

<style scoped>
  .card-title {
    text-transform: capitalize;
  }
</style>
