<template>
  <Header />
  <main>
    <SectionPresentation />
    <SectionSumUpRide />
    <BreedsHorse />
  </main>
</template>

<script setup>
import Header from './components/Header.vue'
import SectionPresentation from './components/SectionPresentation.vue'
import SectionSumUpRide from './components/SectionSumUpRide.vue'
import BreedsHorse from './components/BreedsHorse.vue'
</script>

<style scoped>
p {
  font-size: 5px;
}
main {
  height: auto;
}
</style>
