<script lang="ts">
  import Icon from '$lib/components/icons/Icon.svelte'
</script>

<div class="output docs__mb">
  <button class="like-btn-output" type="button">
    Like
    <Icon iconId="heart" size="40px" />
  </button>
</div>

<style lang="scss">
  .output {
    width: 100%;
    padding-block: 2rem;

    border: var(--bg-clr-secondary) 1px solid;
    border-radius: 6px;

    display: grid;
    place-items: center;
  }

  .like-btn-output {
    padding: 0.25rem 1rem;

    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    border-radius: 6px;
    background: var(--cta-clr-primary);
    color: var(--bg-clr-primary);
    font-size: 1.25rem;
  }

  :global(.app-wrapper[dark-mode="true"]) .like-btn-output {
    color: var(--font-clr-primary);
  }
</style>
