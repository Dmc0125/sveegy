/* eslint-disable @typescript-eslint/ban-ts-ignore */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function (debouncedFn: (...args: any[]) => void, delay: number) {
  let timeout: number;

  return (...params: unknown[]) => {
    clearInterval(timeout);

    timeout = setTimeout(() => {
      // @ts-ignore
      debouncedFn.call(this, ...params);
    }, delay);
  };
}
