<template>
  <main id="app">
    <Header />
    <Navigation />
    <RouterView />
    <Footer />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

import Header from '@/layouts/header/Header.vue';
import Navigation from '@/components/navigation/Navigation.vue';
import Footer from '@/layouts/footer/Footer.vue';

export default Vue.extend({
  components: {
    Header,
    Navigation,
    Footer,
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

  display: grid;
  grid-template-rows: min-content 1fr min-content;
}
</style>
