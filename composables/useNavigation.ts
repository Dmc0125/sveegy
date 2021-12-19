import { useState } from '#app'

const useNavigation = () => {
  const navigationOpened = useState('navigationOpened', () => false)
  const toggleNavigation = () => {
    navigationOpened.value = !navigationOpened.value
  }

  return {
    navigationOpened,
    toggleNavigation,
  }
}

export default useNavigation
