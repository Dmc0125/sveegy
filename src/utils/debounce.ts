// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function (debouncedFn: (...args: any[]) => void, delay = 500) {
  let timeout: NodeJS.Timeout | null = null

  return (...params: unknown[]) => {
    if (timeout) {
      clearInterval(timeout)
    }

    timeout = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      debouncedFn.call(this, ...params)
    }, delay)
  }
}
