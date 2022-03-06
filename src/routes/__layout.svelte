<script lang="ts">
import HeaderCustom from '$lib/components/header/Header.svelte'
import Navigation from '$lib/components/header/Navigation.svelte'

import '../index.css'
import { colorMode } from '$lib/store'
</script>

<div class="w-full min-h-screen {$colorMode}">
  <main class="w-full min-h-screen default-bg grid [grid-template-rows:min-content_1fr]">
    <div class="w-full h-fit">
      <HeaderCustom></HeaderCustom>
    </div>
    <slot></slot>
    <Navigation></Navigation>
  </main>
</div>

<style>
@font-face {
  font-family: 'Red Hat Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/RedHatMono-Regular.ttf) format('woff2');
}

@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts/RedHatDisplay-Light.ttf) format('woff2');
}

@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/RedHatDisplay-Regular.ttf) format('woff2');
}

@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(/fonts/RedHatDisplay-Medium.ttf) format('woff2');
}

@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts/RedHatDisplay-SemiBold.ttf) format('woff2');
}

@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts/RedHatDisplay-Bold.ttf) format('woff2');
}

:global(*) {
  font-family: 'Red Hat Display', sans-serif;
}

:global(pre, pre *) {
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