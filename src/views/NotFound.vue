<script lang="ts" setup>
import Container from '@/layouts/Container.vue'
import Hero from '@/components/hero/Hero.vue'
import Illustration from '@/layouts/Illustration.vue'
</script>

<template>
  <container use-flex>
    <hero
      headline="404 error"
      sub-headline="The page you were searching for was not found"
    />

    <illustration name="search" />
  </container>
</template>
