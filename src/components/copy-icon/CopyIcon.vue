<script lang="ts" setup>
import { computed } from 'vue'

import VueSvg from '@/layouts/vue-svg/VueSvg.vue'

import setCopyValue from '@/utils/copy-svg-wrapper'
import useIconsStore from '@/store/icons'
import useNotificationStore from '@/store/notification'

const props = withDefaults(defineProps<{
  copyValue: string
  showAlways?: boolean
}>(), {
  showAlways: false,
})

const iconsStore = useIconsStore()
const notificationStore = useNotificationStore()

const copyToClipboard = async () => {
  const _copyValue = setCopyValue(iconsStore.iconSize, props.copyValue, iconsStore.iconColor)

  try {
    await navigator.clipboard.writeText(_copyValue)

    notificationStore.sendNotification({
      message: 'Icon html was copied to your clipboard',
    })
  } catch (err) {
    notificationStore.sendNotification({
      message: 'Sveegy does not have access to your keyboard',
      isError: true,
    })
  }
}

const getIcon = computed(() => iconsStore.getIcon)
</script>

<template>
  <button
    class="copy-icon"
    :class="{ hide: !props.showAlways }"
    @click.stop="copyToClipboard"
  >
    <VueSvg :icon-html="getIcon('copy-icon')?.htmlValue || ''" />
  </button>
</template>

<style lang="scss" scoped>
.copy-icon {
  --size: 2.5rem;

  width: var(--size);
  height: var(--size);
  position: absolute;
  top: 10px;
  right: 10px;

  background: var(--primary);
  color: var(--font-clr);
  border: 1px solid var(--primary-border);
  border-radius: 10px;
  transition: all 150ms ease-in-out;

  &:hover,
  &:focus {
    outline: 0;
    background: var(--secondary);
    border-color: var(--secondary);
    color: var(--font-clr-inverse);
  }

  &:active {
    transition: none;
    filter: brightness(1.2);
  }
}

.hide {
  opacity: 0;
  pointer-events: none;
  cursor: pointer;
}
</style>
