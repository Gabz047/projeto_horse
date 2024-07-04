import { reactive } from 'vue'

export const sizes = reactive({
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

export function getJSON(storage) {
  fetch('infos.json').then((response) => {
    response.json().then((cores) => {
      storage.value = cores
    })
  })
}


