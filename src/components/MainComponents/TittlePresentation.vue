<template>
     <div class="box-left-text">
        <h1 class="tittle-presentation">HORSEBACK</h1>
        <h2 class="subtittle-presentation">Explore UK from the saddle</h2>
      </div>
</template>

<style scoped>
.box-left-text {
  position: relative;
  left: 3rem;
}

.tittle-presentation {
  color: var(--vt-c-white);
  font-weight: 700;
  font-size: 4rem;
}

.tittle-presentation::after {
  content: ' RIDING';
}

.subtittle-presentation {
  color: var(--vt-c-white);
  font-weight: 400;
  letter-spacing: 0.1rem;
  font-size: 2rem;
}

</style>