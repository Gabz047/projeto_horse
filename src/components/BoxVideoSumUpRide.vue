<template>
        <div class="box-video-out">
      <div class="background-text">
        <p>R</p>
        <p>I</p>
        <p>D</p>
        <p>I</p>
        <p>N</p>
        <p>G</p>
      </div>

      <div class="box-video-inside">
        <p><<</p>
        <div class="box-video-inside-video"></div>
        <p>>></p>
      </div>
    </div>

    <div class="show-more-button">
      <button>Show me More</button>
    </div>
</template>
<style scoped>

.box-video-out {
  width: 100%;
  height: 25rem;
  align-items: center;
  display: flex;
  justify-content: center;
}

.background-text {
  font-size: 200px;
  position: absolute;
  z-index: 0;
  color: #e2b985;
  width: 98vw;
  display: flex;
  justify-content: space-between;
}

.background-text p {
  font-weight: 900;
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