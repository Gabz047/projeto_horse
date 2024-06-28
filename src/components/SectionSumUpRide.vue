<template>
  <section class="container-sumup">
    <div class="tittle-sumup">
      <h2>HORSE RIDING</h2>
    </div>

    <article class="box-sumup-texts">
      <div class="sumup-texts">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis dawdadaw
          perspiciatis fugiat asperiores molestias sapiente eaque saepe tempora omnis aliquid
          praesentium repudiandae quos consequatur, similique dignissimos dolor molestiae ipsa
          atqued adawdawdadawdawadwdada.
        </p>
      </div>

      <div class="sumup-texts">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis dawdadaw
          perspiciatis fugiat asperiores molestias sapiente eaque saepe tempora omnis aliquid
          praesentium repudiandae quos consequatur, similique dignissimos dolor molestiae ipsa
          atqued adawdawdadawdawadwdada.
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
</template>
<style scoped>
.container-sumup {
  width: 100vw;
  height: 130vh;
  background-color: #dcaa6d;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.tittle-sumup {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 5rem;
  margin-top: 5rem;
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
  font-size: 1rem;
  text-align: center;
  line-height: 35px;
}

.box-video-out {
  width: 100%;
  height: 25rem;

  align-items: center;
  display: flex;
  justify-content: center;
}

.background-text {
  font-size: 260px;
  letter-spacing: 5rem;
  text-align: center;
  position: absolute;
  z-index: 0;
  color: #e2b985;
  font-weight: 900;
  left: 1rem;
}

.box-video-inside {
  width: 90%;
  height: 100%;
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
  background-image: url('../assets/media/equination.webp');
  background-size: cover;
  background-position: center;
}

.show-more-button {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.show-more-button button {
  border: 2px solid var(--vt-c-white);
  background-color: transparent;
  border-radius: 50px;
  color: white;
  height: 70%;
  width: 30%;
  font-size: 1.4rem;
}
</style>
