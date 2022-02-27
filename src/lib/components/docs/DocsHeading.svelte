<script lang="ts">
type HeadingTypes = 'heading' | 'section-heading' | 'section-subheading'

export let type: HeadingTypes
export let title: string
export let id = ''

type MappedHtml = {
  [type in HeadingTypes]: string
}

const _html: MappedHtml = {
  heading: '<h1 class="text-base font-semibold text-blue-600 dark:text-indigo-500" id>{c}</h1>',
  'section-heading': '<h2 id class="font-secondary-clr text-2xl font-bold">{c}</h2>',
  'section-subheading': '<h3 id class="font-semibold text-lg font-secondary-clr">{c}</h3>',
}
const content = _html[type].replace('{c}', title).replace('id', id.length ? `id="${id}"` : '')
</script>

{@html content}
