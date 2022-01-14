<script lang="ts">
import InputCustom from './Input.svelte'
import IconWrapper from './IconWrapper.svelte'

import { svgClass, svgColor, svgSize, usingClasses } from '$lib/store/iconsSettings'
import { fade } from 'svelte/transition'

let iconsSettingsOpened = false
const toggleSettings = () => {
  iconsSettingsOpened = !iconsSettingsOpened
}

const toggleUseClasses = () => {
  $usingClasses = !$usingClasses
}

export let fullscreen = false
</script>

<div
  class="
    grid grid-cols-[1fr_auto] md:grid-cols-[calc(50%-.5rem)_auto] lg:grid-cols-[300px_1fr_auto] gap-4 max-h-10
    {iconsSettingsOpened && 'max-h-[140px]'} {iconsSettingsOpened && fullscreen && 'lg:max-h-20'} transition-all
  "
>
  <slot></slot>

  <button
    class="w-10 h-10 secondary-bg rounded-md p-1 font-secondary-clr ring-effect [grid-column:-2/-1] justify-self-end"
    on:click="{toggleSettings}"
  >
    <IconWrapper icon="{iconsSettingsOpened ? 'close' : 'menu'}" />
  </button>

  {#if iconsSettingsOpened}
    <div
      class="w-full grid [grid-column:1/-1] {fullscreen ? 'lg:[grid-column:2/3] lg:[grid-row:1/2] xl:max-w-[400px]' : ''}  xl:justify-self-end"
      in:fade={{ delay: 300 }}
    >
      {#if $usingClasses}
        <div
          class="w-full"
        >
          <InputCustom
            class="w-full h-10" bind:inputValue={$svgClass} label="Svg class"
          />
        </div>
      {:else}
        <div
          class="w-full grid grid-cols-[repeat(2,1fr)] gap-x-4"
        >
          <InputCustom class="w-full h-10" bind:inputValue={$svgColor} label="Svg color" />
          <InputCustom class="w-full h-10" bind:inputValue={$svgSize} label="Svg size" />
        </div>
      {/if}
    </div>
    <div
      class="w-full h-fit col-span-full"
      in:fade={{ delay: 300 }}
    >
      <button
        class="w-fit h-fit ml-auto flex items-center font-secondary-clr default-hover-bg px-2 rounded-md ring-effect"
        on:click="{toggleUseClasses}"
      >
        <span class="font-medium text-sm">{$usingClasses ? 'No classes' : 'Use classes'}</span>
        <IconWrapper class="w-6 h-6 ml-2" icon="trade" />
      </button>
    </div>
  {/if}
</div>
