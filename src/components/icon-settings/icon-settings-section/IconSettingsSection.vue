<template>
  <form
    class="icon-settings-layout"
    @submit.prevent
  >
    <label class="icon-settings-layout__label">
      {{ title }}
    </label>
    <slot></slot>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.icon-settings-layout__label {
  margin-bottom: .5rem;
  display: block;

  color: var(--font-clr);
  font-weight: 500;
  font-size: .8rem;
  text-transform: uppercase;
}
</style>
