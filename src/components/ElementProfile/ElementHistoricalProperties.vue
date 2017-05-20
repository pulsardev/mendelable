<template>
  <div class="element-card card">
    <div v-if="Object.keys(element).length > 0" class="card-block">
      <h6 class="card-title text-uppercase font-weight-bold">
        <small>{{ $t("history.generalInformation") }}</small>
      </h6>

      <div class="row">
        <div class="col d-flex align-items-center">
          <a v-if="discoveryAuthorImage" class="mr-4" :href="discoveryAuthorImage" target="_blank">
            <img class="rounded-circle" :src="discoveryAuthorImage">
          </a>

          <featured-value class="mr-4" :value="element.discoveryDate" title="history.discoveryDate" :element="element" :colored="true"></featured-value>
          <featured-value v-if="!element.discoveryDate" value="???" title="history.discoveryDate" :element="element" :colored="true"></featured-value>
          <featured-value :value="element.discoveryAuthor" title="history.discoveredBy" :element="element"></featured-value>
        </div>
      </div>

      <div v-if="element.context" class="row">
        <div class="col">
          <p class="text-muted mt-3 mb-0">{{ element.context }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FeaturedValue from './FeaturedValue'

  export default {
    name: 'element-historical-properties',
    components: {
      FeaturedValue
    },
    props: ['element'],
    computed: {
      discoveryAuthorImage () {
        try { return require('../../assets/imgs/scientists/' + this.element.atomicNumber + '.jpg') } catch (e) {}
      }
    }
  }
</script>

<style scoped>
  .card-title {
    text-transform: capitalize;
  }

  img {
    height: 128px;
    width: 128px;
    object-fit: cover;
  }

  .c-featured-value__text {
    margin-bottom: 0;
  }
</style>
