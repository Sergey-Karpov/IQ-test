<script setup>
import AppButton from '@/components/elements/UI/Buttons/AppButton.vue'
</script>

<template>
  <section class="description">
    <div class="description__container">
      <div class="description__content">
        <p>
          Также по результатам теста
          <b> вы получите </b>
          подробные <b>советы</b> по определению наиболее перспективной
          <b> для вашего типа интеллекта сферы деятельности, </b>
          которая принесет вам скорейший финансовый результат.
        </p>
        <img src="../../../src/assets/images/Home/description-image.png" alt="Изображение" />
        <router-link :to="{ name: 'test' }">
          <AppButton :settings="{ type: 'button', text: 'Пройти тест' }" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.description {
  // .description__container
  &__container {
    background-color: $white;
  }

  // .description__content
  &__content {
    display: flex;
    flex-direction: column;
    padding: 40px 0;

    p {
      margin-bottom: 24px;
      text-align: left;
      @include PTS-r16;
      color: $main;

      b {
        @include PTS-b16;
        text-transform: uppercase;
      }
    }

    img {
      margin: 0 auto;
      max-width: 450px;
    }
  }

  a {
    align-self: flex-end;
  }
}
</style>
