<template>
  <LandingContainer>
    <Hero
      headline="Sveegy"
      sub-headline="Choose from many free svg icons and use it with just one click"
    />

    <VueIllustration>
      <img
        src="@/assets/illustrations/browse.svg"
        alt="Browse illustration"
        title="Browse illustration"
      >
    </VueIllustration>
  </LandingContainer>
</template>

<script lang="ts">
import Vue from 'vue';

import LandingContainer from '@/layouts/landing-container/LandingContainer.vue';
import Hero from '@/components/hero/Hero.vue';
import VueIllustration from '@/components/vue-illustration/VueIllustration.vue';

export default Vue.extend({
  components: {
    LandingContainer,
    Hero,
    VueIllustration,
  },
});
</script>
