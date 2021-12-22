<script lang="ts" setup>
import { computed } from 'vue'

import SvgWrapper from '@/components/SvgWrapper.vue'
import CopyIcon from '@/components/CopyIcon.vue'

import { createPrettifiedHtml } from '@/utils/createIconHtml'
import useIcons from '@/hooks/useIcons'

const props = defineProps<{
  iconId: string
  paths: string[]
}>()

const iconName = `${props.iconId[0].toUpperCase()}${props.iconId.slice(1)}`.replaceAll('-', ' ')

const { color, size } = useIcons()
const iconHtml = computed(() => createPrettifiedHtml(props.paths, size.value, color.value))
</script>

<template>
  <router-link
    class="icon-container"
    :to="{ path: `/icons/${props.iconId}-icon`}"
  >
    <copy-icon :copy-value="iconHtml" />

    <svg-wrapper
      class="svg"
      :icon="props.iconId"
      change-color
    />

    <div class="icon-name">
      <p>{{ iconName }}</p>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
.icon-container {
  width: 100%;
  height: 100%;
  position: relative;

  background: var(--primary-clr);
  color: var(--font-primary-clr);
  border: 1px solid var(--third-clr);
  border-radius: var(--border-radius);
  overflow: hidden;

  display: grid;
  grid-template-rows: 1fr 3rem;
  justify-items: center;
  align-items: center;

  &:focus {
    outline: 0;
    box-shadow: var(--focus-outline);
  }

  &:hover .copy-icon,
  &:focus-within .copy-icon {
    opacity: 1;
    pointer-events: all;
  }
}

.svg {
  grid-row: 1 / 2;
  width: 4rem;
  height: 4rem;
  justify-self: center;
}

.icon-name {
  width: 100%;
  height: 100%;
  grid-row: 2 / -1;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: .9rem;
  border-top: 1px var(--third-clr) solid;
  text-align: center;
}
</style>
