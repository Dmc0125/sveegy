<script lang="ts">
import CodeWrapper from '$lib/components/CodeWrapper.svelte'
import Disclaimer from '$lib/components/Disclaimer.svelte'
import DocsHeading from '$lib/components/docs/DocsHeading.svelte'
import DocsTable from '$lib/components/docs/DocsTable.svelte'
import DocsWrapper from '$lib/components/docs/DocsWrapper.svelte'
import IconWrapper from '$lib/components/IconWrapper.svelte'

import highlight from '$lib/utils/codeHighlighter'

const codeStr = `
<!-- index.svelte -->
<script>
import { SvHeartFill } from \'@sveegy/icons-svelte\'
<\/script>

<div
  style="width: full; display: flex; align-items: center; justify-content: center;"
>
  <SvHeartFill size="2.5rem" color="red" />
</div>
`.trim()

const tableHeader = ['Prop', 'Type', 'Default', 'Description']
const fillTableColumns = [
  ['class', '#h_string', 'none', 'Svg element class'],
  ['size', '#h_string', '#h_100%', 'Width and height of icon'],
  ['color', '#h_string', '#h_currentColor', 'Color of icon'],
]
const strokeTableColumns = [
  ['class', '#h_string', 'none', 'Svg element class'],
  ['size', '#h_string', '#h_100%', 'Width and height of icon'],
  ['color', '#h_string', '#h_currentColor', 'Color of icon'],
  ['strokeWidth', '#h_string', '#h_1px', 'Stroke width of paths'],
]
</script>

<svelte:head>
  <title>Sveegy &bull; Svelte docs</title>
</svelte:head>

<Disclaimer />


<DocsWrapper>
  <DocsHeading type="heading" title="Svelte" />
  <DocsHeading type="section-heading" title="Installation" id="installation" />
</DocsWrapper>

<CodeWrapper lang="sh" class="w-full">
  <pre class="text-gray-300 dark:text-gray-400">npm i @sveegy/icons-svelte</pre>
</CodeWrapper>

<DocsWrapper id="usage">
  <DocsHeading type="section-heading" title="Usage" />

  <p class="mt-4 text-base font-default-clr">
    To use Sveegy icons, just import an icon into svelte component like any other component.
  </p>

  <p class="mt-2 font-default-clr">
    All included icons are corresponding with icons displayed on
    <a class="link-active-clr link-hover font-medium" href="/icons">icons.</a>
    To use them, they have to be prefixed with
    <span class="code-highlight">Sv</span> and suffixed with icon type, which can be
    <span class="code-highlight">Fill</span> or
    <span class="code-highlight">Stroke</span>.
    Names of icons are in PascalCase. For example, name of the
    <span class="code-highlight">Align center</span> stroke icon will be
    <span class="code-highlight">SvAlignCenterStroke</span>.
  </p>
</DocsWrapper>

<DocsWrapper id="example">
  <DocsHeading type="section-subheading" title="Example" />
</DocsWrapper>

<CodeWrapper lang="svelte" class="w-full">
  <pre class="text-gray-300 dark:text-gray-400">
    {@html highlight(codeStr, true)}
  </pre>
</CodeWrapper>

<DocsWrapper id="output">
  <DocsHeading type="section-subheading" title="Output" />

  <div
    class="border border-gray-400 dark:border-slate-700 w-full h-20 mt-6 rounded-md flex items-center justify-center"
    style="color: red"
  >
    <IconWrapper icon="heart" type="fill" class="h-10 w-10" />
  </div>
</DocsWrapper>

<DocsWrapper id="props">
  <DocsHeading type="section-heading" title="Props" />

  <p class="mt-4 text-base font-default-clr">
    Both types have three props, size, color and class. If class prop is used, size prop will not be used and value of color prop will be currentColor.
    Stroke type icons have an additional strokeWidth prop.
  </p>
  <p class="mt-2 text-base font-default-clr font-medium">
    None of the props are required.
  </p>
</DocsWrapper>

<section>
  <DocsWrapper id="fill" >
    <DocsHeading type="section-subheading" title="Fill" />
  </DocsWrapper>

  <DocsTable tableHeaderColumns="{tableHeader}" tableColumns="{fillTableColumns}" />
</section>

<section>
  <DocsWrapper id="stroke">
    <DocsHeading type="section-subheading" title="Stroke" />
  </DocsWrapper>
  
  <DocsTable tableHeaderColumns="{tableHeader}" tableColumns="{strokeTableColumns}" />
</section>
