<template>
  <header>
    <Navbar />
    <OverlayMenu />
    <Banner />
  </header>
  <main>
    <section id="about">
    </section>
    <section id="services">
    </section>
    <section id="portfolio">
    </section>
    <section id="contact">
    </section>
  </main>
</template>

<script setup>
import { provide } from "vue"
import store from "@/stores/mainStore"
import Navbar from "@/components/Navbar.vue"
import Banner from "@/components/Banner.vue"
import OverlayMenu from "@/components/OverlayMenu.vue"
provide('store', store)
</script>

<style scoped>
</style>
