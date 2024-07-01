<script setup>
import { onMounted, reactive, ref } from 'vue'
const cardColors = ref([])

onMounted(() => {
  fetch('infos.json').then((response) => {
    response.json().then((cores) => {
      cardColors.value = cores.cardsColors
    })
  })
})
</script>
<template>
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
                <li v-for="cardColor in cardColors" :key="cardColor.id" :style="cardColor.cor"></li>
              </ul>
            </li>

            <li class="information-items">
              <p>Something:</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore quaerat tenetur
                labore corporis dolores.
              </p>
            </li>
            <li class="information-items">
              <p>Something:</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore quaerat tenetur
                labore corporis dolores.
              </p>
            </li>
            <li class="information-items">
              <p>Something:</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore quaerat tenetur
                labore corporis dolores.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
  background-image: url('../assets/media/cavalo.jpg');
  background-size: cover;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: end;
  align-items: end;
}

.main-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.imgbox p {
  font-size: 1rem;
  background-color: rgba(223, 207, 207, 0.5);
  padding: 0.3rem 2rem;
}

.information-box {
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: var(--vt-c-white);
}

.information-box h3 {
  color: var(--vt-c-white);
  font-weight: 500;
}

.information-list {
  width: 100%;
  display: flex;
  list-style: none;
}

.information-list ul {
  padding: 0;
}
.information-items {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.information-items li {
  display: flex;
  width: 100%;
}

.information-items p {
  font-size: 0.7rem;
  font-weight: 500;
}

.information-items p {
  margin-left: 0.5rem;
}

.colors-list {
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: space-between;
  margin-right: 8rem;
}

.colors-list li {
  width: 20px;
  height: 20px;
}
</style>
