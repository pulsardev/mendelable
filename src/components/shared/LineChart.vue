<template>
  <div class="linechart">
    <canvas id="linechart" ref="linechart"></canvas>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Chart from 'chart.js'

  export default {
    name: 'line-chart',
    computed: {
      ...mapGetters({
        elements: 'localizedElements'
      }),
      selectedElement () {
        return this.elements[this.selectedElementSymbol] || {}
      }
    },
    mounted: function () {
      let ctx = this.$refs.linechart
      var elements = this.elements
      console.log(elements)

      var data = []

      for (var key in elements) {
        var element = elements[key]
        data.push({
          x: element.period,
          y: element.ionizationEnergy
        })
      }

      console.log(data)
      // eslint-disable-next-line no-new
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: 'ionization energy',
          datasets: [{
            label: 'ionization energy',
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
</script>
