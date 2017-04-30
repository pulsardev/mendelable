<template>
  <div class="element-general-properties card">
    <div v-if="Object.keys(element).length > 0" class="card-block">
      <div class="row">
        <div class="col d-flex">
          <element-badge :element="element"></element-badge>
          <div class="ml-4">
            <h4 class="card-title">{{ element.name }}</h4>
            <h6 class="card-subtitle mb-2 text-muted">{{ element.atomicNumber }}</h6>
          </div>
        </div>
      </div>

      <div class="row">
        <featured-value :value="element.weight" title="weight" :element="element" :colored="true" class="col-md-6 mt-4"></featured-value>
        <featured-value :value="element.atomicNumber" title="atomicNumber" :element="element" :colored="true" class="col-md-6 mt-4"></featured-value>
      </div>

      <div v-if="!preview">
        <p class="card-text">{{ element }}</p>

        <bar-chart></bar-chart>
      </div>
    </div>
  </div>
</template>

<script>
  import ElementBadge from '../ElementBadge'
  import BarChart from '../shared/BarChart'
  import FeaturedValue from './FeaturedValue'

  export default {
    name: 'element-general-properties',
    props: ['element', 'preview'],
    components: {
      FeaturedValue, BarChart, ElementBadge
    }
  }
</script>

<style scoped>
  .card-title {
    text-transform: capitalize;
  }
</style>
