<template>
  <div class="element-card card">
    <div v-if="Object.keys(element).length > 0" class="card-block">
      <h6 class="card-title text-uppercase font-weight-bold">
        <small>{{ $t("history.generalInformation") }}</small>
      </h6>
      <div class="row">
        <div class="col-6">
          <p>{{ $t("history.discoveredBy") }} : {{ element.discoveryAuthor }}</p>
          <p>{{ $t("history.discoveryDate") }} : {{ element.discoveryDate }}</p>
          <p>{{ $t("history.context") }} : {{ element.context }}</p>
        </div>
        <div class="col-6">
          <img :src="discoveryAuthorImage">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'element-historical-properties',
    props: ['element'],
    computed: {
      discoveryAuthorImage () {
        return require('../../assets/imgs/scientists/' + this.element.atomicNumber + '.jpg')
      }
    }
  }
</script>

<style scoped>
  .card-title {
    text-transform: capitalize;
  }
</style>
