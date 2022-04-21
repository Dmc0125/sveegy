<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  import Icon from '../icons/Icon.svelte'

  export let hoverStyle: '100' | '200' = '100'
  export let size = '2rem'
  export let type = 'button'
  export let iconId: string
  let className = ''
  export { className as class }

  const dispatch = createEventDispatcher()
  const emitClick = () => {
    dispatch('click')
  }
</script>

<button
  {type}
  class="icon-btn {className} hover-{hoverStyle}"
  style="height: {size};width: {size};"
  on:click={emitClick}
>
  <Icon iconId="{iconId}" size="80%" strokeWidth="1.25" />
</button>

<style lang="scss">
  .icon-btn {
    display: grid;
    place-items: center;

    background: none;
    color: var(--font-clr-primary);
    border-radius: 6px;

    &:focus {
      box-shadow: var(--focus-shadow-offset);
    }
  }

  .hover-100 {
    opacity: 0.7;
  }

  .hover-100:hover {
    opacity: 1;
  }

  .hover-200:hover {
    background: var(--bg-clr-secondary);
  }
</style>
