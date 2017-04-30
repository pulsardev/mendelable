<template>
  <div class="element-atomic-properties card">
    <div v-if="Object.keys(element).length > 0" class="card-block">
      <div class="row">
        <div class="col">
          <h4 class="card-title">{{ element.name }}</h4>
          <h6 class="card-subtitle mb-2 text-muted">{{ element.atomicNumber }}</h6>
        </div>
      </div>

      <p class="card-text">Atomic properties.</p>

      <doughnut-chart></doughnut-chart>
    </div>
  </div>
</template>

<script>
  import ElementBadge from '../ElementBadge'
  import DoughnutChart from '../shared/DoughnutChart'

  export default {
    name: 'element-atomic-properties',
    props: ['element'],
    components: {
      DoughnutChart, ElementBadge
    }
  }
</script>

<style scoped>
  .card-title {
    text-transform: capitalize;
  }
</style>
