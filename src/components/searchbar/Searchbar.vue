<script lang="ts" setup>
import { ref, watchEffect, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import SvgWrapper from '@/layouts/SvgWrapper.vue'

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
</script>

<template>
  <div class="searchbar">
    <div
      class="searchbar__svg-wrapper"
      :class="{ 'active': _searchTerm.length }"
    >
      <svg-wrapper icon="search-icon" />
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
  width: 100%;
  height: 2.5rem;
  position: relative;

  &:focus-within .searchbar__svg-wrapper,
  .searchbar__svg-wrapper.active {
    transform: translateY(-50%) rotate(90deg);
    color: var(--font-primary-clr);
  }
}

.searchbar__svg-wrapper,
.searchbar__input::placeholder {
  color: var(--font-secondary-clr);
  opacity: 1;
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
  border-radius: 10px;
  color: var(--font-primary-clr);
}

@media (min-width: 840px) {
  .searchbar {
    width: 230px;
  }
}
</style>
