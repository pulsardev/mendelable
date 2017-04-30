<template>
  <pre><code ref="c-highlight" class="json">{{ data }}</code></pre>
</template>

<script>
  import hljs from 'highlight.js'

  export default {
    name: 'highlight',
    props: ['data'],
    mounted: function () {
      let ctx = this.$refs['c-highlight']
      hljs.highlightBlock(ctx)
    }
  }
</script>

<style scoped>
  pre code {
    background-color: transparent;
  }
</style>
