import { ref } from 'vue'

const useSettings = () => {
  const isOpen = ref(false)

  const toggleSettings = () => {
    isOpen.value = !isOpen.value
  }

  return { isOpen, toggleSettings }
}

export default useSettings
