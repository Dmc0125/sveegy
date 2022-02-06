<script lang="ts">
import IconWrapper from '$lib/components/IconWrapper.svelte'

import { searchParams } from '$lib/store/searchParams'
import { getIcon } from '$lib/utils/icons'
import { createSvgText, svgTextWrappers } from '$lib/store/svgTextValues'
import copySvg from '$lib/utils/copySvg'

let className: string = ''
export { className as class }

type Mode = 'jsx' | 'html'

export let lang: Mode = 'html'
const setMode = (_lang: Mode) => {
  lang = _lang
}

let copyIconName: string
export { copyIconName as icon }
const copyIcon = getIcon(copyIconName, $searchParams['icon-type'])

const _copySvg = async () => {
  const copyValue = createSvgText($svgTextWrappers, copyIcon, $searchParams['icon-type'], lang)
  await copySvg(copyValue, copyIconName)
}
</script>

<div
  class="
    {className.length ? className : 'w-full h-8 rounded-md'}
    secondary-bg rounded-md rounded-tl-none transition-all grid items-center absolute left-1/2 transform -translate-x-1/2
    grid-cols-[auto_auto_1fr_1fr_auto]
  "
>
  <div class="w-10 h-6">
    <IconWrapper icon="trade" />
  </div>

  <div class="w-[1px] h-1/2 bg-slate-400" />

  <button
    class="
      text-sm font-medium secondary-hover-bg h-[90%] mx-[5%] rounded-md
      {lang === 'jsx' ? 'default-bg' : 'secondary-focus-bg'}
    "
    on:click|stopPropagation={() => setMode('jsx')}
  >
    JSX
  </button>
  <button
    class="
      text-sm font-medium secondary-hover-bg rounded-md h-[90%] mx-[5%]
      {lang === 'html' ? 'default-bg' : 'secondary-focus-bg'}
    "
    on:click|stopPropagation={() => setMode('html')}
  >
    HTML
  </button>

  <button
    class="w-10 h-[90%] secondary-hover-bg secondary-focus-bg rounded-md"
    on:click="{_copySvg}"
  >
    <IconWrapper icon="copy" class="w-6 h-6 mx-auto" />
  </button> 
</div>

<style>
:global(.wrapper:hover div, .wrapper:focus div, .wrapper:focus-within div) {
  opacity: 1;
  pointer-events: all;
}
</style>
