<script lang="ts" setup>
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import Hero from '@/components/Hero.vue'
import Illustration from '@/components/Illustration.vue'
</script>

<template>
  <layout-default>
    <hero
      headline="404 error"
      sub-headline="The page you were searching for was not found"
    />

    <illustration name="search" />
  </layout-default>
</template>
