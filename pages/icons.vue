<script lang="ts" setup>
import type { Ref } from 'vue'

import icons from 'assets/icons.json'
import useQuery from '~~/composables/useQuery'
import Notification from '~~/components/Notification.vue'

const iconsCount = Math.floor(icons.length / 10) * 10

const searchTerm = useQuery('search')
const shownIcons = computed(() => {
  if (!searchTerm.value.length) return icons

  const searchTermRegex = new RegExp(searchTerm.value)
  return icons.filter(({ id, variations, type }) => (
    id.match(searchTermRegex) || type.match(searchTermRegex) || variations.some((variation) => variation.match(searchTermRegex))
  ))
})

const searchbar = ref(null) as Ref<HTMLInputElement>
const focusSearchbar = (e) => {
  if (e.altKey && e.key === 'k') {
    searchbar.value.focus()
  }
}
onMounted(() => {
  window.addEventListener('keydown', focusSearchbar)
})
onUnmounted(() => {
  window.removeEventListener('keydown', focusSearchbar)
})
</script>

<script lang="ts">
export default {
  layout: false,
}
</script>

<template>
  <main class="icons-wrapper">
    <section class="icons-hero__hero">
      <h1>More than {{ iconsCount }} beautiful free svg icons</h1>
      <h2>
        Browse to find any svg icon you want and then use it either
        by copying the html or downloading the svg.
      </h2>
    </section>

    <div class="divider" />

    <section class="icons-section">
      <icon-settings>
        <div class="top-section__searchbar">
          <div
            class="searchbar__svg-wrapper"
            :class="{ 'active': searchTerm.length }"
          >
            <svg-wrapper icon="search-icon" />
          </div>
          <input
            ref="searchbar"
            v-model="searchTerm"
            type="text"
            placeholder="Search icons (alt + k)"
            class="searchbar__input"
          >
        </div>
      </icon-settings>

      <div class="icons-section__icons">
        <icon
          v-for="{ id, variations, paths } in shownIcons"
          :key="id"
          :icon-id="id"
          :icon-paths="paths"
          :icon-name="variations[0]"
        />
      </div>
    </section>
  </main>

  <nuxt-child />
  <notification />
</template>

<style lang="scss" scoped>
.icons-wrapper {
  width: 100%;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 4% 1fr 4%;
  grid-template-rows: auto auto 1fr;
  row-gap: 2rem;
}

.icons-hero__hero {
  width: 80%;
  max-width: 485px;
  height: fit-content;
  padding-top: 2rem;
  grid-column: 2 / 3;
  justify-self: center;

  text-align: center;

  h2 {
    margin-top: 1rem;

    font-size: 1rem;
    font-weight: 400;
    color: var(--font-secondary-clr);
  }
}

.divider {
  width: 100%;
  height: 1px;
  background: var(--third-clr);
  grid-column: 1 / -1;
}

.icons-section {
  width: 100%;
  grid-column: 2 / 3;
}

.top-section__searchbar {
  width: 100%;
  height: 2.5rem;
  position: relative;

  &:focus-within .searchbar__svg-wrapper,
  .searchbar__svg-wrapper.active {
    transform: translateY(-50%) rotate(90deg);
    color: var(--font-primary-clr);
  }
}

.searchbar__svg-wrapper {
  color: var(--font-third-clr);
}

.searchbar__svg-wrapper {
  --size: 1.5rem;

  width: var(--size);
  height: var(--size);
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  transition: transform var(--t-duration) ease-in-out;
}

.searchbar__input {
  width: 100%;
  height: 100%;
  padding: 0 1rem 0 2.5rem;

  background: var(--primary-clr);
  border: 1px solid var(--third-clr);
  border-radius: var(--border-radius);
  color: var(--font-primary-clr);
}

.icons-section__icons {
  width: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-auto-rows: 150px;
  gap: 1rem;
}

@include tablet-l {
  .icons-wrapper {
    // row-gap: 3rem;
    grid-template-columns: 1fr 70% 1fr;
  }

  .icons-hero__hero{
    padding-top: 3rem;

    h1 {
      font-size: 2.5rem;
    }
  }

  .top-section__searchbar {
    width: 230px;
  }
}

@include desktop-m {
  .icons-hero__hero {
    justify-self: left;
    text-align: left;
  }
}
</style>
