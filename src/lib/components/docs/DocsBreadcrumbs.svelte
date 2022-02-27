<script lang="ts">
import { page } from '$app/stores'

$: paths = $page.url.pathname.split('/').splice(1)
</script>

<header class="w-full">
  {#each paths as path, i}
    <span class="text-sm font-secondary-clr {path === paths[paths.length - 1] ? 'font-bold' : ''}">{path}</span>
    {#if i !== paths.length - 1}
      <span class="mx-1 font-secondary-clr text-sm">/</span>
    {/if}
  {/each}
</header>
