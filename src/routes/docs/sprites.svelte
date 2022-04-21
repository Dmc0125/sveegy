<script lang="ts">
  import CodeSample from '$lib/components/utils/CodeSample.svelte'
  import Heading from '$lib/components/utils/Heading.svelte'

  import { spritesCodeSample } from '$lib/codeSamples'
</script>

<svelte:head>
  <title>Sveegy &bull; Sprites docs</title>
</svelte:head>

<Heading content="Sprites" style="100" />
<Heading content="Usage" style="200" id="usage" />

<p class="docs__text">
  Using sveegy icons with sprites is as easy as without package.
  Sprites do not require any javascript at runtime and are supported across all modern browsers.
</p>

<p class="docs__text">
  To use sprites,
  <a href="/#sprites" sveltekit:prefetch class="global__link">download</a>
  the sprites file and place it into folder with the rest of your statis files.
  And then just reference the icon with
  <span class="global__highlight">xlink:href="&lt;file-name&gt;#&lt;icon-id&gt;"</span>.
</p>

<CodeSample lang="html" content="{spritesCodeSample}" class="docs__code-sample" />
