<template>
  <section id="services">
    <h1>{{ displayKeys.header }}</h1>
    <article>
      <div v-for="i in 4" :key="i" class="item">
        <div class="icon">
          <img v-if="i === 1" src="@/assets/responsive-svgrepo-com.svg">
          <img v-if="i === 2" src="@/assets/game-console-svgrepo-com.svg">
          <img v-if="i === 3" src="@/assets/database-svgrepo-com.svg">
          <img v-if="i === 4" src="@/assets/cloud-computing-svgrepo-com.svg">
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
  name: "MyService",
  setup() {

    const store = inject('store')

    const keys = {
      "EN": {
        header: "Services",
        titles: [
          "Web development",
          "Game development",
          "Database engineering",
          "Cloud computing"
        ],
        details:[
          "Experienced in fullstack development using modern technologies such as Vue, Node.js, and Express.",
          "Specialized in creating games with Unity3D. Mainly focused on gameplay and server development.",
          "Designing and maintaining both RDBMS and NoSQL databases.",
          "Implementing cloud services from well-known providers such as Azure and AWS."
        ]
      },
      "JP": {
        header: "サービス",
        titles: [
          "Web開発",
          "ゲーム開発",
          "データベース開発",
          "クラウド開発"
        ],
        details: [
          "Vue.js/Express/Node.js等を用いたフルスタックWeb開発",
          "Unity3Dを用いたゲーム開発・サーバー開発",
          "RDBMS/NoSQLデータベースの設計・開発・運用・管理",
          "AWSやAzureなどクラウドサービス実施"
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
article {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
div.item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}
img {
  max-width: 8rem;
  max-height: 8rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
}
p.title {
  color: #FFF;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 1rem;
}
p.detail {
  color: #FFF;
  margin: 0.5rem 1rem;
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