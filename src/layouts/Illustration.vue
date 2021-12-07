<script lang="ts" setup>
import { computed } from 'vue'

import browse from '@/assets/illustrations/browse.svg'
import browseDark from '@/assets/illustrations/browse-dark.svg'
import search from '@/assets/illustrations/search.svg'
import searchDark from '@/assets/illustrations/search-dark.svg'
import license from '@/assets/illustrations/license.svg'
import licenseDark from '@/assets/illustrations/license-dark.svg'

import useMainStore from '@/store/main'

const props = defineProps<{
  name: 'license' | 'browse' | 'search'
}>()

const mainStore = useMainStore()
const darkMode = computed(() => mainStore.darkMode)

const imgSources = {
  browse,
  browseDark,
  license,
  licenseDark,
  search,
  searchDark,
} as const

const imgSource = computed(() => imgSources[`${props.name}${darkMode.value ? 'Dark' : ''}`])
</script>

<template>
  <section class="illustration">
    <img
      :src="imgSource"
      :alt="`${props.name} illustration`"
      :title="`${props.name} illustration`"
    >
  </section>
</template>

<style lang="scss" scoped>
.illustration {
  width: 250px;
  margin: 2rem auto 0rem;
}

@include tablet-s {
  .illustration {
    width: 350px;
    margin-top: 70px;
  }
}

@include desktop-xs {
  .illustration {
    width: 400px;
  }
}

@include desktop-m {
  .illustration {
    width: 450px;
    margin: 0;
  }
}

@include desktop-l {
  .illustration {
    width: 480px;
  }
}

@include desktop-xl {
  .illustration {
    width: 600px;
  }
}
</style>
