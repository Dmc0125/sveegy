import { writable } from 'svelte/store'

import debounce from '$lib/utils/debounce'
import { notification } from '.'

const createSvgSettingsStore = <T>(defaultValue: T, notificationMessage: string) => {
  const _showNotification = debounce(() => {
    notification.showNotification(notificationMessage, false)
  })

  const store = writable(defaultValue)

  let initial = true
  store.subscribe(() => {
    if (!initial) {
      store.subscribe(() => {
        _showNotification()
      })
    }

    initial = false
  })

  return store
}

const createUsingClassesStore = () => {
  const usingClasses = writable(false)

  let initial = true
  usingClasses.subscribe((value) => {
    if (!initial) {
      const message = `SVGs are now ${value ? '' : 'not'} using class names`
      notification.showNotification(message, false)
    }

    initial = false
  })

  return usingClasses
}

const usingClasses = createUsingClassesStore()
const svgClass = createSvgSettingsStore('w-10 h-10 fill-current', 'SVG class has been updated')
const svgColor = createSvgSettingsStore('currentColor', 'SVG color has been updated')
const svgSize = createSvgSettingsStore('40px', 'SVG size has been updated')

export {
  usingClasses,
  svgClass,
  svgColor,
  svgSize,
}
