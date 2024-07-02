<template>
  <Header />
  <main>
    <SectionPresentation />
    <SectionSumUpRide />
    <BreedsHorse />
  </main>
</template>

<script setup>
import Header from './components/HeaderComponents/Header.vue'
import SectionPresentation from './components/MainComponents/SectionPresentation.vue'
import SectionSumUpRide from './components/MainComponents/SectionSumUpRide.vue'
import BreedsHorse from './components/MainComponents/BreedsHorse.vue'
</script>

<style scoped>
p {
  font-size: 5px;
}
main {
  height: auto;
}
</style>
