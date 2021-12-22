<script lang="ts" setup>
const props = defineProps<{
  headline: string
  subHeadline: string
}>()
</script>

<template>
  <section class="hero">
    <h1>{{ props.headline }}</h1>
    <h2>{{ props.subHeadline }}</h2>
    <router-link
      class="browse-now-btn"
      to="/icons"
    >
      Browse now
    </router-link>
  </section>
</template>

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
  color: var(--font-secondary-clr)
}

.browse-now-btn {
  width: 140px;
  height: 44px;
  margin: 50px auto 0;

  background: var(--call-to-action-clr);
  color: var(--font-inverse-clr);
  border-radius: var(--border-radius);

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    box-shadow: var(--focus-outline);
  }

  &:hover {
    opacity: var(--hover-opacity);
  }
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
