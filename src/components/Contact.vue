<template>
   <section id="contact">
    <h1>{{ displayKeys.header }}</h1>
    <div class="container">
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
    </div>
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
.container {
  grid-column: 2/span 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2rem;
}
.item {
  grid-column-end: span 3;
  display: flex;
  align-items: center;
  background-color: #FFF;
  cursor: pointer;
  transition: all 0.3s ease 0s; 
}
.item:hover {
  transform: translateY(-7px);
}
.icon {
  display: flex;
  max-width: 5rem;
  max-height: 5rem;
  margin: 0 0.5rem;
  padding: 0;
}
img {
  max-width: 3rem;
  max-height: 3rem;
}
p.title {
  color: #000;
  font-size: 1.25rem;
  margin: 0 0.25rem;
}
@media (max-width: 767px) {
  .container {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1rem;
  }
  .item {
    grid-column-end: span 6;
  }
  p.title {
    justify-content: center;
  }
}
</style>