export default function (debouncedFn: () => void, delay: number) {
  let timeout: number;

  return () => {
    clearInterval(timeout);

    timeout = setTimeout(() => {
      debouncedFn();
    }, delay);
  };
}
