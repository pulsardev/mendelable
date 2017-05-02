<template>
  <div class="c-chart">
    <canvas ref="c-chart"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js'

  export default {
    name: 'bar-chart',
    props: ['element'],
    mounted: function () {
      let data = []
      // TODO: the way we convert from Celsius to Kelvin is temporary, we should use a Vue.filter instead
      data.push(Math.round(this.element.boilingPoint['C'] + 273.15))
      data.push(Math.round(this.element.meltingPoint['C'] + 273.15))

      let ctx = this.$refs['c-chart']

      // eslint-disable-next-line no-new
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [this.$t('element.boilingPoint'), this.$t('element.meltingPoint')],
          datasets: [{
            label: this.$t('general.temperature') + ' (°K)',
            data: data,
            backgroundColor: [
              'rgba(244, 67, 54, 1)',
              'rgba(239, 187, 49, 1)'
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              barThickness: 5,
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                fontColor: 'white'
              }
            }],
            yAxes: [{
              scaleLabel: {
                fontColor: 'white'
              },
              gridLines: {
                color: 'rgba(255,255,255,0.05)',
                drawBorder: false
              },
              ticks: {
                beginAtZero: true,
                padding: 16
              }
            }]
          },
          legend: {
            display: false,
            labels: {
              fontColor: 'white',
              boxWidth: 0
            },
            position: 'bottom'
          }
        }
      })
    }
  }
</script>
