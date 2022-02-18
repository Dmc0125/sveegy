<script lang="ts">
import { page } from '$app/stores'

import capitalize from '$lib/utils/capitalize'

const docsLinks = [
  {
    name: 'Without package',
    path: '/docs/no-package',
    sections: [
      'usage',
      'without classes',
      'with classes',
      'output',
    ],
  },
  {
    name: 'Svelte',
    path: '/docs/svelte',
    sections: [
      'installation',
      'usage',
      'example',
      'output',
      'props',
      'fill outline',
      'stroke',
    ],
  },
]

$: urlPath = $page.url.pathname

let activeHash = ''
const setActiveHash = (hash: string) => {
  activeHash = hash
}

$: {
  if (!$page.url.hash.length) {
    activeHash = ''
  }
}
</script>

{#each docsLinks as { name, path, sections }}
  <div class="flex flex-col">
    <a
      href="{path}"
      class="text-lg font-semibold opacity-effect {urlPath === path ? 'link-active-clr' : 'font-secondary-clr'}"
    >
      {name}
    </a>
    {#each sections as sectionName}
      <a
        href="{path}#{sectionName}"
        class="
          font-medium text-sm ml-4 mt-1 opacity-effect
          {activeHash === sectionName && urlPath === path ? 'link-active-clr' : 'font-secondary-clr'}
        "
        on:click="{() => setActiveHash(sectionName)}"
      >
        {capitalize(sectionName)}
      </a>
    {/each}
  </div>
{/each}
