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
          <IconBtn @click="toggleSettings">
            <VueSvg :icon-html="getIcon('menu-icon').htmlValue" />
          </IconBtn>

          <div
            class="settings"
            :class="`${openSettings ? 'settings-opened' : 'settings-closed'}`"
          >
            <label>Icons size</label>
            <input
              type="text"
              v-model="iconSize"
            >

            <button
              class="settings-close-icon"
              @click="toggleSettings"
            >
              <VueSvg :icon-html="getIcon('close-icon').htmlValue" />
            </button>
          </div>
        </div>

        <div class="icons">
          <Icon
            :icon-html="htmlValue"
            :icon-name="variations[0]"
            v-for="{ id, variations, htmlValue } in getSearchedIcons(searchTerm)"
            :key="id"
          />
        </div>
      </VueContainer>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { ref, watchEffect } from '@vue/composition-api';
import { useGetters, useActions } from '@u3u/vue-hooks';

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
      getIcon, getSearchedIcons, getIconSize,
    } = useGetters(['getIcon', 'getSearchedIcons', 'getIconSize']);
    const { setIconSize } = useActions(['setIconSize']);

    const searchTerm = ref('');

    const iconSize = ref(getIconSize.value);

    watchEffect(() => {
      setIconSize(iconSize.value);
    });

    const openSettings = ref(false);

    const toggleSettings = () => {
      openSettings.value = !openSettings.value;
    };

    return {
      getIcon,
      getSearchedIcons,
      getIconSize,

      searchTerm,

      iconSize,

      openSettings,
      toggleSettings,
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
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.searchbar-container {
  margin-right: 1rem;
}

.settings {
  padding: 0 1rem;
  position: absolute;
  top: 0;
  right: 0;

  background: var(--primary);
  border: 1px solid var(--primary-border);
  border-radius: 10px;
  font-size: 1rem;
  transition: all 500ms cubic-bezier(.26,-0.92,.74,1.92);

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 30%;
    height: 2rem;
    padding: .5rem;

    background: var(--primary-border);
    border-radius: 10px;
  }

  input,
  label {
    transition: all 200ms ease-in-out 600ms;
  }
}

.settings-close-icon {
  --size: 2rem;

  width: var(--size);
  height: var(--size);

  background: none;
  color: var(--font-clr);
}

/* SETTINGS TRANSITION */

.settings-closed {
  --size: 2rem;

  width: var(--size);
  height: var(--size);

  opacity: 0;
  pointer-events: none;

  input,
  label {
    transition: none;
    opacity: 0;
  }
}

.settings-opened {
  width: 14rem;
  height: 3rem;

  opacity: 1;
  pointer-events: all;

  input,
  label {
    opacity: 1;
  }
}

/* ------------------- */

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
