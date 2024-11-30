<script setup lang="ts">
interface Props {
  noFooter?: boolean
  noHeader?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="base">
    <div v-if="!noHeader" class="base__header">
      <slot name="header"></slot>
    </div>
    <div class="base__main">
      <slot name="main"></slot>
    </div>
    <div v-if="!noFooter" class="base__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
