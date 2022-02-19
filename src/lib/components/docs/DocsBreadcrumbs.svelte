<script lang="ts">
import { page } from '$app/stores'

const paths = $page.url.pathname.split('/').splice(1)
let className = ''
export { className as class }
</script>

<header class="w-full {className}">
  {#each paths as path, i}
    <span class="text-sm font-secondary-clr {path === paths[paths.length - 1] ? 'font-bold' : ''}">{path}</span>
    {#if i !== paths.length - 1}
      <span class="mx-1 font-secondary-clr text-sm">/</span>
    {/if}
  {/each}
</header>