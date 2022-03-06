<script lang="ts">
import IconWrapper from './utils/IconWrapper.svelte'

import { usingClasses } from '$lib/store/iconsSettings'

let className = ''
export { className as class }
</script>

<button
  class="{className} w-fit px-2 default-hover-bg rounded-md flex items-center justify-between font-secondary-clr ring-effect"
  on:click="{() => $usingClasses = !$usingClasses}"
>
  <span class="flex-shrink-0">{$usingClasses ? 'No classes' : 'Use classes'}</span>
  <IconWrapper icon="swap" class="h-[70%] w-fit ml-2 transition-all duration-300 {$usingClasses ? 'rotate-[180deg]' : 'rotate-0'}" />
</button>
