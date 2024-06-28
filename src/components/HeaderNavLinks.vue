<script setup>
import MenuIcon from './MenuIcon.vue'
</script>
<template>
  <main>
    <nav>
      <p class="nav-links">HOME</p>
      <p class="nav-links">RIDING</p>
      <p class="nav-links">BREEDS</p>
      <p class="nav-links">GALLERY</p>
      <p class="nav-links">EVENTS</p>
      <p class="nav-links">CONTACTS</p>
    </nav>

   <MenuIcon />
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: end;
  gap: 5rem;
  max-width: 70vw;
  width: 100%;
  height: 1.6rem;
  align-items: center;
  margin-right: 1.5rem;
}
nav {
  display: flex;
  gap: 1.5rem;
}

.nav-links {
  color: rgb(255, 255, 255);
  font-weight: 400;
  font-size: 25px;
}
</style>
