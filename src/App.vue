<template>
  <Header />
  <main>
    <section class="container-presentation">
      <div class="box-texts-presentation">
        <div>
          <h1 class="tittle-presentation">HORSEBACK</h1>
          <h2 class="subtittle-presentation">Explore UK from the saddle</h2>
        </div>

        <div>
          <h3>FOLLOW YOUR DREAM</h3>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import Header from './components/Header.vue'
</script>

<style scoped>
main {
  height: auto;
}
.container-presentation {
  height: 100vh;
  background-image: url('./assets/media/cavalo.jpg');
  background-size: cover;
  background-position: top;
}

.box-texts-presentation {
  border: 2px solid black;
  position: relative;
  z-index: 0;
  height: 50vh;
  top: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.box-texts-presentation div {
  margin-left: 5rem;
}

.tittle-presentation {
  color: var(--vt-c-white);
  font-weight: 700;
  letter-spacing: 0.15rem;
  font-size: 4.5rem;
}

.tittle-presentation::after {
  content: ' RIDING';
  letter-spacing: 0.15rem;
}

.subtittle-presentation {
  color: var(--vt-c-white);
  font-weight: 400;
  letter-spacing: 0.15rem;
  font-size: 2.5rem;
}
</style>
