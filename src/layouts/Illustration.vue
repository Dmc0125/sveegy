<script lang="ts" setup>
import { computed } from 'vue'

import useMainStore from '@/store/main'

const props = defineProps<{
  name: 'license' | 'browse' | 'search'
}>()

const mainStore = useMainStore()
const darkMode = computed(() => mainStore.darkMode)
</script>

<template>
  <section class="illustration">
    <img
      :src="`src/assets/illustrations/${darkMode ? `${props.name}-dark` : props.name}.svg`"
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
