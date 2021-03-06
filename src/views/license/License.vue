<template>
  <VueContainer use-flex>
    <section class="license">
      <h1>License</h1>
      <div>
        <h2>Copyright 2020 Dominik Michal</h2>
        <p>
          All images, vectors, and assets published on sveegy are free to use.
          You can use them for commercial and noncommercial purposes. There is no need of
          attribution or asking for permission from author or Sveegy.
        </p>
        <p>
          Sveegy grants you nonexclusive, worldwide copyright license to download, copy,
          modify, distribute, perform and use the assets provided from Sveegy for free,
          including for commercial purposes, without need of attribution or permission from
          author or Sveegy. This license however, does not include the right to compile assets
          from Sveegy, to replicate similar or competing service in any form or to redistribute
          the assets in packs. This extends to automated and non-automated ways to link, embed,
          scrape, search or download the assets included on the website without our consent.
        </p>
      </div>

      <div>
        <h2>Brand logos</h2>
        <p>
          All brand logos that are used are registered trademarks of their respected owners.
          These are included on a promotional basis and do not represent any association with
          Sveegy or its users, do not indicate any kind of endorsement of the trademark holder
          towards Sveegy, nor vice versa. All brand logos are being used with the purpose to
          represent the actual brand, service or company that has  registered the trademark
          and must not be used otherwise.
        </p>
      </div>
    </section>

    <VueIllustration>
      <img
        src="@/assets/illustrations/license.svg"
        alt="License illustration"
        title="License illustration"
        v-if="!getDarkMode"
      >
      <img
        src="@/assets/illustrations/license-dark.svg"
        alt="License illustration"
        title="License illustration"
        v-else
      >
    </VueIllustration>
  </VueContainer>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

import VueContainer from '@/layouts/vue-container/VueContainer.vue';
import VueIllustration from '@/layouts/vue-illustration/VueIllustration.vue';

export default Vue.extend({
  components: {
    VueContainer,
    VueIllustration,
  },
  computed: mapGetters(['getDarkMode']),
});
</script>

<style lang="scss" scoped>
.license {
  width: 80%;
  max-width: 485px;
  margin-top: 1rem;
}

h1 {
  font-size: 2rem;
}

h1,
h2 {
  font-weight: 500;
}

h2 {
  margin-top: 30px;
  font-size: 1.2rem;
}

p {
  margin-top: 20px;
  font-size: 1rem;
}

@include desktop-xs {
  .license {
    margin: 0;
  }
}
</style>
