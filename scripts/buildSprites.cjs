const fs = require('fs')
const path = require('path')
const jszip = require('jszip')

const strokeIcons = require('../src/assets/iconsStroke.json')
const fillIcons = require('../src/assets/iconsFill.json')

const zip = new jszip()

const spritesTemplate = `<?xml version="1.0" encoding="UTF-8"?>
<!--
Sveegy Icons - https://sveegy.vercel.app
License - MIT - https://sveegy.vercel.app/license
-->
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  {#symbols}
</svg>`

const symbolTemplate = `<symbol id="{#id}" viewBox="0 0 24 24">
    {#paths}
  </symbol>`

/**
 * @param {string[]} paths
 * @param {string} name
 * @returns {string}
 */
const createSymbolStroke = (paths, name) => {
  const symbolPaths = paths.map((path) => (
    `<path d="${path}" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />`
  )).join('\n    ')
  return symbolTemplate.replace('{#paths}', symbolPaths).replace('{#id}', `sv-${name}`)
}

/**
 * @param {{ id: string; paths: string[] }[]} icons 
 * @returns {string}
 */
const createSprites = (icons) => {
  const symbols = icons.map(({ id, paths }) => createSymbolStroke(paths, id)).join('\n  ')
  return spritesTemplate.replace('{#symbols}', symbols)
}

const _icons = {
  stroke: strokeIcons,
  fill: fillIcons,
}

/**
 * @param {'stroke' | 'fill'} type 
 */
const createSpriteFile = async (type) => {
  const sprites = createSprites(_icons[type])
  zip.file(`${type}.svg`, sprites)
}

(async () => {
  await createSpriteFile('sveegy-stroke', zip)
  await createSpriteFile('sveegy-fill', zip)

  const spritesFolderPath = path.join(__dirname, '../static/sprites.zip')

  zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
    .pipe(fs.createWriteStream(spritesFolderPath))
})()
