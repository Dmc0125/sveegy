import debounce from '~~/lib/debounce'

const useIcons = () => {
  const route = useRoute()
  const { showNotification } = useNotification()

  const size = useState('iconSize', () => {
    const { size: querySize } = route.query

    if (typeof querySize === 'string') {
      return querySize
    }

    return '24px'
  })
  const color = useState('iconColor', () => {
    const { color: queryColor } = route.query

    if (typeof queryColor === 'string') {
      return queryColor
    }

    return 'currentColor'
  })

  const setSize = debounce((e: InputEvent) => {
    const { value } = e.target as HTMLInputElement
    size.value = value

    showNotification(`Icon size has been changed to ${value}`, 'success')
  }, 500)

  const setColor = debounce((e: InputEvent) => {
    const { value } = e.target as HTMLInputElement
    color.value = value

    showNotification(`Icon color has been changed to ${value}`, 'success')
  }, 500)

  return {
    size,
    setSize,
    color,
    setColor,
  }
}

export default useIcons
