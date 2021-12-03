<template>
  <transition name="settings-fade-in">
    <div
      class="icon-settings"
      v-if="openSettings"
    >
      <form
        class="icon-settings__wrapper"
        @submit.prevent
      >
        <IconSettingsSection
          title="Icon size"
        >
          <IconSettingsInput
            :input-value="iconSize"
            input-type="size"
            @icon-settings-size:input="_setIconSize"
          />
        </IconSettingsSection>

        <IconSettingsSection
          title="Icon color"
        >
          <IconSettingsInput
            :input-value="iconColor"
            input-type="color"
            @icon-settings-color:input="_setIconColor"
          />
        </IconSettingsSection>

        <button
          class="wrapper__close-icon"
          @click="closeSettings"
        >
          <VueSvg :icon-html="getIcon('close-icon').htmlValue" />
        </button>
      </form>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  watch, ref, Ref, defineComponent,
} from '@vue/composition-api';
import { useGetters, useActions } from '@u3u/vue-hooks';

import debounce from '@/utils/debounce';
import isValidColor from '@/utils/is-valid-color';

import VueSvg from '@/layouts/vue-svg/VueSvg.vue';
import IconSettingsSection from '@/components/icon-settings/icon-settings-section/IconSettingsSection.vue';
import IconSettingsInput from '@/components/icon-settings/icon-settings-input/IconSettingsInput.vue';

const checkValue = (messageFor: string, value: string) => {
  let notificationMessage = `${messageFor} of icons has been set to ${value}`;
  let isError = false;

  if (messageFor === 'Color' && !isValidColor(value)) {
    notificationMessage = 'Color is not valid, it should be css color keyword, hex value or \'currentColor\'';
    isError = true;
  }

  if (!value.length) {
    notificationMessage = `${messageFor} of icons is not set`;
  }

  return {
    notificationMessage,
    isError,
  };
};

const useIconSize = () => {
  const { setIconSize, sendNotification } = useActions(['setIconSize', 'sendNotification']);
  const { getIconSize } = useGetters(['getIconSize']);

  const iconSize: Ref<string> = ref(getIconSize.value);

  const _setIconSize = debounce((_iconSize: string) => {
    const { notificationMessage, isError } = checkValue('Size', _iconSize);

    iconSize.value = _iconSize;

    if (!isError) {
      setIconSize(iconSize.value);
    }

    sendNotification({
      message: notificationMessage,
      isError,
    });
  }, 1000);

  // Needs to watch for global iconSize change in order to update
  // when there is change in icon view
  watch(getIconSize, () => {
    iconSize.value = getIconSize.value;
  });

  return {
    iconSize,
    _setIconSize,
  };
};

const useIconColor = () => {
  const { setIconColor, sendNotification } = useActions(['setIconColor', 'sendNotification']);
  const { getIconColor } = useGetters(['getIconColor']);

  const iconColor: Ref<string> = ref(getIconColor.value);

  const _setIconColor = debounce((_iconColor: string) => {
    const { notificationMessage, isError } = checkValue('Color', _iconColor);

    iconColor.value = _iconColor;

    if (!isError) {
      setIconColor(iconColor.value);
    }

    sendNotification({
      message: notificationMessage,
      isError,
    });
  }, 1000);

  watch(getIconColor, () => {
    iconColor.value = getIconColor.value;
  });

  return {
    iconColor,
    _setIconColor,
  };
};

export default defineComponent({
  components: {
    VueSvg,
    IconSettingsSection,
    IconSettingsInput,
  },
  props: {
    openSettings: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { getIcon } = useGetters(['getIcon']);
    const { setIconSize, setIconColor } = useActions(['setIconSize', 'setIconColor']);

    const closeSettings = () => {
      emit('icon-settings:close');
    };

    const { iconSize, _setIconSize } = useIconSize();
    const { iconColor, _setIconColor } = useIconColor();

    watch(() => props.openSettings, () => {
      setIconSize(iconSize.value);
      setIconColor(iconColor.value);
    });

    return {
      getIcon,
      closeSettings,

      iconSize,
      _setIconSize,

      iconColor,
      _setIconColor,
    };
  },
});
</script>

<style lang="scss" scoped>
.icon-settings {
  width: 14rem;
  height: fit-content;
  min-height: 10rem;
  padding: .7rem 1rem;
  position: absolute;
  top: 0;
  right: -4px;
  transform-origin: top right;
  z-index: 1000;

  background: var(--primary);
  border: 1px solid var(--secondary);
  border-radius: 10px;
  font-size: 1rem;
}

.icon-settings__wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.wrapper__close-icon {
  --size: 1.1rem;

  width: var(--size);
  height: var(--size);
  position: absolute;
  top: 0;
  right: 0;

  background: none;
  color: var(--font-clr);
}

/* SETTINGS TRANSITION */

.settings-fade-in-enter-active {
  transition: all 500ms ease-in-out;
}

.settings-fade-in-leave-active {
  transition: all 500ms ease-in-out;
}

.settings-fade-in-enter,
.settings-fade-in-leave-to {
  transform: scale(.1, .1);

  opacity: 0;
  pointer-events: none;
}

.settings-fade-in-enter-to
.settings-fade-in-leave {
  transform: scale(1, 1);

  opacity: 1;
  pointer-events: all;
}
</style>
