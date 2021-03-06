<template>
  <button
    class="copy-icon"
    :class="{ hide: !showAlways }"
    @click.stop="copyToClipboard"
  >
    <VueSvg :icon-html="getIcon('copy-icon').htmlValue" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

import setCopyValue from '@/utils/copy-svg-wrapper';

import VueSvg from '@/layouts/vue-svg/VueSvg.vue';

export default Vue.extend({
  components: {
    VueSvg,
  },
  props: {
    copyValue: {
      type: String,
      required: true,
    },
    showAlways: {
      type: Boolean,
      default: false,
    },
  },
  computed: mapGetters(['getIcon', 'getIconSize', 'getIconColor']),
  methods: {
    async copyToClipboard() {
      const _copyValue = setCopyValue(this.getIconSize, this.copyValue, this.getIconColor);

      try {
        await navigator.clipboard.writeText(_copyValue);

        this.sendNotification({
          message: 'Icon html was copied to your clipboard',
        });
      } catch (err) {
        this.sendNotification({
          message: 'Sveegy does not have access to your keyboard',
          isError: true,
        });
      }
    },
    ...mapActions(['sendNotification']),
  },
});
</script>

<style lang="scss" scoped>
.copy-icon {
  --size: 2.5rem;

  width: var(--size);
  height: var(--size);
  position: absolute;
  top: 10px;
  right: 10px;

  background: var(--primary);
  color: var(--font-clr);
  border: 1px solid var(--primary-border);
  border-radius: 10px;
  transition: all 150ms ease-in-out;

  &:hover,
  &:focus {
    outline: 0;
    background: var(--secondary);
    border-color: var(--secondary);
    color: var(--font-clr-inverse);
  }

  &:active {
    transition: none;
    filter: brightness(1.2);
  }
}

.hide {
  opacity: 0;
  pointer-events: none;
  cursor: pointer;
}
</style>
