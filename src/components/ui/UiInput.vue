<script setup lang="ts">
import { computed } from "vue"

interface Props {
  label?: string
  required?: boolean
  icon?: boolean
}

withDefaults(defineProps<Props>(), {
  label: "",
  required: false,
})

const inputValue = defineModel<string>()

const hasValue = computed<boolean>(() => !!inputValue.value?.length)

const onInput = (event: Event): void => {
  inputValue.value = (event.target as HTMLInputElement).value
}
</script>

<template>
  <div class="ui-input__group">
    <div class="ui-input">
      <div v-if="icon" class="ui-input__icon">
        <slot></slot>
      </div>
      <label
        :class="['ui-input__label', hasValue && 'ui-input__label--active']"
      >
        {{ label }}
        <span v-if="required" class="ui-input__required-label">*</span>
      </label>
      <input
        v-model="inputValue"
        v-bind="$attrs"
        :value="inputValue"
        :required="required"
        class="ui-input__field"
        @input="onInput"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.ui-input {
  @include flex(row);
  position: relative;
  border-radius: 12px;
  background: $white;
  border: 1px solid transparent;
  padding: 0 12px;

  &--error {
    border: 1px solid $error;
  }

  &__label {
    @include font(16px, 20px, 400);
    opacity: 0.5;
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    transition: all 0.2s ease-in-out;
    pointer-events: none;
    text-transform: capitalize;
    padding-left: 24px;

    &--active {
      @include font(12px, 14px, 400);
      color: $black;
      top: 5px;
      background: $white;
      border-radius: 4px;
      padding: 0 4px;
      transform: translateY(-100%);
      display: none;
    }
  }

  &__icon {
    display: flex;
    align-items: center;
  }

  &__field {
    height: auto;
    width: 100%;
    padding: 16px;
    font-size: 16px;
    border: none;
    outline: none;
    color: $black;
    border-radius: 24px;
  }

  &__required-label {
    color: $error;
  }
}
</style>
