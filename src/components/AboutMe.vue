<template>
  <section id="about">
    <h1 class="section-header observer-target">About me</h1>
    <article>
      <div class="text observer-target">
        <p class="main">{{ displayKeys.mainContents[0] }}</p>
        <p style="margin-top: 1.5rem;" class="main">{{ displayKeys.mainContents[1] }}</p>
      </div>
      <div class="image observer-target">
        <img src="../assets/imgs/corgi-noodles.png">
      </div>
    </article>
  </section>
</template>

<script>
import { computed, inject, onMounted } from 'vue'
export default {
  name: "AboutMe",
  setup() {

    const store = inject('store')

    const keys = {
      "EN": {
        mainContents: [
          "Born and raised in Bangkok, Thailand. Graduated from Chulalongkorn University in B.E. Information and Communication Engineering. More than 3 years of experience in working as a full-stack web developer in Tokyo, Japan.",
          "I have a wide range of skills from developing web applications to operating and maintaining systems on a cloud service. I'm also an avid gamer who loves competitive multiplayer games and creating games as an indie developer in my free time."
        ]        
      },
      "JP": {
        mainContents: [
          "タイにあるチュラーロンコーン大学から情報通信工学科を卒業後、日本に来日し、WEBエンジニアとしてキャリアをスタートしました。",
          "WEBアプリのクライアントとサーバー開発から、クラウドサービスを通じて提供されたシステムの運用保守まで幅広く業務を経験してきました。仕事以外、オンラインゲームが大好きでよくプレイしており、趣味で個人ゲーム制作を行っています。"
        ]
      }
    }

    const displayKeys = computed(() => keys[store.state.currentLanguage])

    return { store, displayKeys }

  }
}
</script>

<style scoped>
section {
  padding-top: 50px !important;
}
article {
  display: flex;
  flex-direction: row;
}
div.text {
  max-width: 75%;
}
div.image {
  margin: auto;
  margin-right: 0;
  max-height: 100%;
}
img {
  max-width: 100%;
  max-height: 12rem;
  border-radius: 50%;
}
p.intro {
  width: fit-content;
  font-weight: 500;
  font-size: 1.5rem;
  color: #6BD0FF;
}
p.main {
  color: #FFF;
  font-weight: 200;
  margin: 0.5rem 0;
}
@media (max-width: 767px) {
  article {
    flex-direction: column-reverse;
  }
  div.text {
    max-width: 100%;
  }
  p.intro {
    font-size: 1.2rem;
  }
  div.image {
    padding: 0 !important;
    margin: 0;
    max-width: 100%;
  }
  img {
    max-height: 100%;
  }
}
</style>