<script setup>
import BreedsHorseCard from './BreedsHorseCard.vue';
</script>
<template>
    <section class="container-breeds">
      <div class="tittle-breeds">
        <h2>BREEDS OF HORSE</h2>
      </div>

      <BreedsHorseCard />
    </section>
</template>
<style scooped>
.container-breeds {
  height: 120vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  background-color: #dcaa6d;
}

.tittle-breeds {
  width: 100%;
  display: flex;
  justify-content: center;
  border: 2px solid;
  height: 5rem;
  margin-top: 10rem;
}

.tittle-breeds h2 {
  font-size: 2.8rem;
  border-bottom: 2px solid var(--vt-c-white);
}
</style>