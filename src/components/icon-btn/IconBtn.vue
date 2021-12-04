<script lang="ts" setup>
const emit = defineEmits<{(e: 'click'): void
}>()

const emitClick = () => {
  emit('click')
}
</script>

<template>
  <button @click="emitClick">
    <slot />
  </button>
</template>

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
