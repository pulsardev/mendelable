<template>
  <div class="element-general-properties card col-md-7">
    <div v-if="Object.keys(element).length > 0" class="card-block">
      <div class="row">
        <element-badge class="col-1" :element="element"></element-badge>

        <div class="col">
          <h4 class="card-title">{{ element.name }}</h4>
          <h6 class="card-subtitle mb-2 text-muted">{{ element.atomicNumber }}</h6>
        </div>
      </div>

      <p class="card-text">{{ element }}</p>

      <chart></chart>
    </div>
  </div>
</template>

<script>
  import ElementBadge from '../ElementBadge'
  import { bus } from '@/shared/bus'
  import Chart from '../shared/Chart'

  export default {
    name: 'element-general-properties',
    components: {
      Chart, ElementBadge
    },
    created: function () {
      bus.$on('language:change', this.fetchLocalizedData)

      fetch('https://mendelable.firebaseio.com/default/' + this.$route.params.symbol + '.json')
        .then(response => response.json())
        .then((response) => {
          this.element = response

          if (this.$i18n.locale !== 'en_US') {
            this.fetchLocalizedData()
          }
        })
    },
    data () {
      return {
        element: {},
        symbol: this.$route.params.symbol
      }
    },
    methods: {
      fetchLocalizedData () {
        let locale = this.$i18n.locale === 'en_US' ? 'default' : this.$i18n.locale
        fetch('https://mendelable.firebaseio.com/' + locale + '/' + this.$route.params.symbol + '.json')
          .then(response => response.json())
          .then((response) => {
            this.element = Object.assign({}, this.element, response)
          })
      }
    }
  }
</script>

<style scoped>
  .card-title {
    text-transform: capitalize;
  }
  .element-general-properties {
    float: left;
    margin-right: 15px;
  }
</style>
