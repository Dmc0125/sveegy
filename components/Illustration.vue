<script lang="ts" setup>
import browse from '~/assets/illustrations/browse.svg?raw'
import search from '~/assets/illustrations/search.svg?raw'
import license from '~/assets/illustrations/license.svg?raw'

const props = defineProps<{
  name: 'license' | 'browse' | 'search'
}>()

const illustrations = {
  browse,
  search,
  license,
}
</script>

<template>
  <div
    class="illustration"
    v-html="illustrations[props.name]"
  />
</template>

<style lang="scss" scoped>
.illustration {
  width: max(250px, 60vw);
  margin: 2rem auto;
  color: var(--call-to-action-clr);
}

body[color-mode="dark"] .illustration {
  --secondary-color: #232026;
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
