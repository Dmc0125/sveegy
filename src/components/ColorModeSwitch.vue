<script lang="ts" setup>
import { computed } from 'vue'

import SvgWrapper from '@/components/SvgWrapper.vue'

import useColorMode from '@/hooks/useColorMode'

const { colorMode, toggleColorMode } = useColorMode()
const icon = computed(() => (colorMode.value === 'dark' ? 'moon-icon' : 'sun-icon'))
</script>

<template>
  <button
    class="clr-switch"
    @click="toggleColorMode"
  >
    <div
      class="clr-switch__btn"
      :class="{ 'clr-switch__btn--dark-mode': colorMode === 'dark' }"
    >
      <svg-wrapper
        :key="icon"
        :icon="icon"
      />
    </div>
  </button>
</template>

<style lang="scss" scoped>
.clr-switch {
  --height: 1.5rem;
  --width: 2.5rem;

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

.clr-switch__btn {
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

  &--dark-mode {
    background: var(--call-to-action-clr);
    transform: translateX(calc(var(--width) - var(--size) - 4px));
  }
}
</style>
