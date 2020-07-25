<template>
  <input
    class="settings-input"
    type="text"
    :value="inputValue"
    @input="emitInput"
  >
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    inputValue: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const emitInput = (e: InputEvent) => {
      const { value } = e.target as HTMLInputElement;

      emit(`icon-settings-${props.inputType}:input`, value);
    };

    return {
      emitInput,
    };
  },
});
</script>

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
