<script lang="ts">
import { getIcon, type IconType } from '$lib/utils/icons'

let iconName: string
export { iconName as icon }

export let type: IconType = 'outline'

$: icon = getIcon(iconName, type)

let className = ''
export { className as class }
</script>

<svg viewBox="0 0 24 24" fill="none" class="{className.length ? className : 'w-full h-full'}">
  {#each icon.paths as path}
    {#if type === 'outline' || type === 'fill'}
      <path
        d="{path}"
        fill-rule="evenodd"
        fill="currentColor"
      />
    {:else}
      <path
        d="{path}"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    {/if}
  {/each}
</svg>
