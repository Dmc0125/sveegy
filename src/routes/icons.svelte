<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit/types/internal'

  import { cachedIconData, fetchIconData } from '$lib/utils/icons'

  export const load: Load = async ({ fetch }) => {
    if (!cachedIconData.fill) {
      await fetchIconData('fill', fetch)
    }

    if (!cachedIconData.variations) {
      await fetchIconData('variations', fetch)
    }

    return {
      status: 200,
    }
  }
</script>

<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import { page } from '$app/stores'

  import Icon from '$lib/components/icons/Icon.svelte'
  import IconComponent from '$lib/components/icons/IconComponent.svelte'
  import IconsIllustration from '$lib/components/illustrations/IconsIllustration.svelte'
  import CustomizeIcons from '$lib/components/icons/CustomizeIcons.svelte'
  import IconPopup from '$lib/components/icons/IconPopup.svelte'

  import { setRouteParamsWatcher, watchRouteParamsOnMount, icons as iconsStore } from '$lib/store/icons'

  
  onMount(() => {
    watchRouteParamsOnMount($page)
  })
  setRouteParamsWatcher($page)

  let searchterm = ''
  const filterIcons = (_searchterm: string, _iconsType: 'stroke' | 'fill') => {
    const currentIcons = Object.keys(cachedIconData[_iconsType])

    if (!_searchterm.length) {
      return currentIcons
    }

    const searchtermRegex = new RegExp(_searchterm, 'gi')
    return currentIcons.filter(
      (key) =>
        key.replace('-', ' ').match(searchtermRegex) ||
        cachedIconData.variations[key]?.some((variation) => variation.match(searchtermRegex)),
    )
  }
  $: displayedIcons = filterIcons(searchterm, $iconsStore.selectedType)

  let showStrokeInformation = false
  let showCustomizeIconsMenu = false
</script>

<svelte:head>
  <title>Sveegy &bull; Icons</title>
</svelte:head>

<section class="icons-hero">
  <div class="icons-hero__text">
    <h1 class="icons-hero__heading">More than 110 beautiful svg icons in two types</h1>
    <h4>Browse through the icons, find the one you want, copy the html and use it in your project.</h4>
    <h4>
      Or check out the
      <a href="/docs/sprites" class="global__link" sveltekit:prefetch>other ways
        <span style="display: inline-block; height: 1rem;">
          <Icon iconId="popup" size="100%" />
        </span>
      </a>
      of usage.
    </h4>
  </div>

  <IconsIllustration />
</section>

