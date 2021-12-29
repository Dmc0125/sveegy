import prettify from 'html-prettify'

const createPathElements = (paths: string[]) => paths.reduce((acc, path) => (`
  ${acc}
  <path fill-rule="evenodd" d="${path}" fill="currentColor" />
`), '')

export const createHtmlWithClasses = (paths: string[], classes: string, jsx: boolean) => prettify(`
  <svg ${jsx ? `className="${classes}"` : `class="${classes}"`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${createPathElements(paths)}
  </svg>
`)

/* eslint-disable max-len */
export const createHtmlWithoutClasses = (paths: string[], size: string, color: string, jsx: boolean) => prettify(`
  <svg width="${size}" height="${size}" ${jsx ? `style={{ color: '${color}' }}` : `style="color: ${color};"`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${createPathElements(paths)}
  </svg>
`)
/* eslint-enable max-len */

export const createMinifiedHtml = (prettifiedHtml: string) => prettifiedHtml.replaceAll(/(\s{2,})|(\n)/g, '')
