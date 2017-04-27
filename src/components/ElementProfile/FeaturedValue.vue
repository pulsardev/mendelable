<template>
  <div class="c-featured-value">
    <h6 class="text-muted text-uppercase">
      <small class="font-weight-bold">{{ $t("element." + title) }}</small>
    </h6>
    <p class="c-featured-value__text">{{ value }}</p>
    <p class="d-flex align-items-center">
      <span>4.0%</span>
      <i class="material-icons text-success">arrow_drop_up</i>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'featured-value',
    props: ['value', 'title']
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/bootstrap/_variables.scss';
  @import '../../assets/scss/components/_variables.scss';

  .c-featured-value__text {
    font-size: $font-size-h3;
    color: $non-metal;
  }

  .material-icons {
    font-size: 1.75rem;
  }
</style>
