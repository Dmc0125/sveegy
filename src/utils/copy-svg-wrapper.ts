import prettify from 'html-prettify'

const createSvg = (size: string, inner: string) => (`
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      ${inner}
    </svg>
  `
)

export default (size: string, inner: string, color: string) => {
  const prettifiedHtml = prettify(createSvg(size, inner))

  if (color.length && color !== 'currentColor') {
    // eslint-disable-next-line prefer-regex-literals
    const regex = new RegExp('fill="currentColor"', 'g')
    return prettifiedHtml.replace(regex, `fill="${color}"`)
  }

  return prettifiedHtml
}
