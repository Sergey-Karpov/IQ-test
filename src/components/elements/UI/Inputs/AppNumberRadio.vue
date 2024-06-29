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
  <label class="number-radio">
    <input
      type="radio"
      :name="props.name"
      class="number-radio--hidden"
      :value="props.value"
      @click="handleClick()"
    />
    <span class="number-radio__box">{{ props.value }}</span>
  </label>
</template>

<style scoped lang="scss">
.number-radio {
  position: relative;
  cursor: pointer;
  @include defaultTransition;

  @include hover {
    .number-radio__box {
      border-color: $white;
    }
  }

  &:has(input:checked) {
    .number-radio__box {
      border: 6px solid $yellow;
    }
  }

  @include media-medium {
    gap: 8px;
  }

  // .number-radio--hidden
  &--hidden {
    position: absolute;
    appearance: none;

    &:checked {
      & + .number-radio__box {
        border-color: $main;
      }
    }
  }

  // .number-radio__box
  &__box {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include PTS-r20;
    color: $main;
    background-color: $gray;
    border: 6px solid transparent;
    @include defaultTransition;
  }
}
</style>
