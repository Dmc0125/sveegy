<template>
  <section class="container">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

@include desktop-m {
  .container {
    padding: 0 140px;

    flex-direction: row;
    justify-content: space-between;
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
