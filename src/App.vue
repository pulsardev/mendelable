<template>
  <div id="app" class="app container-fluid">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import './assets/scss/design.scss';
</style>
