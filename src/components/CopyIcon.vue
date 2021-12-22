<script lang="ts" setup>
import SvgWrapper from '@/components/SvgWrapper.vue'
import useNotification from '@/hooks/useNotification'

const props = withDefaults(defineProps<{
  copyValue: string
  showAlways?: boolean
}>(), {
  showAlways: false,
})

const { showNotification } = useNotification()

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.copyValue)
    showNotification('Icon html was copied to your clipboard', false)
  } catch (err) {
    showNotification('Sveegy does not have access to your keyboard', true)
  }
}
</script>

<template>
  <button
    class="copy-icon"
    :class="{ hide: !props.showAlways }"
    @click.prevent="copyToClipboard"
  >
    <svg-wrapper icon="copy-icon" />
  </button>
</template>

<style lang="scss" scoped>
.copy-icon {
  --size: 2.5rem;

  width: var(--size);
  height: var(--size);
  position: absolute;
  top: 10px;
  right: 10px;

  background: var(--primary-clr);
  color: var(--font-primary-clr);
  border: 1px solid var(--third-clr);
  border-radius: var(--border-radius);
  transition: all var(--t-duration) ease-in-out;

  &:hover,
  &:focus {
    outline: 0;
    background: var(--call-to-action-clr);
    border-color: var(--call-to-action-clr);
    color: var(--font-inverse-clr);
  }

  &:active {
    transition: none;
    filter: brightness(1.2);
  }
}

.hide {
  opacity: 0;
  pointer-events: none;
  cursor: pointer;
}
</style>
