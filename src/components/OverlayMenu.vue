<template>
  <div class="overlay" :class="[store.state.isOverlayActive ? 'visible' : 'hidden']">
    <div class="overlay-wrapper">
    <button class="close-overlay" @click="store.methods.toggleOverlay()">
      &times;
    </button>
      <ul>
        <li @click="store.methods.toggleOverlay"><a href="#">{{ keys[store.state.currentLanguage].top }}</a></li>
        <li @click="store.methods.toggleOverlay"><a href="#about">{{ keys[store.state.currentLanguage].about }}</a></li>
        <li @click="store.methods.toggleOverlay"><a href="#services">{{ keys[store.state.currentLanguage].service }}</a></li>
        <li @click="store.methods.toggleOverlay"><a href="#portfolio">{{ keys[store.state.currentLanguage].portfolio }}</a></li>
        <li @click="store.methods.toggleOverlay"><a href="#contact">{{ keys[store.state.currentLanguage].contact }}</a></li>
        <hr />
        <li class="language-select">
          <span 
            :class="{ inactive: store.state.currentLanguage !== 'EN' }" 
            @click="store.methods.changeLanguage('EN')"
          >
            ENGLISH
          </span>
          <span 
            :class="{ inactive: store.state.currentLanguage !== 'JP' }" 
            @click="store.methods.changeLanguage('JP')"
          >
            日本語
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, inject } from 'vue'
export default {
  name: "OverlayMenu",
  setup() {
    const store = inject('store')
    const keys = {
      "EN": {
        top: "TOP",
        about: "ABOUT",
        service: "SERVICES",
        portfolio: "PORTFOLIO",
        contact: "CONTACT"
      },
      "JP": {
        top: "トップ",
        about: "自己紹介",
        service: "サービス",
        portfolio: "ポートフォリオ",
        contact: "お問い合わせ"
      }
    }
    return { store, keys }
  }
}
</script>

<style scoped>
button.close-overlay {
  position: absolute;
  top: 0px;
  right: 0.1em; 
  line-height: 1em;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 5em;
}
.overlay {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.overlay-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
}
ul {
  position: relative;
}
ul li {
  position: relative;
  list-style: none;
  text-align: center;
  margin: 15px 0px;
}
ul li a {
  text-decoration: none;
  font-size: 2em;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
}
ul li a:hover {
  color: #FFC300;
}
ul li span {
  font-size: 1.5em;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 1em 0.5em;
}
ul li span:hover {
  color: #FFC300;
}
ul li span.inactive {
  color: #aaa;
  cursor: pointer;
}
</style>