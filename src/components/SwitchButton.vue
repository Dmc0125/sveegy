<script lang="ts" setup>
import SvgWrapper from './SvgWrapper.vue'

const props = withDefaults(defineProps<{
  isActive: boolean
  icon?: string
}>(), { icon: '' })
</script>

<template>
  <button class="switch-btn-wrapper">
    <div
      class="switch-btn-toggle"
      :class="{ 'switch-btn-toggle--active': props.isActive }"
    >
      <svg-wrapper
        v-if="props.icon"
        :icon="icon"
      />
    </div>
  </button>
</template>

<style lang="scss" scoped>
.switch-btn-wrapper {
  --height: 1.8rem;
  --width: 3rem;

  width: var(--width);
  height: var(--height);
  padding: 0 2px;
  background: var(--secondary-clr);
  border-radius: calc(var(--height) / 2);

  display: flex;
  align-items: center;

  &:focus {
    outline: 0;
    box-shadow: var(--focus-outline);
  }
}

.switch-btn-toggle {
  --size: calc(var(--height) * 0.8);

  width: var(--size);
  height: var(--size);
  padding: .1rem;
  transform: translateX(0);

  background: var(--third-clr);
  border-radius: 50%;
  transition:
    transform var(--t-duration) ease-in-out,
    background var(--t-duration) ease-in-out;
  color: var(--font-secondary-clr);

  &--active {
    background: var(--call-to-action-clr);
    transform: translateX(calc(var(--width) - var(--size) - 4px));
  }
}

[color-mode="light"] .switch-btn-toggle--active {
  color: var(--font-inverse-clr);
}
</style>
