<script lang="ts">
import Buttons from './Buttons.svelte'
import IconWrapper from './IconWrapper.svelte'

import { searchParams } from '$lib/store/searchParams'
import { getIcon } from '$lib/utils/icons'
import { createSvgText, svgTextWrappers } from '$lib/store/svgTextValues'

let mode: 'html' | 'jsx' = 'html'

const icon = getIcon($searchParams.icon, $searchParams['icon-type'])

$: svgText = createSvgText($svgTextWrappers, icon, $searchParams['icon-type'], mode)

let className = 'w-full h-fit'
export { className as class}
</script>

<div class="{className} secondary-bg rounded-md relative">
  <Buttons icon={$searchParams.icon} bind:lang={mode} class="w-52 h-8" />

  <div class="w-full h-fit pt-8 overflow-x-auto">
    <pre class="w-fit h-fit px-4 pb-4">
      {svgText}
    </pre>
  </div>
</div>
