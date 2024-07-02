<script setup>
import { ref } from 'vue'
const isActive = ref(false)
</script>
<template>
  <span @click="isActive = !isActive">
    <div class="box-menuIcon" :class="{ animar: isActive }">
      <div class="menu-bars"></div>
      <div class="menu-bars"></div>
      <div class="menu-bars"></div>
    </div>
  </span>
</template>
