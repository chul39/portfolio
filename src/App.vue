<template>
  <header>
    <Navbar />
    <OverlayMenu />
    <Banner />
  </header>
  <main>
    <AboutMe />
    <MySkills />
    <Projects />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script setup>
import { onMounted, provide } from "vue"
import store from "@/stores/mainStore"
import Navbar from "@/components/Navbar.vue"
import Banner from "@/components/Banner.vue"
import OverlayMenu from "@/components/OverlayMenu.vue"
import AboutMe from "@/components/AboutMe.vue"
import MySkills from "@/components/MySkills.vue"
import Projects from "@/components/Projects.vue"
import Footer from "@/components/Footer.vue"
provide('store', store)

const getUserLocale = () => {
  if(navigator.languages && navigator.languages.length) return navigator.languages[0]
  return navigator.userLanguage || navigator.language || navigator.browserLanguage
}

onMounted(() => {

  if(getUserLocale().includes('ja')) store.methods.changeLanguage('JP')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('observer-target-in')
    })
  })

  const toBeAnimatedOnIntersection = document.querySelectorAll('.observer-target')
  toBeAnimatedOnIntersection.forEach(el => observer.observe(el))
  
})
</script>

<style scoped>
</style>
