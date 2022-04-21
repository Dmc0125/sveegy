<script lang="ts">
  export let value: boolean
</script>

<button
  class="switch-button {value ? 'switch-button-active' : ''}"
  type="button"
  on:click="{() => value = !value}"
>
  <div class="switch-button__left-side side-wrapper">
    <slot name="left-side" />
  </div>
  <div class="switch-button__right-side side-wrapper">
    <slot name="right-side" />
  </div>
</button>

<style lang="scss">
  .switch-button {
    --button-height: 1.5rem;
    --button-width: 2.75rem;

    width: var(--button-width);
    height: var(--button-height);
    padding: 2px;
    position: relative;

    border-radius: calc(var(--button-height) / 2);
    background: var(--bg-clr-secondary);

    &:focus {
      box-shadow: var(--focus-shadow-offset);
    }

    &-active::after {
      transform: translateX(calc(var(--button-width) - var(--button-height)));
    }

    &::after {
      height: 100%;
      aspect-ratio: 1;
      content: '';

      display: block;
      border-radius: 50%;
      background: var(--cta-clr-primary);
      transition: transform var(--transition-timing) ease-in-out;
    }

    &__left-side {
      color: var(--bg-clr-primary);
    }

    &-active .switch-button__left-side {
      color: var(--font-clr-primary);
    }

    &__right-side {
      transform: translateX(calc(var(--button-width) - var(--button-height)));
      color: var(--font-clr-primary);
    }

    &-active .switch-button__right-side {
      color: var(--bg-clr-primary);
    }
  }

  :global(.app-wrapper[dark-mode="true"]) .switch-button-active .switch-button__right-side {
    color: var(--font-clr-primary);
  }

  .side-wrapper {
    height: 100%;
    aspect-ratio: 1;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 150ms ease-in-out;
  }

  // @media (min-width: 500px) {
  //   .switch-button {
  //     --button-height: 2rem;
  //     --button-width: 3.75rem;
  //   }
  // }
</style>
