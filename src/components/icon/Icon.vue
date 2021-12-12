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
  position: relative;

  background: var(--primary-clr);
  color: var(--font-primary-clr);
  border: 1px solid var(--third-clr);
  border-radius: var(--border-radius);
  overflow: hidden;

  display: flex;
  align-items: center;
  flex-direction: column;

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
  height: 70%;
  flex: 0 1 auto;
}

.icon-name {
  width: 100%;
  flex: 1 0 2rem;

  border-top: 1px solid var(--third-clr);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
