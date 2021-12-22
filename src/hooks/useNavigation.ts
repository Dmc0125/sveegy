import { ref } from 'vue'

const composeUseNavigation = () => {
  const navigationOpened = ref(false)

  const useNavigation = () => {
    const toggleNavigation = () => {
      navigationOpened.value = !navigationOpened.value
    }

    return {
      navigationOpened,
      toggleNavigation,
    }
  }

  return useNavigation
}

export default composeUseNavigation()
