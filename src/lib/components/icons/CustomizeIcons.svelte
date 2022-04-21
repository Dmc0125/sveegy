<script lang="ts">
  import { fade } from 'svelte/transition'
  import { browser } from '$app/env'

  import { iconsOptions } from '$lib/store/icons'
  import transitionFn from '$lib/utils/popupTransition'

  import Overlay from '../utils/Overlay.svelte'
  import ButtonIcon from '../utils/ButtonIcon.svelte'

  export let show: boolean

  let windowWidth: number

  const isValidColor = (clr: string) => {
    if (browser && clr !== 'currentColor' && clr.length) {
      const _style = document.createElement('div').style
      _style.color = clr
      return !!_style.color.length
    }

    return false
  }
</script>

<svelte:window bind:innerWidth="{windowWidth}" />

<Overlay bind:show>
  <form class="customize-menu" on:click|stopPropagation transition:transitionFn="{windowWidth}">
    <header class="customize-menu__header">
      <h1 class="customize-menu__heading">Customize icons</h1>
      <ButtonIcon iconId="close" on:click="{() => show = false}" />
      <p class="customize-menu__information">Values entered here will be used in the html that can be copied.</p>
    </header>

    <div class="input-wrapper customize-menu__clr-input">
      <label for="color">Color</label>
      <input type="text" bind:value="{$iconsOptions.color}" id="color">
      {#if isValidColor($iconsOptions.color)}
        <div
          style="background: {$iconsOptions.color}"
          class="customize-menu__clr-preview"
          transition:fade="{{ duration: 150 }}"
        />
      {/if}
    </div>

    <div class="input-wrapper">
      <label for="size">Size</label>
      <input type="text" bind:value="{$iconsOptions.size}" id="size">
    </div>
  </form>
</Overlay>

<style lang="scss">
  .customize-menu {
    width: min(100%, 400px);
    padding: 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    row-gap: .75rem;

    background: var(--bg-clr-primary);
    border-radius: 6px 6px 0 0;

    &__header {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      row-gap: .15rem;
    }

    &__heading {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--font-clr-primary);
    }

    &__information {
      grid-column: 1 / -1;
      color: var(--font-clr-secondary);
      font-size: .85rem;
      font-weight: 550;
    }

    &__clr-preview {
      --size: 1.25rem;
      width: var(--size);
      height: var(--size);
      position: absolute;
      right: .75rem;
      bottom: calc(var(--input-height) * .5);
      transform: translateY(50%);

      border-radius: 50%;
      background: red;
      border: 1px solid var(--code-bg-clr-primary);
    }
  }

  .input-wrapper {
    --input-height: 2.5rem;
    width: min(100%, 400px);

    label {
      color: var(--font-clr-secondary);
    }

    input {
      width: 100%;
      height: var(--input-height);
      margin-top: .25rem;
      padding: 0 .75rem;

      background: var(--bg-clr-secondary);
      color: var(--font-clr-primary);
      border-radius: 6px;

      &:focus {
        box-shadow: var(--focus-shadow-offset);
      }
    }
  }

  .customize-menu__clr-input {
    position: relative;

    input {
      padding-right: 2.5rem;
    }
  }

  @media (min-width: 400px) {
    .customize-menu {
      top: 50%;
      transform: translate(-50%, -50%);
      bottom: auto;
      border-radius: 6px;
    }
  }
</style>
