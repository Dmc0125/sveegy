<script lang="ts" setup>
import links from '~~/lib/links'

const { toggleNavigation } = useNavigation()
</script>

<template>
  <header class="header">
    <img
      class="header__logo"
      src="~/assets/sveegy.svg"
      alt="Sveegy logo"
    >

    <button
      class="header__toggle-nav-btn"
      @click="toggleNavigation"
    >
      <svg-wrapper icon="hamburger" />
    </button>

    <nav class="header__nav">
      <ul class="nav__links">
        <li
          v-for="{ path, name } in links"
          :key="name"
          class="links__link"
          :class="{ 'links__link--active': $route.path === path }"
        >
          <nuxt-link :to="path">
            {{ name }}
          </nuxt-link>
        </li>
      </ul>

      <color-mode-switch />

      <a
        class="header-nav__github-link"
        href="https://github.com/Dmc0125/sveegy"
        target="_blank"
        rel="noopener"
      >
        <svg-wrapper icon="github" />
        <span class="narrator-only">Sveegy on github</span>
      </a>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  padding: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  --size: 2.5rem;

  width: var(--size);
  height: var(--size);
}

.header__toggle-nav-btn {
  --size: 2.5rem;

  width: var(--size);
  height: var(--size);

  color: var(--font-primary-clr);
  background: var(--primary-clr);
}

.header__nav {
  height: 100%;

  column-gap: 1rem;
  display: none;
  align-items: center;
}

.nav__links {
  .links__link {
    display: inline;
    font-size: 1rem;

    a:focus,
    a:hover {
      outline: 0;
      opacity: 0.5;
    }

    &--active a {
      color: var(--call-to-action-clr);
    }
  }

  .links__link + .links__link {
    margin-left: 1rem;
  }
}

.header-nav__github-link {
  --size: 2.5rem;

  width: var(--size);
  height: var(--size);

  color: var(--font-primary-clr);

  &:focus, :hover {
    outline: 0;
    opacity: var(--hover-opacity);
  }
}

@include tablet-s {
  .header {
    padding: 0 50px;
  }

  .header__toggle-nav-btn,
  .header__logo,
  .header-nav__github-link {
    --size: 3rem;
  }
}

@include desktop-xs {
  .header {
    height: 90px;
    padding: 0 70px;
  }

  .header__toggle-nav-btn {
    display: none;
  }

  .header__nav {
    display: flex;
  }
}

@include desktop-s {
  .nav__links .links__link {
    font-size: 1.1rem;
  }
}

@include desktop-m {
  .header {
    padding: 0 140px;
  }
}
</style>
