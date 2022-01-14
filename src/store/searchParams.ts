import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store'
import { goto } from '$app/navigation'
import { page } from '$app/stores'
import { browser } from '$app/env'

import type { IconType } from '$lib/utils/icons'

type SearchParams = {
  'icon-type': IconType
  icon: string
}

const searchParamsStore = writable({}) as Writable<SearchParams>
searchParamsStore.subscribe((newParams) => {
  if (browser) {
    const urlSearchParams = new URLSearchParams(newParams)
    goto(`?${urlSearchParams.toString()}`, {
      keepfocus: true,
      replaceState: true,
      noscroll: true,
    })
  }
})

type Options = {
  defaultValue?: string
  types?: string[]
}

const initSearchParams = (name: string, { defaultValue, types }: Options = {}) => {
  const _defaultValue = defaultValue || ''

  let initialized = false

  const unsubscribe = page.subscribe(({ url }) => {
    if (initialized) {
      unsubscribe()
      return
    }

    searchParamsStore.update((searchParams) => {
      const paramValue = url.searchParams.get(name)

      if (types) {
        return {
          ...searchParams,
          [name]: types.some((_type) => _type === paramValue) ? paramValue : _defaultValue,
        }
      }

      return {
        ...searchParams,
        [name]: paramValue || _defaultValue,
      }
    })

    initialized = true
  })
}

export {
  searchParamsStore as searchParams,
  initSearchParams,
}
