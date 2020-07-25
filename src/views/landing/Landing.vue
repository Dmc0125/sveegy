<template>
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
        v-if="!getDarkMode"
      >
      <img
        src="@/assets/illustrations/browse-dark.svg"
        alt="Browse illustration"
        title="Browse illustration"
        v-else
      >
    </VueIllustration>
  </VueContainer>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

import VueContainer from '@/layouts/vue-container/VueContainer.vue';
import Hero from '@/components/hero/Hero.vue';
import VueIllustration from '@/layouts/vue-illustration/VueIllustration.vue';

export default Vue.extend({
  components: {
    VueContainer,
    Hero,
    VueIllustration,
  },
  computed: mapGetters(['getDarkMode']),
});
</script>
