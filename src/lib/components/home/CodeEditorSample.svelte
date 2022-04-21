<script lang="ts">
  import CodeSample from '../utils/CodeSample.svelte'

  import { spritesCodeSample } from '$lib/codeSamples'

  let className = ''
  export { className as class }
</script>

<section class="code-editor {className}">
  <aside class="code-editor__files">
    <ul class="files__list">
      <li>src</li>
      <li>public</li>
      <li>
        <span class="item__indented">stroke.svg</span>
      </li>
      <li>...</li>
    </ul>
  </aside>

  <main class="code-editor__code">
    <header class="code__opened-file">
      <h4>Index.html</h4>
    </header>

    <CodeSample content={spritesCodeSample} lang="" bg="primary" class="code__sample" />
  </main>
</section>

<style lang="scss">
  .code-editor {
    width: calc(100% + 100vw * 0.1);
    max-width: 600px;
    margin-left: calc(100vw * (-0.05));
    background: var(--code-bg-clr-primary);
    color: var(--bg-clr-primary);
  }

  :global(.app-wrapper[dark-mode='true']) .code-editor {
    color: var(--font-clr-primary);
  }

  .code-editor__files {
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid var(--code-bg-clr-secondary);
  }

  .files__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.6rem;
    list-style: none;

    li,
    span {
      font-size: 0.8rem;
      font-family: 'Roboto Mono';
    }
  }

  .item__indented {
    margin-left: 0.75rem;
  }

  .code__opened-file {
    width: 100%;
    height: 2.5rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--code-bg-clr-secondary);

    h4 {
      font-family: 'Roboto Mono';
      font-size: 0.8rem;
      font-weight: 400;
      color: var(--bg-clr-secondary);
    }
  }

  :global(.app-wrapper[dark-mode='true']) .code__opened-file h4 {
    color: var(--font-clr-secondary);
  }

  @media (min-width: 500px) {
    .code-editor {
      width: 100%;
      margin: 0;
      display: flex;

      border-radius: 6px;

      &__files {
        width: 30%;
        border-bottom: 0;
        border-right: 1px solid var(--code-bg-clr-secondary);
      }
    }

    .files__list li,
    .files__list span {
      font-size: 0.9 rem;
    }

    .code-editor__code {
      width: 70%;
    }

    :global(.code__sample) {
      width: 100%;
    }
  }

  @media (min-width: 800px) {
    .files__list li,
    .files__list span {
      font-size: .95rem;
    }
  }
</style>
