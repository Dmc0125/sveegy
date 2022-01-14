// TODO: FIX
import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler = () => (
  {
    body: {
      message: 'This features is currently WIP.',
    },
  }
)

// import type { EndpointOutput } from '@sveltejs/kit/types/endpoint'

// import icons from '$lib/assets/iconsOutline.json'
// import { createPaths } from '$lib/utils/createSvgHtml'

// const successResponse = (data: any): EndpointOutput => ({
//   status: 200,
//   body: {
//     data,
//   },
// })

// const wrapPaths = (paths: string[]) => `
//   <svg width="24px" height="24px" fill="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     ${createPaths(paths, false)}
//   </svg>
// `.replace(/(\s{2,})|(\n)/g, '')

// export const get: RequestHandler = async ({ url }) => {
//   const { searchParams } = url

//   const searchedId = searchParams.get('id')
//   if (searchedId) {
//     const icon = icons.find(({ id }) => id === searchedId)

//     if (icon) {
//       return successResponse({
//         id: icon.id,
//         variations: icon.variations,
//         svg: wrapPaths(icon.paths),
//       })
//     }

//     return successResponse(icon)
//   }

//   const searchedIds = searchParams.get('ids')
//   if (searchedIds) {
//     const ids = searchedIds.split(',')
//     const searchedIcons = icons.filter(({ id }) => ids.some((_id) => _id === id))

//     return successResponse(searchedIcons)
//   }

//   const searchTerm = searchParams.get('s')
//   if (searchTerm) {
//     const searchRegex = new RegExp(searchTerm, 'gi')
//     const searchedIcons = icons
//       .filter(({ id, variations }) => (
//         id.match(searchRegex) || variations.some((variation) => variation.match(searchRegex))
//       ))
//       .map(({ id, variations, paths }) => ({ id, variations, svg: wrapPaths(paths) }))

//     return successResponse(searchedIcons)
//   }

//   return successResponse(icons.map(({ id, variations, paths }) => ({ id, variations, svg: wrapPaths(paths) })))
// }
