<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  name: String,
  value: String
})

const emits = defineEmits(['change'])

const handleClick = () => {
  emits('change', props.value)
}
</script>

<template>
  <label class="color-radio">
    <input
      type="radio"
      :name="props.name"
      class="color-radio--hidden"
      :value="props.value"
      @click="handleClick()"
    />
    <span class="color-radio__box" :style="{ backgroundColor: props.value }"></span>
  </label>
</template>

<style scoped lang="scss">
.color-radio {
  position: relative;
  cursor: pointer;
  @include defaultTransition;

  @include hover {
    .color-radio__box {
      border-color: $white;
    }
  }

  &:has(input:checked) {
    .color-radio__box {
      border: 6px solid $yellow;
    }
  }

  @include media-medium {
    gap: 8px;
  }

  // .color-radio--hidden
  &--hidden {
    position: absolute;
    appearance: none;

    &:checked {
      & + .color-radio__box {
        border-color: $main;
      }
    }
  }

  // .color-radio__box
  &__box {
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    border: 6px solid transparent;
    @include defaultTransition;
  }
}
</style>
