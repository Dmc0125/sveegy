<script lang="ts" setup>
import { computed } from 'vue'

import SvgWrapper from '@/layouts/SvgWrapper.vue'

import useNotificationStore from '@/store/notification'

const notificationStore = useNotificationStore()

const id = computed(() => notificationStore.id)
const error = computed(() => notificationStore.isError)
const message = computed(() => notificationStore.message)
</script>

<template>
  <transition
    name="slide-in"
    mode="out-in"
  >
    <section
      v-if="message"
      :key="id"
      class="notification"
    >
      <div
        class="notification__svg"
        :class="error ? 'notification__svg--error' : 'notification__svg--success'"
      >
        <svg-wrapper :icon="error ? 'close-icon' : 'tick-icon'" />
      </div>
      <p class="notification__text">
        {{ message }}
      </p>

      <button
        class="notification__close-btn"
        @click="notificationStore.hideNotification"
      >
        <svg-wrapper icon="close-icon" />
      </button>
    </section>
  </transition>
</template>

<style lang="scss" scoped>
.notification {
  height: fit-content;
  width: 80%;
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 1rem;

  border: 1px solid var(--third-clr);
  border-radius: 10px;
  background: var(--primary-clr);

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto 1fr;
  grid-template-rows: 80px;
}

.notification__svg {
  --size: 3rem;

  width: var(--size);
  height: var(--size);

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
  position: absolute;
  top: 10px;
  right: 10px;

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
