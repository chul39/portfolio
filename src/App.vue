<template>
  <header>
    <Navbar />
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
import Navbar from "@/components/Navbar.vue"
import Banner from "@/components/Banner.vue"
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
