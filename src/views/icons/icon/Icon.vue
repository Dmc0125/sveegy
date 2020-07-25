<template>
  <transition name="slide-in" appear>
  <main
    class="overlay"
    @click="redirectHome"
  >
      <section
        class="icon-popup"
        :key="route.fullPath"
        @click.stop
      >
        <header class="popup-header">
          <div class="popup-header__top-section">
            <h1>{{ iconName }}</h1>

            <RouterLink
              class="top-section__close-icon"
              to="/icons"
            >
              <VueSvg :icon-html="getIcon('close-icon').htmlValue" />
            </RouterLink>
          </div>

          <ul class="popup-header__variations">
            <li
              v-for="variation in iconVariations"
              :key="variation"
            >
              {{ variation }}
            </li>
          </ul>
        </header>

        <main class="popup-main">
          <div class="popup-main__selected-icon">
            <VueSvg :icon-html="iconHtmlValue" />
          </div>

          <ul class="popup-main__features">
            <li
              v-for="feature in features"
              :key="feature"
            >
              <span class="features__tick-icon">
                <VueSvg :icon-html="getIcon('tick-icon').htmlValue" />
              </span>
              {{ feature }}
            </li>
          </ul>
        </main>

        <footer class="popup-footer">
          <!-- ADD DOWNLOAD ICON -->
          <a
            class="popup-footer__download-btn"
            :href="`/icons/${iconId}.svg`"
            :download="`${iconId}.svg`"
            @click="sendDownloadNotification"
          >Download</a>

          <IconBtn
            class="popup-footer__settings-btn"
            @click="toggleSettings"
          >
            <VueSvg :icon-html="getIcon('menu-icon').htmlValue" />
          </IconBtn>

          <IconSettings
            class="popup-footer__settings"
            :open-settings="openSettings"
            @icon-settings:close="toggleSettings"
          />

          <div class="popup-footer__icon-html">
            <CopyIcon
              :copy-value="iconHtmlValue"
              show-always
            />

            <div class="icon-html__html-wrapper">
              <p class="html-wrapper__copy-value">{{ iconCopyHtml }}</p>
            </div>
          </div>
        </footer>
      </section>
  </main>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed, ref } from '@vue/composition-api';
import { useRouter, useGetters, useActions } from '@u3u/vue-hooks';

import prettifyHtmlValue from '@/utils/copy-svg-wrapper';

import IconBtn from '@/components/icon-btn/IconBtn.vue';
import VueSvg from '@/layouts/vue-svg/VueSvg.vue';
import CopyIcon from '@/components/copy-icon/CopyIcon.vue';
import IconSettings from '@/components/icon-settings/IconSettings.vue';

interface IconData {
  iconHtmlValue: string;
  iconVariations: string[];
  iconName: string;
  iconId: string;
}

const useIconData = (id: string): IconData => {
  const { getIcon, getIcons } = useGetters(['getIcon', 'getIcons']);

  const createName = (iconId: string) => (
    iconId[0].toUpperCase() + iconId.slice(1).replace(/(-)/g, ' ')
  );

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(Number(id))) {
    const { htmlValue, variations } = getIcon.value(id);
    return {
      iconHtmlValue: htmlValue,
      iconVariations: variations,
      iconName: createName(id),
      iconId: id,
    };
  }

  const { htmlValue, variations, id: _id } = getIcons.value[id];
  return {
    iconHtmlValue: htmlValue,
    iconVariations: variations,
    iconName: createName(_id),
    iconId: _id,
  };
};

