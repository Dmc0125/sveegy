<script lang="ts">
  import { page } from '$app/stores'
  import type { Page } from '@sveltejs/kit'
  import { fly } from 'svelte/transition'

  import ButtonIcon from '$lib/components/utils/ButtonIcon.svelte'
  import Overlay from '$lib/components/utils/Overlay.svelte'
  import Heading from '$lib/components/utils/Heading.svelte'
  import Navigation from '$lib/components/docs/Navigation.svelte'

  $: docsType = $page.routeId.split('/')[1]

  const isActive = (href: string | RegExp, page: Page<Record<string, string>>, className: string) => {
    return page.url.href.match(href) ? className : ''
  }

  let docsNavOpened = false
</script>

<header class="docs-header">
  <ButtonIcon iconId="hamburger" hoverStyle="200" size="2.5rem" on:click={() => (docsNavOpened = true)} />

  <Overlay on:close-popup={() => (docsNavOpened = false)} show={docsNavOpened}>
      <div class="docs-navigation" transition:fly={{ duration: 200, x: -100 }} on:click|stopPropagation>
        <header class="docs-navigation__header docs__mb-sm">
          <h1>Docs</h1>
          <ButtonIcon iconId="close" hoverStyle="200" size="2.5rem" on:click={() => (docsNavOpened = false)} />
        </header>

        <Navigation />
      </div>
  </Overlay>

  <div class="docs-header__breadcrumbs">
    <p>
      docs / <span>{docsType}</span>
    </p>
  </div>
</header>

<div class="docs-content-wrapper">
  <div class="docs-navigation-md">
    <Heading content="Documentation" style="200" class="docs__mb-sm" />
    
    <Navigation />
  </div>

  <main class="docs-content">
    <slot />
  </main>
</div>

<style lang="scss">
  :global {
    .docs__text {
      margin-top: 0.5rem;
      color: var(--font-clr-primary);
    }

    .docs__code-sample {
      margin-top: 1.5rem;
    }

    .docs__mb {
      margin-bottom: 1.5rem;

      &-sm {
        margin-bottom: 1rem;
      }

      &-xs {
        margin-bottom: 0.5rem;
      }
    }
  }

  .docs-header {
    width: min(100%, 600px);
    padding-block: 1rem;
    padding-inline: 1.25rem;
    margin-inline: auto;

    display: flex;
    align-items: center;

    p {
      margin-left: 1rem;
      color: var(--font-clr-primary);
    }

    span {
      color: var(--cta-clr-secondary);
      font-weight: 500;
    }
  }

  .docs-navigation {
    width: min(80%, 280px);
    height: 100vh;
    padding: 1.25rem;

    background: var(--bg-clr-primary);

    &__header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        color: var(--font-clr-secondary);
        font-weight: 600;
        font-size: 1.25rem;
      }
    }
  }

  .docs-content-wrapper {
    width: 100%;
    height: min(100%, 100vh);
    position: relative;
  }

  .docs-navigation-md {
    width: 200px;
    height: 100%;
    display: none;
    position: fixed;
    grid-column: 1 / 2;
  }

  .docs-content {
    max-width: 600px;
    padding-bottom: 1rem;
    padding-inline: 1.25rem;
    margin-inline: auto;
    flex-shrink: 1;
  }

  @media (min-width: 800px) {
    .docs-header {
      display: none;
    }

    .docs-content-wrapper {
      width: fit-content;
      margin-inline: auto;
      display: grid;
      grid-template-columns: 200px 1fr;
      padding-inline: 2rem;
    }

    .docs-navigation-md {
      display: block;
    }

    .docs-content {
      grid-column: 2 / 3;
      padding-inline: 0;
    }
  }
</style>
