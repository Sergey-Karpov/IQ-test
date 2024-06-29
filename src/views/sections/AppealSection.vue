<script setup>
import AppButton from '@/components/elements/UI/Buttons/AppButton.vue'
</script>

<template>
  <section class="appeal">
    <div class="appeal__container">
      <div class="appeal__content">
        <p>
          Прохождение теста займет у вас не более
          <b> 12 минут </b>
          а его результаты вы сможете <b>использовать всю жизнь.</b>
        </p>
        <div class="appeal__message">
          <p>
            Профессиональная интерпретация и детально <b>проработанные рекомендации</b> позволят вам
            качественно <b> изменить все аспекты своей жизни: </b> от финансового до любовного.
          </p>
        </div>
        <router-link :to="{ name: 'test' }">
          <AppButton
            :settings="{ type: 'button', text: 'Пройти тест', modifier: 'main-btn--transparent' }"
          />
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.appeal {
  // .appeal__content
  &__content {
    display: flex;
    flex-direction: column;
    padding: 40px 0 120px;
    gap: 24px;

    p {
      text-align: left;
      @include PTS-r16;
      color: $white;

      b {
        color: $yellow;
      }
    }
  }

  // .appeal__message
  &__message {
    padding: 30px 15px;
    background-color: rgba(243, 243, 242, 0.8);
    border-radius: 20px;

    p {
      text-align: left;
      @include PTS-r16;
      color: $main;

      b {
        @include PTS-b16;
        color: $main;
      }
    }
  }

  a {
    align-self: center;
  }
}
</style>
