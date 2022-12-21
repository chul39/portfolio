<template>
  <section id="services">
    <h1>{{ keys[store.state.currentLanguage].header }}</h1>
    <article>
      <div v-for="i in 4" :key="i" class="item">
        <div class="icon">
          <img src="@/assets/corgi-noodles.png">
        </div>
        <div class="text">
          <p class="title">{{ keys[store.state.currentLanguage].titles[i-1] }}</p>
          <p class="detail">{{ keys[store.state.currentLanguage].details[i-1] }}</p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import { inject } from 'vue'
export default {
  name: "MyService",
  setup() {

    const store = inject('store')

    const icons = [
      "@/assets/corgi-noodles.png",
      "@/assets/corgi-noodles.png",
      "@/assets/corgi-noodles.png",
      "@/assets/corgi-noodles.png"
    ]

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
          "Experienced in fullstack web development using modern technologies such as Vue, Node.js, and Express.",
          "Specialized in creating games with Unity3D. Mainly focused on gameplay and server development.",
          "Designing and maintaining databases to maximize the performance.",
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
          "Unity3Dを用いたゲーム開発・オンラインゲームサーバー開発",
          "RDBMS/NoSQLデータベースの設計・開発・運用・管理",
          "AWSやAzureなどクラウドサービス(IaaS, PaaS, SaaS)実施"
        ]
      }
    }

    return { icons, store, keys }

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
}
div.text {
  max-width: 70%;
}
div.icon {
  max-width: 30%;
}
img {
  max-width: 100%;
  max-height: 100%;
  margin-top: 0.5rem;
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
@media (max-width: 768px) {
  article {
    grid-template-columns: repeat(1, 1fr);
  }
  p.title {
    font-size: 1rem;
  }
  div.item {
    margin-bottom: 1.5rem;
  }
}
</style>