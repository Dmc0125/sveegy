<script lang="ts" setup>
import { computed } from 'vue'

import SvgVue from '@/layouts/vue-svg/VueSvg.vue'
import IconSettingsSection from '@/components/icon-settings/icon-settings-section/IconSettingsSection.vue'
import IconSettingsInput from '@/components/icon-settings/icon-settings-input/IconSettingsInput.vue'

import debounce from '@/utils/debounce'
import isValidColor from '@/utils/is-valid-color'
import useNotificationStore from '@/store/notification'
import useIconsStore from '@/store/icons'

const props = defineProps<{
  openSettings: boolean
}>()

const emit = defineEmits<{(e: 'icon-settings:close'): void}>()

const closeSettings = () => {
  emit('icon-settings:close')
}

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

const setIconSize = debounce((_iconSize: string) => {
  const { notificationMessage, isError } = checkValue('Size', _iconSize)

  console.log(_iconSize)

  if (!isError) {
    iconsStore.setIconSize(_iconSize)
  }

  notificationStore.sendNotification({
    message: notificationMessage,
    isError,
  })
}, 1000)

const setIconColor = debounce((_iconColor: string) => {
  const { notificationMessage, isError } = checkValue('Color', _iconColor)

  if (!isError) {
    iconsStore.setIconColor(_iconColor)
  }

  notificationStore.sendNotification({
    message: notificationMessage,
    isError,
  })
}, 1000)

const iconSize = computed(() => iconsStore.iconSize)
const iconColor = computed(() => iconsStore.iconColor)
const getIcon = computed(() => iconsStore.getIcon)
</script>

<template>
  <transition name="settings-fade-in">
    <div
      v-if="props.openSettings"
      class="icon-settings"
    >
      <form
        class="icon-settings__wrapper"
        @submit.prevent
      >
        <icon-settings-section
          title="Icon size"
        >
          <icon-settings-input
            :input-value="iconSize"
            input-type="size"
            @icon-settings-size:input="setIconSize"
          />
        </icon-settings-section>

        <icon-settings-section
          title="Icon color"
        >
          <icon-settings-input
            :input-value="iconColor"
            input-type="color"
            @icon-settings-color:input="setIconColor"
          />
        </icon-settings-section>

        <button
          class="wrapper__close-icon"
          @click="closeSettings"
        >
          <svg-vue :icon-html="getIcon('close-icon')?.htmlValue || ''" />
        </button>
      </form>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.icon-settings {
  width: 14rem;
  height: fit-content;
  min-height: 10rem;
  padding: .7rem 1rem;
  position: absolute;
  top: 0;
  right: -4px;
  transform-origin: top right;
  z-index: 1000;

  background: var(--primary);
  border: 1px solid var(--secondary);
  border-radius: 10px;
  font-size: 1rem;
}

.icon-settings__wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.wrapper__close-icon {
  --size: 1.1rem;

  width: var(--size);
  height: var(--size);
  position: absolute;
  top: 0;
  right: 0;

  background: none;
  color: var(--font-clr);
}

/* SETTINGS TRANSITION */

.settings-fade-in-enter-active {
  transition: all 500ms ease-in-out;
}

.settings-fade-in-leave-active {
  transition: all 500ms ease-in-out;
}

.settings-fade-in-enter-from,
.settings-fade-in-leave-to {
  transform: scale(.1, .1);

  opacity: 0;
  pointer-events: none;
}

.settings-fade-in-enter-to
.settings-fade-in-leave-from {
  transform: scale(1, 1);

  opacity: 1;
  pointer-events: all;
}
</style>
