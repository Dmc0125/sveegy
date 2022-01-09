<script lang="ts">
import icons from '$lib/assets/icons.json'
import IconWrapper from '$lib/components/IconWrapper.svelte'
import InputCustom from '$lib/components/Input.svelte'
import IconPopup from '$lib/components/IconPopup.svelte'
import Buttons from '$lib/components/Buttons.svelte'
import IconSettings from '$lib/components/IconSettings.svelte'
import Notification from '$lib/components/Notification.svelte'

import capitalize from '$lib/utils/capitalize'
import { browser } from '$app/env'
import { page } from '$app/stores'
import { goto } from '$app/navigation';

const iconsCount = Math.floor(icons.length / 10) * 10

const { searchParams } = $page.url
const searchTermQuery = searchParams.get('s')

let searchTerm = searchTermQuery || ''
const getSearchedIcons = (_searchTerm: string) => {
  if (!_searchTerm.length) {
    return icons
  }

  const searchTermRegex = new RegExp(_searchTerm, 'gi')
  return icons.filter(({ id, variations }) => (id.match(searchTermRegex) || variations.some((variation) => variation.match(searchTermRegex)))) || []
}

$: searchedIcons = getSearchedIcons(searchTerm)

let openedIcon = searchParams.get('icon') || ''
const openIcon = (name: string) => {
  openedIcon = name
}

$: {
  if (browser) {
    const urlSearchParams = new URLSearchParams()
    urlSearchParams.set('s', searchTerm)
    urlSearchParams.set('icon', openedIcon)
    goto(`?${urlSearchParams.toString()}`, {
      keepfocus: true,
      replaceState: true,
      noscroll: true,
    })
  }
}
</script>

<svelte:head>
  <title>Sveegy &bull; Icons</title>
</svelte:head>

<IconPopup bind:icon="{openedIcon}" />

<main class="w-full grid [grid-template-rows:min-content_auto_1fr] grid-cols-[5%_1fr_5%] md:grid-cols-[15%_1fr_15%] gap-y-8 pb-4">
  <section class="max-w-[500px] px-4 md:px-0 text-center md:text-left col-start-2 col-end-3 justify-self-center md:justify-self-auto">
    <h1 class="text-3xl font-bold font-default-clr">More than {iconsCount} beautiful free svg icons</h1>
    <h2 class="font-secondary-clr mt-4">Browse to find any svg icon you want and then use it either by copying the html or downloading the svg.</h2>
  </section>

  <div class="secondary-bg h-[1px] w-full col-span-full"></div>

  <section class="flex flex-col gap-y-4 [grid-column:2/-2]">
    <IconSettings fullscreen>
      <InputCustom focusOnKey class="w-full h-10" icon="search" label="Search icons" bind:inputValue={searchTerm} />
    </IconSettings>

    <section class="grid [grid-template-columns:repeat(auto-fill,minmax(145px,1fr))] [grid-auto-rows:150px] gap-4">
      {#each searchedIcons as { id }}
        <button
          class="w-full h-full relative overflow-hidden secondary-bg rounded-md font-secondary-clr grid grid-rows-[auto_min-content] items-center ring-effect wrapper"
          on:click="{() => openIcon(id)}"
        >
          <Buttons copyIcon={id} hide="{true}" />
          <IconWrapper class="w-20 h-20 font-default-clr justify-self-center" icon="{id}" />
          <div class="w-full h-14 flex items-center justify-center px-2">
            <h2 class="font-medium">{capitalize(id)}</h2>
          </div>
        </button>
      {/each}
    </section>
  </section>
</main>

<Notification />
