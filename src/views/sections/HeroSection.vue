<script setup>
import AppButton from '@/components/elements/UI/Buttons/AppButton.vue'
import DetailsLink from '@/components/elements/UI/Links/DetailsLink.vue'
</script>

<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <div class="hero__title">
          <span>Пройдите точный и быстрый</span>
          <h1>тест на определение IQ</h1>
        </div>
        <div class="hero__img">
          <img src="../../../src/assets/images/Test/brain.png" alt="brain image" />
        </div>
        <router-link :to="{ name: 'test' }">
          <AppButton :settings="{ type: 'button', text: 'Пройти тест' }" />
        </router-link>
        <div class="hero__description">
          <p>
            <b> и получите рекомендации по развитию своего интеллекта <br /> </b>
            и улучшению финансового благосостояния и личной жизни
          </p>
        </div>
        <div class="hero__details">
          <DetailsLink />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  // .hero__container
  &__container {
  }

  // .hero__content
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    padding: 27px 0;
  }

  // .hero__title
  &__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    * {
      text-align: center;
    }

    span {
      @include PTS-r18;
      color: $white;
    }

    h1 {
      @include PTS-b30;
      color: $yellow;
      text-transform: uppercase;
    }
  }

  // .hero__description
  &__description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    * {
      text-align: center;
    }

    p {
      @include PTS-r16;
      color: $white;

      b {
        color: $yellow;
      }
    }
  }

  // .hero__details
  &__details {
  }
}
</style>
