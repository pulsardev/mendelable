<template>
  <div class="doughnut-chart">
    <canvas ref="doughnut-chart"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js'

  export default {
    name: 'doughnut-chart',
    props: ['element'],
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
        let backgroundColors = [
          'rgba(3, 169, 244, 1)',
          'rgba(239, 187, 49, 1)',
          'rgba(25, 202, 167, 1)',
          'rgba(244, 67, 54, 1)',
          'rgba(103, 58, 183, 1)',
          'rgba(53, 64, 77, 1)'
        ]

        let baseData = [0, 0, 0, 0, 0, 0]
        let shells = {
          k: {array: baseData.slice(), maxElectrons: 2, index: 0},
          l: {array: baseData.slice(), maxElectrons: 8, index: 1},
          m: {array: baseData.slice(), maxElectrons: 18, index: 2},
          n: {array: baseData.slice(), maxElectrons: 32, index: 3},
          o: {array: baseData.slice(), maxElectrons: 50, index: 4}
        }

        for (let shell of Object.keys(shells)) {
          let shellIndex = shells[shell].index
          let numberOfElectrons = this.element.electronsPerShell[shellIndex]

          if (this.element.electronsPerShell[shellIndex]) {
            shells[shell].array[shellIndex] = numberOfElectrons
            shells[shell].array[5] = shells[shell].maxElectrons - numberOfElectrons
          }
        }

        let ctx = this.$refs['doughnut-chart']

        // eslint-disable-next-line no-new
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: [
              'K', // 2
              'L', // 8
              'M', // 18
              'N', // 32
              'O', // 50
              ''
            ],
            datasets: [
              {
                data: baseData,
                backgroundColor: backgroundColors,
                borderWidth: 0,
                borderColor: '#1f2731'
              },
              {
                data: [0],
                borderWidth: 0
              },
              {
                data: [0],
                borderWidth: 0
              },
              {
                data: [0],
                borderWidth: 0
              },
              {
                data: shells['o'].array, // [0, 0, 0, 0, 0, 0] for Scandium
                backgroundColor: backgroundColors,
                borderWidth: 0,
                borderColor: '#1f2731'
              },
              {
                data: [0],
                borderWidth: 0
              },
              {
                data: [0],
                borderWidth: 0
              },
              {
                data: [0],
                borderWidth: 0
              },
              {
                data: shells['n'].array, // [0, 0, 0, 2, 0, 30] for Scandium
                backgroundColor: backgroundColors,
                borderWidth: 0,
                borderColor: '#1f2731'
              },
              {
                data: [0],
                borderWidth: 0
              },
              {
                data: [0],
                borderWidth: 0
              },
              {
                data: [0],
                borderWidth: 0
              },
              {
                data: shells['m'].array, // [0, 0, 9, 0, 0, 9] for Scandium
                backgroundColor: backgroundColors,
                borderWidth: 0,
                borderColor: '#1f2731'
              },
              {
                data: [0],
                borderWidth: 0
              },
              {
                data: [0],
                borderWidth: 0
              },
              {
                data: [0],
                borderWidth: 0
              },
              {
                data: shells['l'].array, // [0, 8, 0, 0, 0, 0] for Scandium
                backgroundColor: backgroundColors,
                borderWidth: 0,
                borderColor: '#1f2731'
              },
              {
                data: shells['k'].array, // [2, 0, 0, 0, 0, 0] for Scandium
                backgroundColor: backgroundColors,
                borderWidth: 0,
                borderColor: '#1f2731'
              }
            ]
          },
          options: {
            responsive: true,
            cutoutPercentage: 0,
            rotation: Math.PI,
            legend: {
              display: true,
              labels: {
                fontColor: 'white',
                usePointStyle: true
              },
              position: 'bottom'
            }
          }
        })
      }
    }
  }
</script>
