import prettify from 'html-prettify'

export const createPrettifiedHtml = (paths: string[], size: string, color: string) => prettify(`
  <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${paths.reduce((acc, path) => (`
      ${acc}
      <path fill-rule="evenodd" d="${path}" fill="${color}" />
    `), '')}
  </svg>
`)

export const createMinifiedHtml = (paths: string[], size: string, color: string) => (
  createPrettifiedHtml(paths, size, color).replaceAll(/(\s{2,})|(\n)/g, '')
)
