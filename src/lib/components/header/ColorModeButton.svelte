<script lang="ts">
import { browser } from '$app/env'

import IconWrapper from '../utils/IconWrapper.svelte'
import { colorMode } from '$lib/store'

const changeColorMode = () => {
  if ($colorMode === 'light') {
    $colorMode = 'dark'    
  } else if ($colorMode === 'dark') {
    $colorMode = 'light'
  }

  localStorage.setItem('colorMode', $colorMode)
}

const initColorMode = () => {
  if (browser) {
    const savedColorMode = localStorage.getItem('colorMode')
    
    if (savedColorMode && (savedColorMode === 'light' || savedColorMode === 'dark')) {
      $colorMode = savedColorMode
    }
  }
}

$: {
  initColorMode()
}
</script>

<button
  class="btn-wrapper flex items-center h-[var(--height)] w-[var(--width)] px-[2px] secondary-bg rounded-full ring-effect"
  on:click="{changeColorMode}"
>
  <div
    class="
      btn-toggle font-default-clr h-[var(--size)] w-[var(--size)] p-[2px] rounded-full transition-all
      {$colorMode === 'dark' ? 'btn-toggle-active cta-bg text-gray-200' : 'bg-gray-400'}
    "
  >
    <IconWrapper icon={$colorMode === 'light' ? 'sun' : 'moon'} />
  </div>
</button>

<style>
.btn-wrapper {
  --width: 2.5rem;
  --height: 1.5rem;
}

@media (min-width: 700px) {
  .btn-wrapper {
    --width: 2.8rem;
    --height: 1.8rem;
  }
}

.btn-toggle {
  --size: calc(var(--height) * 0.85);
  transform: translateX(0);
}

.btn-toggle-active {
  transform: translateX(calc(var(--width) - var(--size) - 4px));
}
</style>
