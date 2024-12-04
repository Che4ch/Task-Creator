<script setup lang="ts">
interface Props {
  title: string
  description: string
  deadline: string
}

defineProps<Props>()
</script>

<template>
  <div class="card">
    <div class="card__icon"></div>
    <div class="card_info">
      <div>
        <h2>{{ title }}</h2>
      </div>
      <p>{{ description }}</p>
      <p>End In: {{ deadline }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  @include flex(row);
  padding: 16px;

  &__icon {}
}
</style>
