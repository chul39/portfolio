<template>
  <div class="banner-wrapper">
    <div class="banner-text">
      <span class="main-text">CHUNLAPHAT</span>
      <span class="sub-text">WEB・GAME ENGINEER</span>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  name: "Banner"
}
</script>

<style scoped>
.banner-wrapper {
  max-width: 100%;
  min-height: 100vh;
  background-color: #1E2328;
}
.banner-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%);
}
.banner-text span {
  color: white;
  text-transform: uppercase;
  display: block;
  user-select: none;
}
.banner-text .main-text {
  font-size: 8vw;
  font-weight: 500;
  position: relative;
  animation: main-text 3s 1;
}
.banner-text .sub-text {
  font-size: 4vw;
  color: #F5B301;
  animation: sub-text 3s 1;
}
@keyframes main-text {
  0% {
    filter: blur(5px);
    color: rgba(0, 0, 0, 0);
    margin-bottom: -50px;
  }
  30% {
    letter-spacing: 30px;
    margin-bottom: -50px;
  }
  85% {
    filter: blur(0);
    margin-bottom: -50px;
  }
}
@keyframes sub-text {
  0% {
    color: rgba(0, 0, 0, 0);
  }
  85% {
    color: rgba(0, 0, 0, 0);
  }
}
@media (min-width: 1440px) {
  .banner-text .main-text {
    font-size: 8rem;
  }
  .banner-text .sub-text {
    font-size: 4rem;
  }
}

@media (max-width: 992px) {
  .banner-text .main-text {
    font-size: 10vw;
  }
  .banner-text .sub-text {
    font-size: 5vw;
  }
}
</style>