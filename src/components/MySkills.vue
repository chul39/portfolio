<template>
  <section id="skills">
    <h1 class="observer-target">{{ displayKeys.header }}</h1>
    <article>
      <div v-for="i in 4" :key="i" class="item observer-target">
        <div class="icon">
          <img v-if="i === 1" src="@/assets/imgs/skills/responsive-svgrepo-com.svg">
          <img v-if="i === 2" src="@/assets/imgs/skills/game-console-svgrepo-com.svg">
          <img v-if="i === 3" src="@/assets/imgs/skills/database-svgrepo-com.svg">
          <img v-if="i === 4" src="@/assets/imgs/skills/cloud-computing-svgrepo-com.svg">
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
  name: "MySkills",
  setup() {

    const store = inject('store')

    const keys = {
      "EN": {
        header: "Skills",
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
        header: "スキル",
        titles: [
          "Web開発",
          "ゲーム開発",
          "データベース開発",
          "クラウド開発"
        ],
        details: [
          "Vue.js/Express/Node.js等を用いたフルスタックWeb開発",
          "Unity3Dを用いたゲーム開発・ゲームサーバー開発",
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
  grid-column: 1/span 12; 
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 30px;
}
div.item {
  grid-column-end: span 6;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}
img {
  max-width: 7rem;
  max-height: 7rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  overflow-x: none !important;
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