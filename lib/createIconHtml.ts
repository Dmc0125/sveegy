import prettifyHtml from 'html-prettify'

const createIconHtml = (paths: string[], size: string, color: string) => (prettifyHtml(`
  <svg
    viewBox="0 0 24 24"
    width="${size}"
    height="${size}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    ${paths.map((path) => (
    `<path
      d="${path}"
      fill="${color}"
      fill-rule="evenodd"
    />`
  ))}
  </svg>
`))

export default createIconHtml
