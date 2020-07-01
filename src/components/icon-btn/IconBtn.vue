<template>
  <button @click="emitClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    emitClick() {
      this.$emit('click');
    },
  },
});
</script>

<style lang="scss" scoped>
button {
  --size: 2rem;

  width: var(--size);
  height: var(--size);

  background: var(--primary);
  color: var(--font-clr-secondary);
  border: 1px solid var(--primary-border);
  border-radius: 10px;

  &:focus,
  &:hover {
    outline: 0;
    border-color: var(--secondary);
    color: var(--secondary);
  }
}
</style>
