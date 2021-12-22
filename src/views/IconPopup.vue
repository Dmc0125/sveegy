<script lang="ts" setup>
import {
  computed, Ref, ref, onMounted,
} from 'vue'
import { useRouter } from 'vue-router'
import { useEventListener } from '@vueuse/core'

import SvgWrapper from '@/components/SvgWrapper.vue'
import CopyIcon from '@/components/CopyIcon.vue'
import IconSettings from '@/components/IconSettings.vue'

import useIcons from '@/hooks/useIcons'
import createDownloadUrl from '@/utils/createDownloadUrl'
import createIconName from '@/utils/createIconName'
import { createPrettifiedHtml, createMinifiedHtml } from '@/utils/createIconHtml'
import useNotification from '@/hooks/useNotification'

const props = defineProps<{
  id: string,
  paths: string[]
  variations: string[],
}>()

const router = useRouter()

const { size, color } = useIcons()
const prettifiedHtml = computed(() => createPrettifiedHtml(props.paths, size.value, color.value))
const downloadUrl = computed(() => createDownloadUrl(createMinifiedHtml(props.paths, size.value, color.value)))

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

          <ul class="popup-header__variations">
            <li
              v-for="variation in props.variations"
              :key="variation"
            >
              {{ variation }}
            </li>
          </ul>
        </header>

        <main class="popup-main">
          <div class="popup-main__selected-icon">
            <svg-wrapper :icon="props.id" />
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
          <icon-settings>
            <a
              class="popup-footer__download-btn"
              :href="downloadUrl"
              :download="`${props.id}-icon.svg`"
              @click="sendDownloadNotification"
            >
              <span>Download</span>
              <svg-wrapper
                class="download-btn__icon"
                icon="download-icon"
              />
            </a>
          </icon-settings>

          <div
            ref="htmlContainer"
            class="popup-footer__icon-html"
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
        </footer>
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
  max-width: 600px;
  height: fit-content;
  max-height: 90%;
  position: absolute;
  bottom: 0;
  overflow-y: auto;

  background: var(--primary-clr);
  border-radius: var(--border-radius);
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

.popup-footer__download-btn {
  width: 140px;
  height: 2.5rem;
  grid-column: 1;

  background: var(--call-to-action-clr);
  color: var(--font-inverse-clr);
  border-radius: var(--border-radius);
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

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

.popup-footer__icon-html {
  width: 100%;
  margin-top: 1rem;
  grid-row: -2 / -1;
  grid-column: 1 / -1;
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
