import cssColorKeywords from 'css-color-keywords'

const colors = Object.keys(cssColorKeywords)

const isColorKeyword = (keyword: string) => {
  if (colors.includes(keyword.toLowerCase())) {
    return true
  }

  return false
}

const isHexValue = (hex: string) => {
  if (hex.match(/^(#)([a-fA-F0-9]{3}){1,2}$/)) {
    return true
  }

  return false
}

const isValidColor = (color: string) => {
  if (!isColorKeyword(color) && !isHexValue(color) && color !== 'currentColor') {
    return false
  }

  return true
}

export default isValidColor
