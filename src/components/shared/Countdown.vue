<template>
  <div class="c-countdown">
    <h1>{{ minutes | twoDigits }}:{{ seconds | twoDigits }}</h1>
  </div>
</template>

<script>
  import Vue from 'vue'
  import moment from 'moment'
  import { bus } from '@/shared/bus'

  Vue.filter('twoDigits', (value) => {
    if (value.toString().length <= 1) {
      return '0' + value.toString()
    }
    return value.toString()
  })

  export default {
    name: 'countdown',
    props: ['duration', 'durationUnit', 'play'],
    data () {
      return {
        elapsed: 0,
        countdown: 0
      }
    },
    watch: {
      play: function () {
        if (this.play) {
          this.countdown = setInterval(() => {
            if (this.elapsed === moment.duration(this.duration, this.durationUnit).asSeconds()) {
              clearInterval(this.countdown)
              bus.$emit('game:over')
            } else {
              this.elapsed++
            }
          }, 1000)
        } else {
          clearInterval(this.countdown)
          this.elapsed = 0
        }
      }
    },
    computed: {
      seconds () {
        return moment.duration(this.duration, this.durationUnit).subtract(this.elapsed, 'seconds').seconds()
      },
      minutes () {
        return moment.duration(this.duration, this.durationUnit).subtract(this.elapsed, 'seconds').minutes()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .c-countdown {
    white-space: nowrap;

    h1 {
      margin: 0;
    }
  }
</style>
