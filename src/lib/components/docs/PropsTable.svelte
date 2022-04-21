<script context="module" lang="ts">
  export type TableDataValue = {
    val: string
    hl?: true
    heading?: true
  } | string

  export type TableData = TableDataValue[][]
</script>

<script lang="ts">
  import Heading from '../utils/Heading.svelte'

  export let heading: string
  export let tableData: TableData

  let className = ''
  export { className as class }
</script>

<div class="props-table {className}">
  <Heading style="300" content={heading} id="props" />

  <div class="props-table__wrapper">
    <div class="props-table__content">
      {#each tableData as tableRow}
        <div>
          {#each tableRow as val}
            {#if typeof val === 'string'}
              <p>{val}</p>
            {:else}
              <svelte:element this="{val.heading ? 'h4' : 'p'}" class="{val.hl ? 'global__highlight' : ''}">
                {val.val}
              </svelte:element>
            {/if}
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .props-table__wrapper {
    width: 100%;
    padding-block: 1rem;
    overflow-x: auto;
  }

  .props-table__content {
    width: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 180px;
    column-gap: 1.5rem;

    div {
      display: flex;
      flex-direction: column;
      row-gap: 0.5rem;
    }

    :global(h4) {
      color: var(--font-clr-secondary);
      font-size: 1rem;
      font-weight: 550;
    }

    :global(p) {
      width: fit-content;
      color: var(--font-clr-primary);
      white-space: nowrap;
    }
  }
</style>
