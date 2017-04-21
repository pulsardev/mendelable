<template>
  <div class="element-badge a-element-badge__container">
    <h1 class="a-element-badge a-element-badge--ti">{{ symbol }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'element-badge',
    props: ['symbol']
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/components/element-badge.scss';
</style>
