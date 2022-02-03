import type { RequestHandler } from '@sveltejs/kit'
import type { EndpointOutput } from '@sveltejs/kit/types/endpoint'
import Joi from 'joi'
import prettify from 'html-prettify'

import { createPaths } from '$lib/utils/createSvgHtml'
import { icons } from '$lib/utils/icons'
import type { IconType } from '$lib/utils/icons'

const successResponse = (data: any): EndpointOutput => ({
  status: 200,
  body: {
    data,
  },
})

const errorResponse = (name: string, message: string, status = 500): EndpointOutput => ({
  status,
  body: {
    error: {
      name,
      message,
    },
  },
})

/* eslint-disable max-len */
const wrapPaths = (paths: string[], type: IconType) => `
  <svg width="24px" height="24px" fill="${type === 'outline' ? 'currentColor' : 'none'}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${createPaths(paths, false, type)}
  </svg>
`
/* eslint-enable max-len */

const iconTypeParam = Joi.string().valid('outline', 'stroke').label('icon-type')

export const get: RequestHandler = async ({ url }) => {
  const { searchParams } = url
  const iconType = searchParams.get('icon-type')

  const { value: validatedIconType, error: iconTypeError } = iconTypeParam.validate(iconType) as Joi.ValidationResult<IconType>

  if (iconTypeError) {
    return errorResponse(iconTypeError.name, iconTypeError.details[0].message, 400)
  }

  const selectedIcons = icons[validatedIconType]

  const prettifyParam = searchParams.get('prettify')
  const shouldPrettify = prettifyParam === 'true'

  const _prettify = (svgStr: string) => (
    shouldPrettify
      ? prettify(svgStr)
      : svgStr.replace(/(\s{2,})|(\n)/g, '')
  )
  const createSvgs = (_icons: typeof selectedIcons) => (
    _icons.map(({ id, paths }) => ({ id, svg: _prettify(wrapPaths(paths, validatedIconType)) }))
  )

  const searchedId = searchParams.get('id')
  if (searchedId) {
    const icon = selectedIcons.find(({ id }) => id === searchedId)

    if (icon) {
      return successResponse({
        id: icon.id,
        svg: wrapPaths(icon.paths, validatedIconType),
      })
    }
  }

  const searchedIds = searchParams.get('ids')
  if (searchedIds) {
    const ids = searchedIds.split(',')
    const searchedIcons = createSvgs(selectedIcons.filter(({ id }) => ids.some((_id) => _id === id)))

    return successResponse(searchedIcons)
  }

  const searchTerm = searchParams.get('s')
  if (searchTerm) {
    const searchRegex = new RegExp(searchTerm, 'gi')
    const searchedIcons = createSvgs(selectedIcons
      .filter(({ id, variations }) => (
        id.match(searchRegex) || variations.some((variation) => variation.match(searchRegex))
      )))
    return successResponse(searchedIcons)
  }

  return successResponse(createSvgs(selectedIcons))
}
