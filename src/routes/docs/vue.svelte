<script lang="ts">
  import Heading from '$lib/components/utils/Heading.svelte'
  import CodeSample from '$lib/components/utils/CodeSample.svelte'
  import Output from '$lib/components/docs/Output.svelte'
  import PropsTable, { type TableData } from '$lib/components/docs/PropsTable.svelte'

  import { frameworksVueCodeSample } from '$lib/codeSamples'

  const strokeProps: TableData = [
    [{ val: 'Props', heading: true }, 'size', 'color', 'stroke-width'],
    [
      { val: 'Type', heading: true },
      { val: 'string', hl: true },
      { val: 'string', hl: true },
      { val: 'string', hl: true },
    ],
    [
      { val: 'Heading', heading: true },
      { val: '100%', hl: true },
      { val: 'currentColor', hl: true },
      { val: '1px', hl: true },
    ],
    [
      { val: 'Description', heading: true },
      'Width and height of icon',
      'Color of icon',
      'Stroke width of paths',
    ],
  ]

  const fillProps: TableData = [
    [{ val: 'Props', heading: true }, 'size', 'color'],
    [
      { val: 'Type', heading: true },
      { val: 'string', hl: true },
      { val: 'string', hl: true },
    ],
    [
      { val: 'Default', heading: true },
      { val: '100%', hl: true },
      { val: 'currentColor', hl: true },
    ],
    [
      { val: 'Description', heading: true },
      'Width and height of icon',
      'Color of icon',
    ],
  ]
</script>

<svelte:head>
  <title>Sveegy &bull; Vue docs</title>
</svelte:head>

<Heading content="Vue" style="100" />
<Heading content="Installation" style="200" id="installation" />

<CodeSample lang="sh" content="npm i @sveegy/icons-vue" class="docs__code-sample docs__mb" />

<Heading content="Usage" id="usage" style="200" />

<p class="docs__text">
  To use Sveegy icons, just import an icon into vue component like any other component.
</p>

<p class="docs__text">
  All included icons are corresponding with icons displayed on icons.
  To use them, they have to be prefixed with
  <span class="global__highlight">sv</span>
  and suffixed with icon type, which can be
  <span class="global__highlight">fill</span> and <span class="global__highlight">stroke</span>.
  Names of icons are in PascalCase or in hyphen-separated case, which is supported by Vue.
  For example, name of the
  <span class="global__highlight">Align center</span>
  stroke icon may be
  <span class="global__highlight">SvAlignCenterStroke</span> or
  <span class="global__highlight">sv-align-center-stroke</span>.
</p>

<CodeSample lang="svelte" content="{frameworksVueCodeSample}" class="docs__code-sample docs__mb" />

<Heading content="Output" style="300" class="docs__mb-sm" />
<Output />

<Heading content="Props" style="200" id="props" class="docs__mb-xs" />

<PropsTable heading="Stroke" tableData="{strokeProps}" class="docs__mb" />
<PropsTable heading="Fill" tableData="{fillProps}" />

