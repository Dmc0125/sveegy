<script lang="ts" setup>
import { ref } from 'vue'

import SvgWrapper from '@/components/SvgWrapper.vue'
import SwitchButton from './SwitchButton.vue'

import useIcons from '@/hooks/useIcons'

const props = defineProps<{
  fullscreen?: boolean
}>()

const settingsOpened = ref(false)
const {
  size, color, setSize, setColor, usingClasses, classes, setClasses,
} = useIcons()
</script>

<template>
  <div
    class="icon-settings"
    :class="{ 'icon-settings--fullscreen': props.fullscreen, 'icon-settings--expanded': settingsOpened }"
  >
    <slot />

    <button
      class="icon-settings__toggle-btn"
      @click="settingsOpened = !settingsOpened"
    >
      <svg-wrapper
        :icon="settingsOpened ? 'close' : 'menu'"
      />
      <span class="narrator-only">Toggle icon settings</span>
    </button>

    <transition
      name="settings-fade-in"
      mode="out-in"
    >
      <form
        v-if="settingsOpened && !usingClasses"
        class="icon-settings__no-classes"
      >
        <div class="input-wrapper">
          <label for="Icon size">Icon size</label>
          <input
            placeholder="2rem"
            type="text"
            :value="size"
            @input="setSize"
          >
        </div>

        <div class="input-wrapper">
          <label for="Icon color">Icon color</label>
          <input
            placeholder="currentColor"
            type="text"
            :value="color"
            @input="setColor"
          >
        </div>
      </form>
      <form
        v-else-if="settingsOpened && usingClasses"
        class="icon-settings__classes"
      >
        <div class="input-wrapper">
          <label for="Icon color">Icon classes</label>
          <input
            placeholder="w-8 h-8 text-gray-300"
            type="text"
            :value="classes"
            @input="setClasses"
          >
        </div>
      </form>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.icon-settings {
  width: 100%;
  max-height: 2.5rem; // has to be max-height because of transition
  position: relative;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr auto;
  transition: max-height var(--t-duration) ease-in-out;

  // transition to
  &--expanded {
    max-height: 140px;
  }
}

.icon-settings__toggle-btn {
  width: 2.5rem;
  height: 2.5rem;
  padding: .5rem;
  background: var(--primary-clr);
  color: var(--font-secondary-clr);
  border: 1px solid var(--third-clr);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: 0;
    box-shadow: var(--focus-outline);
  }

  &:hover {
    opacity: var(--hover-opacity);
  }
}

.icon-settings__no-classes {
  width: 100%;
  grid-column: 1 / -1;
  display: flex;
  column-gap: 1rem;
}

.icon-settings__classes {
  width: 100%;
  grid-column: 1 / -1;
}

.input-wrapper {
  width: 100%;
  height: 2.5rem;
  position: relative;
  background: var(--primary-clr);
  font-size: 1rem;

  label {
    position: absolute;
    top: 1px;
    left: 1rem;
    font-size: .75rem;
    font-weight: 500;
    color: var(--font-secondary-clr);
  }

  input {
    width: 100%;
    height: 100%;
    padding: .7rem 1rem 0;
    border: var(--third-clr) 1px solid;
    border-radius: var(--border-radius);
    background: inherit;
    color: var(--font-primary-clr)
  }
}

.icon-settings__class-switch {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

.settings-fade-in-enter-active, .settings-fade-in-leave-active {
  transition: opacity var(--t-duration) ease-in-out;
}

.settings-fade-in-enter-active {
  transition-delay: var(--t-duration);
}

.settings-fade-in-enter-from, .settings-fade-in-leave-to {
  opacity: 0;
  pointer-events: none;
}

.settings-fade-in-enter-to, .settings-fade-in-leave-from {
  opacity: 1;
  pointer-events: all;
}

@include desktop-s {
  .settings-fade-in-enter-active {
    transition-delay: 0;
  }

  .icon-settings--fullscreen {
    grid-template-columns: 1fr auto auto;

    .icon-settings__toggle-btn {
      grid-column: -2 / -1;
    }

    .icon-settings__no-classes {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
    }

    .icon-settings__classes {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
    }
  }
}
</style>
