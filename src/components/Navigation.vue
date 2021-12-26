<script lang="ts" setup>
import { watch } from 'vue'

import SvgWrapper from '@/components/SvgWrapper.vue'
import ColorModeSwitch from '@/components/ColorModeSwitch.vue'

import githubIcon from '@/assets/icons/github.svg?raw'
import links from '@/utils/links'
import useNavigation from '@/hooks/useNavigation'

const { navigationOpened, toggleNavigation } = useNavigation()

const closeNavigation = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    toggleNavigation()
  }
}
watch(() => navigationOpened.value, () => {
  if (navigationOpened.value) {
    window.addEventListener('keydown', closeNavigation)
    return
  }

  window.removeEventListener('keydown', closeNavigation)
})
</script>

<template>
  <transition name="slide-in">
    <section
      v-if="navigationOpened"
      class="nav-container"
      @click="toggleNavigation"
    >
      <nav @click.stop>
        <header>
          <button
            class="close-wrapper"
            @click="toggleNavigation"
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
              :class="{ 'active-link': $route.path === to }"
            >
              <router-link
                class="link"
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

        <footer class="footer-links">
          <a
            class="github-link"
            href="https://github.com/Dmc0125/sveegy"
            target="_blank"
            rel="noopener"
            v-html="githubIcon"
          />
          <color-mode-switch />
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
  background: var(--modal-bg-clr);
  z-index: 1;
}

nav {
  width: 290px;
  height: 100%;
  padding: 20px;
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
    border-radius: 5px;

    &.active-link {
      background: var(--call-to-action-clr);

      a {
        color: var(--font-inverse-clr);
      }
    }

    &:focus-within {
      background: rgba(var(--call-to-action-rgb), var(--hover-opacity));
    }
  }
}

.link {
  width: 100%;
  height: 100%;
  padding-right: .5rem;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.link-icon-container {
  --size: 24px;
  width: var(--size);
  height: var(--size);
  margin-left: 20px;
}

.footer-links {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-end;
}

.github-link {
  --size: 24px;
  width: var(--size);
  height: var(--size);

  &:focus {
    border-radius: 5px;
    box-shadow: var(--focus-outline);
  }
}

/* TRANSITION */

.slide-in-enter-active {
  transition: opacity calc(var(--t-duration) * 2) ease-in-out;

nav {
    transition: transform var(--t-duration) ease-in-out var(--t-duration);
  }
}

.slide-in-leave-active {
  transition: opacity calc(var(--t-duration) * 2) ease-in-out;

  nav {
    transition: transform var(--t-duration) ease-in-out;
  }
}

.slide-in-enter-from, .slide-in-leave-to {
  opacity: 0;

  nav {
    transform: translateX(290px);
  }
}

.slide-in-enter-to, .slide-in-leave-from {
  opacity: 1;

  nav {
    transform: translateX(0);
  }
}

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
