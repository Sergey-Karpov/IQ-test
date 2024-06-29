<template>
  <div class="loader">
    <div class="loader__title">
      <span>Обработка результатов</span>
    </div>
    <div class="loader__spinner">
      <span class="spinner"></span>
    </div>
    <div class="loader__description">
      <span>Определение стиля мышления...........</span>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.loader {
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 24px;

  // .loader__title
  &__title {
    span {
      @include PTS-r24;
      color: $white;
    }
  }

  // .loader__spinner
  &__spinner {
    min-height: 88px;
  }

  &__description {
    span {
      @include PTS-r14;
      color: $white;
    }
  }
}
.spinner {
  margin-top: 40px;
  color: $green;
  font-size: 10px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: mulShdSpin 1.3s infinite linear;
  transform: translateZ(0);
}

@keyframes mulShdSpin {
  0%,
  100% {
    box-shadow:
      0 -3em 0 0.2em,
      2em -2em 0 0em,
      3em 0 0 -1em,
      2em 2em 0 -1em,
      0 3em 0 -1em,
      -2em 2em 0 -1em,
      -3em 0 0 -1em,
      -2em -2em 0 0;
  }
  12.5% {
    box-shadow:
      0 -3em 0 0,
      2em -2em 0 0.2em,
      3em 0 0 0,
      2em 2em 0 -1em,
      0 3em 0 -1em,
      -2em 2em 0 -1em,
      -3em 0 0 -1em,
      -2em -2em 0 -1em;
  }
  25% {
    box-shadow:
      0 -3em 0 -0.5em,
      2em -2em 0 0,
      3em 0 0 0.2em,
      2em 2em 0 0,
      0 3em 0 -1em,
      -2em 2em 0 -1em,
      -3em 0 0 -1em,
      -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow:
      0 -3em 0 -1em,
      2em -2em 0 -1em,
      3em 0em 0 0,
      2em 2em 0 0.2em,
      0 3em 0 0em,
      -2em 2em 0 -1em,
      -3em 0em 0 -1em,
      -2em -2em 0 -1em;
  }
  50% {
    box-shadow:
      0 -3em 0 -1em,
      2em -2em 0 -1em,
      3em 0 0 -1em,
      2em 2em 0 0em,
      0 3em 0 0.2em,
      -2em 2em 0 0,
      -3em 0em 0 -1em,
      -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow:
      0 -3em 0 -1em,
      2em -2em 0 -1em,
      3em 0 0 -1em,
      2em 2em 0 -1em,
      0 3em 0 0,
      -2em 2em 0 0.2em,
      -3em 0 0 0,
      -2em -2em 0 -1em;
  }
  75% {
    box-shadow:
      0em -3em 0 -1em,
      2em -2em 0 -1em,
      3em 0em 0 -1em,
      2em 2em 0 -1em,
      0 3em 0 -1em,
      -2em 2em 0 0,
      -3em 0em 0 0.2em,
      -2em -2em 0 0;
  }
  87.5% {
    box-shadow:
      0em -3em 0 0,
      2em -2em 0 -1em,
      3em 0 0 -1em,
      2em 2em 0 -1em,
      0 3em 0 -1em,
      -2em 2em 0 0,
      -3em 0em 0 0,
      -2em -2em 0 0.2em;
  }
}
</style>
