<template>
  <div class="searchbar">
    <div
      class="searchbar__svg-wrapper"
      :class="{ 'active': _searchTerm.length }"
    >
      <VueSvg :icon-html="getIcon('search-icon').htmlValue" />
    </div>
    <input
      class="searchbar__input"
      type="text"
      placeholder="Browse icons"
      v-model="_searchTerm"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ref, watchEffect } from '@vue/composition-api';
import { useGetters } from '@u3u/vue-hooks';

import VueSvg from '@/layouts/vue-svg/VueSvg.vue';

export default Vue.extend({
  components: {
    VueSvg,
  },
  props: {
    searchTerm: {
      type: String,
      required: true,
    },
  },
  setup(_, { emit }) {
    const { getIcon } = useGetters(['getIcon']);

    const _searchTerm = ref('');

    watchEffect(() => {
      emit('update:search-term', _searchTerm.value);
    });

    return {
      getIcon,
      _searchTerm,
    };
  },
});
</script>

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
