<script lang="ts">
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

export let externalToggle = false
export let isActive = false

const onClick = () => {
  if (!externalToggle) {
    isActive = !isActive
  }
  dispatch('toggle', { isActive })
}
</script>

<button
  class="btn-wrapper flex items-center h-[var(--height)] w-[var(--width)] px-[2px] secondary-bg rounded-full ring-effect"
  on:click="{onClick}"
>
  <div class="btn-toggle font-default-clr {isActive ? 'btn-toggle-active cta-bg text-gray-200' : 'bg-gray-400'} h-[var(--size)] w-[var(--size)] p-[2px] rounded-full transition-all">
    <slot></slot>
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