export default Vue.extend({
  components: {
    IconBtn,
    VueSvg,
    CopyIcon,
    IconSettings,
  },
  setup() {
    const { route, router } = useRouter();
    const { getIcon, getIconSize, getIconColor } = useGetters(['getIcon', 'getIconSize', 'getIconColor']);
    const { sendNotification } = useActions(['sendNotification']);

    const { id } = route.value.params;
    const {
      iconHtmlValue, iconVariations, iconName, iconId,
    } = useIconData(id);

    const features = [
      'Free for commercial use',
      'No need for attribution',
      'Comes in svg format',
      'Easy to use',
    ];

    const openSettings = ref(false);

    const toggleSettings = () => {
      openSettings.value = !openSettings.value;
    };

    const iconCopyHtml = computed(() => (
      prettifyHtmlValue(getIconSize.value, iconHtmlValue, getIconColor.value)
    ));

    const sendDownloadNotification = () => {
      sendNotification({
        message: 'Your download should have began successfully',
        isError: false,
      });
    };

    const redirectHome = () => {
      router.push({ path: '/icons' });
    };

    return {
      route,
      getIcon,

      iconHtmlValue,
      iconVariations,
      iconName,
      iconId,

      features,

      openSettings,
      toggleSettings,

      sendDownloadNotification,
      iconCopyHtml,

      redirectHome,
    };
  },
});
</script>

<style lang="scss" scoped>
.overlay {
  width: 100%;
  min-height: 200%;
  position: fixed;
  top: -100%;
  left: 0;

  background: var(--overlay-clr);
}

.icon-popup {
  width: 100%;
  max-width: 600px;
  height: fit-content;
  max-height: 47%;
  position: absolute;
  bottom: 0;
  overflow-y: auto;

  background: var(--primary);
  border-radius: 10px;
}

.popup-header {
  padding: 20px 30px 0;
}

.popup-header__top-section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    font-weight: 400;
  }
}

.top-section__close-icon {
  --size: 1.5rem;

  width: var(--size);
  height: var(--size);

  background: var(--primary);
}

.popup-header__variations {
  width: 100%;
  margin-top: .5rem;

  display: flex;
  gap: 1rem;
  row-gap: .5rem;

  li {
    height: 1.7rem;
    padding: .2rem .7rem;

    background: var(--secondary-bg);
    border-radius: 1rem;
    font-size: 12px;
    font-weight: 500;

    display: flex;
    align-items: center;
  }
}

.popup-main {
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
}

.popup-main__selected-icon {
  width: 200px;
  color: var(--font-clr);
}

.popup-main__features {
  li {
    font-size: 1rem;
    color: var(--font-clr);

    display: flex;
    align-items: center;
  }

  li + li {
    margin-top: .5rem;
  }
}

.features__tick-icon {
  --size: 1rem;

  width: var(--size);
  height: var(--size);
  margin-right: .5rem;
}

.popup-footer {
  width: 100%;
  padding: 30px;
  position: relative;

  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
}

.popup-footer__download-btn {
  width: 140px;
  height: 44px;
  grid-column: 1;

  background: var(--secondary);
  color: var(--font-clr-inverse);
  border-radius: 10px;
  font-size: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-footer__settings-btn {
  justify-self: end;
}

.popup-footer__settings {
  grid-column: 1 / -1;
  grid-row: 1;
}

.popup-footer__icon-html {
  width: 100%;
  grid-row: -3 / -1;
  grid-column: 1 / -1;
  position: relative;

  background: var(--primary-border);
  border-radius: 10px;
  overflow-x: auto;
}

.icon-html__html-wrapper {
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-x: auto;

  display: flex;
  align-items: center;
}

.html-wrapper__copy-value {
  white-space: pre;
}

.slide-in-enter-active,
.slide-in-leave-active {
  transition:
    transform 300ms ease-in-out,
    opacity 300ms ease-in-out;
}

.slide-in-enter-to,
.slide-in-leave {
  opacity: 1;
  transform: translateY(0);
}

.slide-in-enter,
.slide-in-leave-to {
  opacity: 0;
  transform: translateY(50%);
}

@include tablet-l {
  .overlay {
    min-height: 100%;
    position: absolute;
    top: 0;
    overflow: hidden;
  }

  .icon-popup {
    width: 80%;
    margin: 5rem auto 0;
    position: relative;
  }

  .popup-header__top-section h1 {
    font-size: 2rem;
  }

  .popup-footer {
    grid-gap: 1.5rem;
  }

  .slide-in-enter-active,
  .slide-in-leave-active {
    transition: none;
  }
}

@media (min-width: 600px) {
  .popup-main {
    padding: 1rem 30px 0;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
