<template>
  <Modal 
    :showModal="showModal"
    :carouselLength="3"
    @updateCurrentSlide="updateCurrentSlide($event)"
    @closeModal="$emit('closeModal')"
  >
    <template v-slot:title>
      {{ projectTitle }}
    </template>
    <template v-slot:carousel-slides>
      <li v-if="showModal && currentSlide === 0" class="carousel-slide">
        <img src="@/assets/imgs/project4/ss00.jpg"/>
      </li>
      <li v-if="showModal && currentSlide === 1" class="carousel-slide">
        <img src="@/assets/imgs/project4/ss01.jpg"/>
      </li>
      <li v-if="showModal && currentSlide === 2" class="carousel-slide">
        <img src="@/assets/imgs/project4/ss02.png"/>
      </li>
    </template>
    <template v-slot:content>
      {{ displayKeys.content }}
    </template>
    <template v-slot:tech-list>
      <div class="tech-item">              
        <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        <p>HTML</p>
      </div>
      <div class="tech-item"> 
        <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />               
        <p>CSS</p>
      </div>
      <div class="tech-item">   
        <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <p>Javascript</p>
      </div>
      <div class="tech-item">    
        <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
        <p>Vue.js</p>
      </div>
    </template>
    <template v-slot:about-dev>
      {{ displayKeys.aboutDev }}
    </template>
    <template v-slot:src-ref>
      <a href="https://github.com/chul39/portfolio">https://github.com/chul39/portfolio</a>
    </template>
  </Modal>
</template>

<script>
import { ref, inject, computed } from 'vue'
import Modal from "@/components/Modal.vue"
export default {
  name: "Project1",
  props: {
    projectTitle: String,
    showModal: Boolean
  },
  components: {
    Modal
  },
  setup() {

    const store = inject('store')

    const keys = {
      "EN": {
        content: "A fully responsive personal portfolio site I created to showcase my personal projects and allow my potential clients/employers to learn more about myself.",
        aboutDev: "At first I was thinking of using a free template available online but I ended up not finding the one I like, so I decided to create one myself instead. I tried to minimize the amount of 3rd party frameworks/libraries as much as possible to refresh my knowledge on the fundamentals of frontend development."
      },
      "JP": {
        content: "個人プロジェクトまとめるために作ったレスポンシブ対応の個人ポートフォリオサイトです。",
        aboutDev: "最初は無料テンプレートを使おうと思っていますが、好きなテンプレートが見つからなかったので自分でこのポートフォリオサイトを作りました。フロントエンド開発の基礎知識を復習するために、できる限りフレームワークを使わないようにしました。",
      }
    }

    const displayKeys = computed(() => {
      return keys[store.state.currentLanguage]
    })

    const currentSlide = ref(0)
    
    const updateCurrentSlide = (value) => {
      currentSlide.value = value
    }

    return { store, displayKeys, updateCurrentSlide, currentSlide }

  }
}
</script>

<style>

</style>