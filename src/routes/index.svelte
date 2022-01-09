<script lang="ts">
import Landing from '$lib/layouts/Landing.svelte'
import Hero from '$lib/components/Hero.svelte'
import Illustration from '$lib/components/Illustration.svelte'
</script>

<svelte:head>
  <title>Sveegy &bull; Home</title>
</svelte:head>

<Landing>
  <Hero slot="text" heading="Sveegy" subHeading="Choose from many free svg icons and use it with just one click" />
  <Illustration slot="image" name="browse" />
</Landing>
