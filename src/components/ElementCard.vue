<template>
<div class="element-card card">
  <div class="card-block">
    <div class="row">
      <element-badge class="col-1"></element-badge>

      <div class="col">
        <h4 class="card-title">{{ element.name }}</h4>
        <h6 class="card-subtitle mb-2 text-muted">{{ element.data.atomicNumber }}</h6>
      </div>
    </div>
    <p class="card-text">{{ element.data.boilingPoint }}</p>
    <p class="card-text">{{ element.data.criticalPoint }}</p>
    <p class="card-text">{{ element.data.density }}</p>
    <p class="card-text">{{ element.data.electronConfiguration }}</p>
    <p class="card-text">{{ element.data.electronegativity }}</p>
    <p class="card-text">{{ element.data.electronsPerShell }}</p>
    <p class="card-text">{{ element.data.heatOfFusion }}</p>
    <p class="card-text">{{ element.data.heatOfVaporization }}</p>
    <p class="card-text">{{ element.data.meltingPoint }}</p>
    <p class="card-text">{{ element.data.molarHeatCapacity }}</p>
    <p class="card-text">{{ element.data.period }}</p>
    <p class="card-text">{{ element.data.phase }}</p>
  </div>
</div>
</template>

<script>
import ElementBadge from './ElementBadge'

export default {
  name: 'element-card',
  components: {
    ElementBadge
  },
  beforeCreate: function () {
    fetch('https://mendelable.firebaseio.com/default/' + this.$route.params.symbol + '.json')
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        this.element = response
      })
    if (this.$i18n.locale !== 'en_US') {
      fetch('https://mendelable.firebaseio.com/' + this.$i18n.locale + '/' + this.$route.params.symbol + '.json')
        .then((response) => {
          return response.json()
        })
        .then((response) => {
          var data = this.element
          this.element = {data, ...response}
        })
    }
  },
  data () {
    return {
      element: {}
    }
  }
}
</script>
