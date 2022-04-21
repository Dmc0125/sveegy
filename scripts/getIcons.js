import { initializeApp, deleteApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs/promises'
import fsSync from 'fs'
import url from 'url'
import JSZip from 'jszip'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

dotenv.config()

const {
  API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID,
} = process.env

const app = initializeApp({
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
})
const db = getFirestore()

const iconsSnapshot = await getDocs(collection(db, 'icons'))
console.log('✅ Fetched all icons')

const variations = {}
const strokeIcons = {}
const fillIcons = {}
iconsSnapshot.forEach((iconDoc) => {
  const { id } = iconDoc
  const { variations: iconVariations, stroke, fill } = iconDoc.data()
  variations[id] = iconVariations

  if (stroke) {
    strokeIcons[id] = stroke
  }

  if (fill) {
    fillIcons[id] = fill
  }
})

const createStaticIcons = async () => {
  const staticPath = path.join(__dirname, '../static/icons')

  try {
    await fs.rm(staticPath, { recursive: true })
  } catch (error) {
    console.log('"/icons" directory does not exist, will create new one')
  }

  await fs.mkdir(staticPath)
  await Promise.all([
    fs.writeFile(`${staticPath}/variations.json`, JSON.stringify(variations)),
    fs.writeFile(`${staticPath}/stroke.json`, JSON.stringify(strokeIcons)),
    fs.writeFile(`${staticPath}/fill.json`, JSON.stringify(fillIcons)),
  ])

  console.log('✅ Created /static/icons directory with "variations.json", "stroke.json" and "fill.json" files')
}

const createAttrs = (type) => {
  if (type === 'stroke') {
    return 'stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"'
  }

  return 'fill="currentColor" fill-rule="evenodd"'
}

const createSymbols = (icons, type) => (
  Object.entries(icons).map(([iconId, paths]) => (
    // eslint-disable-next-line prefer-template
    `<symbol id="sv-${iconId}" viewBox="0 0 24 24">\n    `
      + paths.map((_path) => `<path d="${_path}" ${createAttrs(type)} />`).join('\n    ')
      + '\n  </symbol>'
  )).join('\n  ')
)

const createSprites = () => {
  const sprites = '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<!--\n'
    + 'Sveegy Icons - https://sveegy.vercel.app\n'
    + 'License - MIT - https://sveegy.vercel.app/license\n'
    + '-->\n'
    + '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n'
    + '  {#symbols}\n'
    + '</svg>'

  const strokeSymbols = createSymbols(strokeIcons, 'stroke')
  const fillSymbols = createSymbols(fillIcons, 'fill')

  const strokeSprites = sprites.replace('{#symbols}', strokeSymbols)
  const fillSprites = sprites.replace('{#symbols}', fillSymbols)

  const zip = new JSZip()
  zip.file('sveegy-stroke.svg', strokeSprites)
  zip.file('sveegy-fill.svg', fillSprites)

  const spritesPath = path.join(__dirname, '../static/sprites.zip')
  zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
    .pipe(fsSync.createWriteStream(spritesPath))

  console.log('✅ Created and zipped sprites folder')
}

await createStaticIcons()
createSprites()

deleteApp(app)
