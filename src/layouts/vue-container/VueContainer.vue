<template>
  <section
    class="container"
    :class="{
      'container--flex': useFlex,
      'container--icons': icons,
    }"
  >
    <slot></slot>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    useFlex: {
      type: Boolean,
      default: false,
    },
    icons: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  background: var(--primary);
}

.container--flex {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.container--icons {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

@include tablet-l {
  .container--icons {
    max-width: 452px;
  }
}

@media (min-width: 840px) {
  .container--icons {
    max-width: 100%;
    padding: 0 80px;
    margin: 0;
  }
}

@include desktop-m {
  .container {
    padding: 0 140px;

    &--flex {
      flex-direction: row;
      justify-content: space-between;
    }
  }
}

@include desktop-l {
  .container {
    padding: 0 200px;
  }
}

@include desktop-xl {
  .container {
    padding: 0 280px;
  }
}
</style>
