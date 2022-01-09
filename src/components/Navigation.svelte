<script lang="ts">
import IconWrapper from './IconWrapper.svelte'
import ColorModeButton from './ColorModeButton.svelte'

import githubIcon from '$lib/assets/github.svg?raw'
import { page } from '$app/stores'
import { fade, fly } from 'svelte/transition'
import { goto } from '$app/navigation'
import { isNavOpened } from '../store'
import links from '$lib/utils/links'

const closeNavigation = () => {
  $isNavOpened = !$isNavOpened
}
</script>

{#if $isNavOpened}
  <div
    class="absolute inset-0 dimmed-bg bg-opacity-10 sm:hidden"
    transition:fade
    on:click="{closeNavigation}"
  >
    {#key $isNavOpened}
    <div
      class="w-4/5 max-w-[300px] absolute right-0 px-[5%] py-8 h-full default-bg font-default-clr grid [grid-template-rows:auto_auto_1fr_auto]"
      transition:fly={{ x: 200 }}
      on:click|stopPropagation
    >
      <header class="w-full h-fit flex items-center justify-between">
        <button
          class="h-10 w-10 btn default-hover-bg"
          on:click="{closeNavigation}"
        >
          <IconWrapper icon="close" />
        </button>

        <h1 class="text-2xl font-bold">Sveegy</h1>
      </header>

      <nav class="w-full h-fit mt-8 flex flex-col gap-y-1">
        {#each links as { name, path, icon }}
          <button
            on:click="{() => goto(path)}"
            title="{name}"
            class="w-full flex py-1 items-center justify-end rounded-md transition-all pr-0 {$page.url.pathname.endsWith(path) ? 'cta-bg text-gray-200 pr-4' : ''}
              hover:pr-4 hover:text-gray-200 focus:pr-4 focus:text-gray-200 nav-link-bg"
          >
            <span class="mr-4">{name}</span>
            <IconWrapper class="w-7 h-7" icon={icon} />
          </button>
        {/each}
      </nav>

      <section class="row-start-4 flex justify-end items-center gap-x-4">
        <a
          class="w-8 h-8 opacity-effect"
          href="https://github.com/Dmc0125/sveegy"
          title="Sveegy github repository"
          rel="external"
          target="_blank"
        >
          {@html githubIcon}          
        </a>

        <ColorModeButton />
      </section>
    </div>
    {/key}
  </div>
{/if}
