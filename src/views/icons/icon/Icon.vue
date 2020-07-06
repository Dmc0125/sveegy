<template>
  <main
    class="overlay"
    @click="redirectHome"
  >
    <section
      class="icon-popup"
      @click.stop
    >
      <header>
        <div class="top">
          <h1>{{ iconName }}</h1>

          <RouterLink
            class="close-icon"
            to="/icons"
          >
            <VueSvg :icon-html="getIcon('close-icon').htmlValue" />
          </RouterLink>
        </div>

        <ul class="variations">
          <li
            v-for="variation in iconVariations"
            :key="variation"
          >
            {{ variation }}
          </li>
        </ul>
      </header>

      <main class="popup-main">
        <div class="selected-icon">
          <VueSvg :icon-html="iconHtmlValue" />
        </div>

        <ul class="features">
          <li
            v-for="feature in features"
            :key="feature"
          >
            <span class="tick-icon">
              <VueSvg :icon-html="getIcon('tick-icon').htmlValue" />
            </span>
            {{ feature }}
          </li>
        </ul>
      </main>

      <footer>
        <a
          class="download-svg-link"
          href="#"
          download
        >Download</a>

        <IconSizeBtn class="size-settings" />

        <div class="icon-html">
          <CopyIcon
            :copy-value="iconHtmlValue"
            show-always
          />

          <!-- Needs to be inline to remove the space in front of actual html -->
          <!-- eslint-disable-next-line max-len -->
          <p class="icon-html__copy-value">{{ iconCopyHtml }}</p>
        </div>
      </footer>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { computed } from '@vue/composition-api';
import { useRouter, useGetters } from '@u3u/vue-hooks';

import prettifyHtmlValue from '@/utils/copy-svg-wrapper';

import VueSvg from '@/components/vue-svg/VueSvg.vue';
import IconSizeBtn from '@/components/icon-size-btn/IconSizeBtn.vue';
import CopyIcon from '@/components/copy-icon/CopyIcon.vue';

interface IconData {
  iconHtmlValue: string;
  iconVariations: string[];
  iconName: string;
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
    };
  }

  const { htmlValue, variations, id: _id } = getIcons.value[id];
  return {
    iconHtmlValue: htmlValue,
    iconVariations: variations,
    iconName: createName(_id),
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

    const { id } = route.value.params;
    const { iconHtmlValue, iconVariations, iconName } = useIconData(id);

    const features = [
      'Free for commercial use',
      'No need for attribution',
      'Comes in svg format',
      'Easy to use',
    ];

    const iconCopyHtml = computed(() => (
      prettifyHtmlValue(getIconSize.value, iconHtmlValue)
    ));

    const redirectHome = () => {
      router.push({ path: '/icons' });
    };

    return {
      getIcon,

      iconHtmlValue,
      iconVariations,
      iconName,

      features,

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

  background: rgba(0, 0, 0, .1);
}

.icon-popup {
  width: 80%;
  max-width: 600px;
  height: fit-content;
  margin: 5rem auto 30px;

  background: var(--primary);
  border-radius: 10px;
}

header {
  padding: 20px 30px 0;
}

.top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    font-weight: 400;
  }
}

.close-icon {
  --size: 1.5rem;

  width: var(--size);
  height: var(--size);

  background: var(--primary);
}

.variations {
  width: 100%;
  margin-top: .5rem;

  display: flex;
  flex-wrap: wrap;
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

.selected-icon {
  width: 200px;
}

.features {
  li {
    font-size: 1rem;

    display: flex;
    align-items: center;
  }

  li + li {
    margin-top: .5rem;
  }
}

.tick-icon {
  --size: 1rem;

  width: var(--size);
  height: var(--size);
  margin-right: .5rem;
}

footer {
  width: 100%;
  margin-top: 2rem;
  padding: 30px;

  border-top: 1px solid var(--primary-border);

  display: grid;
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  grid-gap: 1rem;
}

.download-svg-link {
  width: 140px;
  height: 44px;

  background: var(--secondary);
  color: var(--font-clr-inverse);
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-html {
  width: 100%;
  grid-row: -3 / -1;
  padding: 20px;
  position: relative;

  background: var(--primary-border);
  border-radius: 10px;
  overflow-x: auto;

  display: flex;
  align-items: center;
}

.icon-html__copy-value {
  white-space: pre;
}

@include tablet-l {
  .top h1 {
    font-size: 2rem;
  }

  footer {
    grid-template-rows: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1.5rem;
  }

  .download-svg-link {
    grid-column: 1;
    justify-self: start;
  }

  .size-settings {
    grid-column: 2;
    justify-self: end;
  }

  .icon-html {
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
