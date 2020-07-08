<template>
  <header class="header">
    <RouterLink
      class="header__logo"
      to="/"
    >
      <img
        src="@/assets/icons/sveegy.svg"
        alt="Sveegy logo"
      >
    </RouterLink>

    <button
      class="header__toggle-nav-btn"
      @click="toggleNav"
    >
      <VueSvg :icon-html="getIcon('hamburger-icon').htmlValue" />
    </button>

    <nav class="header__nav">
      <ul class="nav__links">
        <li
          class="links__link"
          v-for="{ to, name } in links"
          :key="name"
        >
          <RouterLink
            :class="{ 'links__link--active': $route.path === to }"
            :to="to"
          >
            {{ name }}
          </RouterLink>
        </li>
      </ul>

      <ColorModeSwitch />

      <a
        class="header-nav__github-link"
        href="https://github.com/Dmc0125/sveegy"
        target="_blank"
        rel="noopener"
      >
        <VueSvg :icon-html="getIcon('github-icon').htmlValue" />
      </a>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

import links from '@/utils/links';

import VueSvg from '@/layouts/vue-svg/VueSvg.vue';
import ColorModeSwitch from '@/components/color-mode-swtich/ColorModeSwitch.vue';

export default Vue.extend({
  components: {
    VueSvg,
    ColorModeSwitch,
  },
  data() {
    return {
      links,
    };
  },
  computed: mapGetters(['getIcon']),
  methods: mapActions(['toggleNav']),
});
</script>

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
