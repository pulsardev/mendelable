<template>
  <div class="c-element-profile-options">
    <div class="btn-group w-100" role="group" aria-label="Navigation">
      <router-link :to="'/element/' + previousElementId" class="btn btn-primary w-100">{{ $t("sidebar.elementProfile.previous") }}</router-link>
      <router-link :to="'/element/' + nextElementId" class="btn btn-primary w-100">{{ $t("sidebar.elementProfile.next") }}</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'element-profile-options',
    computed: {
      previousElementId () {
        return +this.$route.params.id - 1
      },
      nextElementId () {
        return +this.$route.params.id + 1
      }
    }
  }
</script>
