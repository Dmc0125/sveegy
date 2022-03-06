<script lang="ts">
import highlight from '$lib/utils/codeHighlighter'

import Disclaimer from '$lib/components/Disclaimer.svelte'
import CodeWrapper from '$lib/components/CodeWrapper.svelte'
import DocsWrapper from '$lib/components/docs/DocsWrapper.svelte'
import DocsHeading from '$lib/components/docs/DocsHeading.svelte'
import IconWrapper from '$lib/components/utils/IconWrapper.svelte'
import DocsTable from '$lib/components/docs/DocsTable.svelte'

const code = `
<!-- index.vue -->
<script setup>
import { SvBellFill } from \'@sveegy/icons-vue\'
<\/script>

<template>
  <div style="width: 100%; display: flex; align-items: center; justify-content: center;">
    <sv-bell-fill size="2.5rem" color="red" />
  </div>
<\/template>
`.trim()

const tableHeader = ['Prop', 'Type', 'Default', 'Description']
const fillTableColumns = [
  ['size', '#h_string', 'none', 'Width and height of an icon'],
  ['color', '#h_string', 'none', 'Color of an icon'],
]

const strokeTableColumns = [
  ['size', '#h_string', 'none', 'Width and height of an icon'],
  ['color', '#h_string', 'none', 'Color of an icon'],
  ['stroke-width', '#h_string', 'none', 'Stroke width of paths']
]
</script>

<svelte:head>
  <title>Sveegy &bull; Vue docs</title>
</svelte:head>

<Disclaimer />

<DocsWrapper>
  <DocsHeading type="heading" title="Vue" />
  <DocsHeading type="section-heading" title="Installation" id="installation" />
</DocsWrapper>

<CodeWrapper lang="sh" class="w-full">
  <pre class="text-gray-300 dark:text-gray-400">npm i @sveegy/icons-vue</pre>
</CodeWrapper>

<DocsWrapper id="usage">
  <DocsHeading type="section-heading" title="Usage" />

  <p class="mt-4 text-base font-default-clr">
    To use Sveegy icons, just import an icon into vue component like any other component.
  </p>

  <p class="mt-2 font-default-clr">
    All included icons are corresponding with icons displayed on
    <a class="text-blue-600 font-medium hover:text-blue-500 dark:hover:text-indigo-400" href="/icons">icons.</a>
    To use them, they have to be prefixed with
    <span class="code-highlight">sv</span> and suffixed with icon type, which can be
    <span class="code-highlight">fill</span> and
    <span class="code-highlight">stroke</span>.
    Names of icons are in PascalCase or in hyphen-separated case, which is supported by Vue. For example, name of the
    <span class="code-highlight">Align center</span> stroke icon may be
    <span class="code-highlight">SvAlignCenterStroke</span> or <span class="code-highlight whitespace-nowrap">sv-align-center-stroke</span>.
  </p>
</DocsWrapper>

<DocsWrapper id="example">
  <DocsHeading type="section-subheading" title="Example" />
</DocsWrapper>

<CodeWrapper lang="vue" class="w-full">
  <pre class="text-gray-300 dark:text-gray-400">
    {@html highlight(code, true)}
  </pre>
</CodeWrapper>

<DocsWrapper>
  <DocsHeading type="section-subheading" title="Output" />

  <div
    class="w-full h-20 mt-6 flex items-center justify-center border border-gray-400 dark:border-slate-700 rounded-md"
    style="color: red"
  >
    <IconWrapper class="w-10 h-10" icon="bell" type="fill" />
  </div>
</DocsWrapper>

<DocsWrapper id="props">
  <DocsHeading type="section-heading" title="Props" />

  <p class="mt-4 text-base font-default-clr">
    Both fill and stroke types have three props, size, color, class. Stroke type icons also have stroke-width prop.
    Since Vue supports class inheritance, and class is not passed to a component as an actual prop, there are no default values
    for size, color and stroke-width props, because there would be no way to overwrite them with classes without use of
    <span class="code-highlight">!important</span> keyword, since those three are passed directly to element style.
  </p>
  <p class="mt-2 text-base font-default-clr">
    This also means that if both class and any of the three props will be used on same component, width, height, color and
    stroke-width will use value of the corresponding props rather than classes.
  </p>
</DocsWrapper>

<section>
  <DocsWrapper id="fill" >
    <DocsHeading type="section-subheading" title="Fill" />
  </DocsWrapper>

  <DocsTable tableHeaderColumns="{tableHeader}" tableColumns="{fillTableColumns}" />
</section>

<section>
  <DocsWrapper id="stroke" >
    <DocsHeading type="section-subheading" title="Stroke" />
  </DocsWrapper>

  <DocsTable tableHeaderColumns="{tableHeader}" tableColumns="{strokeTableColumns}" />
</section>

