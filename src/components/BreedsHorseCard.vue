<script setup>
import { onMounted, reactive, ref } from 'vue'
const cards = ref([])

onMounted(() => {
  fetch('infos.json').then((response) => {
    response.json().then((cores) => {
      cards.value = cores
      console.log(cores[0].src)
    })
  })
})

const sizes = reactive({
  main: {
    width: 'width: 30%',
    heigth: 'height: 100%'
  },
  others: {
    width: 'width: 26%',
    heigth: 'height: 80%'
  },
  boxsizemain: {
    width: 'width: 20px',
    heigth: 'height: 20px'
  },
  boxsizeothers: {
    width: 'width: 15px',
    heigth: 'height: 15px'
  },
  fontSizeMain: {
    font: 'font-size: 0.72rem'
  },
  fontSizeOthers: {
    font: 'font-size: 0.6rem'
  }
})
</script>
<template>
  <div class="container-breeds-cards">
    <div
      class="breeds-cards-box"
      v-for="card in cards"
      :style="
        card.id == 1
          ? [sizes.main.width, sizes.main.heigth]
          : [sizes.others.width, sizes.others.heigth]
      "
    >
      <div class="imgbox">
        <p>{{ card.horseBreed }}</p>
      </div>

      <div class="information-box">
        <h3>{{ card.cardsTittle }}</h3>

        <div class="information-list">
          <ul
            class="main-list"
            :style="card.id == 1 ? [sizes.fontSizeMain.font] : [sizes.fontSizeOthers.font]"
          >
            <li class="information-items">
              <p>Colors:</p>
              <ul class="colors-list">
                <li
                  v-for="cardColor in card.cardColors"
                  :style="
                    card.id == 1
                      ? [sizes.boxsizemain.width, sizes.boxsizemain.heigth, cardColor]
                      : [sizes.boxsizeothers.width, sizes.boxsizeothers.heigth, cardColor]
                  "
                ></li>
              </ul>
            </li>

            <li class="information-items">
              <p>Something:</p>
              <p>
                {{ card.cardFistText }}
              </p>
            </li>
            <li class="information-items">
              <p>Something:</p>
              <p>
                {{ card.cardSecondText }}
              </p>
            </li>
            <li class="information-items">
              <p>Something:</p>
              <p>
                {{ card.cardsThirdTexts }}
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
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: top;
}

.breeds-cards-box {
  border-radius: 20px;
  background-color: #ca9d64;
}

.imgbox {
  height: 55%;
  widows: 100%;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: end;
  align-items: end;
  background-image: url('../assets/media/cavalo.jpg');
  background-size: cover;
}

.main-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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

.information-items {
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
