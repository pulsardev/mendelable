<template>
  <div class="element-card card">
    <div v-if="Object.keys(element).length > 0" class="card-block">
      <div class="row">
        <element-badge class="col-1" :symbol="symbol"></element-badge>

        <div class="col">
          <h4 class="card-title">{{ element.name }}</h4>
          <h6 class="card-subtitle mb-2 text-muted">{{ element.atomicNumber }}</h6>
        </div>
      </div>
      <p class="card-text">{{ element.boilingPoint }}</p>
      <p class="card-text">{{ element.criticalPoint }}</p>
      <p class="card-text">{{ element.density }}</p>
      <p class="card-text">{{ element.electronConfiguration }}</p>
      <p class="card-text">{{ element.electronegativity }}</p>
      <p class="card-text">{{ element.electronsPerShell }}</p>
      <p class="card-text">{{ element.heatOfFusion }}</p>
      <p class="card-text">{{ element.heatOfVaporization }}</p>
      <p class="card-text">{{ element.meltingPoint }}</p>
      <p class="card-text">{{ element.molarHeatCapacity }}</p>
      <p class="card-text">{{ element.period }}</p>
      <p class="card-text">{{ element.phase }}</p>
    </div>
  </div>
</template>

<script>
  import ElementBadge from './ElementBadge'
  import { bus } from '@/shared/bus'

  export default {
    name: 'element-card',
    components: {
      ElementBadge
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
