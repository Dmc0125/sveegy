import iconsOutline from '$lib/assets/iconsOutline.json'
import iconsStroke from '$lib/assets/iconsStroke.json'
import variations from '$lib/assets/variations.json'

export type IconType = 'outline' | 'stroke'

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
  outline: createIconsWithVariations(iconsOutline),
  stroke: createIconsWithVariations(iconsStroke),
}

const getIcon = (name: string, type: IconType) => {
  const icon = iconsWithVariations[type].find(({ id }) => id === name) as Icon | undefined

  if (icon) {
    icon.variations = variations[name]
  }

  return icon
}

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
