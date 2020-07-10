<template>
  <form class="icon-size">
    <label class="icon-size__label">Icon size</label>
    <input
      class="icon-size__input"
      type="text"
      :value="iconSize"
      ref="iconSizeInput"
      @input="setGlobalIconSize"
    >
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import { ref, watchEffect, Ref } from '@vue/composition-api';
import { useActions, useGetters } from '@u3u/vue-hooks';

import debounce from '@/utils/debounce';

export default Vue.extend({
  setup() {
    const { setIconSize, sendNotification } = useActions(['setIconSize', 'sendNotification']);
    const { getIconSize } = useGetters(['getIconSize']);

    const iconSizeInput: Ref<HTMLInputElement | null> = ref(null);
    const iconSize: Ref<string> = ref(getIconSize.value);

    const setGlobalIconSize = debounce(() => {
      if (iconSizeInput.value) {
        iconSize.value = iconSizeInput.value.value;
      }
      setIconSize(iconSize.value);

      let notificationMessage = `Size of icons has been set to ${iconSize.value}`;

      if (!iconSize.value.length) {
        notificationMessage = 'Size of icons is not set';
      }

      sendNotification({
        message: notificationMessage,
      });
    }, 1000);

    // Needs to watch for global iconSize change in order to update
    // when there is change in icon view
    watchEffect(() => {
      iconSize.value = getIconSize.value;
    });

    return {
      iconSizeInput,
      iconSize,
      setGlobalIconSize,
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
