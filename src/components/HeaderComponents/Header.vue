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
      <img src="../icons/iconHorse.png" />
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
}

.box-iconHorse {
  width: 10%;
  height: 100%;
  display: flex;
  margin: 0.5rem 0 0 1.5rem;
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
