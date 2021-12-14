<script lang="ts" setup>
import { computed } from 'vue'

import useIconsStore from '@/store/icons'

const props = defineProps<{
  icon: string
  size?: string
  changeColor?: boolean
}>()

const iconsStore = useIconsStore()

const iconColor = computed(() => iconsStore.iconColor)
const iconHtml = computed(() => {
  const _iconHtml = computed(() => iconsStore.getIcon(props.icon)?.htmlValue || '')

  if (props.changeColor) {
    return _iconHtml.value.replaceAll('fill="currentColor"', `fill="${iconColor.value}"`)
  }

  return _iconHtml.value
})
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    :style="props.size ? `width: ${props.size}; height: ${props.size}` : ''"
    xmlns="http://www.w3.org/2000/svg"
    v-html="iconHtml"
  />
</template>
