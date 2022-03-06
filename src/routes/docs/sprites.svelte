<script lang="ts">
import DocsWrapper from '$lib/components/docs/DocsWrapper.svelte'
import DocsHeading from '$lib/components/docs/DocsHeading.svelte'
import CodeWrapper from '$lib/components/CodeWrapper.svelte'

import highlight from '$lib/utils/codeHighlighter'

const code = `<body>
  <svg>
    <use xlink:href="sveegy-stroke#sv-archive"></use>
  </svg>
</body>`
</script>

<svelte:head>
  <title>Sveegy &bull; Sprites docs</title>
</svelte:head>

<DocsWrapper>
  <DocsHeading title="Sprites" type="heading" />
  <DocsHeading title="Usage" type="section-heading" id="usage" />

  <p class="mt-4 text-base font-default-clr">
    Using sveegy icons with sprites is as easy as without package.
    Sprites do not require any javascript at runtime and are supported across all modern browsers.
  </p>

  <p class="mt-4 text-base font-default-clr">
    To use sprites,
    <a href="/sprites.zip" download="sprites" class="link-active-clr">
      download
    </a>
    the sprites file and place it into folder with the rest of your statis files.
    And then just reference the icon with <span class="code-highlight">xlink:href="&lt;file-name&gt;#&lt;icon-id&gt;"</span>.
  </p>
</DocsWrapper>

<DocsWrapper>
  <CodeWrapper lang="html">
    <pre>
      {@html highlight(code)}
    </pre>
  </CodeWrapper>
</DocsWrapper>
