<script lang="ts">
  import Icon from '../icons/Icon.svelte'
  import CodeSample from '$lib/components/utils/CodeSample.svelte'

  import { frameworksSvelteCodeSample, frameworksVueCodeSample } from '$lib/codeSamples'

  let className = ''
  export { className as class }
</script>

<div class="frameworks-illustration">
  <div class="frameworks-illustration__bg {className}">
    <div class="frameworks-illustration__heart">
      <Icon iconId="heart" size="100%" />
    </div>
    <div class="frameworks-illustration__calendar">
      <Icon iconId="calendar" size="100%" />
    </div>
    <div class="frameworks-illustration__shield">
      <Icon iconId="shield" size="100%" />
    </div>
  </div>

  <CodeSample
    lang="svelte"
    class="frameworks-illustration__code-sample-svelte frameworks-code-sample"
    content={frameworksSvelteCodeSample}
  />
  <CodeSample
    lang="vue"
    bg="secondary"
    class="frameworks-illustration__code-sample-vue frameworks-code-sample"
    content={frameworksVueCodeSample}
  />
</div>

<style lang="scss">
  .frameworks-illustration {
    width: 100%;
    height: fit-content;

    display: grid;
    grid-template-columns: 8% 1fr 8%;
    grid-template-rows: auto 2rem auto 1.5rem 1fr;

    &__bg {
      --heart-size: 2.4rem;
      --calendar-size: 3rem;
      --shield-size: 4rem;

      width: fit-content;
      height: fit-content;
      margin-left: auto;
      grid-row: 1 / 3;
      grid-column: 1 / -1;

      display: grid;
      grid-template-columns: repeat(3, min-content);
      grid-template-rows: var(--calendar-size) var(--heart-size) 3rem 1fr;
      color: var(--bg-clr-primary);

      div {
        border-radius: 6px;
      }
    }

    &__heart {
      width: var(--heart-size);
      height: var(--heart-size);
      grid-column: 1 / 2;
      grid-row: 3 / 4;

      background: var(--cta-clr-primary);
      transform: rotate(-10deg);
    }

    &__calendar {
      width: var(--calendar-size);
      height: var(--calendar-size);
      margin-left: max(3rem, 10vw);
      grid-column: 2 / 3;
      grid-row: 1 / 2;

      background: var(--code-bg-clr-primary);
      transform: rotate(3deg);
    }

    &__shield {
      width: var(--shield-size);
      height: var(--shield-size);
      margin-left: max(3rem, 10vw);
      grid-column: 3 / 4;
      grid-row: 3 / 5;

      background: var(--cta-clr-primary);
      transform: rotate(20deg);
    }
  }

  :global(.frameworks-code-sample) {
    max-width: 600px;
    width: 100%;
    justify-self: center;
  }

  :global(.frameworks-illustration__code-sample-svelte) {
    grid-row: 2 / 5;
    grid-column: 1 / 3;
  }

  :global(.frameworks-illustration__code-sample-vue) {
    grid-row: 4 / 6;
    grid-column: 2 / -1;
  }

  @media (min-width: 650px) {
    :global(.frameworks-code-sample) {
      width: 80%;
    }
  }
</style>
