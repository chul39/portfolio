<template>
  <nav :class="{ sticky: isSticky }">
    <div class="nav-wrapper">
      <a href="#" class="logo">CS</a>
      <ul>
        <li><a href="#">{{ displayKeys.top }}</a></li>
        <li><a href="#about">{{ displayKeys.about }}</a></li>
        <li><a href="#services">{{ displayKeys.service }}</a></li>
        <li><a href="#portfolio">{{ displayKeys.portfolio }}</a></li>
        <li><a href="#contact">{{ displayKeys.contact }}</a></li>
        <li class="divider">|</li>
        <li class="language-select">
          <span 
            :class="{ inactive: store.state.currentLanguage !== 'EN' }" 
            @click="store.methods.changeLanguage('EN')"
          >
            EN
          </span>
          /
          <span 
            :class="{ inactive: store.state.currentLanguage !== 'JP' }" 
            @click="store.methods.changeLanguage('JP')"
          >
            JP
          </span>
        </li>
      </ul>
      <button class="menu-icon" @click="store.methods.toggleOverlay()">
        <svg fill="#fff" viewBox="0 0 100 100" width="100%" height="100%">
          <rect width="85" height="12" x="10" y="15" rx="5"></rect>
          <rect width="85" height="12" x="10" y="45" rx="5"></rect>
          <rect width="85" height="12" x="10" y="75" rx="5"></rect>
        </svg>
      </button>
    </div>
  </nav>
</template>

<script>
import { onMounted, ref, computed, inject } from 'vue'
export default {
  name: "Navbar",
  setup() {

    const store = inject('store')
    const isSticky = ref(false)

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

    const displayKeys = computed(() => {
      return keys[store.state.currentLanguage]
    })

    onMounted(() => {
      window.addEventListener('scroll', () => { isSticky.value = window.scrollY > 0 })
    })

    return { store, displayKeys, isSticky }

  }
}
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  transition: 0.6s;
  padding: 40px 100px;
}
nav .nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  margin: auto;
}
nav .nav-wrapper .logo {
  position: relative;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  user-select: none;
}
nav .nav-wrapper ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
nav .nav-wrapper ul li {
  position: relative;
  list-style: none;
  color: #fff;
  letter-spacing: 2px;
}
nav .nav-wrapper ul li.divider {
  margin: 0 15px;
  user-select: none;
}
nav .nav-wrapper ul li.language-select {
  margin-left: 15px;
  user-select: none;
}
nav .nav-wrapper ul li a {
  position: relative;
  margin: 0 15px;
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  font-weight: 500;
  user-select: none;
}
nav .nav-wrapper ul li a:hover {
  color: #F5B301;
}
nav .nav-wrapper ul li span.inactive {
  color: #aaa;
  cursor: pointer;
}
nav .nav-wrapper ul li span.inactive:hover {
  color: #F5B301 
}
nav.sticky {
  padding: 5px 100px;
  background: #000;
  z-index: 98;
}
button.menu-icon {
  display: none;
  height: 2em;
  width: 2em;
  background: transparent;
  border: none;
  cursor: pointer;
}
@media (max-width: 992px) {
  nav {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
  nav .nav-wrapper ul {
    display: none;
  }
  button.menu-icon {
    display: block;
  }
}
</style>