<script lang="ts">
  import highlight from '$lib/utils/highlight'

  export let content: string

  export let lang: string
  export let bg: 'primary' | 'secondary' = 'primary'
  let className = ''
  export { className as class }

  $: highlightedContent = highlight(content)
</script>

<div
  class="code-sample {className}"
  style="background: var(--code-bg-clr-{bg})"
>
  <p class="code-sample__lang">{lang}</p>

  <pre class="code-sample__content">
    <code class="code-sample__content__code">{@html highlightedContent}</code>
  </pre>
</div>

<style lang="scss">
  @font-face {
    font-family: 'Roboto Mono';
    src: url('/fonts/RobotoMono-VariableFont_wght.ttf');
    font-weight: 100 1000;
  }

  .code-sample {
    height: fit-content;
    position: relative;
    border-radius: 6px;
    overflow-x: auto;

    &__lang {
      position: absolute;
      top: 5px;
      right: .4rem;

      font-size: .8rem;
      color: var(--bg-clr-secondary);
      opacity: .5;
      font-family: 'Roboto Mono';
    }

    &__content {
      padding: 1rem;
      overflow-x: auto;
      display: block;
      color: var(--bg-clr-primary);
      white-space: normal;

      &__code {
        display: block;
        width: fit-content;
        font-size: .9rem;
        font-family: 'Roboto Mono';
        white-space: pre;
        line-height: 1.2;
        
        :global(span) {
          font-family: 'Roboto Mono';
        }
      }
    }
  }

  :global(.app-wrapper[dark-mode="true"]) {
    .code-sample__lang {
      opacity: .85;
    }

    .code-sample__content__code {
      color: var(--font-clr-secondary);
    }
  }

  @media (min-width: 500px) {
    .code-sample__content__code {
      font-size: .95rem;
    }
  }
</style>
