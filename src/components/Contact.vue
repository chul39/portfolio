<template>
   <section id="contact">
    <h1>{{ displayKeys.header }}</h1>
   </section>
</template>

<script>
import { inject, computed } from 'vue'
export default {
  name: "Contact",
  setup() {

    const store = inject('store')

    const keys = {
      "EN": {
        header: "Contact",
      },
      "JP": {
        header: "お問い合わせ"
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