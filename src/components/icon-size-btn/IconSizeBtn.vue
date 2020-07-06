<template>
  <form class="icon-size">
    <label class="icon-size__label">Icon size</label>
    <input
      class="icon-size__input"
      type="text"
      v-model="iconSize"
    >
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import { ref, watchEffect } from '@vue/composition-api';
import { useActions, useGetters } from '@u3u/vue-hooks';

export default Vue.extend({
  setup() {
    const { setIconSize } = useActions(['setIconSize']);
    const { getIconSize } = useGetters(['getIconSize']);

    const iconSize = ref(getIconSize.value);

    watchEffect(() => {
      setIconSize(iconSize.value);
    });

    // Needs to watch for global iconSize change in order to update
    // when there is change in icon view
    watchEffect(() => {
      iconSize.value = getIconSize.value;
    });

    return {
      iconSize,
    };
  },
});
</script>

<style lang="scss" scoped>
.icon-size {
  display: flex;
  align-items: center;
}

.icon-size__label {
  margin-right: .5rem;
}

.icon-size__input {
  width: 5rem;
  height: 2rem;
  padding: .8rem;

  background: var(--primary-border);
  color: var(--font-clr);
  font-size: 1rem;
  border-radius: 10px;
}
</style>
