<template>
  <LandingContainer>
    <Hero
      headline="404 error"
      sub-headline="The page you were searching for was not found"
    />

    <VueIllustration>
      <img
        src="@/assets/illustrations/search.svg"
        alt="Search illustration"
        title="Search illustration"
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
