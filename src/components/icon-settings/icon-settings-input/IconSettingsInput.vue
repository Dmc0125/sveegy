<script lang="ts" setup>
const props = defineProps<{
  inputValue: string
  inputType: string
}>()

const emit = defineEmits<{(e: string, payload: string): void}>()

const emitInput = (e: Event) => {
  const { value } = e.target as HTMLInputElement

  emit(`icon-settings-${props.inputType}:input`, value)
}
</script>

<template>
  <input
    :value="props.inputValue"
    class="settings-input"
    type="text"
    @input="emitInput"
  >
</template>

<style lang="scss" scoped>
.settings-input {
  width: 100%;
  height: 2rem;
  padding: .8rem;

  background: var(--primary-border);
  color: var(--font-clr);
  font-size: 1rem;
  border-radius: 10px;
}
</style>
