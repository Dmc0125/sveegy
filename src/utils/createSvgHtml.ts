import prettify from 'html-prettify'

export const createPaths = (paths: string[], jsx: boolean) => (
  paths
    .reduce((content, path) => `
      ${content}
      <path fill${jsx ? 'R' : '-r'}ule="evenodd" d="${path}" fill="currentColor" />
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

export const createSvgHtml = (paths: string[], {
  classes, className, color, size,
}: HtmlOptionsClasses | HtmlOptionsNoClasses) => {
  if (classes) {
    return prettify(`
      <svg class="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${createPaths(paths, false)}
      </svg>
    `)
  }

  return prettify(`
    <svg width="${size}" height="${size}" style="color: ${color}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      ${createPaths(paths, false)}
    </svg>
  `)
}

export const createSvgJsx = (paths: string[], {
  classes, className, color, size,
}: HtmlOptionsClasses | HtmlOptionsNoClasses) => {
  if (classes) {
    return prettify(`
      <svg className="${className}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${createPaths(paths, true)}
      </svg>
    `)
  }

  return prettify(`
    <svg width="${size}" height="${size}" style="{{ color: ${color} }}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      ${createPaths(paths, true)}
    </svg>
  `)
}
