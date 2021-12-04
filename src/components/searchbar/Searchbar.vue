<script lang="ts" setup>
import {
  ref, watchEffect, onMounted, computed,
} from 'vue'
import { useRoute } from 'vue-router'

import SvgVue from '@/layouts/vue-svg/VueSvg.vue'

import useIconsStore from '@/store/icons'

const emit = defineEmits<{(e: 'update:search-term', value: string): void}>()

const _searchTerm = ref('')

watchEffect(() => {
  emit('update:search-term', _searchTerm.value)
})

const route = useRoute()
onMounted(() => {
  const search = route.query.search as undefined | string | unknown[]

  if (search && !Array.isArray(search)) {
    _searchTerm.value = search
  }
})

const iconsStore = useIconsStore()
const getIcon = computed(() => iconsStore.getIcon)
</script>

<template>
  <div class="searchbar">
    <div
      class="searchbar__svg-wrapper"
      :class="{ 'active': _searchTerm.length }"
    >
      <svg-vue :icon-html="getIcon('search-icon')?.htmlValue || ''" />
    </div>
    <input
      v-model="_searchTerm"
      class="searchbar__input"
      type="text"
      placeholder="Browse icons"
    >
  </div>
</template>

<style lang="scss" scoped>
.searchbar {
  width: 160px;
  height: 2rem;
  position: relative;

  &:focus-within .searchbar__svg-wrapper,
  .searchbar__svg-wrapper.active {
    transform: translateY(-50%) rotate(90deg);
    color: var(--font-clr);
  }
}

.searchbar__svg-wrapper,
.searchbar__input::placeholder {
  color: var(--font-clr-secondary);
  opacity: 1;
}

.searchbar__svg-wrapper {
  --size: 1.5rem;

  width: var(--size);
  height: var(--size);
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  transition: transform 200ms ease-in-out;
}

.searchbar__input {
  width: 100%;
  height: 100%;
  padding: 0 1rem 0 2rem;

  background: var(--primary);
  border: 1px solid var(--primary-border);
  border-radius: 10px;
  color: var(--font-clr);

  &:focus {
    outline: 0;
    border-color: var(--secondary);
  }
}

@include tablet-s {
  .searchbar {
    width: 230px;
  }
}
</style>
