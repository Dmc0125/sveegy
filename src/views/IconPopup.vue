<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import prettifyHtmlValue from '@/utils/copy-svg-wrapper'

import IconBtn from '@/components/icon-btn/IconBtn.vue'
import SvgWrapper from '@/layouts/SvgWrapper.vue'
import CopyIcon from '@/components/copy-icon/CopyIcon.vue'
import IconSettings from '@/components/icon-settings/IconSettings.vue'

import useIconsStore from '@/store/icons'
import { Icon } from '@/types/svg-icons'
import useSettings from '@/hooks/open-settings'
import useNotificationStore from '@/store/notification'

const router = useRouter()
const iconsStore = useIconsStore()

const { toggleSettings, isOpen: openSettings } = useSettings()

const getIcon = computed(() => iconsStore.getIcon)

const useIconData = (id: string) => {
  const createName = (iconId: string) => (
    iconId[0].toUpperCase() + iconId.slice(1).replace(/(-)/g, ' ')
  )

  const { htmlValue, variations } = getIcon.value(id) as Icon
  return {
    iconHtmlValue: htmlValue,
    iconVariations: variations,
    iconName: createName(id),
    iconId: id,
  }
}

const route = useRoute()
const {
  iconHtmlValue, iconVariations, iconName, iconId,
} = useIconData(route.params.id as string)

const iconSize = computed(() => iconsStore.iconSize)
const iconColor = computed(() => iconsStore.iconColor)
const prettifiedHtml = computed(() => prettifyHtmlValue(iconSize.value, iconHtmlValue, iconColor.value))

const notificationStore = useNotificationStore()
const sendDownloadNotification = () => {
  notificationStore.sendNotification({
    message: 'Your download should have began successfully',
    isError: false,
  })
}
</script>

<template>
  <main
    class="overlay"
    @click="router.push({ path: '/icons' })"
  >
    <transition
      name="slide-in"
      appear
    >
      <section
        class="icon-popup"
        @click.stop
      >
        <header class="popup-header">
          <div class="popup-header__top-section">
            <h1>{{ iconName }}</h1>

            <router-link
              class="top-section__close-icon"
              to="/icons"
            >
              <svg-wrapper icon="close-icon" />
            </router-link>
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
            <svg-wrapper :icon="iconId" />
          </div>

          <ul class="popup-main__features">
            <li
              v-for="feature in ['Free for commercial use', 'No need for attribution', 'Comes in svg format', 'Easy to use']"
              :key="feature"
            >
              <span class="features__tick-icon">
                <svg-wrapper icon="tick-icon" />
              </span>
              {{ feature }}
            </li>
          </ul>
        </main>

        <footer class="popup-footer">
          <div
            class="popup-footer__top-section"
            :class="{ 'popup-footer__top-section--expanded': openSettings }"
          >
            <!-- ADD DOWNLOAD ICON -->
            <a
              class="popup-footer__download-btn"
              :href="`/icons/${iconId}.svg`"
              :download="`${iconId}.svg`"
              @click="sendDownloadNotification"
            >Download</a>

            <icon-btn
              class="popup-footer__settings-btn"
              :name="openSettings ? 'close-icon' : 'menu-icon'"
              @click="toggleSettings"
            />

            <icon-settings
              class="popup-footer__settings"
              :open-settings="openSettings"
              @icon-settings:close="toggleSettings"
            />
          </div>
          <div class="popup-footer__icon-html">
            <copy-icon
              :copy-value="iconHtmlValue"
              show-always
            />

            <div class="icon-html__html-wrapper">
              <p class="html-wrapper__copy-value">
                {{ prettifiedHtml }}
              </p>
            </div>
          </div>
        </footer>
      </section>
    </transition>
  </main>
</template>

<style lang="scss" scoped>
.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  background: var(--modal-bg-clr);
}

.icon-popup {
  width: 100%;
  max-width: 600px;
  height: fit-content;
  max-height: 90%;
  position: absolute;
  bottom: 0;
  overflow-y: auto;

  background: var(--primary-clr);
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

  background: var(--primary-clr);
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

    background: var(--secondary-clr);
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
  color: var(--font-primary-clr);
}

.popup-main__features {
  li {
    font-size: 1rem;
    color: var(--font-primary-clr);

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

  grid-gap: 1rem;
}

.popup-footer__top-section {
  max-height: 2.5rem;
  transition: max-height var(--t-duration) ease-in-out;

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr auto;

  &--expanded {
    max-height: 100px;
  }
}

.popup-footer__download-btn {
  width: 140px;
  height: 2.5rem;
  grid-column: 1;

  background: var(--call-to-action-clr);
  color: var(--font-inverse-clr);
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
  grid-column: span -1;
}

.popup-footer__icon-html {
  width: 100%;
  margin-top: 1rem;
  grid-row: -2 / -1;
  grid-column: 1 / -1;
  position: relative;

  background: var(--third-clr);
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

.slide-in-enter-active, .slide-in-leave-active {
  transition: transform var(--t-duration) ease-in-out,
}

.slide-in-enter-to, .slide-in-leave-from {
  transform: translateY(0);
}

.slide-in-enter-from, .slide-in-leave-to {
  transform: translateY(50%);
}

@include tablet-l {
  .overlay {
    height: 100vh;
    min-height: auto;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-popup {
    position: relative;
    height: fit-content;
    max-height: auto;
  }

  .popup-header__top-section h1 {
    font-size: 2rem;
  }

  .popup-footer {
    grid-gap: 1.5rem;
  }

  .slide-in-enter-active, .slide-in-leave-active {
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
