<script setup>
import HeaderNavLinks from './HeaderNavLinks.vue'
</script>

<template>
  <header>
    <div class="box-iconHorse">
      <img src="./icons/moon-svgrepo-com.svg" />
    </div>

    <HeaderNavLinks class="headernavlinks" />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  position: fixed;
  border: 2px solid blue;
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
  margin: 1.5rem 1.5rem 0 0;
}
</style>
