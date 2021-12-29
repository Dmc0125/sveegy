import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import debounce from '@/utils/debounce'
import useNotification from './useNotification'
import { createHtmlWithClasses, createHtmlWithoutClasses, createMinifiedHtml } from '@/utils/createIconHtml'

const composeUseIcons = () => {
  const usingClasses = ref(false)
  const toggleUsingClasses = () => {
    usingClasses.value = !usingClasses.value
  }

  const usingJsx = ref(false)
  const toggleUsingJsx = () => {
    usingJsx.value = !usingJsx.value
  }

  const size = ref('24px')
  const color = ref('currentColor')

  const classes = ref('w-8 h-8 text-gray-300')

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
    })

    const setColor = debounce((e: InputEvent) => {
      const { value } = e.target as HTMLInputElement
      color.value = value

      showNotification(`Color of icons has been changed to ${color.value}`, false)
    })

    const setClasses = debounce((e: InputEvent) => {
      const { value } = e.target as HTMLInputElement
      classes.value = value

      showNotification('Classes of icons have been changed', false)
    })

    const createPrettifiedHtml = (paths: string[]) => {
      if (usingClasses.value) {
        return createHtmlWithClasses(paths, classes.value, usingJsx.value)
      }
      return createHtmlWithoutClasses(paths, size.value, color.value, usingJsx.value)
    }
    const createDownloadHtml = (paths: string[]) => createMinifiedHtml(createHtmlWithoutClasses(paths, size.value, color.value, false))

    return {
      usingClasses,
      toggleUsingClasses,
      usingJsx,
      toggleUsingJsx,

      size,
      color,
      setSize,
      setColor,
      classes,
      setClasses,

      createPrettifiedHtml,
      createDownloadHtml,
    }
  }

  return useIcons
}

export default composeUseIcons()
