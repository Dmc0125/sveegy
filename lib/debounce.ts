const debounce = (callback: (args: unknown) => void, delay = 200) => {
  let timeoutId: NodeJS.Timeout | null = null

  return (args: unknown) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      callback(args)
    }, delay)
  }
}

export default debounce
