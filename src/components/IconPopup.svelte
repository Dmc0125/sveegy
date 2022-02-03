<script lang="ts">
import { fade, fly } from 'svelte/transition'
import { browser } from '$app/env'

import IconWrapper from './IconWrapper.svelte'
import IconHtml from './IconHtml.svelte'
import Illustration from './Illustration.svelte'
import InputWrapper from './Input.svelte'
import ToggleClassesButton from './ToggleClassesButton.svelte'

import formatToDisplayName from '$lib/utils/formatToDisplayName'
import createDownloadUrl from '$lib/utils/createDownloadUrl'
import { searchParams } from '$lib/store/searchParams'
import { getIcon } from '$lib/utils/icons'
import { svgColor, svgSize, svgClass, usingClasses } from '$lib/store/iconsSettings'

const closePopup = () => {
  $searchParams.icon = ''
}

const closeOnKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    closePopup()
  }
}

$: icon = getIcon($searchParams.icon, $searchParams['icon-type'])
$: downloadUrl = icon && browser ? createDownloadUrl(icon.paths, $searchParams['icon-type']) : ''
</script>

<svelte:window on:keydown="{closeOnKeydown}" />

{#if $searchParams.icon.length}
  <div
    class="w-screen h-screen fixed dimmed-bg z-10"
    on:click="{closePopup}"
    transition:fade
  >
    <section
      class="
        w-full max-h-[90%] h-fit px-6 py-4 absolute bottom-0 default-bg font-default-clr rounded-t-lg overflow-y-auto
        grid grid-cols-1 gap-4 md:grid-cols-2 md:rounded-lg md:max-w-[850px] transform left-1/2 -translate-x-1/2
        md:-translate-y-1/2 md:top-1/2 {icon?.variations.length ? 'md:grid-rows-[repeat(4,auto)]' : 'md:grid-rows-[repeat(3,auto)]'}
      "
      transition:fly={{ y: 100 }}
      on:click|stopPropagation
    >
      <header class="flex items-center justify-between col-span-full">
        <h1 class="text-3xl font-semibold">{icon ? formatToDisplayName(icon.id) : formatToDisplayName(`${$searchParams.icon} icon`)}</h1>

        <button
          class="w-10 h-10 rounded-md ring-effect default-hover-bg flex-shrink-0"
          on:click="{closePopup}"
        >
          <IconWrapper class="w-full h-full md:hidden" icon="chevron-down" />
          <IconWrapper class="w-full h-full hidden md:block" icon="close" />
        </button>
      </header>

      {#if icon}
        <div class="
          w-full h-40 mx-auto bg-gradient-to-tr from-sky-300 to-purple-400 flex items-center justify-center rounded-lg
          md:[grid-column:1/2]
        ">
          <div class="h-full w-full bg-opacity-[60%_!important] default-bg rounded-lg">
            <IconWrapper icon="{icon.id}" type="{$searchParams['icon-type']}" />
          </div>
        </div>

        <IconHtml class="w-full h-fit col-span-full" />

        <div class="w-full h-fit md:[grid-column:2/3] md:[grid-row:2/3] grid grid-cols-2 gap-4">
          <a
            class="h-10 w-fit justify-self-start btn cta-bg px-4 flex items-center text-slate-300"
            href="{downloadUrl}"
            download="{`${$searchParams.icon}-icon`}"
          >
            Download
            <span class="w-7 h-7 ml-2">
              <IconWrapper icon="download" />
            </span>
          </a>

          <ToggleClassesButton class="h-10 justify-self-end" />

          {#if $usingClasses}
            <InputWrapper label="Svg class" bind:inputValue="{$svgClass}" class="w-full h-10 col-span-full" />
          {:else}
            <InputWrapper label="Svg color" bind:inputValue="{$svgColor}" class="w-full h-10 [grid-column:1/2]" />
            <InputWrapper label="Svg size" bind:inputValue="{$svgSize}" class="w-full h-10 [grid-column:2/3]" />
          {/if}

        </div>

        {#if icon.variations.length}
          <ul class="w-full h-fit col-span-full flex flex-wrap gap-4">
            {#each icon.variations as variation}
              <li class="w-fit px-3 py-1 bg-blue-300 dark:bg-indigo-500 bg-opacity-50 dark:bg-opacity-50 rounded-md text-sm font-semibold font-default-clr">
                {variation}
              </li>
            {/each}
          </ul>
        {/if}
      {:else}
        <h2 class="text-center font-semibold text-xl my-4 col-span-full">Icon {$searchParams.icon} was not find...</h2>
        <Illustration class="w-1/2 md:w-[400px] h-full mx-auto col-span-full" name="search" />
      {/if}
    </section>
  </div>
{/if}
