import type { IconType } from './icons'

export const createPaths = (paths: string[], jsx: boolean, type: IconType) => (type === 'outline'
  ? paths
    .reduce((content, path) => `
      ${content}
      <path fill${jsx ? 'R' : '-r'}ule="evenodd" d="${path}" fill="currentColor" />
    `, '')
  : paths
    .reduce((content, path) => `
      ${content}
      <path d="${path}" stroke="currentColor" stroke${jsx ? 'L' : '-l'}inecap="round" stroke${jsx ? 'L' : '-l'}inejoin="round" />
    `, '')
)

type HtmlOptionsClasses = {
  classes: true
  className: string
  color?: string
  size?: string
}

type HtmlOptionsNoClasses = {
  classes: false
  className?: string
  color: string
  size: string
}

const createModifiableAttrsHTML = ({
  classes, className, color, size,
}: HtmlOptionsClasses | HtmlOptionsNoClasses) => (classes ? `class="${className}"` : `width="${size}" height="${size}" style="color: ${color}"`)

const createModifiableAttrsJSX = ({
  classes, className, color, size,
}: HtmlOptionsClasses | HtmlOptionsNoClasses) => (
  classes
    ? `className="${className}"`
    : `width="${size}" height="${size}" style="{{ color: ${color} }}"`
)

export const createSvgHtml = (svgOptions: HtmlOptionsClasses | HtmlOptionsNoClasses) => (`
  <svg ${createModifiableAttrsHTML(svgOptions)} viewBox="0 0 24 24" fill="none">
    {paths}
  </svg>
`)

export const createSvgJsx = (svgOptions: HtmlOptionsClasses | HtmlOptionsNoClasses) => (`
  <svg ${createModifiableAttrsJSX(svgOptions)} viewBox="0 0 24 24" fill="none">
    {paths}
  </svg>
`)
