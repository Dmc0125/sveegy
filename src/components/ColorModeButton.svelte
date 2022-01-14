<script lang="ts">
import ToggleButton from './ToggleButton.svelte'
import IconWrapper from './IconWrapper.svelte'

import { colorMode } from '$lib/store'
import { browser } from '$app/env'

const changeColorMode = () => {
  if ($colorMode === 'light') {
    $colorMode = 'dark'    
  } else if ($colorMode === 'dark') {
    $colorMode = 'light'
  }
}

$: {
  if (browser) {
    const savedColorMode = localStorage.getItem('colorMode')
    
    if (savedColorMode && (savedColorMode === 'light' || savedColorMode === 'dark')) {
      $colorMode = savedColorMode
    }
  }
}

$: {
  if (browser) {
    localStorage.setItem('colorMode', $colorMode)
  }
}
</script>

<ToggleButton
  externalToggle="{true}"
  isActive={$colorMode === 'dark'}
  on:toggle={changeColorMode}
>
  <IconWrapper icon={$colorMode === 'light' ? 'sun' : 'moon'} />
</ToggleButton>
