import { defineStore } from 'pinia'
import { v4 } from 'uuid'

type NotificationState = {
  message: string | null
  isError: boolean
  id: string
  timeout: number
}

type NotificationData = {
  message: string
  isError?: boolean
}

const useNotificationStore = defineStore('notification', {
  state: (): NotificationState => ({
    message: '',
    isError: false,
    id: '',
    timeout: 0,
  }),
  actions: {
    sendNotification(notificationData: NotificationData) {
      clearTimeout(this.timeout)

      const { message, isError } = notificationData

      this.message = message
      this.isError = Boolean(isError)
      this.id = v4()

      this.timeout = setTimeout(() => {
        this.hideNotification()
      }, 3000)
    },
    hideNotification() {
      this.message = null
    },
  },
})

export default useNotificationStore
