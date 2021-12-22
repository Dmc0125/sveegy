<script lang="ts" setup>
import SvgWrapper from '@/components/SvgWrapper.vue'

import useNotification from '@/hooks/useNotification'

const {
  id, isError, message, hideNotification,
} = useNotification()
</script>

<template>
  <transition
    name="slide-in"
    mode="out-in"
  >
    <section
      v-if="id"
      :key="id"
      class="notification"
    >
      <div
        class="notification__svg"
        :class="isError ? 'notification__svg--error' : 'notification__svg--success'"
      >
        <svg-wrapper :icon="isError ? 'close-icon' : 'tick-icon'" />
      </div>
      <p class="notification__text">
        {{ message }}
      </p>

      <button
        class="notification__close-btn"
        @click="hideNotification"
      >
        <svg-wrapper icon="close-icon" />
      </button>
    </section>
  </transition>
</template>

<style lang="scss" scoped>
.notification {
  min-height: 80px;
  width: 80%;
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;

  border: 1px solid var(--third-clr);
  border-radius: var(--border-radius);
  background: var(--primary-clr);

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto 1fr auto;
}

.notification__svg {
  --size: 3rem;

  width: var(--size);
  height: var(--size);
  padding: .5rem;

  border: 1px solid currentColor;
  border-radius: 50%;

  justify-self: center;
  align-self: center;

  &--success {
    color: #48bb78;
  }

  &--error {
    color: #f56565;
  }
}

.notification__text {
  align-self: center;
}

.notification__close-btn {
  width: 1.2rem;
  height: 1.2rem;

  background: var(--primary-clr);
  color: var(--font-primary-clr);
}

.slide-in-enter-active, .slide-in-leave-active {
  transition: transform calc(var(--t-duration) * 2) ease-in-out;
}

.slide-in-enter-from, .slide-in-leave-to {
  transform: translateX(100%);
}

.slide-in-enter-to, .slide-in-leave-from {
  transform: translateX(-50%);
}

@include tablet-l {
  .notification {
    width: 350px;
    top: 50px;
    left: calc(100% - 3rem);
    transform: translateX(-100%);
  }

  .slide-in-enter-from, .slide-in-leave-to {
    transform: translateX(20%) !important;
  }

  .slide-in-enter-to, .slide-in-leave-from {
    transform: translateX(-100%);
  }
}
</style>
