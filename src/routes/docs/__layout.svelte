<script lang="ts">
import DocsLinksSection from '$lib/components/docs/DocsLinksSection.svelte'
import DocsNav from '$lib/components/docs/DocsNav.svelte'
import DocsSubheader from '$lib/components/docs/DocsSubheader.svelte'
import DocsWrapper from '$lib/components/docs/DocsWrapper.svelte'
</script>

<main class="w-fit h-full md:pt-4 pb-8 mx-auto lg:grid lg:grid-cols-[200px_auto] gap-x-8">
  <nav class="h-full w-[200px] fixed hidden lg:flex col-start-1 col-end-2 flex-col gap-y-4">
    <h1 class="text-lg font-bold font-secondary-clr">Documentation</h1>
    <DocsLinksSection />
  </nav>

  <div class="w-full md:max-w-[700px] h-fit flex flex-col gap-y-6 mx-auto lg:col-start-2 lg:col-end-3">
    <DocsWrapper>
      <DocsSubheader />
    </DocsWrapper>
    <slot />
  </div>
</main>

<DocsNav />
