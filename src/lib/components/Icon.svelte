<script lang="ts">
import prettify from 'html-prettify'

import { searchParams } from '$lib/store/searchParams'
import type { Icon } from '$lib/utils/icons'
import { createSvg, createPaths } from '$lib/utils/createSvgHtml'
import { svgClass, svgColor, svgSize, usingClasses } from '$lib/store/iconsSettings'
import formatToDisplayName from '$lib/utils/formatToDisplayName'

import IconWrapper from './IconWrapper.svelte'
import copySvg from '$lib/utils/copySvg';

$: iconType = $searchParams['icon-type']
export let icon: Icon

$: paths = createPaths(icon.paths, false, iconType)
$: svgWrapper = createSvg(true, { className: 'w-20 h-20 text-gray-800 dark:text-slate-300 justify-self-center' }, false)
$: svgHtml = svgWrapper.replace('{paths}', paths)

const _copySvg = async (mode: 'jsx' | 'html') => {
  const copyPaths = createPaths(icon.paths, mode === 'jsx', iconType)
  const options = $usingClasses ? { className: $svgClass } : { size: $svgSize, color: $svgColor }
  const copySvgWrapper = createSvg($usingClasses, options, mode === 'jsx')
  const copySvgText = prettify(copySvgWrapper.replace('{paths}', copyPaths))

  await copySvg(copySvgText, formatToDisplayName(icon.id))
}
</script>

<button
  class="
    w-full h-full relative overflow-hidden rounded-md font-secondary-clr grid grid-rows-[auto_min-content] items-center ring-effect wrapper
    copy-btn-wrapper
  "
  on:click="{() => $searchParams.icon = icon.id}"
>
  <div
    class="
      copy-btn w-full h-8 absolute rounded-md secondary-bg transition-all grid items-center grid-cols-[auto_auto_1fr_1fr]
      pointer-events-none opacity-0 top-0
    "
  >
    <div class="w-10 h-6">
      <IconWrapper icon="copy" />
    </div>
    <div class="w-[1px] h-1/2 bg-slate-400" />
    <button
      class="text-sm font-medium secondary-hover-bg h-[90%] mx-[5%] rounded-md"
      on:click|stopPropagation={() => _copySvg('jsx')}
    >
      JSX
    </button>
    <button
      class="text-sm font-medium secondary-hover-bg rounded-md h-[90%] mx-[5%]"
      on:click|stopPropagation={() => _copySvg('html')}
    >
      HTML
    </button>
  </div>

  {@html svgHtml}
  <div class="w-full h-14 flex items-center justify-center px-2">
    <h2 class="font-medium">{formatToDisplayName(icon.id)}</h2>
  </div>
</button>

<style>
.copy-btn-wrapper:hover .copy-btn,
.copy-btn-wrapper:focus .copy-btn,
.copy-btn-wrapper:focus-within .copy-btn {
  opacity: 1;
  pointer-events: all;
}
</style>
