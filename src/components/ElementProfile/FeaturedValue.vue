<template>
  <div v-if="value" class="c-featured-value">
    <h6 class="text-muted text-uppercase">
      <small class="font-weight-bold">{{ $t("element." + title) }}</small>
    </h6>
    <p class="c-featured-value__text" :class="[colored ? 'u-color-' + element.elementGroup : '']">{{ value }}</p>
  </div>
</template>

<script>
  export default {
    name: 'featured-value',
    props: ['value', 'title', 'element', 'colored']
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/bootstrap/variables';
  @import '../../assets/scss/components/variables';
  @import '../../assets/scss/trumps/colors';

  .c-featured-value__text {
    font-size: $font-size-h3;
  }
</style>
