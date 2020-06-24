<template>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-html="iconHtml"
  >
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    iconHtml: {
      type: String,
      required: true,
    },
  },
});
</script>
