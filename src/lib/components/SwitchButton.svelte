<script lang="ts">
export let options: string[]
export let defaultIndex: number

export let activeOption = options[defaultIndex]

let className = ''
export { className as class }
</script>

<div class="{className} p-[.2rem] flex items-center gap-x-2 secondary-bg rounded-md">
  {#each options as option}
    <button
      class="
        w-full h-full secondary-hover-bg rounded-md font-medium
        ring-effect ring-offset-2 ring-offset-gray-300 dark:ring-offset-slate-700 ring-opacity-5
        {activeOption === option ? 'bg-gray-400 dark:bg-slate-800' : 'secondary-bg'}
      "
      on:click="{() => activeOption = option}"
    >
      {option}
    </button>
  {/each}
</div>
