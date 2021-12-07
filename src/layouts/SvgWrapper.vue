<script lang="ts" setup>
import { computed } from 'vue'

import useIconsStore from '@/store/icons'

const props = withDefaults(defineProps<{
  icon: string
  size?: string
  changeColor?: boolean
}>(), {
  size: '100%',
})

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
    class="svg-wrapper"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-html="iconHtml"
  />
</template>

<style scoped>
.svg-wrapper {
  width: v-bind(size);
  height: v-bind(size);
}
</style>
