<script lang="ts">
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'

  import Icon from '../icons/Icon.svelte'
  import Overlay from './Overlay.svelte'
  import ButtonIcon from './ButtonIcon.svelte'

  import links from '$lib/utils/links'

  export let show: boolean
</script>

<Overlay bind:show>
  <nav class="navigation-md__nav" on:click|stopPropagation>
    <ul>
      {#each links as { href, title, iconId, matcher }}
        <li class="link-item">
          <a
            sveltekit:prefetch
            {href}
            {title}
            class="link-item__link {$page.url.pathname.match(matcher) ? 'active' : ''}"
            on:click|preventDefault="{() => goto(href)}"
          >
            <Icon {iconId} size="2rem" strokeWidth="1.1" />
            <span>
              {title}
            </span>
          </a>
        </li>
      {/each}
    </ul>

    <ButtonIcon iconId="close" class="navigation-md__close-btn" on:click={() => (show = false)} />
  </nav>
</Overlay>

<style lang="scss">
  .navigation-md {
    &__nav {
      width: fit-content;
      top: 1rem;
      right: 2rem;
      position: absolute;
    }
  }

  :global(.navigation-md__close-btn) {
    top: 1rem;
    right: 1rem;
    position: absolute;
  }

  ul {
    width: 200px;
    padding: 1rem;

    list-style-type: none;
    background: var(--bg-clr-primary);
    border-radius: 6px;
  }

  .link-item + .link-item {
    margin-top: 0.5rem;
  }

  .link-item {
    height: 2rem;

    &__link {
      height: 100%;
      display: flex;
      align-items: center;
      column-gap: 0.5rem;

      text-decoration: none;
      color: var(--font-clr-primary);

      span {
        color: var(--font-clr-primary);
      }

      &:hover,
      &:focus,
      &.active,
      &:hover span,
      &:focus span,
      &.active span {
        color: var(--cta-clr-primary);
      }
    }
  }
</style>
