<script lang="ts">
export let id = ''

let className = ''
export { className as class }
</script>

<section class="w-full h-fit px-[5%] md:px-0 {className}" {id}>
  <slot />
</section>
