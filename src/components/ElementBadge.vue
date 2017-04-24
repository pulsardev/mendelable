<template>
  <div class="element-badge a-element-badge__container">
    <h1 class="a-element-badge" :class="element.elementGroup && element.elementGroup.toLowerCase()">{{ element.symbol }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'element-badge',
    props: ['element']
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/components/element-badge.scss';
</style>
