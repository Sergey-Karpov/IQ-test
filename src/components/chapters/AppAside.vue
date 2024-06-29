<!-- <script setup>
import { defineProps, defineEmits } from 'vue'
import CloseButton from '@/components/elements/UI/Buttons/CloseButton.vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['close'])

const closeAside = () => {
  emits('close')
}
</script>

<template>
  <transition name="slide">
    <div v-if="isVisible" class="aside-overlay" @click.self="closeAside">
      <div class="aside-content">
        <div class="aside-content__container">
          <div class="aside-content__inner">
            <nav>
              <ul>
                <li>
                  <router-link :to="{ name: 'home' }" @click.self="closeAside">
                    <span>Главная</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'details' }" @click.self="closeAside">
                    <span>Информация о тесте</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'test' }" @click.self="closeAside">
                    <span>Пройти тест</span>
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <CloseButton @click="closeAside" />
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.aside-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  overflow: hidden;
}

.aside-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background-color: $main;
  max-width: none;
  max-height: none;
  transition: transform 0.3s ease-in-out;

  // .aside-content__inner
  &__inner {
    padding: 110px 0;

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 27px;

      li {
        span {
          @include PTS-r14;
          text-transform: uppercase;
          color: $white;
        }

        &:last-child {
          span {
            color: $yellow;
          }
        }
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}

.close-btn {
  position: absolute;
  top: 24px;
  right: 24px;
}
</style> -->

<script setup>
import { defineProps, defineEmits } from 'vue'
import CloseButton from '@/components/elements/UI/Buttons/CloseButton.vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['close'])

const closeAside = () => {
  emits('close')
}
</script>

<template>
  <div :class="['aside-overlay', { 'is-visible': isVisible }]" @click.self="closeAside">
    <transition name="slide">
      <div v-if="isVisible" class="aside-content">
        <div class="aside-content__container">
          <div class="aside-content__inner">
            <nav>
              <ul>
                <li>
                  <router-link :to="{ name: 'home' }" @click.self="closeAside">
                    <span>Главная</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'details' }" @click.self="closeAside">
                    <span>Информация о тесте</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'test' }" @click.self="closeAside">
                    <span>Пройти тест</span>
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <CloseButton @click="closeAside" />
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.aside-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  overflow: hidden;
  @include defaultTransition;

  &.is-visible {
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  }

  &:not(.is-visible) {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }
}

.aside-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background-color: $main;
  max-width: none;
  max-height: none;

  @include media-small {
    width: 100%;
  }

  // .aside-content__inner
  &__inner {
    padding: 110px 0;

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 27px;

      li {
        span {
          @include PTS-r14;
          text-transform: uppercase;
          color: $white;
        }

        &:last-child {
          span {
            color: $yellow;
          }
        }
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  @include defaultTransition;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}

.close-btn {
  position: absolute;
  top: 24px;
  right: 24px;
}
</style>
