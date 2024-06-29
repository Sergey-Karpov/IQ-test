<script setup>
import AppHeader from '@/components/chapters/AppHeader.vue'
import AppFooter from '@/components/chapters/AppFooter.vue'
import AppTimer from '@/components/elements/AppTimer.vue'
import AppCallButton from '@/components/elements/AppCallButton.vue'
import { onMounted, ref } from 'vue'
import { resetBodyOffset } from '@/helpers/utils'
import { getApiData } from '@/api/call'

const data = ref(null)

const handleCallBtnClick = async () => {
  try {
    data.value = await getApiData()
  } catch (error) {
    console.error('Error fetching API data:', error)
  }
}

onMounted(() => {
  resetBodyOffset()
})
</script>

<template>
  <AppHeader>
    <div class="header-content">
      <img src="../../../src/assets/images/Test/brain.png" alt="brain image" />
      <span>Готово!</span>
    </div>
  </AppHeader>
  <div class="result-page">
    <div class="result-page__container">
      <div class="result-page__inner">
        <div class="result-page__title">
          <span>Ваш результат рассчитан:</span>
        </div>
        <div class="result-page__description">
          <p>
            <b>вы относитесь к 3% респондентов,</b> чей уровень интеллекта более чем на 15 пунктов
            отличается от среднего в большую или меньшую сторону!
          </p>
        </div>
        <div class="result-page__title result-page__title--green">
          <span>Скорее получите свой результат!</span>
        </div>
        <div class="result-page__message">
          <p>
            В целях защиты персональных данных результат теста, их подробная интерпретация и
            рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона
          </p>
        </div>
        <div class="result-page__timer">
          <span>Звоните скорее, запись доступна всего</span>
          <AppTimer :initialTime="600" />
        </div>
        <div class="result-page__call">
          <AppCallButton @click="handleCallBtnClick" />
        </div>
        <div v-if="data !== null" class="result-page__films">
          <ul>
            <li v-for="film in data">
              {{ film.title }}
            </li>
          </ul>
        </div>
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
    padding-left: 24px;
    display: block;
    width: 100%;
    @include PTS-r20;
    text-transform: uppercase;
    color: $yellow;
  }
}

.result-page {
  padding-bottom: 76px;
  background-image: url('../../../src/assets/images/Home/appeal-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  // .result-page__inner
  &__inner {
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  // .result-page__title
  &__title {
    span {
      text-align: center;
      @include PTS-r16;
      color: $white;
    }

    // .result-page__title--green
    &--green {
      span {
        color: $green;
      }
    }
  }

  // .result-page__description
  &__description {
    p {
      text-align: center;
      @include PTS-r14;
      color: $white;

      b {
        text-decoration: underline;
      }
    }
  }

  // .result-page__message
  &__message {
    padding: 15px 12px;
    background-color: $dark-blue;
    border-radius: 6px;

    p {
      text-align: center;
      @include PTS-r14;
      color: $white;
    }
  }

  // .result-page__timer
  &__timer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    span {
      @include PTS-r14;
      color: $green;
    }
  }

  // .result-page__films
  &__films {
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;

      li {
        @include PTS-r14;
        color: $white;
      }
    }
  }
}
</style>
