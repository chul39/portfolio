<template>
   <section id="contact">
    <h1>{{ displayKeys.header }}</h1>
    <article>
      <div class="item">
        <div class="icon">
          <img src="@/assets/github-svgrepo-com.svg">
        </div>
        <div class="text">
          <p class="title">Github</p>
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <img src="@/assets/linkedin-svgrepo-com.svg">
        </div>
        <div class="text">
          <p class="title">Linkedin</p>
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <img src="@/assets/Wantedly_Mark_LightBG.svg">
        </div>
        <div class="text">
          <p class="title">Wantedly</p>
        </div>
      </div>
    </article>
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
        header: "Contact"
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

<style scoped>
article {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
div.item {
  display: flex;
  align-items: center;
  background-color: #FFF;
  border-radius: 1.5rem;
  cursor: pointer;
}
div.text {
  max-width: 70%;
}
div.icon {
  max-width: 5rem;
  max-height: 5rem;
  margin: 0 0.5rem;
  padding: 0;
}
img {
  max-width: 5rem;
  max-height: 5rem;
}
p.title {
  color: #000;
  font-size: 1.5rem;
  margin: 0 0.25rem;
}
@media (max-width: 1200px) {
  img {
    max-height: 100%;
  }
}
@media (max-width: 767px) {
  article {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>