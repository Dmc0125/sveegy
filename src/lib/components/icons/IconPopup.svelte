<script lang="ts">
  import transitionFn from '$lib/utils/popupTransition'
  import { createSvgElement, getIconPaths, createDownloadableSvg, getIconVariations, cachedIconData } from '$lib/utils/icons'
  import { iconsOptions, icons as iconsStore } from '$lib/store/icons'
  import { frameworksSvelteCodeSample, frameworksVueCodeSample } from '$lib/codeSamples'

  import Icon from './Icon.svelte'
  import Overlay from '$lib/components/utils/Overlay.svelte'
  import Button from '$lib/components/utils/Button.svelte'
  import CodeSample from '$lib/components/utils/CodeSample.svelte'
  import ButtonIcon from '$lib/components/utils/ButtonIcon.svelte'
  import NotFoundIllustration from '../illustrations/NotFoundIllustration.svelte'

  $: show = !!$iconsStore.openedIcon

  let windowWidth: number

  $: iconPaths = show ? getIconPaths($iconsStore.selectedType, $iconsStore.openedIcon) : undefined
  $: iconHtml = iconPaths ? createSvgElement(iconPaths, $iconsStore.selectedType, {
    clr: $iconsOptions.color,
    size: $iconsOptions.size,
  }) : ''

  const usageLanguages = ['vue', 'svelte'] as const
  type UsageLang = typeof usageLanguages[number]
  let usageLang: UsageLang = 'vue'

  const createUsageCodeSample = (_usageLang: UsageLang, _iconId: string) => {
    const iconImport = _iconId
      .split('-')
      .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
      .join('')

    // TODO: USE TPYE
    return _usageLang === 'vue'
      ? frameworksVueCodeSample.replace('SvHeartStroke', `Sv${iconImport}`)
      : frameworksSvelteCodeSample
  }
  $: usageCodeSample = $iconsStore.openedIcon ? createUsageCodeSample(usageLang, $iconsStore.openedIcon) : ''

  let notifType: 'success' | 'error' | null = null
  let timeoutId: NodeJS.Timeout | null = null
  const copy = async () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      notifType = null
    }

    try {
      await navigator.clipboard.writeText(iconHtml)
      notifType = 'success'
    } catch (error) {
      notifType = 'error'
    }

    timeoutId = setTimeout(() => {
      notifType = null
    }, 2000)
  }

  $: downloadUrl = iconPaths ? createDownloadableSvg(iconPaths, $iconsStore.selectedType) : ''
  $: iconVariations = iconPaths ? getIconVariations($iconsStore.openedIcon) : undefined
</script>

<svelte:window bind:innerWidth="{windowWidth}" />

{#if $iconsStore.openedIcon}
  <Overlay bind:show on:close-popup="{() => $iconsStore.openedIcon = null}" disableScroll="{false}">
    <div on:click|stopPropagation class="icon-popup" transition:transitionFn="{windowWidth}">
      <header class="icon-popup__header">
        <h1>
          {$iconsStore.openedIcon[0].toUpperCase()}{$iconsStore.openedIcon.slice(1).replace('-', ' ')}
        </h1>
        <ButtonIcon iconId="close" on:click="{() => $iconsStore.openedIcon = null}" />
      </header>

      {#if iconPaths}
        <main class="icon-popup__main">
          <div class="icon-popup__icon-container">
            <Icon size="5rem" iconId="{$iconsStore.openedIcon}" iconType="{$iconsStore.selectedType}" />
          </div>

          <div class="icon-popup__code-icon-group">
            <Button tag="a" href="{downloadUrl}" download="{$iconsStore.openedIcon}" title="Download" style="100" padding>
              <Icon iconId="download-alt" size="1.5rem" />
              Download
            </Button>

            <Button tag="button" style="300" padding notification="{notifType}" on:click={copy}>
              <Icon iconId="clipboard" size="1.5rem" />
              Copy
            </Button>
          </div>

          <CodeSample lang="html" bg="primary" content="{iconHtml}" />
        </main>

        <section class="icon-popup__usage-section">
          <header class="icon-popup__usage-section-header">
            <h2>Usage</h2>

            <div class="icon-popup__btn-lang-switch">
              {#each usageLanguages as currentUsageLang}
                <Button
                  tag="button"
                  size="2rem"
                  style="{usageLang === currentUsageLang ? '100' : '400'}"
                  padding
                  on:click="{() => usageLang = currentUsageLang}"
                >
                  {currentUsageLang[0].toUpperCase()}{currentUsageLang.slice(1).toLowerCase()}
                </Button>
              {/each}
            </div>
          </header>

          <CodeSample content="{usageCodeSample}" bg="primary" lang="vue" />
        </section>

        {#if iconVariations.length}
          <div class="icon-popup__variations">
            {#each iconVariations as variation}
              <span class="icon-popup__variation">
                {variation}
              </span>
            {/each}
          </div>
        {/if}
      {:else}
        <h5 class="icon-popup__information">Seems like the icon you are searching for has not been created yet...</h5>
        <NotFoundIllustration class="icon-popup__not-found-illustration" />
      {/if}
    </div>
  </Overlay>
{/if}

<style lang="scss">
  .icon-popup {
    width: 100%;
    height: fit-content;
    max-height: 85%;
    padding: 1.25rem;
    position: absolute;
    inset: auto 0 0 0;
    overflow: auto;

    border-radius: 6px 6px 0 0;
    background: var(--bg-clr-primary);

    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;

    &__header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      color: var(--font-clr-secondary);
    }

    &__main {
      display: grid;
      row-gap: 1rem;
    }

    &__icon-container {
      width: 100%;
      padding: 3rem 0;

      border-radius: 6px;
      background: rgba(var(--cta-rgb-primary), .1);
      color: var(--font-clr-primary);

      display: grid;
      place-items: center;
    }

    &__code-icon-group {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__usage-section {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
    }

    &__usage-section-header {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      color: var(--font-clr-secondary);
    }

    &__btn-lang-switch {
      display: flex;
      align-items: center;
      column-gap: 1rem;
    }
  }

  :global(.app-wrapper[dark-mode="true"]) .icon-popup__icon-container {
    background: rgba(var(--cta-rgb-primary), .3);
  }

  .icon-popup__information {
    font-size: 1.15rem;
    font-weight: 500;
    text-align: center;
    color: var(--font-clr-secondary);
  }

  .icon-popup {
    &__variations {
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      column-gap: 1rem;
    }

    &__variation {
      padding: .25rem .7rem;

      background: rgba(var(--cta-rgb-primary), .2);
      border-radius: 6px;
      color: var(--font-clr-primary);
      font-size: .95rem;
    }
  }

  :global(.app-wrapper[dark-mode="true"]) .icon-popup__variation {
    background: rgba(var(--cta-rgb-primary), .6);
  }

  @media (min-width: 400px) {
    .icon-popup {
      width: min(90%, 850px);
      max-height: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      border-radius: 6px;
    }

    :global(.icon-popup__not-found-illustration) {
      width: 80%;
      max-width: 350px;
      margin-inline: auto;
      margin-block: 2rem;
    }
  }

  @media (min-width: 550px) {
    .icon-popup {
      &__main {
        column-gap: 1rem;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto 1fr;
      }

      &__icon-container {
        padding-block: 0;
        grid-row: 1 / 3;
      }
    }
  }
</style>
