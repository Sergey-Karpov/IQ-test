<script setup>
import BurgerButton from '@/components/elements/UI/Buttons/BurgerButton.vue'
import AppAside from '@/components/chapters/AppAside.vue'
import { ref } from 'vue'
import { toggleBodyOffset, resetBodyOffset } from '@/helpers/utils'

const isModalVisible = ref(false)

const showModal = () => {
  isModalVisible.value = true
  toggleBodyOffset()
}

const hideModal = () => {
  isModalVisible.value = false
  resetBodyOffset()
}
</script>

<template>
  <header class="header fixed">
    <div class="header__container">
      <div class="header__inner">
        <BurgerButton @click="showModal" />
        <slot></slot>
      </div>
    </div>
    <AppAside :isVisible="isModalVisible" @close="hideModal" />
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 50px;
  background-color: $main;
  z-index: 50;
  display: flex;
  align-items: stretch;

  // .heder__container
  &__container {
    display: flex;
    align-items: stretch;
  }

  // .header__inner
  &__inner {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    align-items: center;
  }
}
</style>
