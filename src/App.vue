<template>
  <Header />
  <main>
    <SectionPresentation />
    <SectionSumUpRide />
  </main>
</template>

<script setup>
import Header from './components/Header.vue'
import SectionPresentation from './components/SectionPresentation.vue'
import SectionSumUpRide from './components/SectionSumUpRide.vue';
</script>

<style scoped>
main {
  height: auto;
}
</style>
