<script lang="ts">
import { fly } from 'svelte/transition'
  
import { isDocsNavOpened } from '../../store'

import Overlay from '$lib/layouts/Overlay.svelte'
import IconWrapper from '../utils/IconWrapper.svelte'
import DocsLinksSection from './DocsLinksSection.svelte'
</script>

<Overlay
  show="{$isDocsNavOpened}"
  class="lg:hidden"
  on:close="{() => $isDocsNavOpened = false}"
>
  {#key $isDocsNavOpened}
    <nav
      class="top-0 left-0 navigation-wrapper font-default-clr"
      transition:fly={{ x: -200 }}
    >
      <header class="w-full flex items-center justify-between">
        <h1 class="text-xl font-bold">Documentation</h1>

        <button
          class="w-10 h-10 btn default-hover-bg"
          on:click="{() => $isDocsNavOpened = false}"
        >
          <IconWrapper icon="close" />
        </button>
      </header>

      <section class="flex flex-col gap-y-4 mt-4">
        <DocsLinksSection />
      </section>
    </nav>
  {/key}
</Overlay>
