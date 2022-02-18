<script lang="ts">
import prettify from 'html-prettify'

import CodeWrapper from '$lib/components/CodeWrapper.svelte'

import { getIcon } from '$lib/utils/icons'
import { createPaths, createSvg } from '$lib/utils/createSvgHtml'
import highlight from '$lib/utils/codeHighlighter'
import IconWrapper from '$lib/components/IconWrapper.svelte'
import SwitchButton from '$lib/components/SwitchButton.svelte'

const icon = getIcon('star', 'stroke')

const exampleHtml = `
  <body>
    {svg}
  </body>
`

let withoutClassesMode: string
$: iconWrapperWithoutClasses = createSvg(false, { size: '50px', color: 'red' }, withoutClassesMode === 'JSX')
$: iconHtmlWithoutClasses = iconWrapperWithoutClasses.replace('{paths}', createPaths(icon.paths, withoutClassesMode === 'JSX', 'stroke'))

let withClassesMode: string
$: iconWrapperWithClasses = createSvg(true, { className: 'w-[50px] h-[50px] text-[red]' }, withClassesMode === 'JSX')
$: iconHtmlWithClasses = iconWrapperWithClasses.replace('{paths}', createPaths(icon.paths, withClassesMode === 'JSX', 'stroke'))
</script>

<svelte:head>
  <title>Sveegy &bull; Without package docs</title>
</svelte:head>

<header class="w-full docs-padding-wrapper">
  <h1 class="docs-heading">Without package</h1>
  <h2 class="docs-section-heading" id="usage">Usage</h2>
  <p
    class="font-default-clr mt-4"
  >
    The easiest and fastest way to use Sveegy icons is without package. Just hover over the icon on
    <a class="text-blue-600 dark:text-indigo-500 font-medium hover:text-blue-500 dark:hover:text-indigo-400" href="/icons">icons</a>
    page and copy the html or jsx of icon and paste it into the app.
  </p>
</header>

<section>
  <header class="w-full mb-4 flex items-center justify-between docs-padding-wrapper">
    <h3 class="docs-section-subheading" id="without classes">Without classes</h3>

    <SwitchButton
      class="w-36 h-9 font-secondary-clr"
      options="{['HTML', 'JSX']}"
      defaultIndex="{0}"
      bind:activeOption="{withoutClassesMode}"
    />
  </header>
  <CodeWrapper lang="html" class="w-full">
    <pre>
      {@html highlight(prettify(exampleHtml.replace('{svg}', iconHtmlWithoutClasses)))}
    </pre>
  </CodeWrapper>
</section>

<section>
  <header class="w-full mb-4 flex items-center justify-between docs-padding-wrapper">
    <h3 class="docs-section-subheading" id="with classes">With classes</h3>

    <SwitchButton
      class="w-36 h-9 font-secondary-clr"
      options="{['HTML', 'JSX']}"
      defaultIndex="{0}"
      bind:activeOption="{withClassesMode}"
    />
  </header>
  <CodeWrapper lang="html" class="w-full">
    <pre>
      {@html highlight(prettify(exampleHtml.replace('{svg}', iconHtmlWithClasses)))}
    </pre>
  </CodeWrapper>
</section>

<section class="docs-padding-wrapper">
  <h3 class="docs-section-subheading" id="output">Output</h3>

  <div
    class="
      h-fit w-full py-4 mt-4 flex justify-center text-[red]
      border border-gray-400 dark:border-slate-700 rounded-md
    "
  >
    <IconWrapper class="w-[50px] h-[50px]" icon="star" />
  </div>
</section>
