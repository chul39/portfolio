<template>
  <div class="banner-wrapper">
    <div class="banner-wave">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="banner-text" v-if="store.state.currentLanguage === 'JP'">
      <div class="main-text">
        <span>
          <ruby>
            CHUNLAPHAT<rt>チュンラパット</rt></ruby> <ruby>SUWANNAAT<rt>スワンナアット</rt>
          </ruby>
        </span> 
        です。
      </div>
      <div class="sub-text">
        <span>WEB</span> と <span>ゲーム</span> を作っています。
      </div>
    </div>
    <div class="banner-text" v-else>
      <div class="main-text">
        Hi, I'm <span><ruby>Chunlaphat<rt></rt></ruby> <ruby>Suwannaat<rt></rt></ruby></span>.
      </div>
      <div class="sub-text">
        I create <span>web applications</span> and <span>games</span>.
      </div>
    </div>
  </div>
</template>

<script>
import { ref, inject } from 'vue'
export default {
  name: "Banner",
  setup(props, context) {
    const store = inject('store')
    return { store }
  }
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
  width: 100vw;
  white-space: nowrap;
}
.banner-text div {
  color: #FFFFFF;
}
.banner-text span, ruby, rt {
  color: #6BD0FF;
  user-select: none;
}
.banner-text .main-text {
  font-size: 3rem;
  opacity: 1;
  position: relative;
}
.banner-text .sub-text {
  font-size: 2rem;
  opacity: 1;
}
@media (max-width: 992px) {
  .banner-text .main-text {
    font-size: 1.5rem;
  }
  .banner-text .sub-text {
    font-size: 1.25rem;
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