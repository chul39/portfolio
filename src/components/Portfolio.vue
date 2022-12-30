<template>
   <section id="portfolio">
    <h1>{{ displayKeys.header }}</h1>
   </section>
</template>

<script>
import { inject, computed } from 'vue'
export default {
  name: "Portfolio",
  setup() {

    const store = inject('store')

    const keys = {
      "EN": {
        header: "Portfolio",
      },
      "JP": {
        header: "ポートフォリオ"
      }
    }

    const displayKeys = computed(() => {
      return keys[store.state.currentLanguage]
    })

    return { store, displayKeys }

  }
}
</script>

<style>

</style>