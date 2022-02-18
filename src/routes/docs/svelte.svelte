<script lang="ts">
import CodeWrapper from '$lib/components/CodeWrapper.svelte'
import IconWrapper from '$lib/components/IconWrapper.svelte'

import highlight from '$lib/utils/codeHighlighter'

const codeStr = `
<!-- index.svelte -->
<script>
import { SvHeartFill } from \'sveegy-icons\'
<\/script>

<div
  style="width: full; height: 5rem; display: flex; align-items: center; justify-content: center;"
>
  <SvHeartFill size="2.5rem" color="red" />
</div>
`.trim()

</script>

<svelte:head>
  <title>Sveegy &bull; Svelte docs</title>
</svelte:head>

<div class="w-full h-fit px-[5%] py-2 bg-red-600 bg-opacity-75 mx-auto flex items-center md:rounded-md">
  <IconWrapper icon="info-circle" class="w-16 h-16 flex-shrink-0 text-gray-300 mr-2" />
  <p class="text-gray-200 font-medium">Sveegy icons library is in the state of early development and many things will probably change in the future.</p>
</div>

<section class="w-full h-fit">
  <header class="w-full docs-padding-wrapper">
    <h1 class="docs-heading">Svelte</h1>
    <h2 class="docs-section-heading" id="installation">Installation</h2>
  </header>

  <CodeWrapper lang="sh" class="mt-6 w-full">
    <pre class="text-gray-300 dark:text-gray-400">npm i sveegy-icons</pre>
  </CodeWrapper>
</section>

<section class="w-full h-fit mt-4 docs-padding-wrapper">
  <h1 class="docs-section-heading" id="usage">Usage</h1>

  <p class="mt-4 text-base font-default-clr">
    To use Sveegy icons, just import an icon into svelte component like any other component.
  </p>

  <p class="mt-2 font-default-clr">
    All included icons are corresponding with icons displayed on
    <a class="text-blue-600 font-medium hover:text-blue-500 dark:hover:text-indigo-400" href="/icons">icons.</a>
    To use them, they have to be prefixed with
    <span class="code-highlight font-secondary-clr">Sv</span> and suffixed with icon type, which can be
    <span class="code-highlight font-secondary-clr">Outline</span>,
    <span class="code-highlight font-secondary-clr">Fill</span> and
    <span class="code-highlight font-secondary-clr">Stroke</span>.
  </p>
</section>

<section class="w-full">
  <h3 class="docs-padding-wrapper docs-section-subheading" id="example">Example</h3>

  <CodeWrapper lang="svelte" class="mt-6 w-full">
    <pre class="text-gray-300 dark:text-gray-400">
      {@html highlight(codeStr, true)}
    </pre>
  </CodeWrapper>
</section>

<section class="docs-padding-wrapper">
  <h3 class="docs-section-subheading" id="output">Output</h3>
  <div class="border border-gray-400 dark:border-slate-700 w-full h-20 rounded-md mt-6 flex items-center justify-center" style="color: red">
    <IconWrapper icon="heart" type="fill" class="h-10 w-10" />
  </div>
</section>

<section class="docs-padding-wrapper">
  <h2 class="docs-section-heading" id="props">Props</h2>

  <p class="mt-4 text-base font-default-clr">
    All 3 types share two props, size and color. Stroke type icons have an additional strokeWidth prop.
  </p>
  <p class="mt-2 text-base font-default-clr">
    None of the props are required.
  </p>
</section>

<section>
  <div class="docs-padding-wrapper">
    <h2 class="docs-section-subheading" id="fill outline">Fill, Outline</h2>
  </div>

  <div class="w-screen overflow-x-auto md:w-full">
    <div
      class="
        h-fit grid grid-rows-[2.2rem_auto_2.2rem_2.2rem] grid-cols-[1fr_1fr_1fr_100px] items-center justify-items-start
        mt-2 pb-2 gap-x-6 docs-padding-wrapper font-default-clr
      "
    >
      <h4 class="font-bold font-secondary-clr">Prop</h4>
      <h4 class="font-bold font-secondary-clr">Type</h4>
      <h4 class="font-bold font-secondary-clr">Default</h4>
      <h4 class="font-bold font-secondary-clr">Description</h4>

      <div class="w-full h-[1px] col-start-1 col-end-5 bg-gray-300 dark:bg-slate-700"></div>

      <p>size</p>
      <p class="code-highlight">string</p>
      <p class="code-highlight">100%</p>
      <p>Size of icon</p>

      <p>color</p>
      <p class="code-highlight">string</p>
      <p class="code-highlight">currentColor</p>
      <p>Color of icon</p>
    </div>
  </div>
</section>

<section>
  <div class="docs-padding-wrapper">
    <h2 class="docs-section-subheading" id="stroke">Stroke</h2>
  </div>

  <div class="w-screen overflow-x-auto md:w-full">
    <div
      class="
        h-fit grid grid-rows-[2.2rem_auto_2.2rem_2.2rem_auto] grid-cols-[1fr_1fr_1fr_100px] items-center justify-items-start
        mt-2 pb-2 gap-x-6 docs-padding-wrapper font-default-clr
      "
    >
      <h4 class="font-bold font-secondary-clr">Prop</h4>
      <h4 class="font-bold font-secondary-clr">Type</h4>
      <h4 class="font-bold font-secondary-clr">Default</h4>
      <h4 class="font-bold font-secondary-clr">Description</h4>

      <div class="w-full h-[1px] col-start-1 col-end-5 bg-gray-300 dark:bg-slate-700"></div>

      <p>size</p>
      <p class="code-highlight">string</p>
      <p class="code-highlight">100%</p>
      <p>Size of icon</p>

      <p>color</p>
      <p class="code-highlight">string</p>
      <p class="code-highlight">currentColor</p>
      <p>Color of icon</p>

      <p>strokeWidth</p>
      <p class="code-highlight">string</p>
      <p class="code-highlight">1px</p>
      <p>Stroke width of icon</p>
    </div>
  </div>
</section>
