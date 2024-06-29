<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  initialTime: {
    type: Number,
    required: true
  }
})

const timeLeft = ref(props.initialTime)

const minutes = computed(() => {
  const min = Math.floor(timeLeft.value / 60)
  return min < 10 ? `0${min}` : min
})

const seconds = computed(() => {
  const sec = timeLeft.value % 60
  return sec < 10 ? `0${sec}` : sec
})

let interval

const startTimer = () => {
  interval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    } else {
      clearInterval(interval)
    }
  }, 1000)
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  clearInterval(interval)
})

watch(
  () => props.initialTime,
  (newVal) => {
    timeLeft.value = newVal
    clearInterval(interval)
    startTimer()
  }
)
</script>

<template>
  <div class="timer">{{ minutes }}:{{ seconds }}</div>
</template>

<style scoped lang="scss">
.timer {
  @include PTS-b30;
  color: $green;
}
</style>
