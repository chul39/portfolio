<template>
   <section id="contact">
    <h1>{{ displayKeys.header }}</h1>
    <article>
      <div v-for="i in 4" :key="i" class="item">
        <div class="icon">
          <img v-if="i === 1" src="@/assets/mail-svgrepo-com.svg">
          <img v-if="i === 2" src="@/assets/github-svgrepo-com.svg">
          <img v-if="i === 3" src="@/assets/linkedin-svgrepo-com.svg">
          <img v-if="i === 4" src="@/assets/Wantedly_Mark_LightBG.svg">
        </div>
        <div class="text">
          <p class="title">{{ displayKeys.titles[i-1] }}</p>
          <p class="detail">{{ displayKeys.details[i-1] }}</p>
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
        header: "Contact",
        titles: [
          "Mail",
          "Github",
          "Linkedin",
          "Wantedly",
        ],
        details:[
          "URL",
          "URL",
          "URL",
          "URL"
        ]
      },
      "JP": {
        header: "お問い合わせ",
        titles: [
          "Mail",
          "Github",
          "Linkedin",
          "Wantedly",
        ],
        details:[
          "URL",
          "URL",
          "URL",
          "URL"
        ]
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
section {
  background-color: #E5E5E5;
}
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
  font-weight: 700;
  margin: 0 0.25rem;
}
p.detail {
  color: #000;
  margin: 0 0.25rem;
}
@media (max-width: 1200px) {
  article {
    grid-template-columns: repeat(2, 1fr);
  }
  img {
    max-height: 100%;
  }
}
@media (max-width: 767px) {
  article {
    grid-template-columns: repeat(1, 1fr);
  }
  p.title {
    font-size: 1rem;
  }
}
</style>