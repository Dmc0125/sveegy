<template>
  <div class="icon-container">
    <CopyIcon :copy-value="iconHtml" />

    <div class="svg">
      <VueSvg :icon-html="iconHtml" />
    </div>

    <div class="icon-name">
      <p>{{ _iconName }} icon</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import VueSvg from '@/components/vue-svg/VueSvg.vue';
import CopyIcon from '@/components/copy-icon/CopyIcon.vue';

export default defineComponent({
  components: {
    VueSvg,
    CopyIcon,
  },
  props: {
    iconHtml: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const _iconName = props.iconName[0].toUpperCase() + props.iconName.substring(1);

    return {
      _iconName,
    };
  },
});
</script>

<style lang="scss" scoped>
.icon-container {
  position: relative;

  background: var(--primary);
  color: var(--font-clr);
  border: 1px solid var(--primary-border);
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  &:hover .copy-icon,
  &:focus .copy-icon {
    opacity: 1;
    pointer-events: all;
  }
}

.svg {
  height: 70%;
  flex: 0 1 auto;
}

.icon-name {
  width: 100%;
  flex: 1 0 2rem;

  border-top: 1px solid var(--primary-border);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
