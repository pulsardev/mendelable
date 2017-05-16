<template>
  <div class="element-general-properties card">
    <div v-if="Object.keys(element).length > 0" class="card-block">
      <div class="row">
        <div class="col d-flex">
          <element-badge :element="element"></element-badge>
          <div class="ml-4">
            <h4 class="card-title">{{ element.name }}</h4>
            <h6 class="card-subtitle mb-2 text-muted">{{ $t("element.group." + element.elementGroup) }}</h6>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <featured-value :value="element.weight" title="element.weight" :element="element" :colored="true" class="col-md-6 mt-4"></featured-value>
        <featured-value :value="element.atomicNumber" title="element.atomicNumber" :element="element" :colored="true" class="col-md-6 mt-4"></featured-value>
      </div>

      <div v-if="!preview">
        <!--<highlight :data="element"></highlight>-->

        <line-chart :element="element"></line-chart>
        <!--<bar-chart></bar-chart>-->
      </div>
    </div>
  </div>
</template>

<script>
  import ElementBadge from '../ElementBadge'
  import BarChart from '../shared/BarChart'
  import FeaturedValue from './FeaturedValue'
  import Highlight from '../shared/Highlight'
  import LineChart from '../shared/LineChart'

  export default {
    name: 'element-general-properties',
    props: ['element', 'preview'],
    components: {
      Highlight, FeaturedValue, BarChart, ElementBadge, LineChart
    }
  }
</script>

<style scoped>
  .card-title {
    text-transform: capitalize;
  }

  .c-line-chart {
    margin: -1.25rem;
  }
</style>
