<script lang="ts">
import IconWrapper from '$lib/components/IconWrapper.svelte'

import { usingClasses, svgClass, svgSize, svgColor, notification } from '$lib/store'
import { createSvgHtml, createSvgJsx } from '$lib/utils/createSvgHtml'
import { getIcon } from '$lib/utils/icons'

let className: string = ''
export { className as class }
export let icon = 'copy'
export let hide = false

export let isSwitch = false

type Mode = 'jsx' | 'html'

export let lang: Mode = 'html'
const setMode = (_lang: Mode) => {
  lang = _lang
}

export let copyIcon: string
const { paths } = getIcon(copyIcon)

const copySvg = async (_lang: Mode) => {
  const copyValue = _lang === 'jsx'
    ? createSvgJsx(paths, { classes: $usingClasses, className: $svgClass, size: $svgSize, color: $svgColor })
    : createSvgHtml(paths, { classes: $usingClasses, className: $svgClass, size: $svgSize, color: $svgColor })
  
  try {
    await window.navigator.clipboard.writeText(copyValue)
    notification.showNotification(`Icon ${lang.toUpperCase()} was coped to your clipboard`, false)
  } catch (error) {
    console.log(error)
  }
}

const handleClick = (_lang: Mode) => {
  if (isSwitch) {
    setMode(_lang)
    return
  }

  copySvg(_lang)
}
</script>

<div
  class="
    {className.length ? className : 'w-full h-8 rounded-md'}
    {hide ? 'pointer-events-none opacity-0 top-0' : 'left-1/2 transform -translate-x-1/2'}
    {$$slots.icon ? 'grid-cols-[auto_auto_1fr_1fr_auto]' : 'grid-cols-[auto_auto_1fr_1fr]'}
    secondary-bg rounded-md rounded-tl-none transition-all grid items-center absolute
  "
>
  <div class="w-10 h-6">
    <IconWrapper {icon} />
  </div>

  <div class="w-[1px] h-1/2 bg-slate-400" />

  <button
    class="
      text-sm font-medium secondary-hover-bg h-[90%] mx-[5%] rounded-md
      {isSwitch && lang === 'jsx' ? 'default-bg' : 'secondary-focus-bg'}
    "
    on:click|stopPropagation={() => handleClick('jsx')}
  >
    JSX
  </button>
  <button
    class="
      text-sm font-medium secondary-hover-bg rounded-md h-[90%] mx-[5%]
      {isSwitch && lang === 'html' ? 'default-bg' : 'secondary-focus-bg'}
    "
    on:click|stopPropagation={() => handleClick('html')}
  >
    HTML
  </button>

  {#if $$slots.icon}
    <button
      class="w-10 h-[90%] secondary-hover-bg secondary-focus-bg rounded-md"
      on:click="{() => copySvg(lang)}"
    >
      <slot name="icon"></slot>
    </button> 
  {/if}
</div>

<style>
:global(.wrapper:hover div, .wrapper:focus div, .wrapper:focus-within div) {
  opacity: 1;
  pointer-events: all;
}
</style>