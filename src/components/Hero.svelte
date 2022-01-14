<script lang="ts">
import { goto } from '$app/navigation'

export let heading: string
export let subHeading: string
</script>

<section class="w-[min(90%,485px)] text-center lg:text-left">
  <h2 class="text-[4rem] font-bold font-default-clr">{heading}</h2>
  <h1 class="text-xl font-medium font-secondary-clr md:text-2xl mt-4">{subHeading}</h1>
  <button
    on:click="{() => goto('/icons')}"
    class="cta-bg text-gray-200 font-medium px-8 h-10 mt-8 btn"
  >
    Browse
  </button>
</section>