<template>
  <main class="icons-wrapper">
    <VueContainer class="hero-container">
      <div class="hero">
        <h1>Many free svg icons</h1>
        <h2>
          Browse to find any svg icon you want and then use it either
          by copying the html or downloading the svg.
        </h2>
      </div>
    </VueContainer>

    <section class="icons-container">
      <VueContainer icons>
        <div class="actions">
          <Searchbar
            class="searchbar-container"
            :search-term.sync="searchTerm"
          />

          <IconBtn>
            <VueSvg :icon-html="getIcon('menu-icon').htmlValue" />
          </IconBtn>
        </div>

        <div class="icons">
          <Icon
            v-for="{ id, variations, htmlValue } in getSearchedIcons(searchTerm)"
            :key="id"
            :icon-html="htmlValue"
            :icon-name="variations[0]"
          />
        </div>
      </VueContainer>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { ref } from '@vue/composition-api';
import { useGetters } from '@u3u/vue-hooks';

import VueContainer from '@/layouts/vue-container/VueContainer.vue';
import VueSvg from '@/components/vue-svg/VueSvg.vue';
import Searchbar from '@/components/searchbar/Searchbar.vue';
import IconBtn from '@/components/icon-btn/IconBtn.vue';
import Icon from '@/components/icon/Icon.vue';

export default Vue.extend({
  components: {
    VueContainer,
    VueSvg,
    Searchbar,
    IconBtn,
    Icon,
  },
  setup() {
    const {
      getIcon, getSearchedIcons,
    } = useGetters(['getIcon', 'getIcons', 'getSearchedIcons']);

    const searchTerm = ref('');

    return {
      getIcon,
      getSearchedIcons,
      searchTerm,
    };
  },
});
</script>

<style lang="scss" scoped>
.icons-wrapper {
  padding-top: 2rem;

  display: flex;
  flex-direction: column;
}

.hero-container {
  display: flex;
  justify-content: center;
}

.hero {
  width: 80%;
  max-width: 485px;
  flex: 0 0 auto;

  text-align: center;

  h1 {
    font-size: 2rem;
    font-weight: 400;
  }

  h2 {
    margin-top: 1rem;

    font-size: 1rem;
    font-weight: 400;
  }
}

.icons-container {
  width: 100%;
  flex: 1 0 auto;
  margin-top: 50px;
  padding: 30px 0;

  border-top: 1px solid var(--primary-border);
}

.actions {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.searchbar-container {
  margin-right: 1rem;
}

.icons {
  width: 100%;
  margin-top: 30px;

  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 140px);
  grid-auto-rows: 140px;
  gap: 1rem;
}

@include tablet-l {
  .hero h1 {
    font-size: 2.5rem;
  }

  .icons {
    grid-template-columns: repeat(auto-fill, 130px);
    grid-auto-rows: 130px;
  }
}

@media (min-width: 512px) {
  .icons {
    grid-template-columns: repeat(auto-fill, 140px);
    grid-auto-rows: 140px;
  }
}

@media (min-width: 840px) {
  .icons {
    grid-template-columns: repeat(auto-fill, 150px);
    grid-auto-rows: 150px;
    gap: 1.5rem;
  }
}

@include desktop-m {
  .hero-container {
    display: block;
  }

  .hero {
    text-align: left;
  }
}
</style>
