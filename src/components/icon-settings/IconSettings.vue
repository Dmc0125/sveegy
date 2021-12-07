<script lang="ts" setup>
import { computed } from 'vue'

import debounce from '@/utils/debounce'
import isValidColor from '@/utils/is-valid-color'
import useNotificationStore from '@/store/notification'
import useIconsStore from '@/store/icons'

const props = defineProps<{
  openSettings: boolean
}>()

const notificationStore = useNotificationStore()
const iconsStore = useIconsStore()

const checkValue = (messageFor: string, value: string) => {
  let notificationMessage = `${messageFor} of icons has been set to ${value}`
  let isError = false

  if (messageFor === 'Color' && !isValidColor(value)) {
    notificationMessage = 'Color is not valid, it should be css color keyword, hex value or \'currentColor\''
    isError = true
  }

  if (!value.length) {
    notificationMessage = `${messageFor} of icons is not set`
  }

  return {
    notificationMessage,
    isError,
  }
}

const setIconSize = debounce((e: InputEvent) => {
  const { value } = e.target as HTMLInputElement

  const { notificationMessage, isError } = checkValue('Size', value)

  if (!isError) {
    iconsStore.setIconSize(value)
  }

  notificationStore.sendNotification({
    message: notificationMessage,
    isError,
  })
}, 1000)

const setIconColor = debounce((e: InputEvent) => {
  const { value } = e.target as HTMLInputElement

  const { notificationMessage, isError } = checkValue('Color', value)

  if (!isError) {
    iconsStore.setIconColor(value)
  }

  notificationStore.sendNotification({
    message: notificationMessage,
    isError,
  })
}, 1000)

const iconSize = computed(() => iconsStore.iconSize)
const iconColor = computed(() => iconsStore.iconColor)
</script>

<template>
  <transition name="settings-fade-in">
    <form
      v-if="props.openSettings"
      class="icon-settings"
    >
      <div class="input-wrapper">
        <label for="Icon size">Icon size</label>
        <input
          placeholder="2rem"
          type="text"
          :value="iconSize"
          @input="setIconSize"
        >
      </div>

      <div class="input-wrapper">
        <label for="Icon size">Icon color</label>
        <input
          placeholder="currentColor"
          type="text"
          :value="iconColor"
          @input="setIconColor"
        >
      </div>
    </form>
  </transition>
</template>

<style lang="scss" scoped>
.icon-settings {
  background: var(--primary-clr);
  border-radius: 10px;
  font-size: 1rem;

  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
}

.input-wrapper {
  width: 100%;
  height: 2.5rem;
  position: relative;
  background: var(--primary-clr);

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
    border-radius: 10px;
    background: inherit;
    color: var(--font-primary-clr)
  }
}

/* SETTINGS TRANSITION */

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
</style>
