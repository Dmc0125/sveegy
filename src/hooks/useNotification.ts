import { ref } from 'vue'

const composeUseNotification = () => {
  const id = ref<number | null>(null)
  const message = ref('')
  const isError = ref(false)

  const useNotification = () => {
    const hideNotification = () => {
      if (id.value) {
        clearTimeout(id.value)
        id.value = null
      }
    }

    const showNotification = (_message: string, _isError: boolean) => {
      hideNotification()

      message.value = _message
      isError.value = _isError

      id.value = setTimeout(() => {
        hideNotification()
      }, 3000) as unknown as number
    }

    return {
      id,
      message,
      isError,
      hideNotification,
      showNotification,
    }
  }

  return useNotification
}

export default composeUseNotification()
