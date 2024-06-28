<script setup>
import TittlePresentation from './TittlePresentation.vue';
</script>
<template>
  <section class="container-presentation">
    <div class="overlay"></div>
    <div class="box-texts-presentation">
      
      <TittlePresentation />

      <div class="box-right-text">
        <h3>FOLLOW</h3>
        <h3>YOUR</h3>
        <h3>DREAM</h3>
      </div>
    </div>
    <div class="box-button-book">
      <button>Book Now</button>
    </div>
  </section>
</template>

<style scoped>

.container-presentation {
  height: 100vh;
  background-image: url('../assets/media/cavalo.jpg');
  background-size: cover;
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 2;
}

.box-texts-presentation {
  position: relative;
  width: 100%;
  z-index: 0;
  height: 50vh;
  top: 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.box-right-text {
  color: var(--vt-c-white);
  height: 95%;
  max-width: 17px;
  display: flex;
  font-size: 0.7rem;
  word-break: break-all;
  position: relative;
  top: 9rem;
  right: 3rem;
  letter-spacing: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.box-right-text h3 {
  font-weight: 600;
  text-align: center;
}

.box-button-book {
  width: 50%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
}
.box-button-book button {
  border: 2px solid var(--vt-c-white);
  background-color: transparent;
  border-radius: 50px;
  width: 55%;
  height: 70%;
  font-size: 1.4rem;
  color: var(--vt-c-white);
}

.overlay {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to top, #DCAA6D 5%, transparent, transparent, transparent);
  z-index: 1;
}
</style>
