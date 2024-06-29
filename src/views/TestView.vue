<script setup>
import AppHeader from '@/components/chapters/AppHeader.vue'
import AppFooter from '@/components/chapters/AppFooter.vue'
import AppQuestion from '@/components/chapters/AppQuestion.vue'
import { questions } from '@/data/questions'
import { useQuizStore } from '@/stores/quiz'
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AppButton from '@/components/elements/UI/Buttons/AppButton.vue'
import AppProgressBar from '@/components/elements/AppProgressBar.vue'
import AppLoader from '@/components/elements/AppLoader.vue'
import { resetBodyOffset } from '@/helpers/utils'

onMounted(() => {
  resetBodyOffset()
})

const quizStore = useQuizStore()
const currentQuestion = ref(0)
const selectedAnswer = ref(null)
const btnIsDisabled = ref(true)
const router = useRouter()

const handleAnswerChange = ({ answer, questionId }) => {
  selectedAnswer.value = {
    answer,
    questionId
  }
  btnIsDisabled.value = false
}

const handleNextClick = () => {
  if (selectedAnswer.value !== null) {
    quizStore.addAnswer(selectedAnswer.value)
    currentQuestion.value++
    selectedAnswer.value = null
    btnIsDisabled.value = true
  }
}

watch(currentQuestion, (newVal) => {
  if (newVal === questions.length) {
    setTimeout(() => {
      router.push('/result')
    }, 3000)
  }
})
</script>

<template>
  <AppHeader>
    <div class="header-content">
      <img src="../../../src/assets/images/Test/brain.png" alt="brain image" />
      <span>тест на определение IQ</span>
    </div>
  </AppHeader>
  <div class="question-page">
    <div class="question-page__container">
      <AppProgressBar :currentQuestion="currentQuestion" :totalQuestions="questions.length" />
      <div v-if="currentQuestion < questions.length" class="question-page__wrapper">
        <div class="question-page__inner">
          <AppQuestion :question="questions[currentQuestion]" @change="handleAnswerChange" />
        </div>
        <AppButton
          :settings="{ type: 'button', text: 'Далее' }"
          @click="handleNextClick"
          :disabled="btnIsDisabled"
        />
      </div>
      <div v-else class="question-page__loader">
        <AppLoader />
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<style scoped lang="scss">
.header-content {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    max-width: 48px;
  }

  span {
    @include PTS-r14;
    text-transform: uppercase;
    color: $yellow;
  }
}

.question-page {
  padding-bottom: 76px;
  background-image: url('../../../src/assets/images/Home/appeal-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  // .question-page__container
  &__container {
    @include media-extra-small {
      display: contents;
    }
  }

  // .question-page__wrapper
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-grow: 1;
  }

  // .question-page__loader
  &__loader {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
