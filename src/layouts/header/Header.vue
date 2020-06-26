<template>
  <header>
    <RouterLink
      class="logo"
      to="/"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- eslint-disable max-len -->
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 31.4286C10 19.5939 19.5939 10 31.4286 10H57.1429C59.5098 10 61.4286 11.9188 61.4286 14.2857C61.4286 16.6526 59.5098 18.5714 57.1429 18.5714H31.4286C24.3278 18.5714 18.5714 24.3278 18.5714 31.4286C18.5714 38.5294 24.3278 44.2857 31.4286 44.2857H44.2857C46.6527 44.2857 48.5714 46.2045 48.5714 48.5714C48.5714 50.9384 46.6527 52.8571 44.2857 52.8571H31.4286C19.5939 52.8571 10 43.2632 10 31.4286ZM48.5714 70C60.4061 70 70 60.4061 70 48.5714C70 36.7368 60.4061 27.1429 48.5714 27.1429H35.7143C33.3474 27.1429 31.4286 29.0616 31.4286 31.4286C31.4286 33.7955 33.3474 35.7143 35.7143 35.7143H48.5714C55.6722 35.7143 61.4286 41.4706 61.4286 48.5714C61.4286 55.6722 55.6722 61.4286 48.5714 61.4286H22.8571C20.4902 61.4286 18.5714 63.3474 18.5714 65.7143C18.5714 68.0812 20.4902 70 22.8571 70H48.5714Z"
          fill="url(#paint0_linear)"
        />
        <!-- eslint-enable max-len -->
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="70"
            y1="10"
            x2="4.42425"
            y2="63.1164"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B234FF"/>
            <stop
              offset="1"
              stop-color="#63A1FF"
            />
          </linearGradient>
        </defs>
      </svg>
    </RouterLink>

    <nav>
      <!-- <button
        class="clr-switch-container"
        @click="toggleDarkMode"
      >
        <div
          class="clr-switch-btn"
          :class="{ 'dark-mode': isDarkMode }"
        ></div>
      </button> -->

      <a
        class="github-link"
        href="https://github.com/Dmc0125/sveegy"
        target="_blank"
      >
        <div class="github-svg-wrapper">
          <VueSvg :icon-html="getIcon('github-icon').htmlValue" />
        </div>
      </a>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

import VueSvg from '@/components/vue-svg/VueSvg.vue';

export default Vue.extend({
  components: {
    VueSvg,
  },
  computed: mapGetters(['isDarkMode', 'getIcon']),
  methods: mapActions(['toggleDarkMode']),
});
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 60px;
  padding: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  height: 100%;

  display: flex;
  align-items: center;
}

.logo {
  --size: 2.5rem;

  width: var(--size);
  height: var(--size);
}

.clr-switch-container {
  --height: 20px;

  width: 35px;
  height: var(--height);
  padding: 0 2px;

  background: var(--font-clr);
  border-radius: calc(var(--height) / 2);

  display: flex;
  align-items: center;
}

.clr-switch-btn {
  --size: calc(var(--height) * 0.8);

  width: var(--size);
  height: var(--size);
  margin-left: 0;

  background: var(--color-switch-btn);
  border-radius: 50%;
  transition: margin-left 200ms ease-in-out;

  &.dark-mode {
    margin-left: calc(100% - var(--size));
  }
}

.github-link {
  margin-left: 1rem;
}

.github-svg-wrapper {
  --size: 2.5rem;

  width: var(--size);
  height: var(--size);

  color: var(--font-clr);
}

@include tablet {
  header {
    height: 90px;
    padding: 0 50px;
  }

  .logo,
  .github-svg-wrapper {
    --size: 3rem;
  }
}

@include desktop-xs {
  header {
    padding: 0 70px;
  }
}

@include desktop-s {
  header {
    padding: 0 100px;
  }
}

@include desktop-m {
  header {
    padding: 0 140px;
  }
}
</style>
