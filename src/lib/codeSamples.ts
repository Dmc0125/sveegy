/* eslint-disable max-len */
export const usageCodeSample = `<body>
  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none">
    <path d="M4.5 6H19.5M4.5 10H14.5M4.5 14H16.5M4.5 18H12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</body>`

export const frameworksSvelteCodeSample = `<script>
  import { SvHeartStroke } from '@sveegy/icons-svelte'
</script>

<button class="like-button">
  Like
  <SvHeartStroke size="40px" />
</button>`

export const frameworksVueCodeSample = `<script setup>
import { SvHeartStroke } from '@sveegy/icons-vue'
</script>

<template>
  <button>
    Like
    <sv-heart-stroke size="40px" />
  </button>
</template>`

export const spritesCodeSample = `<body>
  <svg>
    <use xlink:href="stroke.svg#sv-heart-stroke" />
  </svg>
</body>`
