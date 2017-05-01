<template>
  <div v-if="element.electronsPerShell && Array.isArray(element.electronsPerShell)" class="element-atomic-properties card">
    <div v-if="Object.keys(element).length > 0" class="card-block">
      <h6 class="card-title text-uppercase font-weight-bold">
        <small>{{ $t("element.electronsPerShell") }}</small>
      </h6>

      <doughnut-chart :element="element"></doughnut-chart>
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
