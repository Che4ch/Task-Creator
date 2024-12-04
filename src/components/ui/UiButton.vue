<script setup lang="ts">
interface Props {
  disabled?: boolean
  variant?: "rounded" | "oval" | "option"
  color?: "redact" | "error" | "primary" | "grey"
  text?: string
}

interface Emits {
  (event: "click", payload: Event): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const sendEvent = (event: Event): void => {
  if (!props.disabled) {
    emit("click", event)
  }
}
</script>

<template>
  <div
    :class="[
      'ui-button',
      disabled && 'ui-button--disabled',
      variant && `ui-button--variant-${variant}`,
      color && `ui-button--${color}`,
    ]"
    @click="sendEvent($event)"
  >
    <slot>{{ text }}</slot>
  </div>
</template>

<style scoped lang="scss">
.ui-button {
  @include flex(row, center, center);
  width: auto;
  cursor: pointer;
  border: none;
  font-weight: 500;
  position: relative;
  white-space: nowrap;
  color: $white;
  @include font(24);

  &--disabled {
    cursor: none;
    opacity: 40%;
  }

  &--variant-rounded {
    width: 66px;
    height: 66px;
    border-radius: 32px;
  }

  &--variant-oval {
    width: 136px;
    height: 48px;
    border-radius: 12px;
  }

  &--variant-option {
    width: 48px;
    height: 48px;
    border-radius: 24px;
  }

  &--redact {
    background-color: $orange;
  }

  &--error {
    background-color: $error;
  }

  &--grey {
    background-color: $grey;
  }

  &--primary {
    background-color: $primary;
  }
}
</style>
