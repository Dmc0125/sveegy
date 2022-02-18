<script lang="ts">
import { createEventDispatcher } from 'svelte'
import { fade } from 'svelte/transition'

export let show: boolean
let className = ''
export { className as class }

const dispatch = createEventDispatcher()
const handleClick = () => {
  dispatch('close')
}

const emitEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    dispatch('close')  
  }
}
</script>

<svelte:window on:keydown="{emitEscape}" />

{#if show}
  <main
    class="fixed inset-0 dimmed-bg {className}"
    on:click|self="{handleClick}"
    transition:fade
  >
    <slot />
  </main>  
{/if}
