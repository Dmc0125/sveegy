<template>
  <transition name="route-fade-in" appear>
    <VueContainer use-flex>
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
    </VueContainer>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';

import VueContainer from '@/layouts/vue-container/VueContainer.vue';
import Hero from '@/components/hero/Hero.vue';
import VueIllustration from '@/layouts/vue-illustration/VueIllustration.vue';

export default Vue.extend({
  components: {
    VueContainer,
    Hero,
    VueIllustration,
  },
});
</script>
