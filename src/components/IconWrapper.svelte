<script lang="ts">
import { createPaths } from '$lib/utils/createSvgHtml'
import { getIcon, type IconType } from '$lib/utils/icons'

let iconName: string
export { iconName as icon }

export let type: IconType = 'outline'

$: icon = getIcon(iconName, type)
$: {
  if (!icon) {
    throw `Icon ${iconName} not found... IconWrapper.svelte`
  }
}
$: iconPaths = createPaths(icon.paths, false, type)

let className = ''
export { className as class }
</script>

<svg viewBox="0 0 24 24" fill="none" class="{className.length ? className : 'w-full h-full'}">
  {@html iconPaths}
</svg>
