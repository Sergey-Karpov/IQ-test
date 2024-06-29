<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <router-link :to="{ name: 'details' }">
    <div class="details-link">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="8" fill="white" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.45453 11.6364L8.45453 6.10454L10.9954 8.64545L11.6364 8L7.99999 4.36363L4.36362 8L5.00453 8.6409L7.54544 6.10454L7.54544 11.6364L8.45453 11.6364Z"
          fill="#0C0B10"
        />
      </svg>
      <span>Подробнее</span>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
.details-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;

  span {
    @include PTS-r8;
    color: $white;
  }
}
</style>
