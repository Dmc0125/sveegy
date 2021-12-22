import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import debounce from '@/utils/debounce'
import useNotification from './useNotification'

const composeUseIcons = () => {
  const size = ref('24px')
  const color = ref('currentColor')

  const useIcons = () => {
    onMounted(() => {
      const route = useRoute()
      const { color: queryColor, size: querySize } = route.query

      if (typeof querySize === 'string') {
        size.value = querySize
      }
      if (typeof queryColor === 'string') {
        color.value = queryColor
      }
    })

    const { showNotification } = useNotification()

    const setSize = debounce((e: InputEvent) => {
      const { value } = e.target as HTMLInputElement
      size.value = value

      showNotification(`Size of icons has been changed to ${size.value}`, false)
    }, 500)

    const setColor = debounce((e: InputEvent) => {
      const { value } = e.target as HTMLInputElement
      color.value = value

      showNotification(`Color of icons has been changed to ${color.value}`, false)
    }, 500)

    return {
      size,
      color,
      setSize,
      setColor,
    }
  }

  return useIcons
}

export default composeUseIcons()
