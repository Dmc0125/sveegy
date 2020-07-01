const createSvg = (size: string, inner: string) => (`
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      ${inner}
    </svg>
  `
);

export default (size: string, inner: string) => createSvg(size, inner);
