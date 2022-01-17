<script lang="ts">
import InputCustom from './Input.svelte'
import IconWrapper from './IconWrapper.svelte'
import ToggleClassesButton from './ToggleClassesButton.svelte'

import { svgClass, svgColor, svgSize, usingClasses } from '$lib/store/iconsSettings'
import { fade } from 'svelte/transition'

let iconsSettingsOpened = false
const toggleSettings = () => {
  iconsSettingsOpened = !iconsSettingsOpened
}
</script>

<div
  class="
    grid grid-cols-[1fr_auto] md:grid-cols-[calc(50%-.5rem)_auto] lg:grid-cols-[300px_1fr_auto] gap-4 max-h-10
    {iconsSettingsOpened && 'max-h-[140px]'} {iconsSettingsOpened && 'lg:max-h-[88px]'} transition-all
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
      class="w-full grid [grid-column:1/-1] lg:[grid-column:2/3] lg:[grid-row:1/2] xl:max-w-[400px]  xl:justify-self-end"
      in:fade={{ delay: 300, duration: 150 }}
      out:fade|local
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
      class="col-span-full justify-self-end"
      in:fade={{ delay: 300, duration: 150 }}
      out:fade|local
    >
      <ToggleClassesButton
        class="h-8 font-medium text-sm"
      />
    </div>
  {/if}
</div>
