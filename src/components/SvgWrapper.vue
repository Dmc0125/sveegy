<script lang="ts" setup>
import { computed } from 'vue'

import icons from '@/assets/icons.json'
import useIcons from '@/hooks/useIcons'
import isValidColor from '@/utils/isValidColor'

const props = defineProps<{
  icon: string
  size?: string
  changeColor?: boolean
}>()

const iconId = computed(() => (props.icon.endsWith('-icon') ? props.icon.slice(0, -5) : props.icon))
const icon = computed(() => icons.find(({ id }) => id === iconId.value))

const { color } = useIcons()
const isColor = computed(() => isValidColor(color.value))
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    :style="props.size ? `width: ${props.size}; height: ${props.size}` : ''"
  >
    <path
      v-for="(path, i) in icon.paths"
      :key="i"
      fill-rule="evenodd"
      :d="path"
      :fill="changeColor && isColor ? color : 'currentColor'"
    />
  </svg>
</template>
