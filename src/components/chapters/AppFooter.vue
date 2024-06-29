<script setup></script>

<template>
  <footer class="footer fixed">
    <div class="footer__container">
      <div class="footer__inner">
        <span>© 2019</span>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 56px;
  background-color: transparent;

  // .footer__inner
  &__inner {
    padding: 23px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @include media-small {
      padding: 16px 0;
    }

    span {
      display: flex;
      align-items: center;
      @include PTS-r18;
      color: $white;
      opacity: 50%;
    }
  }
}
</style>
