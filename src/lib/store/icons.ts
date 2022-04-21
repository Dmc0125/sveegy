import { onDestroy, onMount } from 'svelte'
import type { Page } from '@sveltejs/kit'
import { writable, type Unsubscriber } from 'svelte/store'
import { goto } from '$app/navigation'

import type { IconType } from '$lib/utils/icons'

export const iconsOptions = writable({ color: 'currentColor', size: '40px' })

export const icons = writable<{ selectedType: IconType, openedIcon: string | null }>({
  selectedType: 'stroke',
  openedIcon: null,
})

export const watchRouteParamsOnMount = (page: Page<Record<string, string>>) => {
  const { searchParams } = page.url

  const selectedType = searchParams.get('type')
  if (selectedType === 'stroke' || selectedType === 'fill') {
    icons.update((prev) => (
      { ...prev, selectedType }
    ))
  }

  const openedIcon = searchParams.get('icon')
  if (typeof openedIcon === 'string') {
    icons.update((prev) => (
      { ...prev, openedIcon }
    ))
  }
}

export const setRouteParamsWatcher = (page: Page<Record<string, string>>) => {
  let unsubscribe: undefined | Unsubscriber

  onMount(() => {
    unsubscribe = icons.subscribe(($icons) => {
      const { selectedType, openedIcon } = $icons
      page.url.searchParams.set('type', selectedType)
      page.url.searchParams.set('icon', openedIcon || '')
      goto(`?${page.url.searchParams.toString()}`, {
        keepfocus: true,
        replaceState: true,
        noscroll: true,
      })
    })
  })

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe()
    }
  })
}
