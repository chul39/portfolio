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
        <iframe src="https://www.youtube.com/embed/6sjKkDHbNVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </li>
      <li v-if="showModal && currentSlide === 1" class="carousel-slide">
        <img src="@/assets/imgs/project2/ss1.png"/>
      </li>
      <li v-if="showModal && currentSlide === 2" class="carousel-slide">
        <img src="@/assets/imgs/project2/ss2.png"/>
      </li>
    </template>
    <template v-slot:content>
      {{ displayKeys.content }}
    </template>
    <template v-slot:tech-list>
      <div class="tech-item">    
        <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />          
        <p>C#</p>
      </div>
      <div class="tech-item"> 
        <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" />          
        <p>Unity</p>
      </div>
    </template>
    <template v-slot:about-dev>
      {{ displayKeys.aboutDev }}
    </template>
    <template v-slot:src-ref>
      <a href="https://github.com/chul39/project-blobfish">https://github.com/chul39/project-blobfish</a>
    </template>
  </Modal>
</template>

<script>
import { ref, inject, computed } from 'vue'
import Modal from "@/components/Modal.vue"
export default {
  name: "Project3",
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
        content: "A game where you become the caretaker of the undersea creature “blobfish”. The blobfish will swim around and look for food from time to time. Eating trash will decrease its health point and may result in a game over while eating natural food will recover its health point and make it grow up. Player has to get rid of the trash on the screen by touching it so that the blobfish will only eat good food and get bigger.",
        aboutDev: "This game was created by a team of 2 people during our free time. My friend designed and created art assets while I was in charge of game design and programming. I want to learn about creating a movement for the NPC so I designed the game to have the character decide what to do by itself. For the item spawning system, I implemented a design pattern called object pool to recycle the game objects within the scene instead of destroying game objects."
      },
      "JP": {
        content: "ブロブフィッシュという海底生物のスマホ向け育成ゲームです。ブロブフィッシュは成長のために色々なものを食べていますが、海の中にあるものは食べられるものだけではなく、ゴミもいっぱいあります。ブロブフィッシュがゴミを食べたらHPが減るので、プレイヤーはスクリーンの中にあるゴミを触って海を綺麗にすることができます。",
        aboutDev: "暇な時に2人でこのゲームを開発しました。別のメンバーはスプライトなどアートアセットのデザインと作成を担当して、私はゲームデザインとUnityでコーディングを担当していました。NPCの動きを学びたいと考えて、キャラクターの自動判定機能を実施してみました。その以上、アイテムのスポーンシステムは毎回新しいオブジェクトを生成して破壊する代わりにObjectPoolパターンというデザインパターンを使ってオブジェクトリサイクル機能を実施しました。",
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