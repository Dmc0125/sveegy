// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function (debouncedFn: (...args: any[]) => void, delay: number) {
  let timeout: number

  return (...params: unknown[]) => {
    clearInterval(timeout)

    timeout = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      debouncedFn.call(this, ...params)
    }, delay)
  }
}
