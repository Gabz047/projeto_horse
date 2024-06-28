<template>
  <Header />
  <main>
    <SectionPresentation />

    <section class="container-sumup">
      <div class="tittle-sumup">
      <h2>HORSE RIDING</h2>
    </div>

    <article class="box-sumup-texts">
      <div class="sumup-texts">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis dawdadaw perspiciatis
          fugiat asperiores molestias sapiente eaque saepe tempora omnis aliquid praesentium
          repudiandae quos consequatur, similique dignissimos dolor molestiae ipsa atqued adawdawdadawdawadwdada.
        </p>
      </div>

      <div class="sumup-texts">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis dawdadaw perspiciatis
          fugiat asperiores molestias sapiente eaque saepe tempora omnis aliquid praesentium
          repudiandae quos consequatur, similique dignissimos dolor molestiae ipsa atqued adawdawdadawdawadwdada.
        </p>
      </div>
    </article>
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
  width: 100vw;
  height: 130vh;
  background-color: #DCAA6D;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.tittle-sumup {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 5rem;
  margin-top: 6rem;
}

h2 {
  font-size: 3rem;
  border-bottom: 3px solid var(--vt-c-white);
  color: var(--vt-c-white);
  
}

.box-sumup-texts {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  margin-top: 1rem;
}

.sumup-texts {
  width: 30%;
  height: 15rem;
  color: var(--vt-c-white);
  font-size: 1.2rem;
  text-align: center;
  line-height: 45px;
}

.box-video-out {
  width: 100%;
  height: 28rem;
  border: 2px solid;
  align-items: center;
  display: flex;
  justify-content: center;
}

.background-text {
  font-size: 18rem;
  letter-spacing: 8rem;
  text-align: center;
  position: absolute;
  z-index: 0;
  color: #E2B985;
  font-weight: 900;
}

.box-video-inside {
  width: 90%;
  height: 100%;
  border: 2px solid;
  border-radius: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 3.5rem;
  color: white;
}

.box-video-inside-video {
  width: 50%;
  height: 90%;
  border-radius: 20%;
  background-image: url('./assets/media/equination.webp');
  background-size: cover;
  background-position: center;
}
</style>
