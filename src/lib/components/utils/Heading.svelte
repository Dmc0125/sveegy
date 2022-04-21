<script lang="ts">
  type Style = '100' | '200' | '300'

  export let id: string | null = null
  export let content: string
  export let style: Style
  let className = ''
  export { className as class }

  const getTag = (_style: Style) => {
    const tags = {
      100: 'h1',
      200: 'h2',
      300: 'h3',
    }
    return tags[_style]
  }

  $: tag = getTag(style)
</script>

<svelte:element this="{tag}" class="{className} heading-{style}" {id}>
  {content}
</svelte:element>

<style lang="scss">
  .heading-100 {
    color: var(--cta-clr-primary);
    font-size: .9rem;
    font-weight: 600;
  }

  .heading-200 {
    color: var(--font-clr-secondary);
    font-size: 1.25rem;
    font-weight: 700;
  }

  .heading-300 {
    color: var(--font-clr-secondary);
    font-size: 1.1rem;
    font-weight: 600;
  }
</style>
