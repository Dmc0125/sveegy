<template>
  <main id="app">
    <Header />
    <RouterView />
    <Footer />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

import Header from '@/layouts/header/Header.vue';
import Footer from '@/layouts/footer/Footer.vue';

export default Vue.extend({
  components: {
    Header,
    Footer,
  },
});
</script>

<style lang="scss">
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
  height: 100%;
  font-size: 16px;
}

body {
  min-height: 100vh;
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
p {
  color: var(--font-clr-dark);
}

button {
  cursor: pointer;
}

#app {
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-rows: min-content 1fr min-content;
}
</style>
