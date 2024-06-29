<script setup>
import AppHeader from '@/components/chapters/AppHeader.vue'
import HeroSection from '@/views/sections/HeroSection.vue'
import MessageSection from '@/views/sections/MessageSection.vue'
import DescriptionSection from '@/views/sections/DescriptionSection.vue'
import AppealSection from '@/views/sections/AppealSection.vue'
import AppFooter from '@/components/chapters/AppFooter.vue'
import { resetBodyOffset } from '@/helpers/utils'
import { onMounted } from 'vue'

onMounted(() => {
  resetBodyOffset()
})
</script>

<template>
  <AppHeader />
  <HeroSection />
  <MessageSection />
  <DescriptionSection />
  <AppealSection />
  <AppFooter />
</template>
