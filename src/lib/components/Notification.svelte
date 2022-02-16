<script lang="ts">
import IconWrapper from './IconWrapper.svelte'

import { notification } from '$lib/store'
import { fly } from 'svelte/transition'
import { browser } from '$app/env'

let size: number | null = null

$: {
  if (!size && browser) {
    size = window.screen.width
  }
}

const updateSize = (e: Event) => {
  const window = e.target as Window
  size = window.screen.width
}
</script>

<svelte:window on:resize="{updateSize}" />

{#if $notification.message}
  <div
    class="
      w-11/12 max-w-[350px] h-fit fixed left-1/2 transform -translate-x-1/2 top-4 secondary-bg rounded-lg font-default-clr
      grid grid-cols-[auto_1fr_auto] items-center gap-x-4 px-4 py-3 md:right-20 md:top-20 md:translate-x-0 md:left-auto z-50
    "
    in:fly={{ y: size > 768 ? 0 : -100, x: size > 768 ? 200 : 0 }}
    out:fly={{ y: size > 768 ? 0 : -100, x: size > 768 ? 200 : 0 }}
  >
    <div class="
      w-16 h-16 rounded-full
      {
        $notification.error
          ? 'text-red-400'
          : 'text-green-600 dark:text-green-400'
      }"
    >
      <IconWrapper icon="{$notification.error ? 'close-circle' : 'tick-circle'}" />
    </div>

    <h1>{$notification.message}</h1>

    <button
      class="w-7 h-7 p-[.125rem] ring-effect rounded-md secondary-hover-bg self-start"
      on:click="{notification.hideNotification}"
    >
      <IconWrapper icon="close" />
    </button>
  </div>
{/if}