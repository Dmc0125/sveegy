<script lang="ts">
import IconWrapper from '$lib/components/IconWrapper.svelte'
import InputCustom from '$lib/components/Input.svelte'
import IconPopup from '$lib/components/IconPopup.svelte'
import Buttons from '$lib/components/Buttons.svelte'
import IconSettings from '$lib/components/IconSettings.svelte'
import Notification from '$lib/components/Notification.svelte'

import { icons, IconType, filterIcons } from '$lib/utils/icons'
import { searchParams, initSearchParams } from '$lib/store/searchParams'
import capitalize from '$lib/utils/capitalize'

const iconsCount = Math.floor(icons.outline.length / 10) * 10

initSearchParams('icon-type', { defaultValue: 'outline', types: ['outline', 'stroke'] })
const switchIconType = (type: string) => {
  $searchParams['icon-type'] = type as IconType
}

initSearchParams('icon')
const openIcon = (name: string) => {
  $searchParams.icon = name
}

let searchTerm = ''
$: searchedIcons = filterIcons(searchTerm, $searchParams['icon-type'])

let iconInfoOpened = false
</script>

<svelte:head>
  <title>Sveegy &bull; Icons</title>
</svelte:head>

<IconPopup />

<main class="w-full pb-4">
  <section class="w-full h-fit dark:border-slate-700 justify-self-center md:justify-self-auto border-b border-gray-300">
    <div class="w-full px-[5%] md:px-[15%] py-8 default-bg text-center md:text-left">
      <div class="max-w-[500px] mx-auto md:mx-0">
        <h1 class="text-3xl font-bold font-default-clr">More than {iconsCount} beautiful free svg icons</h1>
        <h2 class="font-secondary-clr font-medium mt-4">Browse to find any svg icon you want and then use it either by copying the html or downloading the svg.</h2>

        <div class="flex items-center justify-center md:justify-start gap-x-8 mt-4">
          <div class="flex items-center justify-center">
            <svg class="w-12 h-12 text-orange-700" fill="none" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M4.126 4.168A.5.5 0 0 1 4.5 4h15a.5.5 0 0 1 .496.56l-1.5 12.5a.5.5 0 0 1-.304.402l-6 2.5a.5.5 0 0 1-.384 0l-6-2.5a.5.5 0 0 1-.304-.402l-1.5-12.5a.5.5 0 0 1 .122-.392ZM5.064 5l1.398 11.65L12 18.959l5.538-2.307L18.936 5H5.064Zm3.061 2.17A.5.5 0 0 1 8.5 7h7a.5.5 0 0 1 0 1H9.066l.375 3H15a.5.5 0 0 1 .496.562l-.5 4a.5.5 0 0 1-.31.402l-2.5 1a.5.5 0 0 1-.372 0l-2.5-1a.5.5 0 0 1-.31-.402l-.188-1.5a.5.5 0 1 1 .993-.124l.15 1.207 2.041.816 2.04-.816.394-3.145H9a.5.5 0 0 1-.496-.438l-.5-4a.5.5 0 0 1 .121-.393Z"
                fill="currentColor"
              />
            </svg>
            <span class="font-bold text-sm ml-2 font-secondary-clr">HTML</span>
          </div>

          <div class="flex items-center justify-center">
            <svg class="w-12 h-12 text-sky-400" fill="none" viewBox="0 0 24 24">
              <path d="M19.94 11.998c0 1.042-1.317 2.029-3.337 2.64.466 2.039.259 3.66-.654 4.18a1.43 1.43 0 0 1-.725.179v-.715a.756.756 0 0 0 .369-.083c.44-.25.631-1.202.482-2.426a9.775 9.775 0 0 0-.165-.942c-.634.154-1.327.273-2.055.35-.437.592-.89 1.13-1.347 1.602 1.056.97 2.046 1.502 2.72 1.502V19c-.89 0-2.056-.628-3.234-1.718-1.179 1.084-2.344 1.705-3.234 1.705v-.714c.67 0 1.664-.53 2.719-1.494a15.184 15.184 0 0 1-1.337-1.599 15.256 15.256 0 0 1-2.059-.352c-.074.32-.129.631-.168.93-.152 1.223.036 2.175.473 2.428a.726.726 0 0 0 .372.083v.715c-.272 0-.518-.058-.732-.18-.91-.519-1.113-2.137-.644-4.168-2.013-.616-3.324-1.6-3.324-2.638 0-1.041 1.317-2.028 3.337-2.64-.466-2.038-.259-3.66.654-4.179.21-.121.456-.179.728-.179.89 0 2.056.628 3.234 1.718 1.178-1.084 2.344-1.705 3.234-1.705.271 0 .518.058.731.18.91.518 1.114 2.137.644 4.168 2.007.612 3.318 1.6 3.318 2.637Zm-4.214 2.138a14.36 14.36 0 0 0-.437-1.266 17.332 17.332 0 0 1-.89 1.519c.46-.067.903-.15 1.327-.253Zm-1.483-3.413a17.06 17.06 0 0 0-.78-1.224 17.01 17.01 0 0 0-2.92-.003 16.636 16.636 0 0 0-1.457 2.493 17.029 17.029 0 0 0 1.45 2.503 16.995 16.995 0 0 0 2.92.003 16.628 16.628 0 0 0 1.457-2.493c-.204-.43-.427-.86-.67-1.279Zm1.046.417c.175-.43.323-.86.446-1.276-.424-.102-.87-.189-1.333-.256a17.655 17.655 0 0 1 .887 1.532Zm-3.282-3.42c-.301.308-.602.651-.9 1.026.291-.013.589-.022.89-.022.304 0 .605.006.9.022a12.537 12.537 0 0 0-.89-1.025ZM9.598 9.609c-.46.067-.903.15-1.327.253.12.413.269.84.437 1.266.133-.257.272-.513.424-.77.152-.256.308-.506.466-.75Zm2.392 6.668c.301-.307.602-.65.9-1.025-.291.013-.589.022-.89.022-.304 0-.605-.006-.9-.022.292.375.593.718.89 1.025ZM9.595 14.39a17.683 17.683 0 0 1-.887-1.529c-.175.43-.324.86-.447 1.276.425.1.871.186 1.334.253Zm-2.93-4.012c-1.145.484-1.886 1.118-1.886 1.621 0 .504.74 1.141 1.887 1.622.278.118.582.224.896.324.185-.629.428-1.282.729-1.952a15.072 15.072 0 0 1-.719-1.942c-.32.1-.625.208-.906.327Zm1.742-4.58c-.44.25-.631 1.203-.482 2.427.035.3.094.618.165.942a15.833 15.833 0 0 1 2.055-.35c.437-.592.89-1.13 1.347-1.602-1.055-.97-2.046-1.503-2.72-1.503a.779.779 0 0 0-.365.087Zm7.678 2.443c.152-1.224-.036-2.176-.473-2.43a.727.727 0 0 0-.372-.083c-.67 0-1.664.53-2.719 1.494.453.47.906 1.006 1.337 1.599.731.077 1.424.195 2.059.352a8.9 8.9 0 0 0 .168-.932Zm1.246 2.137a10.05 10.05 0 0 0-.896-.324 15.292 15.292 0 0 1-.729 1.952c.298.666.538 1.317.719 1.942.32-.1.624-.209.91-.327 1.145-.484 1.886-1.118 1.886-1.622-.003-.503-.744-1.14-1.89-1.621Z" fill="currentColor"/>
              <path d="M11.997 10.534c.816 0 1.479.656 1.479 1.464 0 .81-.663 1.465-1.48 1.465-.816 0-1.479-.656-1.479-1.465 0-.808.663-1.464 1.48-1.464Z" fill="currentColor"/>
            </svg>
            <span class="font-bold text-sm ml-2 font-secondary-clr">JSX</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="pt-4 px-[5%] md:px-[15%] flex flex-col gap-y-4">
    <header class="w-full h-fit">
      <div class="w-full md:w-1/2 max-w-md mx-auto md:mx-0 flex items-center justify-between gap-x-4">
        {#each ['outline', 'stroke'] as type}
          <button
            class="
              w-full h-fit py-2 font-secondary-clr font-medium default-hover-bg rounded-md ring-effect
              {$searchParams['icon-type'] === type ? 'secondary-bg' : ''}
            "
            on:click="{() => switchIconType(type)}"
          >
            {capitalize(type)}
          </button>
        {/each}
      </div>

      <div
        class="w-full mt-2 flex items-center justify-between text-left"
      >
        <p
          class="
            font-medium text-sm dark:text-slate-400 text-slate-400 overflow-hidden transition-all
            {iconInfoOpened ? 'max-h-20' : 'max-h-5'} sm:max-h-fit
          ">
          All icons are using 24x24 view box. Stroke size of
          {
            $searchParams['icon-type'] === 'outline'
              ? 'outlined icons is adjusted to size, width and height, of the icon.'
              : 'stroke icons can be adjusted width stroke-width attribute.'
          }
        </p>

        <button
          class="
            w-6 h-6 flex-shrink-0 self-start dark:text-slate-400 text-slate-400 transition-all sm:hidden
            {iconInfoOpened ? 'transform rotate-180' : ''}
          "
          on:click="{() => iconInfoOpened = !iconInfoOpened}"
        >
          <IconWrapper
            icon="chevron-down"
          />
        </button>
      </div>
    </header>

    <IconSettings>
      <InputCustom focusOnKey class="w-full h-10" icon="search" label="Search icons (alt + k)" bind:inputValue={searchTerm} />
    </IconSettings>

    <section
      class="grid [grid-template-columns:repeat(auto-fill,minmax(145px,1fr))] [grid-auto-rows:150px] gap-4"
    >
      {#each searchedIcons as { id }}
        <button
          class="w-full h-full relative overflow-hidden secondary-bg rounded-md font-secondary-clr grid grid-rows-[auto_min-content] items-center ring-effect wrapper"
          on:click="{() => openIcon(id)}"
        >
          <Buttons copyIcon={id} hide="{true}" />
          <IconWrapper class="w-20 h-20 font-default-clr justify-self-center" icon="{id}" type="{$searchParams['icon-type']}" />
          <div class="w-full h-14 flex items-center justify-center px-2">
            <h2 class="font-medium">{capitalize(id)}</h2>
          </div>
        </button>
      {/each}
    </section>
  </section>
</main>

<Notification />
