type Status = 'success' | 'error'

const useNotification = () => {
  const id = useState<number | null>('notificationId', () => null)
  const message = useState('notificationMessage', () => '')
  const status = useState<Status | null>('notificationStatus', () => null)

  const hideNotification = () => {
    message.value = ''
    status.value = null
  }

  const showNotification = (_message: string, _status: Status) => {
    if (id.value) {
      clearTimeout(id.value)
      id.value = null
    }

    message.value = _message
    status.value = _status
    id.value = setTimeout(() => {
      hideNotification()
    }, 3000) as unknown as number
  }

  return {
    id,
    message,
    status,
    showNotification,
    hideNotification,
  }
}

export default useNotification
