<script lang="ts" setup>
const props = defineProps<{
  prettifiedHtml: string
  hide?: boolean
}>()

const { showNotification } = useNotification()

const copyHtml = async () => {
  try {
    await navigator.clipboard.writeText(props.prettifiedHtml)
    showNotification('Icon html has been copied to your clipboard', 'success')
  } catch (error) {
    showNotification('Sveegy does not have access to your clipboard', 'error')
  }
}
</script>

<template>
  <button
    class="copy-icon"
    :class="{ 'copy-icon--hide': props.hide }"
    @click.prevent="copyHtml"
  >
    <svg-wrapper
      icon="copy"
    />
    <span class="narrator-only">Copy icon html</span>
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

  &:hover, &:focus {
    outline: 0;
    background: var(--call-to-action-clr);
    border-color: var(--call-to-action-clr);
    color: var(--font-inverse-clr);

    .narrator-only {
      display: inherit;
    }
  }

  &:active {
    transition: none;
    filter: brightness(1.2);
  }
}

.copy-icon--hide {
  opacity: 0;
  pointer-events: none;
  cursor: pointer;
}

.narrator-only {
  display: none;
}
</style>
