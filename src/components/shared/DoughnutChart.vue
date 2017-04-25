<template>
  <div class="doughnut-chart">
    <canvas ref="doughnut-chart" width="200" height="200"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js'

  export default {
    name: 'doughnut-chart',
    mounted: function () {
      let ctx = this.$refs['doughnut-chart']

      // eslint-disable-next-line no-new
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [
            'Red',
            'Blue',
            'Yellow'
          ],
          datasets: [
            {
              data: [300, 50, 100],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
              ],
              hoverBackgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
              ],
              borderWidth: 0
            }]
        },
        options: {
          responsive: false
        }
      })
    }
  }
</script>
