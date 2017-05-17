<template>
  <div class="mdc-theme--dark">
    <div class="mdc-switch">
      <input :value="value" @change="update" type="checkbox" id="basic-switch" class="mdc-switch__native-control"/>
      <div class="mdc-switch__background">
        <div class="mdc-switch__knob"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mdc-switch',
    props: ['value'],
    methods: {
      update (e) {
        this.$emit('input', e.target.value)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../assets/scss/bootstrap/_variables";
  @import "../../../../node_modules/@material/switch/dist/mdc.switch.css";

  .mdc-switch__native-control:checked ~ .mdc-switch__background::before,
  .mdc-switch__native-control:checked ~ .mdc-switch__background .mdc-switch__knob,
  .mdc-switch__native-control:checked ~ .mdc-switch__background .mdc-switch__knob::before {
    background-color: var(--mdc-theme-primary, $brand-primary);
  }

  .mdc-switch__knob::before {
    opacity: 0 !important;
  }
</style>
