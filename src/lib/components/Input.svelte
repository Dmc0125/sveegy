<script lang="ts">
import { browser } from '$app/env'

import IconWrapper from '$lib/components/IconWrapper.svelte'
import { onMount } from 'svelte';

let className = ''
export let label: string
export let inputValue: string
export let iconName: string = ''
export { iconName as icon }
export { className as class }

$: isFocused = !!inputValue.length

export let focusOnKey = false

let inputElement: HTMLInputElement
const focusInput = (e: KeyboardEvent) => {
  if (e.key === 'k' && e.altKey && focusOnKey) {
    inputElement.focus()
  }

  if (e.key === 'Escape') {
    inputElement.blur()
  }
}
</script>

<svelte:window on:keydown="{focusInput}" />

<div
  class="
    input-wrapper {isFocused && 'input-wrapper-active'} {className.length ? className : 'w-[250px] h-10'} relative
    secondary-bg rounded-md overflow-hidden ring-effect"
  >
  {#if iconName.length}
    <IconWrapper
      class="w-8 h-8 absolute pointer-events-none left-[min(calc(5%-.25rem),.25rem)] top-1/2 -translate-y-1/2 rotate-0 transition-all
        {isFocused ? 'font-default-clr rotate-90' : 'text-gray-500 dark:text-slate-400'}"
      icon="{iconName}"
    />
  {/if}

  <label
    class="transition-all absolute top-1/2 {iconName ? 'left-[min(calc(5%+2rem),2.75rem)]' : 'left-[min(5%,1rem)]'} pointer-events-none text-gray-500 dark:text-slate-400 font-medium"
    for="{label}"
  >
    {label}
  </label>
  <input
    class="w-full h-full {iconName ? 'pl-[min(calc(5%+2rem),2.75rem)]' : 'pl-[min(5%,1rem)]'} pt-3 pr-2 bg-inherit font-default-clr"
    type="text"
    bind:value="{inputValue}"
    bind:this={inputElement}
  >
</div>

<style>
.input-wrapper label {
  transform: translateY(-50%);
}

.input-wrapper:focus-within label, .input-wrapper-active label {
  transform: translateY(-102%);
  font-size: .85rem;
}
</style>
