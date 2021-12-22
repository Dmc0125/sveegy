<script lang="ts" setup>
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import Hero from '@/components/Hero.vue'
import Illustration from '@/components/Illustration.vue'
</script>

<template>
  <layout-default>
    <hero
      headline="Sveegy"
      sub-headline="Choose from many free svg icons and use it with just one click"
    />

    <illustration name="browse" />
  </layout-default>
</template>
