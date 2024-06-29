<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  name: String,
  value: String,
  label: String
})

const emits = defineEmits(['change'])

const handleClick = () => {
  emits('change', props.value)
}
</script>

<template>
  <label class="radio">
    <div class="radio__container">
      <div class="radio__inner">
        <input
          type="radio"
          :name="props.name"
          class="radio--hidden"
          :value="props.value"
          @click="handleClick()"
        />
        <span class="radio__box"></span>
        <span class="radio__name">{{ props.label }}</span>
      </div>
    </div>
  </label>
</template>

<style scoped lang="scss">
.radio {
  display: flex;
  align-items: stretch;
  width: 100%;
  background: rgba(242, 243, 243, 0.4);
  cursor: pointer;
  @include defaultTransition;

  @include hover {
    .radio__box {
      border-color: $white;
    }
  }

  &:has(input:checked) {
    background-color: $yellow;

    .radio__name {
      color: $main;
    }
  }

  @include media-medium {
    gap: 8px;
  }

  // .radio__container
  &__container {
    display: contents;

    @include media-extra-small {
      display: block;
    }
  }

  &__inner {
    padding: 15px 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;

    @include media-extra-small {
      padding: 15px 0;
    }
  }

  // .radio--hidden
  &--hidden {
    position: absolute;
    appearance: none;

    &:checked {
      & + .radio__box {
        background-color: $blue;
        border-color: $main;
      }
    }
  }

  // .radio__box
  &__box {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    border-radius: 50%;
    border: 1px solid $white;
    background-color: transparent;
    @include defaultTransition;
  }

  // .radio__name
  &__name {
    @include PTS-r18;
    color: $white;
    @include defaultTransition;
  }
}
</style>
