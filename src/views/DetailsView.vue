<script setup>
import AppHeader from '@/components/chapters/AppHeader.vue'
import AppFooter from '@/components/chapters/AppFooter.vue'
import { resetBodyOffset } from '@/helpers/utils'
import { onMounted } from 'vue'

onMounted(() => {
  resetBodyOffset()
})
</script>

<template>
  <AppHeader />
  <div class="details">
    <div class="details__container">
      <span>details page</span>
    </div>
  </div>
  <AppFooter />
</template>

<style scoped lang="scss">
.details {
  padding: 24px 0;
  background-image: url('../../../src/assets/images/Home/appeal-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  // .details__container
  &__container {
    span {
      @include PTS-b30;
      color: $white;
    }
  }
}
</style>
