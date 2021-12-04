<script lang="ts" setup>
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div
    class="icon-settings-layout"
    @submit.prevent
  >
    <label class="icon-settings-layout__label">
      {{ props.title }}
    </label>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.icon-settings-layout + .icon-settings-layout {
  margin-top: 1rem;
}

.icon-settings-layout__label {
  margin-bottom: .5rem;
  display: block;

  color: var(--font-clr);
  font-weight: 500;
  font-size: .8rem;
  text-transform: uppercase;
}
</style>
