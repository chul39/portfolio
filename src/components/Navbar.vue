<template>
  <nav :class="{ sticky: isSticky }">
    <a href="#" class="logo">CS</a>
    <ul>
      <li><a href="#">Top</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="menu-icon-wrapper">
      <svg fill="#fff" viewBox="0 0 100 100" width="100%" height="100%">
        <rect width="85" height="12" x="10" y="15" rx="5"></rect>
        <rect width="85" height="12" x="10" y="45" rx="5"></rect>
        <rect width="85" height="12" x="10" y="75" rx="5"></rect>
      </svg>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isSticky: false
    }
  },
  created () {
    window.addEventListener('scroll', () => { this.isSticky = window.scrollY > 0 })
  }
}
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
}
nav ul li a {
  position: relative;
  margin: 0 15px;
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  font-weight: 500;
}
.sticky {
  padding: 5px 100px;
  background: #000;
}
div .menu-icon-wrapper {
  display: none;
  height: 2em;
  width: 2em;
}
@media (max-width: 800px) {
  nav {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
  nav ul {
    display: none;
  }
  div .menu-icon-wrapper {
    display: block;
  }
}
</style>