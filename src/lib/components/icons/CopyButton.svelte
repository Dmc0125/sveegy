<script lang="ts">
  import Icon from './Icon.svelte'

  export let content: string
  export let onClick: () => boolean
  let className = ''
  export { className as class }

  let showSuccess = false
  let timeoutId: NodeJS.Timeout | null = null
  const onClickHandler = () => {
    if (timeoutId) return

    const success = onClick()

    if (success) {
      showSuccess = true

      timeoutId = setTimeout(() => {
        showSuccess = false
      }, 300)
    }
  }
</script>

<button class="{className}" on:click="{onClickHandler}">
  <span class="{showSuccess ? 'hide' : ''}">{content}</span>
  <Icon iconId="tick-circle" size="1.5rem" class="success-icon {showSuccess ? '' : 'hide'}" />
</button>

<style lang="scss">
  .hide {
    display: none;
  }

  .success-icon {
    color: green;
  }
</style>
