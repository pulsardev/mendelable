<template>
  <pre><code ref="c-highlight" class="json"></code></pre>
</template>

<script>
  import hljs from 'highlight.js'

  export default {
    name: 'highlight',
    props: ['data'],
    mounted: function () {
      this.highlight()
    },
    watch: {
      data: function () {
        this.highlight()
      }
    },
    methods: {
      highlight: function () {
        let ctx = this.$refs['c-highlight']
        ctx.textContent = JSON.stringify(this.data, null, 2)
        hljs.highlightBlock(ctx)
      }
    }
  }
</script>

<style scoped>
  pre code {
    background-color: transparent;
  }
</style>
