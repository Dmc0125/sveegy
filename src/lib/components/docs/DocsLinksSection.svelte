<script lang="ts">
import { goto } from '$app/navigation'
import { page } from '$app/stores'

import capitalize from '$lib/utils/capitalize'

const docsLinks = [
  {
    name: 'Without package',
    path: '/docs',
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
      'fill',
      'stroke',
    ],
  },
  {
    name: 'Vue',
    path: '/docs/vue',
    sections: [
      'installation',
      'usage',
      'example',
      'output',
      'props',
      'fill',
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
    <button
      on:click="{() => goto(path)}"
      class="
        text-lg font-semibold opacity-effect text-left
        {urlPath === path ? 'link-active-clr' : 'font-secondary-clr'}
      "
    >
      {name}
    </button>
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
