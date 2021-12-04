<script lang="ts" setup>
import { computed, onMounted } from 'vue'

import HeaderVue from '@/layouts/header/Header.vue'
import Footer from '@/layouts/footer/Footer.vue'
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
    id="app"
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
/* Import global variables */
@import '@/scss/_vars.scss';

/* GLOBAL */

* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: 'Red Hat Display', sans-serif;
}

html,
body {
  width: 100%;
  height: fit-content;
  font-size: 16px;
}

body {
  position: relative;
  overflow-x: hidden;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: var(--font-clr);
}

h1,
h2,
h3,
p {
  color: var(--font-clr);
}

button {
  cursor: pointer;

  &::-moz-focus-inner {
    border: 0;
  }
}

input {
  font-size: 1rem;
}

#app {
  width: 100%;
  min-height: 100vh;

  background: var(--primary);
  // transition: var(--t-clr), var(--t-bg);

  display: grid;
  grid-template-rows: min-content 1fr min-content;
}

/* ROUTE TRANSITION */

.route-fade-in-enter-active {
  transition: all 1s ease-in-out;
}

.route-fade-in-enter-from {
  opacity: 0;
  transform: translateY(-2rem);
}

.route-fade-in-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
