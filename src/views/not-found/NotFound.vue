<template>
  <VueContainer use-flex>
    <Hero
      headline="404 error"
      sub-headline="The page you were searching for was not found"
    />

    <VueIllustration>
      <img
        src="@/assets/illustrations/search.svg"
        alt="Search illustration"
        title="Search illustration"
        v-if="!getDarkMode"
      >
      <img
        src="@/assets/illustrations/search-dark.svg"
        alt="Search illustration"
        title="Search illustration"
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
