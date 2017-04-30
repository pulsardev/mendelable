<template>
  <div class="c-radar-chart">
    <canvas id="c-radar-chart" ref="c-radar-chart"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js'

  export default {
    name: 'radar-chart',
    props: ['element'],
    mounted: function () {
      let ctx = this.$refs['c-radar-chart']

      // eslint-disable-next-line no-new
      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: [this.$t('element.weight'), 'Boiling point', 'Fusion point'],
          datasets: [
            {
              label: this.element.name,
              backgroundColor: 'rgba(3,169,244,0.2)',
              borderColor: 'rgba(3,169,244,1)',
              pointBackgroundColor: 'rgba(3,169,244,1)',
              pointHoverBorderColor: 'rgba(3,169,244,1)',
              data: [28, 48, 40]
            }
          ]
        },
        options: {
          responsive: true,
          tooltips: {
            backgroundColor: '#131b21'
          },
          title: {
            display: false
          },
          legend: {
            display: false,
            labels: {
              fontColor: 'white',
              usePointStyle: true
            }
          },
          scale: {
            angleLines: {
              display: false
            },
            gridLines: {
              display: false
            },
            ticks: {
              backdropColor: 'transparent',
              display: false,
              beginAtZero: true
            },
            pointLabels: {
              fontSize: 12.8
            }
          }
        }
      })
    }
  }
</script>
