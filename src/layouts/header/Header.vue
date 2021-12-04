<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import SvgVue from '@/layouts/vue-svg/VueSvg.vue'
import ColorModeSwitch from '@/components/color-mode-switch/ColorModeSwitch.vue'

import useMainStore from '@/store/main'
import links from '@/utils/links'
import useIconsStore from '@/store/icons'

const route = useRoute()
const mainStore = useMainStore()
const iconsStore = useIconsStore()

const getIcon = computed(() => iconsStore.getIcon)
</script>

<template>
  <header class="header">
    <router-link
      class="header__logo"
      to="/"
    >
      <img
        src="@/assets/icons/sveegy.svg"
        alt="Sveegy logo"
      >
    </router-link>

    <button
      class="header__toggle-nav-btn"
      @click="mainStore.toggleNav"
    >
      <svg-vue :icon-html="getIcon('hamburger-icon')?.htmlValue || ''" />
    </button>

    <nav class="header__nav">
      <ul class="nav__links">
        <li
          v-for="{ to, name } in links"
          :key="name"
          class="links__link"
        >
          <router-link
            :class="{ 'links__link--active': route.path === to }"
            :to="to"
          >
            {{ name }}
          </router-link>
        </li>
      </ul>

      <color-mode-switch />

      <a
        class="header-nav__github-link"
        href="https://github.com/Dmc0125/sveegy"
        target="_blank"
        rel="noopener"
      >
        <svg-vue :icon-html="getIcon('github-icon')?.htmlValue || ''" />
      </a>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  padding: 0 30px;

  transition: var(--t-clr), var(--t-bg);

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

  color: var(--font-clr);
  background: var(--primary);
}

.header__nav {
  height: 100%;

  display: none;
  align-items: center;
}

.nav__links {
  margin-right: 1rem;

  .links__link {
    display: inline;
    font-size: 1rem;

    a:focus,
    a:hover {
      outline: 0;
      opacity: 0.5;
    }

    &--active {
      color: var(--secondary);
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
  margin-left: 1rem;

  color: var(--font-clr);
}

@include tablet-s {
  .header {
    height: 90px;
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
  .nav__links {
    margin-right: 2.5rem;

    .links__link {
      font-size: 1.1rem;
    }
  }
}

@include desktop-m {
  .header {
    padding: 0 140px;
  }
}
</style>
