<script lang="ts">
import HeaderCustom from '$lib/components/Header.svelte'
import Navigation from '$lib/components/Navigation.svelte'

import '../index.css'
import { colorMode } from '$lib/store'
</script>

<div class="w-full min-h-screen {$colorMode}">
  <main class="w-full min-h-screen default-bg grid [grid-template-rows:min-content_1fr] gap-y-6">
    <HeaderCustom></HeaderCustom>
    <slot></slot>
    <Navigation></Navigation>
  </main>
</div>

<style>
  :global(*) {
    font-family: 'Red Hat Display', sans-serif;
  }

  :global(pre) {
    font-family: 'Red Hat Mono', monospace;
  }

  :global(*, *:focus-visible, *:focus) {
    outline: none;
  }

  :global(html, body) {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    font-size: 16px;
  }
</style>