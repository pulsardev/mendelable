<template>
  <div class="c-line-chart">
    <canvas ref="c-line-chart"></canvas>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Chart from 'chart.js'
  import { colors } from '@/shared/colors'

  export default {
    name: 'line-chart',
    props: ['element'],
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

          // Don't show irrelevant data on the graph
          if (element.ionizationEnergy !== 0) {
            data.push({
              x: element.atomicNumber,
              y: element.ionizationEnergy
            })
          }
        }

        let ctx = this.$refs['c-line-chart']

        // eslint-disable-next-line no-new
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: this.$t('element.ionizationEnergy'),
            datasets: [
              {
                label: this.$t('element.ionizationEnergy'),
                data: [
                  {
                    x: this.element.atomicNumber,
                    y: this.element.ionizationEnergy
                  }
                ],
                pointBorderWidth: 10,
                pointBorderColor: 'rgba(255, 255, 255, 0.25)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)'
              },
              {
                label: this.$t('element.ionizationEnergy'),
                data: data,
                backgroundColor: [
                  'rgba(' + colors[this.element.elementGroup] + ', 0.1)'
                ],
                showLine: true,
                borderColor: 'rgba(' + colors[this.element.elementGroup] + ', 0.5)',
                borderWidth: 2,
                pointBorderWidth: 0,
                pointBackgroundColor: 'rgba(' + colors[this.element.elementGroup] + ', 1)',
                pointRadius: 2,
                borderJoinStyle: 'round',
                lineTension: 0
              }
            ]
          },
          options: {
            responsive: true,
            legend: {
              labels: {
                boxWidth: 0,
                fontColor: 'transparent'
              }
            },
            tooltips: {
              callbacks: {
                title: (tooltipItem, data) => {
                  return this.elements[(tooltipItem[0].index + 1).toString()].name
                }
              }
            },
            scales: {
              xAxes: [{
                type: 'linear',
                position: 'bottom',
                gridLines: {
                  display: false,
                  drawBorder: false,
                  tickMarkLength: 0
                },
                ticks: {
                  beginAtZero: false,
                  min: 1,
                  max: 103,
                  display: false
                }
              }],
              yAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false,
                  tickMarkLength: 0
                },
                ticks: {
                  display: false
                }
              }]
            }
          }
        })
      }
    }
  }
</script>
