<script setup>
import { onMounted, ref } from 'vue'
import { sizes, getJSON } from '@/componentsFunctions/breedsHorse'
import cvl0 from '@/assets/media/cavalo-0.jpg'
import cvl1 from '@/assets/media/cavalo-1.jpg'
import cvl2 from '@/assets/media/cavalo-2.jpg'
const cards = ref([])

onMounted(() => {
  getJSON(cards)
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
        <img
          :src="card.id == 0 ? cvl0 : card.id == 1 ? cvl1 : cvl2"
          alt="imagens de cavalo"
        />
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
