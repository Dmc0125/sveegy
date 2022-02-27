<script lang="ts">
export let tableHeaderColumns: string[]
export let tableColumns: string[][]

const highlightPrefix = '#h_'
const formatColumnContent = (content: string) => {
  if (content.startsWith(highlightPrefix)) {
    return `<p class="code-highlight">${content.replace(highlightPrefix, '')}</p>`
  }

  return `<p>${content}</p>`
}

const columnsCount = tableColumns.length
</script>

<div class="w-screen overflow-x-auto md:w-full mt-4">
  <div
    class="
      h-fit w-[max(500px,100%)] grid grid-cols-[100px_1fr_1fr_150px] items-center justify-items-start
      gap-x-6 gap-y-1 px-[5%] md:px-0 font-default-clr
    "
    style="grid-template-rows: auto auto{' 1fr'.repeat(columnsCount)}"
  >
    {#each tableHeaderColumns as tableHeaderColumn}
      <h4 class="font-bold font-secondary-clr text-[.925rem]">{tableHeaderColumn}</h4>
    {/each}
    
    <div class="w-full h-[1px] col-start-1 col-end-5 bg-gray-300 dark:bg-slate-700"></div>

    {#each tableColumns as tableColumn}
      {#each tableColumn as columnContent}
        {@html formatColumnContent(columnContent)}
      {/each}
    {/each}
  </div>
</div>
