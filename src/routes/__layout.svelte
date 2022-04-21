<script context="module">
  import { cachedIconData, fetchIconData } from '$lib/utils/icons'

  export async function load({ fetch }) {
    if (!cachedIconData.stroke) {
      await fetchIconData('stroke', fetch)
    }

    return {
      status: 200,
    }
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { browser } from '$app/env'
  import { page } from '$app/stores'

  import links from '$lib/utils/links'

  import Icon from '$lib/components/icons/Icon.svelte'
  import SwitchButton from '$lib/components/utils/SwitchButton.svelte'
  import NavigationMobile from '$lib/components/utils/NavigationMobile.svelte'
  import NavigationMd from '$lib/components/utils/NavigationMd.svelte'

  let darkModeOn = false
  let darkModeInitilazed = false

  $: {
    if (browser && darkModeInitilazed) {
      localStorage.setItem('darkMode', darkModeOn.toString())
    }
  }

  onMount(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode') || 'false')
    darkModeOn = savedDarkMode
    darkModeInitilazed = true
  })

  let showNavigation = false
</script>

<div class="app-wrapper" dark-mode="{darkModeOn}">
  <header class="header-global">
    <img src="/logo.svg" alt="Sveegy logo" class="header-global__logo" />

    <section aria-labelledby="nav" class="header-global__right-section">
      <nav class="header-global__nav">
        <ul class="nav__list">
          {#each links as { title, href, matcher }}
            <li>
              <a {href} {title} class={$page.url.pathname.match(matcher) ? 'active' : ''}>{title}</a>
            </li>
          {/each}
        </ul>
      </nav>

      <a
        href="https://github.com/Sveegy/sveegy-icons"
        target="_blank"
        rel="noopener noreferrer"
        title="Sveegy icons github"
        class="header-global__github"
      >
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 5C11.7163 5 5 11.5035 5 19.5248C5 25.9432 9.2975 31.3865 15.2585 33.3067C16.0083 33.4397 16.2821 32.9911 16.2821 32.6081C16.2821 32.2623 16.2683 31.117 16.261 29.9042C12.0898 30.7819 11.2082 28.1914 11.2082 28.1914C10.5252 26.5141 9.54283 26.0673 9.54283 26.0673C8.17962 25.1666 9.64625 25.1844 9.64625 25.1844C11.1523 25.2854 11.9452 26.6808 11.9452 26.6808C13.2837 28.9007 15.4571 28.2588 16.3104 27.8865C16.4468 26.9503 16.8349 26.3085 17.2626 25.9468C13.9328 25.5798 10.43 24.3333 10.43 18.7677C10.43 17.1808 11.015 15.8865 11.9727 14.8697C11.8198 14.5009 11.3034 13.023 12.121 11.0239C12.121 11.0239 13.3789 10.6339 16.2463 12.5133C17.442 12.1897 18.7246 12.0301 20 12.0248C21.2744 12.0301 22.5579 12.1915 23.7555 12.5151C26.6174 10.6339 27.8772 11.0257 27.8772 11.0257C28.6975 13.0266 28.1812 14.5026 28.0273 14.8697C28.9886 15.8865 29.5691 17.1808 29.5691 18.7677C29.5691 24.3475 26.0608 25.5762 22.7191 25.9361C23.2593 26.3865 23.7372 27.2695 23.7372 28.6241C23.7372 30.5656 23.717 32.1312 23.717 32.6099C23.717 32.9964 23.9899 33.4485 24.7498 33.3067C30.7062 31.3829 35 25.9397 35 19.5248C35 11.5035 28.2837 5 20 5Z"
            fill="currentColor"
          />
        </svg>
      </a>

      <SwitchButton bind:value={darkModeOn}>
        <Icon iconId="sun" size="75%" slot="left-side" />
        <Icon iconId="moon" size="75%" slot="right-side" />
      </SwitchButton>

      <button class="header-global__navigation-btn" on:click={() => (showNavigation = true)}>
        <Icon iconId="hamburger-cut" size="100%" />
      </button>

      <NavigationMd bind:show={showNavigation} />
    </section>
  </header>

  <slot />

  <NavigationMobile />
</div>

<style lang="scss">
  @font-face {
    font-family: 'Assistant';
    font-weight: 100 1000;
    src: url('/fonts/Assistant-VariableFont_wght.ttf');
  }

  /* resets, presets */
  :global {
    * {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Assistant';
      line-height: 1.4;
    }

    html {
      scroll-behavior: smooth;
    }

    @media (prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto;
      }
    }

    html,
    body {
      width: 100%;
      min-height: 100vh;
    }

    button,
    input {
      font-size: 1rem;
      font-weight: 400;
    }

    button {
      cursor: pointer;
    }

    .global__link {
      color: var(--cta-clr-primary);
      text-decoration: none;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }

    .global__highlight {
      padding: .1rem .5rem;
      background: var(--bg-clr-secondary);
      border-radius: 4px;
      font-family: 'Roboto Mono';
      font-size: .85rem;
    }
  }

  /* variables */
  .app-wrapper[dark-mode='true'] {
    --bg-rgb-primary: 46, 61, 85;
    --bg-clr-primary: rgb(var(--bg-rgb-primary));
    --bg-rgb-secondary: 66, 82, 107;
    --bg-clr-secondary: rgb(var(--bg-rgb-secondary));

    --font-clr-primary: #f4f4f4;
    --font-clr-secondary: #caced0;

    --cta-rgb-primary: 88, 114, 250;
    --cta-clr-primary: rgb(var(--cta-rgb-primary));
    --cta-clr-secondary: #8498ff;

    --focus-shadow-offset: 0 0 0 2px var(--bg-clr-primary), 0 0 0 4px var(--cta-clr-primary);
    --focus-shadow: 0 0 0 2px var(--cta-clr-primary);

    --divider-clr: rgba(169, 174, 190, 0.5);
  }

  .app-wrapper[dark-mode='false'] {
    --bg-rgb-primary: 244, 244, 244;
    --bg-clr-primary: rgb(var(--bg-rgb-primary));
    --bg-rgb-secondary: 214, 219, 222;
    --bg-clr-secondary: rgb(var(--bg-rgb-secondary));

    --font-clr-primary: #202020;
    --font-clr-secondary: #3a3f51;

    --cta-rgb-primary: 61, 90, 241;
    --cta-clr-primary: rgb(var(--cta-rgb-primary));
    --cta-clr-secondary: var(--cta-clr-primary);

    --focus-shadow-offset: 0 0 0 2px var(--bg-clr-primary), 0 0 0 4px rgba(var(--cta-rgb-primary), 0.6);
    --focus-shadow: 0 0 0 2px var(--cta-clr-primary);

    --divider-clr: rgb(169, 174, 190);
  }

  .app-wrapper {
    --code-bg-clr-primary: #1c2233;
    --code-bg-clr-secondary: #283146;

    --transition-timing: 150ms;

    --header-height: 2.5rem;

    width: 100%;
    min-height: 100vh;

    background: var(--bg-clr-primary);
    padding-bottom: 4rem;
  }

  .header-global {
    width: 100%;
    height: var(--header-height);
    padding: 0 min(5%, 5rem);
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;
    --icon-size: 1.5rem;

    &__logo {
      width: var(--icon-size);
      height: var(--icon-size);
    }

    &__github {
      border-radius: 6px;

      &:focus {
        box-shadow: var(--focus-shadow-offset);
      }
    }

    &__right-section {
      width: fit-content;
      display: flex;
      align-items: center;
      column-gap: 1rem;

      a {
        width: var(--icon-size);
        height: var(--icon-size);
        color: var(--font-clr-primary);
      }
    }

    &__navigation-btn {
      width: calc(var(--icon-size) + 0.25rem);
      height: calc(var(--icon-size) + 0.25rem);
      display: none;

      color: var(--font-clr-primary);
      background: none;
      border-radius: 6px;

      &:hover,
      &:focus {
        background: var(--bg-clr-secondary);
      }

      &:focus {
        box-shadow: var(--focus-shadow-offset);
      }
    }

    &__nav {
      display: none;
    }
  }

  .nav__list {
    display: flex;
    column-gap: 1rem;

    list-style-type: none;

    a {
      text-decoration: none;

      &:hover,
      &.active {
        color: var(--cta-clr-primary);
      }
    }
  }

  @media (min-width: 500px) {
    .app-wrapper {
      --header-height: 4rem;
      padding-bottom: 8rem;
    }

    .header-global {
      --icon-size: 2rem;

      &__navigation-btn {
        display: inherit;
      }
    }
  }

  @media (min-width: 800px) {
    .app-wrapper {
      --header-height: 5rem;
    }

    .header-global {
      --icon-size: 2.5rem;

      &__navigation-btn {
        display: none;
      }

      &__nav {
        display: inherit;
      }
    }
  }
</style>
