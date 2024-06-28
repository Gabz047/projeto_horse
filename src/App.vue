<template>
  <Header />
  <main>
    <SectionPresentation />
    <SectionSumUpRide />

    <section class="container-breeds">
      <div class="tittle-breeds">
        <h2>BREEDS OF HORSE</h2>
      </div>

      <div class="container-breeds-cards">
        <div class="breeds-cards-box">
          <div class="imgbox">
            <p>Arabic Horse</p>
          </div>

          <div class="information-box">
            <h3>SOME HORSE BRO IDK</h3>

            <div class="information-list">
              <ul class="main-list">
                <li class="information-items">
                  <p>Colors:</p>
                  <ul class="colors-list">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>

                <li class="information-items">
                  <p>Something</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore quaerat
                    tenetur labore corporis dolores.
                  </p>
                </li>
                <li class="information-items">
                  <p>Something</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore quaerat
                    tenetur labore corporis dolores.
                  </p>
                </li>
                <li class="information-items">
                  <p>Something</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore quaerat
                    tenetur labore corporis dolores.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import Header from './components/Header.vue'
import SectionPresentation from './components/SectionPresentation.vue'
import SectionSumUpRide from './components/SectionSumUpRide.vue'
</script>

<style scoped>
p {
  font-size: 5px;
}
main {
  height: auto;
}

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

.container-breeds-cards {
  width: 100%;
  height: 65%;
  border: 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
}

.breeds-cards-box {
  width: 25%;
  height: 95%;
  border-radius: 20px;
  background-color: #ca9d64;
}

.imgbox {
  height: 55%;
  widows: 100%;
  background-image: url('./assets/media/cavalo.jpg');
  background-size: cover;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: end;
  align-items: end;
}

.imgbox p {
  font-size: 1rem;
  background-color: rgba(223, 207, 207, 0.5);
  padding: 0.3rem 2rem;
}
</style>
