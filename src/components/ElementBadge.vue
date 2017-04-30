<template>
  <div class="c-element-badge" :class="element.elementGroup && element.elementGroup.toLowerCase()">
    <element-definition :element="element"></element-definition>
  </div>
</template>

<script>
  import ElementDefinition from './ElementDefinition'
  export default {
    name: 'element-badge',
    components: {
      ElementDefinition
    },
    props: ['element']
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/bootstrap/variables';
  @import '../assets/scss/components/element-badge.scss';

  .c-element-definition {
    color: black;
    line-height: 1;
    font-size: $font-size-h2;
  }
</style>
