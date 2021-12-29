<script lang="ts" setup>
import {
  computed, Ref, ref, onMounted,
} from 'vue'
import { useRouter } from 'vue-router'
import { useEventListener } from '@vueuse/core'

import SvgWrapper from '@/components/SvgWrapper.vue'
import CopyIcon from '@/components/CopyIcon.vue'
import IconSettings from '@/components/IconSettings.vue'
import SwitchButton from '@/components/SwitchButton.vue'

import useIcons from '@/hooks/useIcons'
import createDownloadUrl from '@/utils/createDownloadUrl'
import createIconName from '@/utils/createIconName'
import useNotification from '@/hooks/useNotification'

const props = defineProps<{
  id: string,
  paths: string[]
  variations: string[],
}>()

const router = useRouter()

const {
  createPrettifiedHtml, createDownloadHtml, usingClasses, toggleUsingClasses, usingJsx, toggleUsingJsx,
} = useIcons()
const prettifiedHtml = computed(() => createPrettifiedHtml(props.paths))
const downloadUrl = computed(() => createDownloadUrl(createDownloadHtml(props.paths)))

const { showNotification } = useNotification()
const sendDownloadNotification = () => {
  showNotification('Your download should have began successfully', false)
}

useEventListener(window, 'keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    router.push({ path: '/icons' })
  }
})

const htmlContainer = ref(null) as unknown as Ref<HTMLElement>
onMounted(() => {
  const copyBtn = htmlContainer.value.querySelector('.copy-icon') as HTMLButtonElement
  copyBtn.focus()
})
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
            <h1>{{ createIconName(props.id) }}</h1>

            <router-link
              class="top-section__close-icon"
              to="/icons"
            >
              <svg-wrapper icon="close-icon" />
            </router-link>
          </div>

          <ul
            v-if="props.variations.length"
            class="popup-header__variations"
          >
            <li
              v-for="variation in props.variations"
              :key="variation"
            >
              {{ variation }}
            </li>
          </ul>
        </header>

        <main class="selected-icon">
          <svg-wrapper
            size="200px"
            :icon="props.id"
          />
        </main>

        <icon-settings class="icon-popup__icon-settings">
          <a
            class="popup-settings__download-btn"
            :href="downloadUrl"
            :download="`${props.id}-icon.svg`"
            @click="sendDownloadNotification"
          >
            <span>Download</span>
            <svg-wrapper
              class="download-btn__icon"
              icon="download-alt-icon"
            />
          </a>
        </icon-settings>

        <section class="icon-popup__switches">
          <div class="switch-wrapper">
            <switch-button
              :is-active="usingClasses"
              @click="toggleUsingClasses"
            />
            <span>Classes</span>
          </div>
          <div class="switch-wrapper switch-wrapper--jsx">
            <switch-button
              :is-active="usingJsx"
              icon="code"
              @click="toggleUsingJsx"
            />
            <span>JSX</span>
          </div>
        </section>

        <div
          ref="htmlContainer"
          class="icon-popup__icon-html"
        >
          <copy-icon
            :copy-value="prettifiedHtml"
            show-always
          />

          <div class="icon-html__html-wrapper">
            <p class="html-wrapper__copy-value">
              {{ prettifiedHtml }}
            </p>
          </div>
        </div>
      </section>
    </transition>
  </main>
</template>

<style lang="scss" scoped>
.overlay {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  background: var(--modal-bg-clr);
}

.icon-popup {
  width: 100%;
  max-width: min(100vw, 800px);
  height: fit-content;
  max-height: 90%;
  padding: 1.5rem 1.5rem;
  position: absolute;
  bottom: 0;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 100%;
  gap: 1.5rem;

  background: var(--primary-clr);
  border-radius: var(--border-radius);
}

.popup-header__top-section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.4rem;
    font-weight: 400;
  }
}

.top-section__close-icon {
  --size: 2rem;
  width: var(--size);
  height: var(--size);

  background: var(--primary-clr);
  border-radius: var(--border-radius);

  &:focus {
    box-shadow: var(--focus-outline);
  }
}

.popup-header__variations {
  width: 100%;
  margin-top: .5rem;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  row-gap: .5rem;

  li {
    height: 1.7rem;
    padding: .2rem .7rem;

    background: rgba(var(--call-to-action-rgb), .2);
    color: var(--font-secondary-clr);
    border-radius: 1rem;
    font-size: 12px;
    font-weight: 700;

    display: flex;
    align-items: center;
  }
}

.selected-icon {
  width: 100%;
  height: fit-content;

  border-radius: var(--border-radius);
  color: var(--font-primary-clr);
  background: var(--primary-gradient-clr);

  svg {
    display: block;
    margin: auto;
  }
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
  display: grid;
  row-gap: 1rem;
}

.popup-settings__download-btn {
  width: 140px;
  height: 2.5rem;

  background: var(--call-to-action-clr);
  color: var(--font-inverse-clr);
  border-radius: var(--border-radius);
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: var(--font-inverse-clr);
  }

  &:hover {
    opacity: var(--hover-opacity);
  }

  &:focus {
    box-shadow: var(--focus-outline);
  }
}

.download-btn__icon {
  height: 1.5rem;
  width: 1.5rem;
  margin-left: .8rem;
}

.icon-popup__switches {
  width: 100%;
  display: flex;
  align-items: center;
}

.switch-wrapper {
  width: 100%;
  display: flex;
  align-items: center;

  span {
    margin-left: 1rem;
  }
}

.icon-popup__icon-html {
  width: 100%;
  position: relative;

  background: var(--third-clr);
  border-radius: var(--border-radius);
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

  .selected-icon {
    width: 300px;
    justify-self: center;
  }

  .popup-footer {
    grid-gap: 1.5rem;
  }

  .icon-popup__switches {
    column-gap: 2rem;
  }

  .switch-wrapper {
    width: fit-content;
  }

  .slide-in-enter-active, .slide-in-leave-active {
    transition: none;
  }
}

@include desktop-xs {
  .icon-popup {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto 1fr auto;
  }

  .popup-header {
    grid-column: 1 / -1;
  }

  .selected-icon {
    width: 100%;
    grid-row: 2 / 4;
  }

  .icon-popup__icon-settings {
    align-self: flex-start;
  }

  .icon-popup__switches {
    align-self: flex-start;
  }

  .icon-popup__icon-html {
    grid-column: 1 / -1;
  }
}
</style>
