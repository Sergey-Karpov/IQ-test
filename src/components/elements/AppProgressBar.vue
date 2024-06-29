<script setup>
import { computed } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  currentQuestion: Number,
  totalQuestions: Number
})

const progressPercentage = computed(() => (props.currentQuestion / props.totalQuestions) * 100)
</script>

<template>
  <div class="progress-bar">
    <div class="progress-bar__line">
      <div class="progress-bar__fill" :style="{ width: `${progressPercentage}%` }"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.progress-bar {
  padding: 20px 0;

  &__line {
    margin: 0 auto;
    width: 90%;
    height: 20px;
    background-color: $gray;
    border-radius: 10px;
    overflow: hidden;
  }

  &__fill {
    height: 100%;
    background-color: $green;
    border-radius: 10px;
    @include defaultTransition;
  }
}
</style>
