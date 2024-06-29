<script setup>
import QuotationMarks from '@/components/icons/QuotationMarks.vue'
</script>

<template>
  <section class="message">
    <div class="message__container">
      <div class="message__content">
        <i><QuotationMarks /></i>
        <p>
          Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта,
          <br />
          но и выработать список рекомендаций для повышения этого показателя.
        </p>
        <i><QuotationMarks /></i>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.message {
  // .message__container
  &__container {
    background-image: url('../../../src/assets/images/Home/message-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  // .message__content
  &__content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    padding: 40px 0;

    p {
      text-align: center;
      @include PTS-r18;
      color: $white;
      background-image: url('../../../src/assets/images/Home/text-bg.png');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }

    i:last-child {
      transform: rotate(180deg);
      align-self: flex-end;
    }
  }
}
</style>
