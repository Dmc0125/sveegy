<template>
  <main class="icons-main">
    <VueContainer class="icons-main__icons-hero">
      <div class="icons-hero__hero">
        <h1>Many free svg icons</h1>
        <h2>
          Browse to find any svg icon you want and then use it either
          by copying the html or downloading the svg.
        </h2>
      </div>
    </VueContainer>

    <section class="icons-section">
      <VueContainer icons>
        <div class="icons-section__top-section">
          <Searchbar
            class="top-section__searchbar-container"
            :search-term.sync="searchTerm"
          />
          <IconBtn @click="toggleSettings">
            <VueSvg :icon-html="getIcon('menu-icon').htmlValue" />
          </IconBtn>

          <IconSettings
            :open-settings="openSettings"
            @icon-settings:close="toggleSettings"
          />
        </div>

        <div class="icons-section__icons">
          <Icon
            :icon-html="htmlValue"
            :icon-name="variations[0]"
            v-for="{ id, variations, htmlValue } in getSearchedIcons(searchTerm)"
            :key="id"
          />
        </div>
      </VueContainer>
    </section>

    <RouterView />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { ref } from '@vue/composition-api';
import { useGetters, useActions, useRouter } from '@u3u/vue-hooks';

import VueContainer from '@/layouts/vue-container/VueContainer.vue';
import VueSvg from '@/layouts/vue-svg/VueSvg.vue';
import Searchbar from '@/components/searchbar/Searchbar.vue';
import IconBtn from '@/components/icon-btn/IconBtn.vue';
import IconSettings from '@/components/icon-settings/IconSettings.vue';
import Icon from '@/components/icon/Icon.vue';

export default Vue.extend({
  components: {
    VueContainer,
    VueSvg,
    Searchbar,
    IconBtn,
    IconSettings,
    Icon,
  },
  setup() {
    const {
      getIcon, getSearchedIcons,
    } = useGetters(['getIcon', 'getSearchedIcons']);
    const { setIconSize } = useActions(['setIconSize']);
    const { route } = useRouter();

    const searchTerm = ref('');

    const { size } = route.value.query;

    if (size && !Array.isArray(size)) {
      setIconSize(size);
    }

    const openSettings = ref(false);

    const toggleSettings = () => {
      openSettings.value = !openSettings.value;
    };

    return {
      getIcon,
      getSearchedIcons,

      searchTerm,

      openSettings,
      toggleSettings,
    };
  },
});
</script>

<style lang="scss" scoped>
.icons-main {
  padding-top: 2rem;

  display: flex;
  flex-direction: column;
}

.icons-main__icons-hero {
  display: flex;
  justify-content: center;
}

.icons-hero__hero {
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

.icons-section {
  width: 100%;
  flex: 1 0 auto;
  margin-top: 50px;
  padding: 30px 0;

  border-top: 1px solid var(--primary-border);
}

.icons-section__top-section {
  width: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.top-section__searchbar-container {
  margin-right: 1rem;
}

.icons-section__icons {
  width: 100%;
  margin-top: 30px;

  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 140px);
  grid-auto-rows: 140px;
  gap: 1rem;
}

@include tablet-l {
  .icons-hero__hero h1 {
    font-size: 2.5rem;
  }

  .icons-section__icons {
    grid-template-columns: repeat(auto-fill, 130px);
    grid-auto-rows: 130px;
  }
}

@media (min-width: 512px) {
  .icons-section__icons {
    grid-template-columns: repeat(auto-fill, 140px);
    grid-auto-rows: 140px;
  }
}

@media (min-width: 840px) {
  .icons-section__icons {
    grid-template-columns: repeat(auto-fill, 150px);
    grid-auto-rows: 150px;
    gap: 1.5rem;
  }
}

@include desktop-m {
  .icons-main__icons-hero {
    display: block;
  }

  .icons-hero__hero {
    text-align: left;
  }
}
</style>
