<script lang="ts" setup>
import Container from '@/layouts/Container.vue'
import Hero from '@/components/hero/Hero.vue'
import Illustration from '@/layouts/Illustration.vue'
</script>

<template>
  <container use-flex>
    <hero
      headline="Sveegy"
      sub-headline="Choose from many free svg icons and use it with just one click"
    />

    <illustration name="browse" />
  </container>
</template>
