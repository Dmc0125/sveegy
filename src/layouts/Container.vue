<script lang="ts" setup>
const props = defineProps<{
  useFlex?: boolean
  icons?: boolean
}>()
</script>

<template>
  <section
    class="container"
    :class="{
      'container--flex': props.useFlex,
      'container--icons': props.icons,
    }"
  >
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.container {
  background: var(--primary-clr);
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
    padding: 0 15%;

    &--flex {
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>
