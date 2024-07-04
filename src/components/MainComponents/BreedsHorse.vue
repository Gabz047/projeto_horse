<script setup>
import BreedsHorseCard from './BreedsHorseCard.vue'
</script>
<template>
  <section class="container-breeds">
    <div class="tittle-breeds">
      <h2>BREEDS OF HORSE</h2>
    </div>
    <div class="container-cards">
      <div class="arrows lA"><img src="../icons/lArrow.png" alt="seta apontada para esquerda" /></div>
      <BreedsHorseCard />
      <div class="arrows rA"><img src="../icons/rArrow.png" alt="seta apontada para direita" /></div>
    </div>
  </section>
</template>
<style scooped>
.container-breeds {
  height: 125vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  background-color: var(--vt-c-ligth-brown);
  justify-content: center;
}

.tittle-breeds {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 5rem;
  margin-top: 10rem;
  color: var(--vt-c-white);
}

.tittle-breeds h2 {
  font-size: 2.8rem;
  border-bottom: 2px solid var(--vt-c-white);
}

.container-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 78vh;
  margin-top: 8vh;
}

.container-cards-button {
  font-size: 3.5rem;
  color: var(--vt-c-white);
}
</style>
