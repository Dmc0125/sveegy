<template>
  <main class="container">
    <slot />
  </main>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

@include desktop-m {
  .container {
    padding: 0 10%;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
