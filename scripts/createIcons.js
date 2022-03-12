import { initializeApp, deleteApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs/promises'
import dotenv from 'dotenv'

dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url))
const ASSETS_PATH = join(__dirname, '../src/assets')

const {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} = process.env

const app = initializeApp({
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
})
const db = getFirestore(app)

/**
 * @description Fetches and creates stroke and fill icons and variations
 */
const createIcons = async () => {
  const iconsSnapshot = await getDocs(collection(db, 'icons'))

  const iconsStroke = []
  const iconsFill = []
  const variations = {}

  iconsSnapshot.forEach((_icon) => {
    const { id } = _icon
    const { variations: iconVariations, fill, stroke } = _icon.data()

    variations[id] = iconVariations

    if (fill) {
      iconsFill.push({
        id,
        paths: fill,
      })
    }

    if (stroke) {
      iconsStroke.push({
        id,
        paths: stroke,
      })
    }
  })

  return { iconsStroke, iconsFill, variations }
}

/**
 * @param {string} filename
 * @param {any} data
 */
const writeFile = async (filename, data) => {
  const path = join(ASSETS_PATH, `/${filename}`)
  await fs.writeFile(path, JSON.stringify(data, null, 2))
}

const { iconsStroke, iconsFill, variations } = await createIcons()

await writeFile('iconsStroke.json', iconsStroke)
await writeFile('iconsFill.json', iconsFill)
await writeFile('variations.json', variations)

deleteApp(app)
