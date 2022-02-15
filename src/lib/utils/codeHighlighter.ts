/* eslint-disable no-continue */
const segmentColor = {
  htmlTag: 'text-red-400',
  comment: 'text-gray-400 dark:text-gray-500',
  prop: 'text-neutral-300',
  propValue: 'text-green-400',
  text: 'text-gray-200',
  keyword: 'text-orange-500',
} as const

type SegmentType = keyof typeof segmentColor

const wrapSegment = (segment: string, type: SegmentType) => (
  `<span class="${segmentColor[type]}">${segment}</span>`
)

const keywords = ['import', 'from']
const jsChars = ['{', '}']

const highlightScript = (jsSegment: string) => {
  const lines = jsSegment.split('\n')
  const highlighted: string[] = []

  for (let i = 0; i < lines.length; i += 1) {
    const words = lines[i].split(' ')
    const highlightedWords: string[] = []

    for (let j = 0; j < words.length; j += 1) {
      const word = words[j]

      if (keywords.includes(word)) {
        highlightedWords.push(wrapSegment(word, 'keyword'))
        continue
      }

      if (jsChars.includes(word)) {
        highlightedWords.push(wrapSegment(word, 'comment'))
        continue
      }

      if (word.startsWith("'") && word.endsWith("'")) {
        highlightedWords.push(wrapSegment(word, 'propValue'))
        continue
      }

      highlightedWords.push(wrapSegment(word, 'text'))
    }

    highlighted.push(highlightedWords.join(' '))
  }

  return highlighted.join('\n')
}

const openScriptTag = new RegExp('&lt;script')
const closeScriptTag = new RegExp('&lt;/script')

const highlight = (code: string, highlightJs = false) => {
  let highlightedCode = ''

  let state: SegmentType | null = null
  let segment: string = ''
  let isJs = false

  for (let i = 0; i < code.length; i += 1) {
    const char = code[i]

    if (isJs) {
      if (char === '<') {
        segment += '&lt;'
        continue
      }

      if (char === '>' && segment.match(closeScriptTag)) {
        isJs = false
        const [jsSegment] = segment.split('&lt;')
        highlightedCode += highlightScript(jsSegment)
        highlightedCode += wrapSegment('&lt;/script&gt;', 'htmlTag')
        segment = ''
        continue
      }

      segment += char
      continue
    }

    // Escape opening tag
    if (char === '<') {
      highlightedCode += segment
      segment = '&lt;'
      continue
    }

    // Check for opening comment tag
    if (segment.match(/(&lt;)$/g) && char === '!') {
      state = 'comment'
      segment += char
      continue
    }

    // Check for opening html tag
    if ((segment.match(/(&lt;)$/g) || segment.match(/(&lt;\/)$/g)) && char.match(/[a-zA-Z]/)) {
      state = 'htmlTag'
      segment += char
      continue
    }

    // Check for closing html or comment tag
    if (char === '>') {
      if (segment.match(openScriptTag) && highlightJs) {
        isJs = true
      }

      highlightedCode += wrapSegment(`${segment}&gt;`, state === 'comment' ? state : 'htmlTag')
      state = null
      segment = ''
      continue
    }

    // Check for new line or space after tag AFTER CHECK WHETHER IS JS
    if ((char === ' ' || char === '\n') && state === 'htmlTag') {
      if (!segment.length) {
        highlightedCode += char
      } else {
        highlightedCode += wrapSegment(`${segment}${char}`, state)
        segment = ''
      }

      state = 'prop'
      continue
    }

    if (state === 'prop' && char === '=') {
      highlightedCode += wrapSegment(`${segment}`, state)
      highlightedCode += wrapSegment('=', 'comment')
      segment = ''
      state = 'propValue'
      continue
    }

    if (state === 'propValue' && segment.length && char === '"') {
      highlightedCode += wrapSegment(`${segment}"`, state)
      segment = ''
      state = 'htmlTag'
      continue
    }

    segment += char
  }

  return highlightedCode
}

export default highlight
