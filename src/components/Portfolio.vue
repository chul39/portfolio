<template>
   <section id="portfolio">
    <h1>{{ displayKeys.header }}</h1>
      <div class="cards">
        <div v-for="i in 6" :key="i" class="card">
          <div class="card-image">
            <img src="@/assets/corgi-noodles.png" />
          </div>
          <div class="card-content">
            <div class="card-title">
              TEST TITLE
            </div>
            <div class="card-info">
              <div class="card-tag">TAG</div>
            </div>
          </div>
        </div>
      </div>
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

<style scoped>
.cards {
  grid-column: 2/span 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 40px;
}
.card {
  grid-column-end: span 4;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
.card:hover {
  transform: translateY(-7px);
}
.card-image {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.card-image img {
  width: 100%;
}
.card-content {
  margin: 0.5rem;
  margin-top: 0;
}
.card-title {
  margin-bottom: 0.2rem;
  font-size: 1.5rem;
  font-weight: 700;
}
.card-info {
  display: flex;
  align-items: center;
}
.card-tag {
  color: #ecf0f1;
  font-size: 0.75rem;
  padding: 5px 10px;
  background-color: #303032;
  border-radius: 20px;
}
@media (max-width: 767px) {
  .cards {
    grid-template-columns: repeat(6, 1fr);
  }
  .card {
    grid-column-end: span 6;
  }
}
</style>