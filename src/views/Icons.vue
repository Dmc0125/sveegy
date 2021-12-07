<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import Container from '@/layouts/Container.vue'
import Searchbar from '@/components/searchbar/Searchbar.vue'
import IconBtn from '@/components/icon-btn/IconBtn.vue'
import IconSettings from '@/components/icon-settings/IconSettings.vue'
import Icon from '@/components/icon/Icon.vue'

import useIconsStore from '@/store/icons'
import useSettings from '@/hooks/open-settings'

const iconsStore = useIconsStore()

const searchTerm = ref('')

const { isOpen: openSettings, toggleSettings } = useSettings()

onMounted(() => {
  const route = useRoute()
  const iconSize = route.query.size as unknown as string | undefined | unknown[]

  if (iconSize && !Array.isArray(iconSize)) {
    iconsStore.setIconSize(iconSize)
  }
})
</script>

<template>
  <main class="icons-main">
    <container class="icons-main__icons-hero">
      <div class="icons-hero__hero">
        <h1>Many free svg icons</h1>
        <h2>
          Browse to find any svg icon you want and then use it either
          by copying the html or downloading the svg.
        </h2>
      </div>
    </container>

    <section class="icons-section">
      <container icons>
        <div
          class="icons-section__top-section"
          :class="{ 'icons-section__top-section--expanded': openSettings }"
        >
          <searchbar
            v-model:search-term="searchTerm"
            class="top-section__searchbar-container"
          />

          <icon-btn
            class="top-section__close-btn"
            :transition-key="openSettings ? 'opened' : 'closed'"
            :name="openSettings ? 'close-icon' : 'menu-icon'"
            @click="toggleSettings"
          />

          <icon-settings
            class="top-section__icon-settings"
            :open-settings="openSettings"
            @icon-settings:close="toggleSettings"
          />
        </div>

        <div class="icons-section__icons">
          <icon
            v-for="{ id, variations, htmlValue } in iconsStore.getSearchedIcons(searchTerm)"
            :key="id"
            :icon-id="id"
            :icon-html="htmlValue"
            :icon-name="variations[0]"
          />
        </div>
      </container>
    </section>

    <router-view v-slot="{ Component }">
      <transition
        name="fade-in"
        appear
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

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
    font-weight: 300;
  }

  h2 {
    margin-top: 1rem;

    font-size: 1rem;
    font-weight: 400;
    color: var(--font-secondary-clr);
  }
}

.icons-section {
  width: 100%;
  flex: 1 0 auto;
  margin-top: 50px;
  padding: 30px 0;

  border-top: 1px solid var(--third-clr);
}

.icons-section__top-section {
  width: 100%;
  max-height: 2.5rem; // has to be max-height because of transition
  position: relative;

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr auto;
  transition: max-height var(--t-duration) ease-in-out;

  // transition to
  &--expanded {
    max-height: 100px;
  }
}

.top-section__searchbar-container {
  margin-right: 1rem;
}

.top-section__icon-settings {
  grid-column: 1 / -1;
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

  .icons-section__top-section {
    grid-template-columns: repeat(2, 1fr);
  }

  .top-section__close-btn {
    justify-self: end;
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
  .icons-section__top-section {
    grid-template-columns: 1fr auto auto;
  }

  .top-section__close-btn {
    grid-column: 3 / -1;
  }

  .top-section__icon-settings {
    grid-column: 2 / 3;
    grid-row: 1;
  }

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
