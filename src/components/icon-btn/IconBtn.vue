<script lang="ts" setup>
import SvgWrapper from '@/layouts/SvgWrapper.vue'

const emit = defineEmits<{(e: 'click'): void}>()

const emitClick = () => {
  emit('click')
}

const props = withDefaults(defineProps<{
  name: string
  size?: string
}>(), {
  size: '2.5rem',
})
</script>

<template>
  <button @click="emitClick">
    <svg-wrapper
      :key="props.name"
      size="1.5rem"
      :icon="props.name"
    />
  </button>
</template>

<style lang="scss" scoped>
button {
  width: v-bind(size);
  height: v-bind(size);

  background: var(--primary-clr);
  color: var(--font-secondary-clr);
  border: 1px solid var(--third-clr);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus,
  &:hover {
    outline: 0;
    border-color: var(--call-to-action-clr);
    color: var(--call-to-action-clr);
  }
}
</style>
