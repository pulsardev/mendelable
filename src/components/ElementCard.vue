<template>
  <div class="element-card card">
    <div class="card-block">
      <div class="row">
        <element-badge class="col-1"></element-badge>

        <div class="col">
          <h4 class="card-title">{{ name }}</h4>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        </div>
      </div>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
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
    data () {
      return {
        symbol: 'Ti',
        name: 'Titanium'
      }
    }
  }
</script>
