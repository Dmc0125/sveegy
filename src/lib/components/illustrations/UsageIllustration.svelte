<script lang="ts">
  import IconComponent from '../icons/IconComponent.svelte'
  import CodeSample from '../utils/CodeSample.svelte'

  import { usageCodeSample } from '$lib/codeSamples'
</script>

<div class="usage-illustration">
  <svg class="usage-illustration__bg" viewBox="0 0 445 213" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="417" cy="103" r="28" fill="var(--cta-clr-primary)"/>
    <circle cx="199" cy="36" r="36" fill="var(--code-bg-clr-primary)"/>
    <ellipse cx="53.5" cy="159" rx="53.5" ry="54" fill="var(--cta-clr-primary)"/>
  </svg>

  <div class="usage-illustration__icons-demo">
    <IconComponent iconId="add-assets" class="icons-demo__icon icon-left" size="150px" />
    <IconComponent iconId="align-center" class="icons-demo__icon icon-center" size="150px" showOverlay="{true}" />
    <IconComponent iconId="align-left" class="icons-demo__icon icon-right" size="150px" />
  </div>
  <IconComponent
    iconId="align-center"
    size="170px"
    class="usage-illustration__icon"
    showOverlay="{true}"
  />

  <CodeSample
    lang="html"
    class="usage-illustration__code-sample"
    content={usageCodeSample}
  />
</div>
  
<style lang="scss">
  .usage-illustration {
    width: 100%;

    display: grid;
    grid-template-columns: minmax(2rem, 15%) 1fr;
    grid-template-rows: 5rem 1fr 1rem auto;

    &__bg {
      width: 100%;
      max-width: 580px;
      grid-row: 1 / -1;
      grid-column: 1 / -1;
    }
  }

  :global(.usage-illustration__icon) {
    grid-row: 2 / 4;
    grid-column: 2 / -1;
  }

  .usage-illustration__icons-demo {
    width: 500px;
    height: calc(150px + 2rem);
    position: relative;
    margin-inline: auto;
    padding-block: 1rem;

    grid-row: 2 / 4;
    grid-column: 2 / -1;
    display: none;
    overflow: hidden;

    background: var(--bg-clr-primary);
    border-radius: 6px;
    border: 1px solid var(--code-bg-clr-primary);
  }

  :global(.icons-demo__icon) {
    top: 1rem;
    position: absolute !important;
  }

  :global(.icon-left) {
    left: 10%;
    transform: translateX(-50%);
  }

  :global(.icon-center) {
    left: 50%;
    transform: translateX(-50%);
  }

  :global(.icon-right) {
    left: 90%;
    transform: translateX(-50%);
  }

  :global(.usage-illustration__code-sample) {
    width: 100%;
    max-width: 400px;
    margin-inline: auto;
    grid-row: 3 / -1;
    grid-column: 1 / -1;
  }

  @media (min-width: 550px) {
    .usage-illustration {
      grid-template-rows: 8rem 1fr 1rem auto;
    }

    .usage-illustration__icons-demo {
      grid-column: 1 / -1;
    }

    :global(.usage-illustration__icon) {
      display: none !important;
    }

    .usage-illustration__icons-demo {
      display: block;
    }
  }
</style>
