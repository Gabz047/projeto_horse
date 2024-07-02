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
