<template>
  <div class="element-card card">
    <div v-if="Object.keys(element).length > 0" class="card-block">
      <div class="row">
        <div class="col">
          <h4 class="card-title">{{ element.name }}</h4>
          <h6 class="card-subtitle mb-2 text-muted">{{ element.atomicNumber }}</h6>
        </div>
      </div>

      <p class="card-text">Physical properties.</p>
    </div>
  </div>
</template>

<script>
  import ElementBadge from '../ElementBadge'

  export default {
    name: 'element-physical-properties',
    props: ['element'],
    components: {
      ElementBadge
    }
  }
</script>

<style scoped>
  .card-title {
    text-transform: capitalize;
  }
</style>
