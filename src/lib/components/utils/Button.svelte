<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let tag: 'button' | 'a' = 'button'
  export let style: '100' | '200' | '300' | '400'
  export let padding: boolean = false
  export let size = '2.5rem'
  export let notification: 'success' | 'error' | null = null

  export let type: 'button' | '' = ''

  export let href = ''
  export let title = ''
  export let download: string | null = null

  let className = ''
  export { className as class }

  const dispatch = createEventDispatcher()
  const emitClick = () => {
    dispatch('click')
  }
</script>

{#if tag === 'button'}
  <button
    on:click="{emitClick}"
    {type}
    style="height: {size};" 
    class="btn btn-{style} {className} {padding ? 'btn-padding' : ''} {notification ? `btn-notification ${notification}` : ''}"
  >
    <slot />
  </button>
{:else}
  <a
    {href}
    {title}
    {download}
    style="height: {size};"
    class="btn btn-{style} {className} {padding ? 'btn-padding' : ''} {notification ? `btn-notification ${notification}` : ''}"
  >
    <slot />
  </a>
{/if}

<style lang="scss">
  .btn {
    height: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;
    line-height: 1rem;

    border-radius: 6px;

    &:focus {
      box-shadow: var(--focus-shadow-offset);
    }
  }

  :global(.app-wrapper[dark-mode="true"]) .btn-100 {
    --clr: var(--font-clr-primary);
  }

  :global(.app-wrapper[dark-mode="false"]) .btn-100 {
    --clr: var(--bg-clr-primary);
  }

  .btn-100 {
    background: var(--cta-clr-primary);
    color: var(--clr);
  }

  .btn-200 {
    border: 1px solid var(--cta-clr-primary);
    color: var(--cta-clr-primary);
  }

  .btn-300 {
    background: var(--bg-clr-secondary);
    color: var(--font-clr-primary);
  }

  .btn-400 {
    background: var(--bg-clr-primary);
    color: var(--font-clr-primary);
    border: 1px solid var(--bg-clr-secondary);
  }

  .btn-padding {
    padding: 0 1rem;
  }

  a {
    text-decoration: none;
  }

  .btn-notification {
    position: relative;

    &::after {
      padding: 0.25rem 0.5rem;
      top: 0;
      left: 50%;
      transform: translate(-50%, -2rem);
      position: absolute;
      content: 'Copied';
      z-index: 100;

      pointer-events: none;
      opacity: 0;
      border-radius: 6px;
      font-size: .9rem;
      font-weight: 500;
      background: var(--cta-clr-primary);
      color: var(--bg-clr-primary);
      transition: opacity 100ms ease-in;
    }

    &.error::after {
      transform: translate(-50%, -3rem);
      content: 'Unknown error!';
      opacity: 1;
    }

    &.success::after {
      opacity: 1;
    }
  }
</style>
