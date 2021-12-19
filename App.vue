<template>
  <Html>
    <Head>
      <Title>Sveegy</Title>
    </Head>
  </Html>

  <header-vue />
  <nuxt-child />
  <footer-vue />

  <navigation />
</template>

<style lang="scss">
@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 400;
  src: url('assets/fonts/RedHatDisplay-Regular.ttf');
}

@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 500;
  src: url('assets/fonts/RedHatDisplay-Medium.ttf');
}

@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 600;
  src: url('assets/fonts/RedHatDisplay-SemiBold.ttf');
}

@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 700;
  src: url('assets/fonts/RedHatDisplay-Bold.ttf');
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  box-sizing: border-box;
  font-family: 'Red Hat Display', sans-serif;
}

html, body, #__nuxt {
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  font-size: 16px;
}

body {
  --primary-clr: #fff;
  --secondary-clr: #f3f5ff;
  --third-clr: #e0e0e0;
  --call-to-action-rgb: 61, 90, 241;
  --call-to-action-clr: rgb(var(--call-to-action-rgb));

  --font-primary-clr: #000;
  --font-secondary-clr: rgb(107, 114, 128);
  --font-third-clr: #7b8591;
  --font-inverse-clr: #f2f2f2;

  --modal-bg-clr: rgba(0, 0, 0, .1);

  --t-duration: 150ms;
  --focus-outline: 0 0 0 3px rgba(var(--call-to-action-rgb), 0.5);
  --hover-opacity: .8;
  --border-radius: 6px;

  position: relative;
  overflow-x: hidden;
  background: var(--primary-clr);
}

body[color-mode="dark"] {
  --primary-clr: #151317;
  --secondary-clr: #303033;
  --third-clr: #3e3e42;
  --call-to-action-rgb: 119,90,218;
  --call-to-action-clr: rgb(var(--call-to-action-rgb));

  --font-primary-clr: #f2f2f2;
  --font-secondary-clr: #b9b9b9;
  --font-third-clr: #5b626b;
  --font-inverse-clr: #000;

  --modal-bg-clr: rgba(250, 250, 250, .025);
}

#__nuxt {
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

.narrator-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border-width: 0;
}

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
