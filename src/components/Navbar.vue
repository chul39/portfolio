<template>
  <nav :class="{ sticky: isSticky }">
    <a href="#" class="logo">CS</a>
    <ul>
      <li><a href="#">Top</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
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
    <button class="menu-icon" @click="store.methods.toggleMobileMenu()">
      <svg fill="#fff" viewBox="0 0 100 100" width="100%" height="100%">
        <rect width="85" height="12" x="10" y="15" rx="5"></rect>
        <rect width="85" height="12" x="10" y="45" rx="5"></rect>
        <rect width="85" height="12" x="10" y="75" rx="5"></rect>
      </svg>
    </button>
  </nav>
</template>

<script>
import { onMounted, ref, inject } from 'vue'
export default {
  name: "Navbar",
  setup() {

    const store = inject('store')
    const isSticky = ref(false)

    const getUserLocale = () => {
      if(navigator.languages && navigator.languages.length) return navigator.languages[0]
      return navigator.userLanguage || navigator.language || navigator.browserLanguage
    }

    onMounted(() => {
      window.addEventListener('scroll', () => { isSticky.value = window.scrollY > 0 })
      if(getUserLocale().includes('ja')) changeLanguage('JP')
    })

    return { store, isSticky }

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 40px 100px;
}
nav .logo {
  position: relative;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  user-select: none;
}
nav ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
nav ul li {
  position: relative;
  list-style: none;
  color: #fff;
  letter-spacing: 2px;
}
nav ul li.divider {
  margin: 0 15px;
  user-select: none;
}
nav ul li.language-select {
  margin-left: 15px;
  user-select: none;
}
nav ul li a {
  position: relative;
  margin: 0 15px;
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  font-weight: 500;
  user-select: none;
}
nav ul li a:hover {
  color: #FFC300;
}
nav ul li span.active {
  font-weight: bold;
}
nav ul li span.inactive {
  color: #aaa;
  cursor: pointer;
}
nav ul li span.inactive:hover {
  color: #FFC300 
}
nav.sticky {
  padding: 5px 100px;
  background: #000;
  z-index: 99;
}
button.menu-icon {
  display: none;
  height: 2em;
  width: 2em;
  background: transparent;
  border: none;
}
@media (max-width: 768px) {
  nav {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
  nav ul {
    display: none;
  }
  button.menu-icon {
    display: block;
  }
}
</style>