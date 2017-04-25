<template>
  <div class="element-profile row no-gutters d-flex align-content-stretch flex-wrap">
    <div class="col-md-8 pr-3">
      <element-general-properties :element="element"></element-general-properties>
    </div>

    <div class="col-md-4">
      <element-atomic-properties :element="element"></element-atomic-properties>
    </div>

    <div class="col-md-12 pt-3">
      <element-physical-properties :element="element"></element-physical-properties>
    </div>
  </div>
</template>

<script>
  import i18n from '@/i18n'
  import { bus } from '@/shared/bus'
  import { mapState } from 'vuex'
  import ElementGeneralProperties from './ElementProfile/ElementGeneralProperties'
  import ElementAtomicProperties from './ElementProfile/ElementAtomicProperties'
  import ElementPhysicalProperties from './ElementProfile/ElementPhysicalProperties'

  export default {
    name: 'element-profile',
    components: {
      ElementGeneralProperties, ElementAtomicProperties, ElementPhysicalProperties
    },
    created: function () {
      bus.$on('language:change', this.fetchLocalizedData)

      this.element = this.elements.default[this.$route.params.symbol]
    },
    computed: mapState({
      elements: state => state.elements
    }),
    data () {
      return {
        element: {},
        symbol: this.$route.params.symbol
      }
    },
    methods: {
      fetchLocalizedData () {
        let locale = i18n.locale === 'en_US' ? 'default' : i18n.locale
        this.element = Object.assign({}, this.element, this.elements[locale][this.$route.params.symbol])
      }
    }
  }
</script>

<style scoped>
  .card-title {
    text-transform: capitalize;
  }
</style>
