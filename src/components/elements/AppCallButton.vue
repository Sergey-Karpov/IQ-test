<script setup>
import PhoneIcon from '@/components/icons/PhoneIcon.vue'
</script>

<template>
  <button class="call-btn">
    <div class="call-btn__icon">
      <PhoneIcon />
    </div>
    <span>Позвонить и прослушать результат</span>
  </button>
</template>

<style scoped lang="scss">
.call-btn {
  padding: 30px 15px;
  background-color: $red;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;

  span {
    text-align: left;
    @include PTS-r20;
    color: $white;
  }
}
</style>
