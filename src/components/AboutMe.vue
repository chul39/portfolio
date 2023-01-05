<template>
  <section id="about">
    <h1 class="observer-target">{{ displayKeys.header }}</h1>
    <article>
      <div class="text observer-target">
        <p v-for="i in 3" :key="i" class="intro">{{ displayKeys.introLines[i-1] }}</p>
        <div style="height: 1rem;"></div>
        <p v-for="i in 2" :key="i" class="main">{{ displayKeys.mainContents[i-1] }}</p>
      </div>
      <div class="image observer-target">
        <img src="@/assets/imgs/corgi-noodles.png">
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
        header: "About me",
        introLines: [
          "I'm Chunlaphat Suwannaat,",
          "A developer based in Tokyo, Japan.",
          "I create web apps and games."
        ],
        mainContents: [
          "After I graduated from Chulalongkorn University in B.E. Information and Communication Engineering, I decided to come to Japan and started my career as a developer. During this time, I've gained a wide range of valuable experience, from developing both client and server of multiple web applications to operating and maintaining systems on a cloud service.",
          "Outside of work, I'm also an avid gamer who loves competitive multiplayer games. To share the joy of gaming, I've started developing games as a hobby since I was a university student. I'm focused on server and gameplay development and I would love for an opportunity to be part of the gaming industry.",
          "I'm passionate about solving problems and always craving for knowledge. My goal is to build things that make people smile."
        ]        
      },
      "JP": {
        header: "自己紹介",
        introLines: [
          "東京を拠点とするエンジニア、",
          "Chunlaphat Suwannaat と申します。",
          "WEBアプリとゲームを作ります。"
        ],
        mainContents: [
          "タイにあるチュラーロンコーン大学で情報通信工学の卒業後、日本に来日し、エンジニアとしてキャリアをスタートしました。WEBアプリのクライアントとサーバー開発から、クラウドサービスを通じて提供されたシステムの運用保守まで幅広く業務を経験してきました。",
          "仕事以外、eSports系のオンラインゲームが大好きでよくプレイしています。ゲームの楽しさを伝えたいと思い、大学時代から趣味でゲーム制作を行なっています。現在、サーバーとゲームプレイ開発に焦点を当て、機会があればゲーム業界に挑戦してみたいです。",
          "問題解決に情熱を傾け、いつも好奇心が旺盛で、「人々を笑顔にできるもの」を作りたいです。"
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
  display: flex;
  flex-direction: row;
}
div.text {
  max-width: 60%;
}
div.image {
  max-width: 40%;
  margin: auto;
  padding: 2rem;
}
img {
  max-width: 100%;
  max-height: 20rem;
}
p.intro {
  background-color: #FFF;
  width: fit-content;
  padding: 0.3rem;
  font-weight: 500;
  font-size: 1.25rem;
  margin: 0.5rem 0;
}
p.main {
  color: #FFF;
  margin: 0.5rem 0;
}
@media (max-width: 767px) {
  section {
    padding-top: 200px !important;
  }
  article {
    flex-direction: column-reverse;
  }
  div.text {
    max-width: 100%;
  }
  div.image {
    max-width: 75%;
    padding: 0 !important;
    margin: 0;
  }
  div.image {
    max-width: 100%;
  }
  p.intro {
    font-size: 1rem;
  }
  img {
    max-height: 100%;
  }
}
</style>