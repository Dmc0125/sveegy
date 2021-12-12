<script lang="ts" setup>
import { computed, onMounted } from 'vue'

import HeaderVue from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
import Navigation from '@/components/navigation/Navigation.vue'
import Notification from '@/components/notification/Notification.vue'

import useMainStore from './store/main'

const mainStore = useMainStore()

const darkMode = computed(() => mainStore.darkMode)

onMounted(() => {
  mainStore.initDarkMode()
})
</script>

<template>
  <main
    class="app"
    :color-mode="darkMode ? 'dark' : 'light'"
  >
    <header-vue />
    <navigation />
    <router-view v-slot="{ Component }">
      <transition
        name="route-fade-in"
        appear
      >
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer />

    <notification />
  </main>
</template>

<style lang="scss">
/* GLOBAL */
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  box-sizing: border-box;
  font-family: 'Red Hat Display', sans-serif;
}

html,
body {
  width: 100vw;
  height: fit-content;
  font-size: 16px;
}

body {
  position: relative;
  overflow-x: hidden;
}

.app {
  --color-switch-btn: #f2c94c;

  --t-duration: 150ms;

  --primary-clr: v-bind(mainStore.cssVariables.primaryClr);
  --secondary-clr: v-bind(mainStore.cssVariables.secondaryClr);
  --third-clr: v-bind(mainStore.cssVariables.thirdClr);
  --call-to-action-rgb: v-bind(mainStore.cssVariables.callToActionRgb);
  --call-to-action-clr: rgb(var(--call-to-action-rgb));

  --font-primary-clr: v-bind(mainStore.cssVariables.fontPrimaryClr);
  --font-secondary-clr: v-bind(mainStore.cssVariables.fontSecondaryClr);
  --font-third-clr: v-bind(mainStore.cssVariables.fontThirdClr);
  --font-inverse-clr: v-bind(mainStore.cssVariables.fontInverseClr);

  --modal-bg-clr: v-bind(mainStore.cssVariables.modalBgClr);

  --focus-outline: 0 0 0 3px rgba(var(--call-to-action-rgb), 0.5);
  --hover-opacity: .8;
  --border-radius: 6px;

  width: 100%;
  min-height: 100vh;

  background: var(--primary-clr);

  display: grid;
  grid-template-rows: min-content 1fr min-content;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

h1 {
  font-size: 2rem;
  font-weight: 500;
}

h1, h2, h3, p, button, a {
  color: var(--font-primary-clr);
}

button {
  cursor: pointer;

  &::-moz-focus-inner {
    border: 0;
  }
}

input {
  font-size: 1rem;

  &::placeholder {
    color: var(--font-third-clr);
  }

  &:focus {
    box-shadow: var(--focus-outline);
  }
}

/* ROUTE TRANSITION */

.route-fade-in-enter-active {
  transition: all 800ms ease-in-out;
}

.route-fade-in-enter-from {
  opacity: 0;
  transform: translateY(-1rem);
}

.route-fade-in-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-in-enter-active, .fade-in-leave-active {
  transition: opacity var(--t-duration) ease-in-out;
}

.fade-in-enter-to, .fade-in-leave-from {
  opacity: 1;
}

.fade-in-enter-from, .fade-in-leave-to {
  opacity: 0;
}
</style>
