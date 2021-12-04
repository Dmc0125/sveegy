<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import Container from '@/layouts/vue-container/VueContainer.vue'
import SvgVue from '@/layouts/vue-svg/VueSvg.vue'
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
        <div class="icons-section__top-section">
          <!-- TODO: might not work -->
          <searchbar
            v-model:search-term="searchTerm"
            class="top-section__searchbar-container"
          />
          <icon-btn @click="toggleSettings">
            <svg-vue :icon-html="iconsStore.getIcon('menu-icon')?.htmlValue || ''" />
          </icon-btn>

          <icon-settings
            :open-settings="openSettings"
            @icon-settings:close="toggleSettings"
          />
        </div>

        <div class="icons-section__icons">
          <icon
            v-for="{ id, variations, htmlValue } in iconsStore.getSearchedIcons(searchTerm)"
            :key="id"
            :icon-html="htmlValue"
            :icon-name="variations[0]"
          />
        </div>
      </container>
    </section>

    <router-view v-slot="{ Component }">
      <transition
        name="slide-in"
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

.slide-in-enter-active,
.slide-in-leave-active {
  transition:
    transform 300ms ease-in-out,
    opacity 300ms ease-in-out;
}

.slide-in-enter-to,
.slide-in-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-in-enter-from,
.slide-in-leave-to {
  opacity: 0;
  transform: translateY(50%);
}

@include tablet-l {
  .icons-hero__hero h1 {
    font-size: 2.5rem;
  }

  .icons-section__icons {
    grid-template-columns: repeat(auto-fill, 130px);
    grid-auto-rows: 130px;
  }

  .slide-in-enter-active,
  .slide-in-leave-active {
    transition: none;
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
