<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import AppRadio from '@/components/elements/UI/Inputs/AppRadio.vue'
import AppColorRadio from '@/components/elements/UI/Inputs/AppColorRadio.vue'
import AppNumberRadio from '@/components/elements/UI/Inputs/AppNumberRadio.vue'

const props = defineProps({
  question: Object
})

const currentAnswer = ref(null)

const emits = defineEmits(['change'])

const handleRadioChange = (answer) => {
  currentAnswer.value = answer
  emits('change', { answer: currentAnswer.value, questionId: props.question.id })
}
</script>

<template>
  <div class="question">
    <div class="question__inner">
      <div class="question__title">
        <div class="question__container">
          <span>{{ props.question.text }}</span>
        </div>
      </div>
      <div class="question__answers">
        <div class="" v-if="props.question.type === 'question'">
          <img v-if="props.question.pictureUrl" :src="props.question.pictureUrl" />
          <ul class="question__text">
            <li v-for="answer in props.question.answers" :key="answer">
              <AppRadio
                :name="props.question.name"
                :value="answer"
                :label="answer"
                @change="handleRadioChange(answer)"
              />
            </li>
          </ul>
        </div>
        <div class="question__container">
          <ul class="question__colors" v-if="props.question.type === 'color'">
            <li v-for="answer in props.question.answers" :key="answer">
              <AppColorRadio
                :name="props.question.name"
                :value="answer"
                @change="handleRadioChange(answer)"
              />
            </li>
          </ul>
        </div>
        <div class="question__container">
          <div class="question__picture" v-if="props.question.type === 'picture'">
            <img :src="props.question.pictureUrl" alt="brain image" />
            <ul>
              <li v-for="answer in props.question.answers" :key="answer">
                <AppNumberRadio
                  :name="props.question.name"
                  :value="answer"
                  @change="handleRadioChange(answer)"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.question {
  height: 100%;

  // .question__inner
  &__inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  // .question__title
  &__title {
    padding: 30px 0;

    span {
      text-align: center;
      @include PTS-r18;
      color: $white;
    }
  }

  // .question__answers
  &__answers {
    padding-bottom: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    width: 100%;

    img {
      margin: 0 auto;
      margin-bottom: 24px;
      max-width: 185px;
    }
  }

  // .question__text
  &__text {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }

  // .question__colors
  &__colors {
    margin: 0 auto;
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  // .question__picture
  &__picture {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    img {
      max-width: 185px;
    }

    ul {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
}
</style>
