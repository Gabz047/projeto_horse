<template>
  <Header />
  <main>
    <SectionPresentation />

    <section class="container-sumup">
      <h2>HORSE RIDING</h2>

      <div class="sumup-texts">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis perspiciatis
          fugiat asperiores molestias sapiente eaque saepe tempora omnis aliquid praesentium
          repudiandae quos consequatur, similique dignissimos dolor molestiae ipsa atque.
        </p>
      </div>

      <div class="sumup-texts">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, similique, laboriosam
          voluptates blanditiis non voluptate eos, error explicabo voluptatum placeat aspernatur
          debitis perferendis et! Rem est aspernatur obcaecati veniam esse?
        </p>
      </div>

      <div class="box-video-out">
        <p class="background-text">RIDING</p>

        <div class="box-video-inside">
          <p><<</p>
          <div class="box-video-inside-video"></div>
          <p>>></p>
        </div>
      </div>

      <div class="show-more-button">
        <button>Show me More</button>
      </div>
    </section>
  </main>
</template>

<script setup>
import Header from './components/Header.vue'
import SectionPresentation from './components/SectionPresentation.vue'
</script>

<style scoped>
main {
  height: auto;
}

.container-sumup {
  width: 100%;
  height: 100vh;
}
</style>
