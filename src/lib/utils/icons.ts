import iconsStroke from '../../assets/iconsStroke.json'
import iconsFill from '../../assets/iconsFill.json'
import variations from '../../assets/variations.json'

export type IconType = 'stroke' | 'fill'

export type Icon = {
  id: string
  paths: string[]
  variations: string[]
}

const createIconsWithVariations = (_icons: { id: string; paths: string[] }[]) => _icons.map((icon) => (
  {
    ...icon,
    variations: variations[icon.id] as string[],
  }
))

const iconsWithVariations = {
  stroke: createIconsWithVariations(iconsStroke),
  fill: createIconsWithVariations(iconsFill),
}

const getIcon = (name: string, type: IconType) => iconsWithVariations[type].find(({ id }) => id === name) as Icon | undefined
const filterIcons = (searchTerm: string, type: IconType) => {
  if (!searchTerm.length) {
    return iconsWithVariations[type]
  }

  const searchTermRegex = new RegExp(searchTerm)
  return iconsWithVariations[type]
    .filter(({ id, variations: iconVariations }) => id.match(searchTermRegex) || iconVariations.some((variation) => variation.match(searchTermRegex)))
}

export {
  getIcon,
  iconsWithVariations as icons,
  filterIcons,
}

export const iconInformation = {
  stroke: 'All icons are using 24x24 view box. Stroke size of stroke icons can be adjusted width stroke-width attribute.',
  fill: 'All icons are using 24x24 view box. Size of filled icons is adjusted to size, width and height of the icon wrapper.',
}
