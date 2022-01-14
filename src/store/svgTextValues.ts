import { derived, type Readable } from 'svelte/store'
import prettify from 'html-prettify'

import { createSvgHtml, createPaths, createSvgJsx } from '$lib/utils/createSvgHtml'
import type { Icon, IconType } from '$lib/utils/icons'
import {
  usingClasses, svgClass, svgColor, svgSize,
} from './iconsSettings'
import { searchParams } from './searchParams'

type SvgTextWrappers = {
  html: string
  jsx: string
}

export const svgTextWrappers = derived(
  [usingClasses, svgClass, svgColor, svgSize, searchParams],
  ([$usingClasses, $svgClass, $svgColor, $svgSize], set) => {
    const options = {
      classes: $usingClasses, className: $svgClass, color: $svgColor, size: $svgSize,
    }

    set({
      html: prettify(createSvgHtml(options)),
      jsx: prettify(createSvgJsx(options)),
    })
  },
) as Readable<SvgTextWrappers>

export const createSvgText = (wrappers: SvgTextWrappers, icon: Icon, iconType: IconType, mode: 'jsx' | 'html') => (
  prettify(wrappers[mode].replace('{paths}', icon ? createPaths(icon.paths, mode === 'jsx', iconType) : ''))
)
