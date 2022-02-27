<script lang="ts">
import { fly } from 'svelte/transition'
import { page } from '$app/stores'
import { goto } from '$app/navigation'

import IconWrapper from './IconWrapper.svelte'
import ColorModeButton from './ColorModeButton.svelte'

import githubIcon from '../../assets/github.svg?raw'
import { isNavOpened } from '../store'
import links from '$lib/utils/links'
import Overlay from '$lib/layouts/Overlay.svelte'

const closeNavigation = () => {
  $isNavOpened = false
}
</script>

<Overlay
  show="{$isNavOpened}"
  class="sm:hidden"
  on:close="{closeNavigation}"
>
  {#key $isNavOpened}
    <div
      class="ml-auto grid [grid-template-rows:auto_auto_1fr_auto] navigation-wrapper font-default-clr"
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
        {#each links as { name, path, icon, matcher }}
          <button
            on:click="{() => goto(path)}"
            title="{name}"
            class="w-full flex py-1 items-center justify-end rounded-md transition-all pr-0 {$page.url.pathname.match(matcher) ? 'cta-bg text-gray-200 pr-4' : ''}
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
          href="https://github.com/Sveegy"
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
</Overlay>
