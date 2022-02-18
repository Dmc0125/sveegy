<script lang="ts">
import { page } from '$app/stores'

import IconWrapper from './IconWrapper.svelte'
import ColorModeButton from './ColorModeButton.svelte'

import githubSvg from '../../assets/github.svg?raw'
import { isNavOpened } from '../store'
import links from '$lib/utils/links'
</script>

<header class="w-full h-20 px-[5%] flex items-center justify-between">
  <img
    class="w-10 h-10"
    src="/sveegy.svg"
    alt="Sveegy logo"
  >

  <div class="h-10 sm:h-fit">
    <section class="hidden sm:flex items-center w-fit h-fit gap-x-4">
      <nav class="flex gap-x-4 font-default-clr">
        {#each links as { path, name, matcher }}
          <a
            sveltekit:prefetch
            href="{path}"
            title="{name}"
            class="{$page.url.pathname.match(matcher) ? 'link-active-clr' : 'font-default-clr'} font-medium focus:text-opacity-50"
          >
            {name}
          </a>
        {/each}
      </nav>

      <a
        class="w-10 h-10 opacity-effect font-default-clr"
        href="https://github.com/Dmc0125/sveegy"
        title="Sveegy github repository"
        rel="external"
        target="_blank"
      >
        {@html githubSvg}
      </a>

      <ColorModeButton />
    </section>

    <button
      class="w-10 h-10 font-default-clr btn sm:hidden default-hover-bg"
      on:click="{() => $isNavOpened = !$isNavOpened}"
    >
      <IconWrapper icon="hamburger" />
    </button>
  </div>
</header>
