<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  settings: Object
})

const emits = defineEmits(['click'])

const handleClick = () => {
  emits('click')
}
</script>

<template>
  <button type="button" @click="handleClick" class="burger-btn">
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z"
        fill="#696969"
      />
    </svg>
  </button>
</template>

<style scoped lang="scss">
.burger-btn {
  @include hover {
    svg path {
      fill: $yellow;
    }
  }

  svg path {
    @include defaultTransition;
  }
}
</style>
