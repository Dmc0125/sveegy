<script lang="ts">
  import { fade } from 'svelte/transition'
  import { createEventDispatcher } from 'svelte'

  export let show = false
  export let disableScroll = true

  const dispatch = createEventDispatcher()
  const hide = () => {
    show = false
    dispatch('close-popup')
  }

  type WheelOptions = {
    scrollEnabled: boolean
  }

  const wheel = (node: HTMLElement, options: WheelOptions) => {
    if (!disableScroll) return {}

    let { scrollEnabled: _scrollEnabled } = options

    const scrollHandler = (e: Event) => {
      if (!_scrollEnabled) {
        e.preventDefault()
        document.body.style.overflow = 'hidden'
        return
      }

      document.body.style.overflow = 'auto'
    }

    node.addEventListener('wheel', scrollHandler, { passive: false })

    return {
      update(options: WheelOptions) {
        _scrollEnabled = options.scrollEnabled
      },
      destroy() {
        node.removeEventListener('wheel', scrollHandler)
      },
    }
  }
</script>

<svelte:window use:wheel={{ scrollEnabled: !show }} />

{#if show}
  <div class="overlay" on:click="{hide}" transition:fade="{{ duration: 150 }}">
    <slot />
  </div>
{/if}

<style lang="scss">
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(var(--bg-rgb-secondary), 0.5);
    z-index: 100;
  }
</style>
