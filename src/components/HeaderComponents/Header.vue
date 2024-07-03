<script setup>
import HeaderNavLinks from './HeaderNavLinks.vue'
import { reactive, ref, computed } from 'vue'

const backgroundHeader = reactive({
  desactivate: 'backgroud-color: transparent',
  activate: 'background-color: black'
})

</script>

<template>
  <header class="header">
    <div class="box-iconHorse">
      <img src="../icons/whitehorseicon.png" />
    </div>
    <HeaderNavLinks class="headernavlinks" />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 6.5rem;
  position: fixed;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.582);
  backdrop-filter: blur(16px);
}

.box-iconHorse {
  width: 10%;
  height: 90%;
  display: flex;
  margin: 1.2rem 0 0 1.2rem;
}

.box-iconHorse img {
  height: 100%;
}

.headernavlinks {
  position: relative;
  right: 1.5rem;
  top: 1.5rem;
}
</style>
