<script lang="ts">
  import { getIconPaths } from '$lib/utils/icons'

  type IconType = 'stroke' | 'fill'

  export let iconType: IconType = 'stroke'
  export let iconId = ''
  export let size: string
  export let color = 'currentColor'
  export let strokeWidth = '.75'
  let className = ''
  export { className as class }

  export let paths: string[] = []

  const getPaths = (_iconType: IconType, _iconId: string, _paths: string[]) => {
    if (_paths.length) {
      return _paths
    }

    return getIconPaths(_iconType, _iconId)
  }

  $: iconPaths = getPaths(iconType, iconId, paths)
</script>

<svg viewBox="0 0 24 24" fill="none" class={className} style="width: {size}; height: {size}">
  {#each iconPaths as path}
    {#if iconType === 'stroke'}
      <path d={path} stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width={strokeWidth} />
    {:else}
      <path d={path} fill={color} fill-rule="evenodd" />
    {/if}
  {/each}
</svg>
