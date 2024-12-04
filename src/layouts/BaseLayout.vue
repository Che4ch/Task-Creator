<script setup lang="ts">
import UiButton from "@/components/ui/UiButton.vue"
import UiInput from "@/components/ui/UiInput.vue"
import SearchIcon from "@/assets/img/search.png"

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
        <ui-input label="Search" icon>
          <img class="base__icon" :src="SearchIcon" alt="" />
        </ui-input>
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
