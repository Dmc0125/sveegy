<script lang="ts">
  import { page } from '$app/stores'

  import Icon from '../icons/Icon.svelte'
  import links from '$lib/utils/links'
</script>

<nav class="navigation-mobile">
  {#each links as { title, href, iconId, matcher }}
    <a {href} {title} class="navigation-mobile__link {$page.url.pathname.match(matcher) ? 'link-active' : ''}">
      <Icon {iconId} size="2rem" />
      <span class="navigation-mobile__title">{title}</span>
    </a>
  {/each}
</nav>

<style lang="scss">
  .navigation-mobile {
    width: 100vw;
    height: 4rem;
    position: fixed;
    bottom: 0;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background: var(--bg-clr-primary);
    border-top: 1px solid var(--divider-clr);

    &__link {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      text-decoration: none;
      color: var(--font-clr-primary);

      &:focus {
        color: var(--cta-clr-primary);
      }
    }
  }

  .link-active {
    color: var(--cta-clr-secondary);
  }

  @media (min-width: 500px) {
    .navigation-mobile {
      display: none;
    }
  }
</style>