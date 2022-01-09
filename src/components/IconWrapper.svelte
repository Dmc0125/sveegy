<script lang="ts">
import { getIcon } from '$lib/utils/icons'

let iconName: string

export { iconName as icon }

$: icon = getIcon(iconName)

let className = ''
export { className as class }
</script>

<svg viewBox="0 0 24 24" fill="none" class="{className.length ? className : 'w-full h-full'}">
  {#each icon.paths as path}
    <path
      d="{path}"
      fill-rule="evenodd"
      fill="currentColor"
    />
  {/each}
</svg>