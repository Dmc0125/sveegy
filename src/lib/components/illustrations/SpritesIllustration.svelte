<script lang="ts">
  import CodeEditorSample from '../home/CodeEditorSample.svelte'
</script>

<div class="sprites-illustration">
  <svg
    class="sprites-illustration__img"
    viewBox="0 0 447 468"
    fill="none"
  >
    <circle cx="380" cy="152" r="67" fill="var(--cta-clr-primary)"/>
    <circle cx="90" cy="444" r="24" fill="var(--cta-clr-primary)"/>
    <circle cx="45" cy="45" r="45" fill="var(--code-bg-clr-primary)"/>
  </svg>
  <CodeEditorSample slot="illustration" class="sprites-illustration__code-editor" />
</div>

<style lang="scss">
  .sprites-illustration {
    width: 100%;
    grid-template-rows: 8rem auto 1fr;
    grid-template-columns: 10% 80% 10%;

    &__img {
      width: 360px;
      display: none;
      grid-row: 1 / 4;
      grid-column: 1 / 3;
    }
  }
  
  :global(.sprites-illustration__code-editor) {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
  }

  @media (min-width: 500px) {
    .sprites-illustration {
      display: grid;
    }

    .sprites-illustration__img {
      display: inherit;
    }
    
    :global(.sprites-illustration__code-editor) {
      justify-self: center;
    }
  }  
</style>
