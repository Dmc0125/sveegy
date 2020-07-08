<template>
  <transition name="slide-in">
    <section
      class="nav-container"
      v-if="isNavOpened"
      @click="toggleNav"
    >
      <nav @click.stop>
        <header>
          <button
            class="close-wrapper"
            @click="toggleNav"
          >
            <VueSvg :icon-html="getIcon('close-icon').htmlValue"/>
          </button>

          <h2>Sveegy</h2>
        </header>

        <main>
          <ul class="links">
            <li
              v-for="{ to, name, icon } in links"
              :key="name"
            >
              <div
                class="active-link-bg"
                v-if="$route.path === to"
              ></div>
              <RouterLink
                class="link"
                :class="{ 'active-link': $route.path === to }"
                :to="to"
              >
                <span>{{ name }}</span>
                <span class="link-icon-container">
                  <VueSvg :icon-html="getIcon(icon).htmlValue" />
                </span>
              </RouterLink>
            </li>
          </ul>
        </main>

        <footer>
          <ul class="footer-links">
            <li>
              <a
                class="github-link"
                href="https://github.com/Dmc0125/sveegy"
                target="_blank"
                rel="noopener"
              >
                <span>Github</span>
                <span class="github-icon-container">
                  <VueSvg :icon-html="getIcon('github-icon').htmlValue" />
                </span>
              </a>
            </li>
            <li class="color-mode">
              <span>Dark mode</span>
              <ColorModeSwitch />
            </li>
          </ul>
        </footer>
      </nav>
    </section>
  </transition>
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
  computed: mapGetters(['isNavOpened', 'getIcon']),
  methods: mapActions(['toggleNav']),
});
</script>

<style lang="scss" scoped>
.nav-container {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  background: none;
  z-index: 1;
}

nav {
  width: 290px;
  height: 100%;
  padding: 20px 0;
  position: absolute;
  top: 0;
  right: 0;
  overflow: auto;

  background: var(--primary);
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);

  display: grid;
  grid-template-rows: min-content 1fr min-content;
}

header {
  width: 100%;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }
}

.close-wrapper {
  --size: 2.5rem;

  width: var(--size);
  height: var(--size);

  background: var(--primary);
}

main {
  width: 100%;
  margin-top: 30px;
}

li + li {
  margin-top: 15px;
}

.links {
  width: 100%;
  margin-bottom: 3rem;

  li {
    width: 100%;
    height: 2rem;
    position: relative;
  }
}

.link {
  width: 100%;
  height: 100%;
  padding-right: 20px;
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  &:focus,
  &:hover {
    outline: 0;
    color: var(--secondary);
  }
}

.active-link {
  color: var(--font-clr-inverse) !important;
}

.active-link-bg {
  width: 80%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;

  background: var(--secondary);
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}

.link-icon-container {
  --size: 24px;

  width: var(--size);
  height: var(--size);
  margin-left: 20px;
}

.footer-links {
  width: 100%;

  li {
    width: 100%;
    height: 2rem;

    a {
      width: 100%;
      height: 100%;
      padding: 0 30px;

      display: flex;
      align-items: center;
      justify-content: flex-end;

      &:focus,
      &:hover {
        outline: 0;
        opacity: 0.5;
      }
    }
  }
}

.github-icon-container {
  --size: 24px;

  width: var(--size);
  height: var(--size);
  margin-left: 20px;
}

.color-mode {
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    margin-right: 20px;
  }
}

/* TRANSITION */

.slide-in-enter-active,
.slide-in-leave-active {
  transition: transform 300ms ease-in-out;
}

.slide-in-enter,
.slide-in-leave-to {
  transform: translateX(290px);
}

.slide-in-enter-to,
.slide-in-leave {
  transform: translateX(0);
}

/* MEDIAS */

@include tablet-s {
  .close-wrapper {
    --size: 3rem;
  }
}

@include desktop-xs {
  .nav-container {
    display: none;
  }
}
</style>
