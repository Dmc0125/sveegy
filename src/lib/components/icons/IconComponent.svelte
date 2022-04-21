<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  import { getIconPaths, createSvgElement, type IconType } from '$lib/utils/icons'
  import { iconsOptions } from '$lib/store/icons'

  import Icon from './Icon.svelte'

  export let iconId: string
  export let iconType: IconType = 'stroke'
  export let size: string
  export let showOverlay = false
  let className = ''
  export { className as class }

  $: iconDisplayName = `${iconId[0].toUpperCase()}${iconId.slice(1).replace(/-/g, ' ')}`
  $: iconPaths = getIconPaths(iconType, iconId)

  let notifType: 'success' | 'error' | null = null
  let timeoutId: NodeJS.Timeout | null = null
  const copy = async () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      notifType = null
    }

    try {
      await navigator.clipboard.writeText(
        createSvgElement(iconPaths, iconType, { clr: $iconsOptions.color, size: $iconsOptions.size })
      )
      notifType = 'success'
    } catch (error) {
      notifType = 'error'
    }

    timeoutId = setTimeout(() => {
      notifType = null
    }, 2000)
  }

  const dispatch = createEventDispatcher()
  const emitOpenPopup = () => {
    dispatch('open-popup', iconId)
  }
</script>

<div class="icon-component {className}" style="width: {size}; height: {size};">
  <div class="icon-component__copy-overlay {showOverlay ? 'show-overlay' : ''}">
    <div class="copy-overlay__content">
      <div class="copy-overlay__btn-group">
        <button class="btn-group__btn {notifType ? `copy-${notifType}` : ''}" on:click="{copy}">
          <Icon iconId="clipboard" size="2rem" />
        </button>
        <div class="divider" />
        <button class="btn-group__btn" on:click="{emitOpenPopup}">
          <Icon iconId="expand-arrows" size="2rem" />
        </button>
      </div>
    </div>
  </div>

  <Icon size="80%" paths={iconPaths} color="var(--font-clr-primary)" strokeWidth=".6" {iconType} />
  <p class="icon-component__id">{iconDisplayName}</p>
</div>

<style lang="scss">
  .icon-component {
    padding: 0.25rem;
    position: relative;
    display: grid;
    grid-template-rows: 1fr 2.5rem;
    align-items: center;
    justify-items: center;

    background: var(--bg-clr-secondary);
    color: var(--font-clr-primary);
    border-radius: 6px;

    &__id {
      font-size: 1rem;
      text-align: center;
    }
  }

  .icon-component__copy-overlay {
    opacity: 0;
    pointer-events: none;
    inset: 0;
    position: absolute;
    border-radius: 6px;
    background: rgba(var(--bg-rgb-primary), 0.5);
    color: var(--font-clr-primary);
    transition: opacity var(--transition-timing) ease-in-out;
  }

  .copy-overlay {
    &__content {
      width: 100%;
      border-radius: 6px;
      background: var(--bg-clr-secondary);
    }

    &__btn-group {
      width: 100%;
      padding: 0.4rem 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .btn-group__btn {
    width: 38%;
    height: 2.4rem;
    padding: 0.2rem;
    border-radius: 4px;
    font-size: 1rem;
    background-color: inherit;
    color: var(--font-clr-primary);
    position: relative;

    &:focus,
    &:hover {
      background: var(--bg-clr-primary);
    }

    &::after {
      padding: 0.25rem 0.5rem;
      top: 0;
      left: 50%;
      transform: translate(-50%, -2.5rem);
      position: absolute;
      content: 'Copied';

      pointer-events: none;
      opacity: 0;
      border-radius: 6px;
      font-size: .9rem;
      font-weight: 500;
      background: var(--cta-clr-primary);
      color: var(--bg-clr-primary);
      transition: opacity 100ms ease-in;
    }

    &.copy-error::after {
      transform: translate(-50%, -3.5rem);
      content: 'Unknown error!';
    }

    &.copy-success::after {
      opacity: 1;
    }
  }

  :global(.app-wrapper[dark-mode="true"]) .btn-group__btn.copy-success::after {
    color: var(--font-clr-primary);
  }
  
  .divider {
    width: 1px;
    height: 1.25rem;
    background: var(--divider-clr);
  }

  .show-overlay,
  .icon-component:hover .icon-component__copy-overlay,
  .icon-component:focus-within .icon-component__copy-overlay {
    opacity: 1;
    pointer-events: all;
  }
</style>
