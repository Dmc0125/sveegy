<template>
  <main
    class="overlay"
    @click="redirectHome"
  >
    <section
      class="icon-popup"
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

        <IconSizeBtn class="popup-footer__size-settings" />

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
</template>

<script lang="ts">
import Vue from 'vue';
import { computed } from '@vue/composition-api';
import { useRouter, useGetters, useActions } from '@u3u/vue-hooks';

import prettifyHtmlValue from '@/utils/copy-svg-wrapper';

import VueSvg from '@/layouts/vue-svg/VueSvg.vue';
import IconSizeBtn from '@/components/icon-size-btn/IconSizeBtn.vue';
import CopyIcon from '@/components/copy-icon/CopyIcon.vue';

interface IconData {
  iconHtmlValue: string;
  iconVariations: string[];
  iconName: string;
  iconId: string;
}

const useIconData = (id: string): IconData => {
  const { getIcon, getIcons } = useGetters(['getIcon', 'getIcons']);

  const createName = (iconId: string) => (
    iconId[0].toUpperCase() + iconId.slice(1).replace('-', ' ')
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
    VueSvg,
    IconSizeBtn,
    CopyIcon,
  },
  setup() {
    const { route, router } = useRouter();
    const { getIcon, getIconSize } = useGetters(['getIcon', 'getIconSize']);
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

    const iconCopyHtml = computed(() => (
      prettifyHtmlValue(getIconSize.value, iconHtmlValue)
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
      getIcon,

      iconHtmlValue,
      iconVariations,
      iconName,
      iconId,

      features,

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
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  background: var(--overlay-clr);
}

.icon-popup {
  width: 80%;
  max-width: 600px;
  height: fit-content;
  margin: 5rem auto 30px;

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
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  grid-gap: 1rem;
}

.popup-footer__download-btn {
  width: 140px;
  height: 44px;

  background: var(--secondary);
  color: var(--font-clr-inverse);
  border-radius: 10px;
  font-size: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-footer__icon-html {
  width: 100%;
  grid-row: -3 / -1;
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

@include tablet-l {
  .popup-header__top-section h1 {
    font-size: 2rem;
  }

  .popup-footer {
    grid-template-rows: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1.5rem;
  }

  .popup-footer__download-btn {
    grid-column: 1;
    justify-self: start;
    align-self: center;
  }

  .popup-footer__size-settings {
    grid-column: 2;
    justify-self: end;
  }

  .popup-footer__icon-html {
    grid-column: span 2;
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
