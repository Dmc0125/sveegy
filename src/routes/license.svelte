<script lang="ts">
import Illustration from '$lib/components/Illustration.svelte'
import Landing from '$lib/layouts/Landing.svelte'
</script>

<svelte:head>
  <title>Sveegy &bull; License</title>
</svelte:head>

<Landing>
  <section slot="text" class="font-default-clr w-[min(90%,485px)] flex flex-col gap-y-5">
    <h1 class="text-3xl font-semibold">License</h1>
    <div class="flex flex-col gap-y-4">
      <h2 class="text-2xl font-medium">Copyright 2022 Dominik Michal</h2>
      <p class="font-secondary-clr">
        All images, vectors, and assets published on sveegy are free to use.
        You can use them for commercial and noncommercial purposes. There is no need of
        attribution or asking for permission from author or Sveegy.
      </p>
      <p class="font-secondary-clr">
        Sveegy grants you nonexclusive, worldwide copyright license to download, copy,
        modify, distribute, perform and use the assets provided from Sveegy for free,
        including for commercial purposes, without need of attribution or permission from
        author or Sveegy. This license however, does not include the right to compile assets
        from Sveegy, to replicate similar or competing service in any form or to redistribute
        the assets in packs. This extends to automated and non-automated ways to link, embed,
        scrape, search or download the assets included on the website without our consent.
      </p>
    </div>

    <div class="flex flex-col gap-y-4">
      <h2 class="text-2xl font-medium">Illustrations</h2>
      <p class="font-secondary-clr">
        All illustrations used in Sveegy are from
        <a
          class="text-blue-600 dark:text-indigo-500 font-medium hover:text-blue-500 dark:hover:text-indigo-400"
          href="https://undraw.co/"
          rel="external"
          target="_blank"
        >
          Undraw.
        </a>
        They provide free beautiful svg illustrations.
      </p>
    </div>
  </section>
  <Illustration slot="image" name="license" />
</Landing>
