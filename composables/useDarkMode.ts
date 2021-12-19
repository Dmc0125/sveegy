import type { Ref } from 'vue'

/* eslint-disable no-param-reassign */
const initDarkMode = (darkMode: Ref<boolean>) => {
  onMounted(() => {
    const savedDarkModeJson = localStorage.getItem('darkMode')
    if (!savedDarkModeJson) {
      localStorage.setItem('darkMode', 'false')
      darkMode.value = false
      return
    }

    const savedDarkMode = JSON.parse(savedDarkModeJson)
    if (typeof darkMode.value !== 'boolean') {
      localStorage.setItem('darkMode', 'false')
      darkMode.value = false
      return
    }

    darkMode.value = savedDarkMode
  })
}

const composeUseDarkMode = () => {
  const darkMode = ref(false)

  const useDarkMode = (init = false) => {
    if (init) {
      initDarkMode(darkMode)
    }

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value
      localStorage.setItem('darkMode', JSON.stringify(darkMode.value))
    }

    return {
      darkMode,
      toggleDarkMode,
    }
  }

  return useDarkMode
}

export default composeUseDarkMode()
