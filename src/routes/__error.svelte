<script lang="ts">
import Illustration from '$lib/components/Illustration.svelte'
import Hero from '$lib/components/utils/Hero.svelte'
import Landing from '$lib/layouts/Landing.svelte'

import { page } from '$app/stores'
</script>

<svelte:head>
  <title>Sveegy &bull; Page not found</title>
</svelte:head>

<Landing>
  <Hero slot="text" heading="404 error" subHeading="{`Page '${$page.url.pathname}' was not found`}" />
  <Illustration name="search" slot="image" />
</Landing>
