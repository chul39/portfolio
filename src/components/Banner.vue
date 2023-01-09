<template>
  <div class="banner-wrapper">
    <div class="banner-wave">
      <span></span>
      <span></span>
      <span></span>
    </div>
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
  position: relative;
  max-width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner-wave {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1A74E2;
}
.banner-wave span {
  position: absolute;
  width: 325vh;
  height: 325vh;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
.banner-wave span:nth-child(1) {
  animation: wave-animate 10s linear infinite;
  border-radius: 45%;
  background: #3FA0EF;
  opacity: 0.5;
  z-index: 2;
}
.banner-wave span:nth-child(2) {
  animation: wave-animate 20s linear infinite;
  border-radius: 40%;
  background: #1A74E2;
  opacity: 0.5;
  z-index: 2;
}
.banner-wave span:nth-child(3) {
  animation: wave-animate 30s linear infinite;
  border-radius: 42.5%;
  background: #1F2123;
  opacity: 0.5;
  z-index: 2;
}
@keyframes wave-animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
.banner-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%);
  z-index: 2;
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
  opacity: 1;
  position: relative;
  animation: main-text 3s 1;
}
.banner-text .sub-text {
  font-size: 4vw;
  opacity: 1;
  color: #6BD0FF;
  animation: sub-text 3s 1;
}
@keyframes main-text {
  0% {
    filter: blur(5px);
    opacity: 0;
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
    opacity: 0;
  }
  90% {
    opacity: 0;
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
  @keyframes wave-animate {
    0% {
      transform: translate(-50%, -80%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -80%) rotate(360deg);
    }
  }
}
</style>