import type { LoadInput } from '@sveltejs/kit/types/internal'

type CachedIconData = {
  stroke: Record<string, string[]> | null
  fill: Record<string, string[]> | null
  variations: Record<string, string[]> | null
}

export const cachedIconData: CachedIconData = {
  stroke: null,
  fill: null,
  variations: null,
}

export const getIconsPaths = (_type: keyof CachedIconData) => cachedIconData[_type]
export const getIconPaths = (_type: keyof CachedIconData, id: string) => cachedIconData[_type][id]
export const getIconVariations = (id: string) => cachedIconData.variations[id]

export const fetchIconData = async (path: keyof typeof cachedIconData, _fetch: LoadInput['fetch']) => {
  const res = await _fetch(`/icons/${path}.json`)
  const data = await res.json()
  cachedIconData[path] = data
}

export type IconType = 'stroke' | 'fill'

type CreateOptions = {
  clr: string
  size: string
}

const createAttrs = {
  stroke: (path: string, clr: string) => (
    `stroke-linecap="round" stroke-linejoin="round" stroke="${clr}" d="${path}"`
  ),
  fill: (path: string, clr: string) => (
    `d="${path}" fill="${clr}" fill-rule="evenodd"`
  ),
}

export const createSvgElement = (paths: string[], type: IconType, options: CreateOptions) => {
  const { clr, size } = options

  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
  ${paths.map((path) => `<path ${createAttrs[type](path, clr)} />`).join('\n  ')}
</svg>`
}

export const createDownloadableSvg = (paths: string[], type: IconType) => {
  const file = new Blob([createSvgElement(paths, type, { clr: 'black', size: '40px' })], { type: 'image/svg+xml' })
  return URL.createObjectURL(file)
}
