<script setup lang="ts">
import UiButton from "@/components/ui/UiButton.vue"
import UiInput from "@/components/ui/UiInput.vue"

interface Props {
  noFooter?: boolean
  noHeader?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="base">
    <div class="base__wrapper">
      <header v-if="!noHeader" class="base__header">
        <ui-input />
      </header>
      <main class="base__main">
        <slot name="main"></slot>
      </main>
    </div>
    <div v-if="!noFooter" class="base__footer">
      <ui-button variant="rounded" color="primary"> Add </ui-button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
