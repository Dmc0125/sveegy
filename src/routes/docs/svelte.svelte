<script lang="ts">
  import { frameworksSvelteCodeSample } from '$lib/codeSamples'

  import CodeSample from '$lib/components/utils/CodeSample.svelte'
  import Heading from '$lib/components/utils/Heading.svelte'
  import Output from '$lib/components/docs/Output.svelte'
  import PropsTable, { type TableData } from '$lib/components/docs/PropsTable.svelte'

  const strokeProps: TableData = [
    [{ val: 'Props', heading: true }, 'class', 'size', 'color', 'strokeWidth'],
    [
      { val: 'Type', heading: true },
      { val: 'string', hl: true },
      { val: 'string', hl: true },
      { val: 'string', hl: true },
      { val: 'string', hl: true },
    ],
    [
      { val: 'Heading', heading: true },
      'none',
      { val: '100%', hl: true },
      { val: 'currentColor', hl: true },
      { val: '1px', hl: true },
    ],
    [
      { val: 'Description', heading: true },
      'Svg element class',
      'Width and height of icon',
      'Color of icon',
      'Stroke width of paths',
    ],
  ]

  const fillProps: TableData = [
    [{ val: 'Props', heading: true }, 'class', 'size', 'color'],
    [
      { val: 'Type', heading: true },
      { val: 'string', hl: true },
      { val: 'string', hl: true },
      { val: 'string', hl: true },
    ],
    [
      { val: 'Default', heading: true },
      'none',
      { val: '100%', hl: true },
      { val: 'currentColor', hl: true },
    ],
    [
      { val: 'Description', heading: true },
      'Svg element class',
      'Width and height of icon',
      'Color of icon',
    ],
  ]
</script>

<svelte:head>
  <title>Sveegy &bull; Svelte docs</title>
</svelte:head>

<Heading content="Svelte" style="100" />
<Heading content="Installation" style="200" id="installation" />

<CodeSample lang="sh" content="npm i @sveegy/icons-svelte" class="docs__code-sample docs__mb" />

<Heading content="Usage" id="usage" style="200" />

<p class="docs__text">
  To use Sveegy icons, just import an icon into svelte component like any other component.
</p>

<p class="docs__text">
  All included icons are corresponding with icons displayed on icons.
  To use them, they have to be prefixed with
  <span class="global__highlight">Sv</span>
  and suffixed with icon type, which can be
  <span class="global__highlight">Fill</span> or <span class="global__highlight">Stroke</span>.
  Names of icons are in PascalCase.
  For example, name of the
  <span class="global__highlight">Align center</span>
  stroke icon will be <span class="global__highlight">SvAlignCenterStroke</span>.
</p>

<CodeSample lang="svelte" content="{frameworksSvelteCodeSample}" class="docs__code-sample docs__mb" />

<Heading content="Output" style="300" class="docs__mb-sm" />

<Output />

<Heading content="Props" style="200" id="props" class="docs__mb-xs" />

<PropsTable heading="Stroke" tableData="{strokeProps}" class="docs__mb" />
<PropsTable heading="Fill" tableData="{fillProps}" />
