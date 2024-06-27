<template>
  <section class="container-presentation">
    <div class="box-texts-presentation">
      <div class="box-left-text">
        <h1 class="tittle-presentation">HORSEBACK</h1>
        <h2 class="subtittle-presentation">Explore UK from the saddle</h2>
      </div>

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
  border: 2px solid black;
}

.box-left-text {
  margin-left: 3rem;
}

.tittle-presentation {
  color: var(--vt-c-white);
  font-weight: 700;
  font-size: 4rem;
}

.tittle-presentation::after {
  content: ' RIDING';
}

.subtittle-presentation {
  color: var(--vt-c-white);
  font-weight: 400;
  letter-spacing: 0.1rem;
  font-size: 2rem;
}

.box-right-text {
  color: var(--vt-c-white);
  height: 100%;
  max-width: 17px;
  display: flex;
  font-size: 0.7rem;
  word-break: break-all;
  margin: 10rem 2rem 0 0;
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
</style>
