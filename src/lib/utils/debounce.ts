// eslint-disable-next-line no-unused-vars
const debounce = (fn: (...args: any[]) => void, delay = 500) => {
  let timeout: NodeJS.Timeout = null

  return (...params: any[]) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      fn.call(this, ...params)
    }, delay)
  }
}

export default debounce
