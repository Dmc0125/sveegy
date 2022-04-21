<script lang="ts">
  import type { Page } from '@sveltejs/kit'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'

  import { docs as docsLinks } from '$lib/utils/links'

  const isActive = (href: string | RegExp, _page: Page<Record<string, string>>, className: string) => {
    return _page.url.href.match(href) ? className : ''
  }
</script>

<nav class="docs-navigation">
  <ul class="docs-navigation__list">
    {#each docsLinks as { href, title, children, matcher }}
      <li class="docs-navigation__link">
        <a
          {href}
          {title}
          class="{isActive(matcher, $page, 'active-link')}"
          on:click|preventDefault="{() => goto(href)}"
        >
          {title}
        </a>
      </li>
      <div class="docs-navigation__child-links-list">
        {#each children as id}
          <li
            class="docs-navigation__child-link
            {isActive(`${href}#${id.toLowerCase()}`, $page, 'active-child-link')}"
          >
            <a
              href="{href}#{id.toLowerCase()}"
              title={id}
              on:click|preventDefault="{() => goto(`${href}#${id.toLowerCase()}`)}"
            >
              {id}
            </a>
          </li>
        {/each}
      </div>
    {/each}
  </ul>
</nav>

<style lang="scss">
  .docs-navigation {
    width: 100%;

    &__list {
      list-style: none;

      a {
        color: var(--font-clr-primary);
        text-decoration: none;

        &:hover, &:focus {
          text-decoration: underline;
        }
      }
    }

    &__link {
      margin-bottom: .4rem;
    }

    &__child-links-list {
      margin-bottom: 1rem;
    }

    &__child-link {
      margin-left: 1rem;
      margin-bottom: .3rem;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: -1rem;
        height: 100%;
        width: 2px;

        background: var(--bg-clr-secondary);
      }
    }
  }

  .active-link {
    color: var(--cta-clr-secondary) !important;
  }

  .active-child-link {
    a {
      color: var(--cta-clr-secondary);
    }

    &::before {
      background: var(--cta-clr-primary);
    }
  }
</style>
