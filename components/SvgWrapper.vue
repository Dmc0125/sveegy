<script lang="ts" setup>
import icons from '~/assets/icons.json'

const props = withDefaults(defineProps<{
  icon: string,
  size?: string
  changeColor?: boolean
}>(), { icon: 'home', size: undefined, changeColor: false })

const iconId = computed(() => (props.icon.endsWith('-icon') ? props.icon : `${props.icon}-icon`))
const icon = computed(() => icons.find(({ id }) => iconId.value === id))

const { color } = useIcons()
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    :style="props.size ? `width: ${props.size}; height: ${props.size}` : ''"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      v-for="path in icon.paths"
      :key="path"
      :d="path"
      :fill="changeColor ? color : 'currentColor'"
      fill-rule="evenodd"
    />
  </svg>
</template>
