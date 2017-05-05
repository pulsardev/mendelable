<template>
  <div class="c-line-chart">
    <canvas ref="c-line-chart"></canvas>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Chart from 'chart.js'

  export default {
    name: 'line-chart',
    computed: mapGetters({
      elements: 'localizedElements'
    }),
    mounted: function () {
      this.renderChart()
    },
    watch: {
      element: function () {
        this.renderChart()
      }
    },
    methods: {
      renderChart: function () {
        let elements = this.elements

        let data = []

        for (let key of Object.keys(elements)) {
          let element = elements[key]
          data.push({
            x: element.atomicNumber,
            y: element.ionizationEnergy
          })
        }

        let ctx = this.$refs['c-line-chart']

        // eslint-disable-next-line no-new
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: 'Ionization energy',
            datasets: [{
              label: 'Ionization energy',
              data: data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              xAxes: [{
                type: 'linear',
                position: 'bottom'
              }]
            },
            showLines: false
          }
        })
      }
    }
  }
</script>
