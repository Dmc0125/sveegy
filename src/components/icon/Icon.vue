<script lang="ts" setup>
import { useRouter } from 'vue-router'

import SvgWrapper from '@/layouts/SvgWrapper.vue'
import CopyIcon from '@/components/copy-icon/CopyIcon.vue'

const props = defineProps<{
  iconId: string
  iconHtml: string
  iconName: string
}>()

const router = useRouter()

const redirectToIcon = () => {
  router.push({ path: `/icons/${props.iconId}` })
}

const _iconName = props.iconName[0].toUpperCase() + props.iconName.substring(1)
</script>

<template>
  <button
    class="icon-container"
    @click="redirectToIcon"
  >
    <copy-icon :copy-value="iconHtml" />

    <div class="svg">
      <svg-wrapper
        :icon="props.iconId"
        change-color
      />
    </div>

    <div class="icon-name">
      <p>{{ _iconName }}</p>
    </div>
  </button>
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
  grid-template-rows: 70% 1fr;
  justify-items: center;

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
  height: 100%;
  padding: 1rem;
  justify-self: center;
}

.icon-name {
  width: 100%;
  height: 100%;
  grid-row: 2 / -1;

  border-top: 1px solid var(--third-clr);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
