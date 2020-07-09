<template>
  <transition name="slide-in" mode="out-in">
    <section
      class="notification"
      v-if="getMessage"
      :key="getMessage"
    >
      <div
        class="notification__svg"
        :class="getError ? 'notification__svg--error' : 'notification__svg--success'"
      >
        <VueSvg
          :icon-html="getError
            ? getIcon('close-icon').htmlValue
            : getIcon('tick-icon').htmlValue
          "
        />
      </div>
      <p class="notification__text">{{ getMessage }}</p>

      <button
        class="notification__close-btn"
        @click="hideNotification"
      >
        <VueSvg :icon-html="getIcon('close-icon').htmlValue" />
      </button>
    </section>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { useGetters, useActions } from '@u3u/vue-hooks';

import VueSvg from '@/layouts/vue-svg/VueSvg.vue';

export default Vue.extend({
  components: {
    VueSvg,
  },
  setup() {
    const { getIcon, getMessage, getError } = useGetters(['getIcon', 'getMessage', 'getError']);
    const { hideNotification } = useActions(['hideNotification']);

    return {
      getIcon,
      getMessage,
      getError,

      hideNotification,
    };
  },
});
</script>

<style lang="scss" scoped>
.notification {
  height: 5rem;
  position: absolute;
  top: 100px;
  right: 30px;
  transform: translateX(0);

  border: 1px solid var(--primary-border);
  border-radius: 10px;
  background: var(--primary);
  box-shadow: 0 3px 10px rgba(0, 0, 0, .05);

  display: grid;
  grid-template-columns: repeat(8, 2.5rem);
  grid-template-rows: 80px;
}

.notification__svg {
  --size: 3rem;

  width: var(--size);
  height: var(--size);
  grid-column: span 2;
  padding: .4rem;

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
  grid-column: 3 / -2;

  align-self: center;
}

.notification__close-btn {
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  top: 10px;
  right: 10px;

  background: var(--primary);
}

@include tablet-s {
  .notification {
    right: 50px;
  }
}

@include desktop-xs {
  .notification {
    right: 70px;
  }
}

@include desktop-m {
  .notification {
    right: 140px;
  }
}

/* TRANSITION */

.slide-in-enter-active,
.slide-in-leave-active {
  transition: transform 500ms ease-in-out;
}

.slide-in-enter,
.slide-in-leave-to {
  transform: translateX(500px);
}

.slide-in-enter-to,
.slide-in-leave {
  transform: translate(0);
}
</style>
