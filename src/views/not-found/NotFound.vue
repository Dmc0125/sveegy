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
      headline="404 error"
      sub-headline="The page you were searching for was not found"
    />

    <illustration>
      <img
        v-if="!darkMode"
        src="@/assets/illustrations/search.svg"
        alt="Search illustration"
        title="Search illustration"
      >
      <img
        v-else
        src="@/assets/illustrations/search-dark.svg"
        alt="Search illustration"
        title="Search illustration"
      >
    </illustration>
  </container>
</template>
