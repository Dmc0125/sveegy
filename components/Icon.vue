<script lang="ts" setup>
import icons from 'assets/icons.json'
import capitalize from '~~/lib/capitalize'
import createIconHtml from '~~/lib/createIconHtml'
import isValidColor from '~~/lib/isColor'

const props = defineProps<{
  iconId: string
  iconPaths: string[]
  iconName: string
}>()

const { color, size } = useIcons()
const isColor = computed(() => isValidColor(color.value))
const icon = icons.find(({ id }) => id === props.iconId)
</script>

<template>
  <nuxt-link
    class="icon-container"
    :to="`/icons/${props.iconId}`"
  >
    <copy-icon
      :prettified-html="createIconHtml(icon.paths, size, color)"
      hide
    />

    <svg-wrapper
      class="svg"
      :icon="props.iconId"
      :change-color="isColor"
    />

    <div class="icon-name">
      <p>{{ capitalize(props.iconName) }}</p>
    </div>
  </nuxt-link>
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

  text-align: center;
  font-size: .9rem;
  border-top: 1px var(--third-clr) solid;
}
</style>
