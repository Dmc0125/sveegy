import type { IconType } from './icons'

type StyleOptions = {
  size: string
  color: string
}

const createStrokePaths = (paths: string[], jsx: boolean) => (
  paths.reduce((content, path) => `
    ${content}
    <path d="${path}" stroke="currentColor" stroke${jsx ? 'L' : '-l'}inecap="round" stroke${jsx ? 'L' : '-l'}inejoin="round" />
  `, '')
)

const createFillPaths = (paths: string[], jsx: boolean) => (
  paths.reduce((content, path) => `
    ${content}
    <path fill${jsx ? 'R' : '-r'}ule="evenodd" d="${path}" fill="currentColor" />
  `, '')
)

export const createPaths = (paths: string[], jsx: boolean, type: IconType) => (
  type === 'stroke'
    ? createStrokePaths(paths, jsx)
    : createFillPaths(paths, jsx)
)

const setNonClassAttrs = (jsx: boolean, { size, color }: StyleOptions) => (
  `style=${jsx ? `{{ color: '${color}' }}` : `"color: ${color}"`} width="${size}" height="${size}"`
)
const setClassAttr = (jsx: boolean, className: string) => `class${jsx ? 'Name' : ''}="${className}"`

export const createSvg = <T extends boolean>(
  usingClasses: T,
  options: T extends true ? { className: string } : StyleOptions,
  jsx: boolean,
) => (
    // @ts-ignore
    `<svg ${usingClasses ? setClassAttr(jsx, options.className) : setNonClassAttrs(jsx, options)} viewBox="0 0 24 24" fill="none">
      {paths}
    </svg>`
  )
