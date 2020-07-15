<template>
  <button
    class="clr-switch"
    @click="toggleDarkMode"
  >
    <div
      class="clr-switch__btn"
      :class="{ 'clr-switch__btn--dark-mode': getDarkMode }"
    ></div>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  computed: mapGetters(['getDarkMode']),
  methods: mapActions(['toggleDarkMode']),
});
</script>

<style lang="scss" scoped>
.clr-switch {
  --height: 20px;

  width: 35px;
  height: var(--height);
  padding: 0 2px;

  background: var(--font-clr-inverse);
  border-radius: calc(var(--height) / 2);

  display: flex;
  align-items: center;
}

.clr-switch__btn {
  --size: calc(var(--height) * 0.8);

  width: var(--size);
  height: var(--size);
  margin-left: 0;

  background: var(--color-switch-btn);
  border-radius: 50%;
  transition:
    margin-left 200ms ease-in-out,
    var(--t-clr),
    var(--t-bg);

  &--dark-mode {
    margin-left: calc(100% - var(--size));
  }
}
</style>
