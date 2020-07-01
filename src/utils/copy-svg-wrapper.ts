const createSvg = (size: string, inner: string) => (`
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      ${inner}
    </svg>
  `
);

const removeEmptyLines = (markup: string) => (
  markup
    .trim()
    .split('\n')
    .reduce((nonempty: string[], line) => {
      const trimmedLine = line.trim();
      return trimmedLine.length ? [...nonempty, trimmedLine] : nonempty;
    }, [])
);

const toLines = (markup: string) => {
  let opened = '';

  const nonemptyLines = removeEmptyLines(markup);

  return nonemptyLines.reduce((formatted: string[], line, i, prevArr) => {
    if (line.startsWith('<')) {
      // if current line is closing tag of parent element
      // return previously formatted + current line
      if (i === prevArr.length - 1) {
        return [...formatted, opened, line];
      }

      // store prev opened line value
      const closedLine = opened;
      opened = line;

      // if prev opened value has length
      // return previously formatted + new line
      if (closedLine.length) {
        return [...formatted, closedLine];
      }

      // if prev opened value has no length, only the first iteration
      // return previously formatted, in this case - empty array
      return formatted;
    }

    // if the line doesn't start with '<', it means it is attribute
    // which should be appended to previous line
    opened += ` ${line}`;

    return formatted;
  }, []);
};

const addIndentation = (splittedHtml: string[]) => {
  let level = 0;
  const opened: string[] = [];

  return splittedHtml.reverse().reduce((indented: string[], elTag) => {
    if (opened.length
      && level
      && opened[level]
      /* if current element tag is the same as previously opened one */
      && opened[level] === elTag.substring(1, opened[level].length + 1)
    ) {
      // remove it from opened elements
      opened.splice(level, 1);
      level--;
    }

    const indentation = ' '.repeat(level ? level * 2 : 0);

    const newIndented = [
      `${indentation}${elTag}`,
      ...indented,
    ];

    // if curren element tag is closing tag
    // add it to opened elements
    if (elTag.substring(0, 2) === '</') {
      level++;
      opened[level] = elTag.substring(2, elTag.length - 1);
    }

    return newIndented;
  }, []);
};

const prettify = (markup: string) => {
  const splitted = toLines(markup);

  return addIndentation(splitted).join('\n');
};

export default (size: string, inner: string) => (
  prettify(createSvg(size, inner))
);
