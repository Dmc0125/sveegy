<script lang="ts" setup>
import { computed } from 'vue'

import Container from '@/layouts/vue-container/VueContainer.vue'
import Hero from '@/components/hero/Hero.vue'
import Illustration from '@/layouts/vue-illustration/VueIllustration.vue'

import useMainStore from '@/store/main'

const mainStore = useMainStore()

const darkMode = computed(() => mainStore.darkMode)
</script>

<template>
  <container use-flex>
    <hero
      headline="Sveegy"
      sub-headline="Choose from many free svg icons and use it with just one click"
    />

    <illustration>
      <img
        v-if="!darkMode"
        src="@/assets/illustrations/browse.svg"
        alt="Browse illustration"
        title="Browse illustration"
      >
      <img
        v-else
        src="@/assets/illustrations/browse-dark.svg"
        alt="Browse illustration"
        title="Browse illustration"
      >
    </illustration>
  </container>
</template>
