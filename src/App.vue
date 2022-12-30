<template>
  <header>
    <Navbar />
    <OverlayMenu />
    <Banner />
  </header>
  <main>
    <AboutMe />
    <MyService />
    <Portfolio />
    <Contact />
  </main>
</template>

<script setup>
import { onMounted, provide } from "vue"
import store from "@/stores/mainStore"
import Navbar from "@/components/Navbar.vue"
import Banner from "@/components/Banner.vue"
import OverlayMenu from "@/components/OverlayMenu.vue"
import AboutMe from "@/components/AboutMe.vue"
import MyService from "@/components/MyService.vue"
import Portfolio from "@/components/Portfolio.vue"
import Contact from "@/components/Contact.vue"
provide('store', store)

const getUserLocale = () => {
  if(navigator.languages && navigator.languages.length) return navigator.languages[0]
  return navigator.userLanguage || navigator.language || navigator.browserLanguage
}

onMounted(() => {
  if(getUserLocale().includes('ja')) store.methods.changeLanguage('JP')
})
</script>

<style scoped>
</style>
