<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  settings: Object
})

const emits = defineEmits(['click'])

// Обработчик клика по кнопке
const handleClick = () => {
  emits('click')
}
</script>

<template>
  <button :type="settings.type" @click="handleClick" :class="['main-btn', settings.modifier]">
    <span>{{ settings.text }}</span>
  </button>
</template>

<style scoped lang="scss">
.main-btn {
  padding: 13px 26px;
  min-height: 41px;
  max-width: fit-content;
  align-self: center;
  background-color: $yellow;
  border-radius: 26px;
  @include defaultTransition;

  @include hover {
    background-color: $light-yellow;
  }

  &:disabled {
    pointer-events: none;
    background-color: $gray;

    span {
      color: $dark-gray;
    }
  }

  span {
    @include PTS-r14;
    text-transform: uppercase;
    color: $main;
  }
  &.main-btn--transparent {
    background-color: transparent;
    border: 1px solid $white;
    @include defaultTransition;

    @include hover {
      border-color: $yellow;

      span {
        color: $yellow;
        @include defaultTransition;
      }
    }

    span {
      color: $white;
    }
  }
}
</style>
