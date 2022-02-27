<script lang="ts">
export let lang: string
let className = ''
export { className as class }
</script>


<section
  class="
    relative h-fit code-wrapper-bg font-inverse-clr md:rounded-md max-w-[100vw] ring-effect
    {className}
  "
>
  <span class="absolute right-[.5rem] top-[.2rem] font-semibold text-slate-500 text-sm">{lang}</span>

  <div class="w-full overflow-x-auto px-[5%] md:px-[1.5rem] py-4 text-[.9rem] sm:text-base">
    <slot />
  </div>
</section>
