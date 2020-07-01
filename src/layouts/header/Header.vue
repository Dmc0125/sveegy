<template>
  <header>
    <RouterLink
      class="logo"
      to="/"
    >
      <img
        src="@/assets/icons/sveegy.svg"
        alt="Sveegy logo"
      >
    </RouterLink>

    <button
      class="toggle-nav-btn"
      @click="toggleNav"
    >
      <VueSvg :icon-html="getIcon('hamburger-icon').htmlValue" />
    </button>

    <nav>
      <ul class="links">
        <li
          v-for="{ to, name } in links"
          :key="name"
        >
          <RouterLink
            :class="{ 'active-link': $route.path === to }"
            :to="to"
          >
            {{ name }}
          </RouterLink>
        </li>
      </ul>

      <ColorModeSwitch />

      <a
        class="github-link"
        href="https://github.com/Dmc0125/sveegy"
        target="_blank"
        rel="noopener"
      >
        <div class="github-svg-wrapper">
          <VueSvg :icon-html="getIcon('github-icon').htmlValue" />
        </div>
      </a>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

import links from '@/utils/links';

import VueSvg from '@/components/vue-svg/VueSvg.vue';
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
header {
  width: 100%;
  height: 60px;
  padding: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  --size: 2.5rem;

  width: var(--size);
  height: var(--size);
}

.toggle-nav-btn {
  --size: 2.5rem;

  width: var(--size);
  height: var(--size);

  background: var(--primary);
}

nav {
  height: 100%;

  display: none;
  align-items: center;
}

.links {
  margin-right: 1rem;

  li {
    display: inline;
    font-size: 1rem;

    a:focus,
    a:hover {
      outline: 0;
      opacity: 0.5;
    }
  }

  li + li {
    margin-left: 1rem;
  }
}

.active-link {
  color: var(--secondary);
}

.github-link {
  margin-left: 1rem;
}

.github-svg-wrapper {
  --size: 2.5rem;

  width: var(--size);
  height: var(--size);

  color: var(--font-clr);
}

@include tablet-s {
  header {
    height: 90px;
    padding: 0 50px;
  }

  .toggle-nav-btn,
  .logo,
  .github-svg-wrapper {
    --size: 3rem;
  }
}

@include desktop-xs {
  header {
    padding: 0 70px;
  }

  .toggle-nav-btn {
    display: none;
  }

  nav {
    display: flex;
  }
}

@include desktop-s {
  header {
    padding: 0 100px;
  }

  .links {
    margin-right: 2.5rem;

    li {
      font-size: 1.1rem;
    }
  }
}

@include desktop-m {
  header {
    padding: 0 140px;
  }
}
</style>
