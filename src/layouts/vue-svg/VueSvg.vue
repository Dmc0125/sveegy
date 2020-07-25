<template>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-html="iconHtmlColor"
  >
  </svg>
</template>

<script lang="ts">
import { defineComponent, watchEffect, ref } from '@vue/composition-api';
import { useGetters } from '@u3u/vue-hooks';

export default defineComponent({
  props: {
    iconHtml: {
      type: String,
      required: true,
    },
    changeColor: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { getIconColor } = useGetters(['getIconColor']);

    const iconHtmlColor = ref(props.iconHtml);

    watchEffect(() => {
      if (props.changeColor) {
        iconHtmlColor.value = props.iconHtml
          .replace(RegExp('fill="currentColor"', 'g'), `fill="${getIconColor.value}"`);
      }
    });

    return {
      iconHtmlColor,
    };
  },
});
</script>
