<script lang="ts">
import IconWrapper from '../utils/IconWrapper.svelte'
import DocsBreadcrumbs from './DocsBreadcrumbs.svelte'

import { isDocsNavOpened } from '$lib/store'

const toggleDocsNav = () => {
  $isDocsNavOpened = !$isDocsNavOpened
}

let className = ''
export { className as class }
</script>

<header class="w-full h-fit flex items-center justify-between lg:hidden {className}">
  <button class="font-secondary-clr h-8 w-8 mr-5 shrink-0 btn default-hover-bg" on:click="{toggleDocsNav}">
    <IconWrapper icon="hamburger-triangular" />
  </button>

  <DocsBreadcrumbs />
</header>
