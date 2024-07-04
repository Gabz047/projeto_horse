<script setup>
import BoxVideoSumUpRide from './BoxVideoSumUpRide.vue'
import TextSumUp from './TextSumUp.vue'
</script>
<template>
  <section class="container-sumup">
    <div class="tittle-sumup">
      <h2>HORSE RIDING</h2>
    </div>

    <TextSumUp />

    <BoxVideoSumUpRide />
  </section>
</template>
<style scoped>
.container-sumup {
  width: 100vw;
  height: 130vh;
  background-color: var(--vt-c-ligth-brown);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x: hidden;
}

.tittle-sumup {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 5rem;
  margin-top: 5rem;
}

h2 {
  font-size: 3rem;
  border-bottom: 3px solid var(--vt-c-white);
  color: var(--vt-c-white);
}
</style>
