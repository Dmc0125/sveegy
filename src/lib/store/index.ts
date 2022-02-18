import { writable } from 'svelte/store'

const isNavOpened = writable(false)
const isDocsNavOpened = writable(false)
const colorMode = writable('light')

export {
  isNavOpened,
  isDocsNavOpened,
  colorMode,
}

type Notification = {
  message: string | null
  error: boolean | null
}

const createNotificationStore = () => {
  const { subscribe, set, update } = writable<Notification>({ message: null, error: null })

  let timeoutId: NodeJS.Timeout | null = null

  const hideNotification = () => {
    set({ message: null, error: null })
    clearTimeout(timeoutId)
  }

  const _showNotification = (message: string, error: boolean) => {
    set({ message, error })

    timeoutId = setTimeout(() => {
      hideNotification()
    }, 2000)
  }

  const showNotification = (message: string, error: boolean) => {
    if (timeoutId) {
      hideNotification()

      setTimeout(() => {
        _showNotification(message, error)
      }, 200)
      return
    }

    _showNotification(message, error)
  }

  return {
    subscribe,
    hideNotification,
    showNotification,
    update,
  }
}

export const notification = createNotificationStore()
