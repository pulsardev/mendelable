<template>
  <div class="element-card card">
    <div v-if="Object.keys(element).length > 0" class="card-block">
      <div class="row">
        <div class="col-6">
          <h4>{{ $t("general.generalInformation") }}</h4>
          <h6>{{ $t("general.discoveryBy") }} : {{ element.discoveryAuthor }}</h6>
          <h6>{{ $t("general.discoveryDate") }} : {{ element.discoveryDate }}</h6>
          <h6>{{ $t("general.context") }} : {{ element.context }}</h6>
        </div>
        <div class="col-6">
          <img :src="path(element.atomicNumber)"></img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'element-historical-properties',
    props: ['element'],
    methods: {
      path: function (atomicNumber) {
        return '../../assets/imgs/scientists/' + atomicNumber + '.jpg'
      }
    }
  }
</script>

<style scoped>
  .card-title {
    text-transform: capitalize;
  }
</style>
