import { createPaths } from './createSvgHtml'
import type { IconType } from './icons'

const createDownloadUrl = (_paths: string[], type: IconType) => {
  const paths = createPaths(_paths, false, type)

  const file = new Blob([`
    <svg width="40px" height="40px" style="color: black" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      ${paths}
    </svg>
  `.replace(/(\s{2,})|(\n)/g, '')], { type: 'image/svg+xml' })

  const url = URL.createObjectURL(file)
  return url
}

export default createDownloadUrl
