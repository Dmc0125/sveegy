<template>
  <main
    id="app"
    :color-mode="getDarkMode ? 'dark' : 'light'"
  >
    <Header />
    <Navigation />
    <transition name="route-fade-in" appear>
      <RouterView />
    </transition>

    <Footer />

    <Notification />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

import Header from '@/layouts/header/Header.vue';
import Footer from '@/layouts/footer/Footer.vue';
import Navigation from '@/components/navigation/Navigation.vue';
import Notification from '@/components/notification/Notification.vue';

export default Vue.extend({
  components: {
    Header,
    Footer,
    Navigation,
    Notification,
  },
  computed: mapGetters(['getDarkMode']),
  methods: mapActions(['initDarkMode']),
  mounted() {
    this.initDarkMode();
  },
});
</script>

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

.route-fade-in-enter {
  opacity: 0;
  transform: translateY(-2rem);
}

.route-fade-in-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
