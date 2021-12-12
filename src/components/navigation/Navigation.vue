<script lang="ts" setup>
import { computed } from 'vue'
import links from '@/utils/links'

import SvgWrapper from '@/layouts/SvgWrapper.vue'
import ColorModeSwitch from '@/components/color-mode-switch/ColorModeSwitch.vue'

import useMainStore from '@/store/main'

const mainStore = useMainStore()

const isNavOpened = computed(() => mainStore.isNavOpen)
</script>

<template>
  <transition name="slide-in">
    <section
      v-if="isNavOpened"
      class="nav-container"
      @click="mainStore.toggleNav"
    >
      <nav @click.stop>
        <header>
          <button
            class="close-wrapper"
            @click="mainStore.toggleNav"
          >
            <svg-wrapper icon="close-icon" />
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
                v-if="$route.path === to"
                class="active-link-bg"
              />
              <router-link
                class="link"
                :class="{ 'active-link': $route.path === to }"
                :to="to"
              >
                <span>{{ name }}</span>
                <span class="link-icon-container">
                  <svg-wrapper :icon="icon" />
                </span>
              </router-link>
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
                  <svg-wrapper icon="github-icon" />
                </span>
              </a>
            </li>
            <li class="color-mode">
              <span>Dark mode</span>
              <color-mode-switch />
            </li>
          </ul>
        </footer>
      </nav>
    </section>
  </transition>
</template>

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

  border-left: 1px solid var(--third-clr);
  background: var(--primary-clr);

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

  color: var(--font-primary-clr);
  background: var(--primary-clr);
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
    color: var(--call-to-action-clr);
  }
}

.active-link {
  color: var(--font-inverse-clr) !important;
}

.active-link-bg {
  margin: 0 1rem;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background: var(--call-to-action-clr);
  border-radius: 5px;
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

  color: var(--font-primary-clr);
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
  transition: transform var(--t-duration) ease-in-out;
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateX(290px);
}

.slide-in-enter-to,
.slide-in-leave-from {
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
