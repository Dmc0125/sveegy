<script lang="ts" setup>
import { computed } from 'vue'

import useIconsStore from '@/store/icons'

const props = defineProps<{
  iconHtml: string
  changeColor?: boolean
}>()

const iconsStore = useIconsStore()

const iconColor = computed(() => iconsStore.iconColor)
const iconHtmlColor = computed(() => {
  if (props.changeColor) {
    return props.iconHtml.replaceAll('fill="currentColor"', `fill="${iconColor.value}"`)
  }

  return props.iconHtml
})

</script>

<template>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-html="iconHtmlColor"
  />
</template>
