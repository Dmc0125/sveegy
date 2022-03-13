<script lang="ts">
import prettify from 'html-prettify'

import { getIcon } from '$lib/utils/icons'
import { createPaths, createSvg } from '$lib/utils/createSvgHtml'
import highlight from '$lib/utils/codeHighlighter'

import CodeWrapper from '$lib/components/CodeWrapper.svelte'
import IconWrapper from '$lib/components/utils/IconWrapper.svelte'
import SwitchButton from '$lib/components/utils/SwitchButton.svelte'
import DocsWrapper from '$lib/components/docs/DocsWrapper.svelte'
import DocsHeading from '$lib/components/docs/DocsHeading.svelte'

const icon = getIcon('star', 'stroke')

const exampleHtml = `
  <body>
    {svg}
  </body>
`

let mode: 'JSX' | 'HTML' = 'HTML'

$: paths = createPaths(icon.paths, 'stroke')

$: iconWrapperWithoutClasses = createSvg(false, { size: '50px', color: 'red' }, mode === 'JSX')
$: iconHtmlWithoutClasses = iconWrapperWithoutClasses.replace('{paths}', paths)

$: iconWrapperWithClasses = createSvg(true, { className: 'w-[50px] h-[50px] text-[red]' }, mode === 'JSX')
$: iconHtmlWithClasses = iconWrapperWithClasses.replace('{paths}', paths)
</script>

<svelte:head>
  <title>Sveegy &bull; Without package docs</title>
</svelte:head>

<DocsWrapper>
  <div class="flex items-center justify-between">
    <div>
      <DocsHeading type="heading" title="Without package" />
      <DocsHeading type="section-heading" title="Usage" id="usage" />
    </div>

    <SwitchButton
      class="w-36 h-9 font-secondary-clr"
      options="{['HTML', 'JSX']}"
      defaultIndex="{0}"
      bind:activeOption="{mode}"
    />
  </div>

  <p
    class="font-default-clr mt-4"
  >
    The easiest and fastest way to use Sveegy icons is without package. Just hover over the icon on
    <a class="font-medium link-active-clr link-hover" href="/icons">icons</a>
    page and copy the html or jsx of icon and paste it into the app.
  </p>
</DocsWrapper>

<section id="without classes">
  <DocsWrapper>
    <DocsHeading title="Without classes" type="section-subheading" />
  </DocsWrapper>

  <CodeWrapper lang="html" class="w-full mt-4">
    <pre>
      {@html highlight(prettify(exampleHtml.replace('{svg}', iconHtmlWithoutClasses)))}
    </pre>
  </CodeWrapper>
</section>

<section id="with classes">
  <DocsWrapper>
    <DocsHeading type="section-subheading" title="With classes" />
  </DocsWrapper>

  <CodeWrapper lang="html" class="w-full mt-4">
    <pre>
      {@html highlight(prettify(exampleHtml.replace('{svg}', iconHtmlWithClasses)))}
    </pre>
  </CodeWrapper>

  <DocsWrapper class="mt-2">
    <p class="text-sm font-medium font-secondary-clr">
      This example is using
      <a
        class="link-active-clr link-hover"
        target="_blank"
        rel="noopener"
        href="https://tailwindcss.com"
        title="TailwindCss"
      >
        TailwindCss.
      </a>
      Used classes are not provided by Sveegy.
    </p>
  </DocsWrapper>
</section>

<DocsWrapper id="Output">
  <DocsHeading type="section-subheading" title="Output" />

  <div
    class="
      h-fit w-full py-4 mt-4 flex justify-center text-[red]
      border border-gray-400 dark:border-slate-700 rounded-md
    "
  >
    <IconWrapper class="w-[50px] h-[50px]" icon="star" />
  </div>
</DocsWrapper>
