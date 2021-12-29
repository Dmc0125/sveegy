<script lang="ts" setup>
import { computed } from 'vue'

import SwitchButton from './SwitchButton.vue'

import useColorMode from '@/hooks/useColorMode'

const { colorMode, toggleColorMode } = useColorMode()
const icon = computed(() => (colorMode.value === 'dark' ? 'moon-icon' : 'sun-icon'))
</script>

<template>
  <switch-button
    :is-active="colorMode === 'dark'"
    :icon="icon"
    @click="toggleColorMode"
  />
</template>
