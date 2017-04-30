<template>
  <dl class="c-element-definition d-flex flex-column justify-content-between">
    <dt class="c-element-definition__symbol align-self-center">{{ element.symbol }}</dt>
    <dd v-if="detailed" class="c-element-definition__top flex-first d-flex justify-content-between">
      <span class="c-element-definition__weight text-truncate">{{ element.weight }}</span>
      <span class="c-element-definition__atomic-number">{{ element.atomicNumber }}</span>
    </dd>
    <dd v-if="detailed" class="c-element-definition__name text-center text-truncate">{{ element.name }}</dd>
  </dl>
</template>

<script>
  export default {
    name: 'element-definition',
    props: ['element', 'detailed']
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/bootstrap/_variables";
  @import "../assets/scss/components/_variables";

  $element-height: 3.6vw;
  $elemont-font-size: 1vw;
  $grid-gutter: 0.25vw;

  .c-element-definition {
    min-height: 100%;
    margin: 0;
    padding: $grid-gutter;
    /* color: rgba($color, 0.25); */
    /* font-size: $elemont-font-size; */

    * {
      margin: 0;
    }
  }

  .c-element-definition__symbol {
    opacity: 0.75; /* color: rgba($color, 0.75); */
    font-size: 100%;
    font-weight: normal;
    margin: auto;
  }

  .c-element-definition__weight {
    opacity: 0.25;
    font-size: 50%;
  }

  .c-element-definition__name {
    opacity: 0.25;
    font-size: 62.5%;
  }

  .c-element-definition__atomic-number {
    opacity: 0.25;
    font-size: 75%;
  }
</style>
