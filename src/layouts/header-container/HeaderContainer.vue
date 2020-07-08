<template>
  <div
    class="header-wrapper"
    :class="{ 'header-wrapper--absolute': absolute }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.header-wrapper {
  width: calc(100% - 60px);
  margin: 0 30px;

  &--absolute {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}

@include tablet-s {
  width: calc(100% - 100px);
  margin: 0 50px;
}

@include desktop-xs {
  width: calc(100% - 140px);
  margin: 0 70px;
}

@include desktop-s {
  width: calc(100% - 200px);
  margin: 0 100px;
}

@include desktop-m {
  width: calc(100% - 2800px);
  margin: 0 140px;
}
</style>
