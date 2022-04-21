const colors = {
  html: {
    tag: '#bdbdbd',
    tagName: '#eb5757',
    attr: '#eda362',
    attrValue: '#27ae60',
  },
  js: {
    keyword: '#ec8f3c',
    str: '#27ae60',
    brackets: '#bdbdbd',
  },
}

const wrap = <T extends keyof typeof colors>(type: T, elType: keyof typeof colors[T], value: string) => (
  `<span style="color: ${colors[type][elType]}">${value}</span>`
)

/*
  keywords -> ( import|from )
  variable -> ( [a-zA-Z0-9]+ )
  brackets -> ( {|} )
  str -> ( "[.*]" )
*/
const jsRegex = /( ?(import|from) )|({|})|('.*')/gm

const highlightJS = (html: string) => html.replace(jsRegex, (_match, g1, g2, g3, g4) => {
  // keyword
  if (g1) {
    return wrap('js', 'keyword', g1)
  }

  // brackets
  if (g2) {
    return wrap('js', 'brackets', g2)
  }

  // str
  if (g4) {
    return wrap('js', 'str', g4)
  }

  return _match
})

/*
  opening tag -> (<([a-zA-Z-]+)) -> g1 -> tag name
  closing tag -> (\/>)$ -> g4 -> closing tag
  attribute value -> ("[a-zA-Z0-9]+") -> g6
  attribute -> ([a-z]+(>|=)) -> g7, g8, g9
*/
const htmlRegex = /(<(\/)?([a-zA-Z-]+))|((\/)?>)$|("[a-zA-Z0-9 :.#-]+")|(([a-zA-Z-:]+)(>|=))/gm

// &lt; -> <
// &gt; -> >
const highlightHTML = (html: string) => html.replace(htmlRegex, (_match, g1, g2, g3, g4, g5, g6, g7, g8, g9) => {
  // <tagname, </tagname
  if (g1) {
    return `${wrap('html', 'tag', `&lt;${g2 ? '/' : ''}`)}${wrap('html', 'tagName', g3)}`
  }

  // closing tag
  if (g4) {
    return wrap('html', 'tag', g4)
  }

  // attribute + =
  if (g7) {
    return `${wrap('html', 'attr', g8)}${g9 ? wrap('html', 'tag', g9) : ''}`
  }

  // attribute value
  if (g6) {
    return wrap('html', 'attrValue', g6)
  }

  return _match
})

const jsContentRegex = /<script( setup)?>\n(.*)\n<\/script>/gm
const extractJS = (html: string) => {
  const scriptContent = html.match(jsContentRegex)
  if (!scriptContent) {
    return null
  }

  const jsContent = scriptContent[0].replace(/<(\/)?script( setup)?>(\n?)/g, '')
  const highlightedJsContent = highlightJS(jsContent)
  return [jsContent, highlightedJsContent]
}

const highlight = (html: string) => {
  const highlightedHTML = highlightHTML(html)
  const jsContent = extractJS(html)

  if (!jsContent) {
    return highlightedHTML
  }

  const [originalJsContent, highlightedJsContent] = jsContent
  return highlightedHTML.replace(originalJsContent, highlightedJsContent)
}

export default highlight
