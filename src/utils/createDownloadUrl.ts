const createDownloadUrl = (svgHtml: string) => {
  const file = new Blob([svgHtml], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(file)
  return url
}

export default createDownloadUrl
