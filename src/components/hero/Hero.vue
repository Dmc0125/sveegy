<template>
  <section class="hero">
    <h1>{{ headline }}</h1>
    <h2>{{ subHeadline }}</h2>
    <RouterLink
      class="browse-now-btn"
      to="/icons"
    >Browse now</RouterLink>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    headline: {
      type: String,
      required: true,
    },
    subHeadline: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.hero {
  width: 90%;
  max-width: 485px;
  margin: 0 auto;

  text-align: center;
}

h1 {
  font-size: 3rem;
  font-weight: 500;
}

h2 {
  margin-top: 1rem;

  font-size: 1.5rem;
  font-weight: 400;
}

.browse-now-btn {
  width: 140px;
  height: 44px;
  margin: 50px auto 0;

  background: var(--secondary);
  color: var(--font-clr-inverse);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
}

@include tablet-s {
  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2rem;
  }

  .browse-now-btn {
    width: 150px;
    height: 50px;
  }
}

@include desktop-m {
  .hero {
    margin: 0;
    text-align: left;
  }

  h1 {
    font-size: 5rem;
  }

  .browse-now-btn {
    margin: 0;
    margin-top: 50px;
  }
}
</style>