<main class="icons-container">
  <div class="icons-container__type-switch">
    <!-- TODO: try with anchor tags -->
    <button
      class="icons-container__stroke-btn {$iconsStore.selectedType === 'stroke' ? 'active' : ''}"
      on:click={() => ($iconsStore.selectedType = 'stroke')}
    >
      <span>Stroke</span>
      <div class="icons-container__stroke-info {showStrokeInformation ? 'show' : ''}">
        All icons are using 24x24 view box. Stroke size of stroke icons can be adjusted width stroke-width attribute.
      </div>
      <div
        style="width: 1.75rem; height: 1.75rem;"
        on:mouseenter="{() => showStrokeInformation = true}"
        on:mouseleave="{() => showStrokeInformation = false}"
      >
        <Icon iconId="info-circle" size="1.75rem" />
      </div>
    </button>
    <button class={$iconsStore.selectedType === 'fill' ? 'active' : ''} on:click={() => ($iconsStore.selectedType = 'fill')}>Fill</button>
  </div>

  <header class="icons-container__icons-header">
    <div class="icons-header__search-input">
      <div class="icons-header__search-icon">
        <Icon iconId="search" size="100%" />
      </div>
      <input type="text" placeholder="Search for icons" bind:value={searchterm} />
    </div>

    <button class="icons-header__settings" on:click="{() => showCustomizeIconsMenu = true}">
      <Icon iconId="settings" size="2rem" />
      <span>Customize</span>
    </button>

    <CustomizeIcons bind:show="{showCustomizeIconsMenu}" />
  </header>

  <div class="icons-container__icons">
    {#each displayedIcons as iconId}
      <IconComponent
        {iconId}
        iconType={$iconsStore.selectedType}
        size="100%"
        on:open-popup="{({ detail: iconId }) => $iconsStore.openedIcon = iconId}"
      />
    {/each}
  </div>
</main>

<IconPopup />

<style lang="scss">
  .icons-hero {
    width: 100%;
    margin-top: 4rem;
    padding: 0 5%;

    display: grid;
    justify-content: space-between;

    &__text {
      color: var(--font-clr-primary);
      text-align: center;
    }

    &__heading {
      margin-bottom: 1rem;

      font-size: 1.75rem;
      font-weight: 600;
      color: var(--font-clr-secondary);
    }

    h4 {
      font-size: 1rem;
      font-weight: 400;

      + h4 {
        margin-top: 0.25rem;
        font-size: 0.95rem;
      }
    }
  }

  :global(.app-wrapper[dark-mode='true']) .icons-container__type-switch button.active {
    color: var(--font-clr-primary);
  }

  .icons-container {
    width: 100%;
    margin-top: 2rem;
    padding: 0 5%;

    &__type-switch {
      width: 100%;
      display: flex;
      align-items: center;
      column-gap: 1rem;

      button {
        width: 100%;
        height: 2.5rem;

        border-radius: 6px;
        background: none;
        color: var(--font-clr-primary);
        border: 1px solid var(--bg-clr-secondary);

        &.active {
          border: 0;
          color: var(--bg-clr-primary);
          background: var(--cta-clr-primary);
        }

        &:focus {
          box-shadow: var(--focus-shadow-offset);
        }
      }
    }

    &__stroke-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 0.25rem;
      position: relative;
    }

    &__stroke-info {
      width: 15rem;
      height: fit-content;
      padding: 0.25rem;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(calc(-100% - 0.5rem));

      border-radius: 6px;
      font-size: 0.9rem;
      color: var(--font-clr-primary);
      background: var(--bg-clr-secondary);

      opacity: 0;
      pointer-events: none;
      transition: var(--transition-timing) opacity ease-in-out;

      &.show {
        opacity: 1;
        pointer-events: all;
      }
    }

    &__icons-header {
      width: 100%;
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      column-gap: 1rem;
    }
  }

  .icons-header__search-input:focus-within .icons-header__search-icon {
    transform: rotate(90deg);
  }

  .icons-header {
    &__search-input {
      width: min(100%, 250px);
      height: 2.5rem;
      position: relative;

      display: grid;
      grid-template-columns: 0.25rem 2rem 1fr 1rem;
      align-items: center;

      background: var(--bg-clr-secondary);
      color: var(--font-clr-primary);
      border-radius: 6px;

      &:focus-within {
        box-shadow: var(--focus-shadow-offset);
      }

      input {
        width: 100%;
        height: 100%;
        padding-left: 2.5rem;
        grid-column: 1 / -1;
        grid-row: 1 / 2;
        background: none;
        color: var(--font-clr-primary);
      }
    }

    &__search-icon {
      height: 2rem;
      width: 2rem;
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      pointer-events: none;
      transition: var(--transition-timing) ease-in-out transform;
    }

    &__settings {
      width: fit-content;
      min-width: 2.5rem;
      height: 2.5rem;
      flex-shrink: 0;

      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 0.5rem;

      border-radius: 6px;
      background: var(--bg-clr-secondary);
      color: var(--font-clr-primary);

      span {
        display: none;
      }

      &:focus {
        box-shadow: var(--focus-shadow-offset);
      }
    }
  }

  .icons-container__icons {
    width: 100%;
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    grid-auto-rows: 150px;
    gap: 1rem;
  }

  @media (min-width: 450px) {
    .icons-container__type-switch button {
      width: 120px;
    }
  }

  @media (min-width: 600px) {
    .icons-hero__text {
      max-width: 500px;
      text-align: left;
      flex-shrink: 0;

      h4 {
        max-width: 350px;
      }
    }

    .icons-header__settings {
      padding: 0 1rem 0 0.5rem;

      span {
        display: inherit;
      }
    }
  }

  @media (min-width: 1100px) {
    .icons-container,
    .icons-hero {
      padding-inline: 10%;
    }
  }
</style>
