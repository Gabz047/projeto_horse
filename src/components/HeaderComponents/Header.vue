<script setup>
import HeaderNavLinks from './HeaderNavLinks.vue'
</script>

<template>
  <header class="header">
    <div class="box-iconHorse">
      <img src="../icons/whitehorseicon.png" alt="icone branco da cabeça de um cavalo"/>
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
  backdrop-filter: blur(36px);
}

.box-iconHorse {
  width: 10%;
  height: 90%;
  display: flex;
  margin: 0.5rem 0 0 0.5rem;
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
