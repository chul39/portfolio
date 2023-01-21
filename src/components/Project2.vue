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
        <iframe src="https://www.youtube.com/embed/BuxIzpdW1ng" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
        content: "海底生物「ブロブフィッシュ」の育成ゲームです。ブロブフィッシュはプレイエリアの中を泳ぎ回って時々お腹が空いてランダムに生成されたアイテムを食べます。ゴミを食べたらライフポイントが下がって、０になったらゲーム終了します。逆に自然から食べ物を食べたらライフポイントを回復して成長します。プレイヤーはスクリーン上のアイテムを触ったらそのアイテムがなくなりますので、ブロブフィッシュを成長させるためにゴミを出しましょう。",
        aboutDev: "暇な時に２人でこのゲームを開発しました。別のメンバーはスプライトなどアートアセットのデザインと作成を担当して、私はゲームデザインとUnityでコーディングを担当していました。NPCの動きを学びたいと思ってキャラクターは自分の動きを自分で決めるようにデザインしました。アイテムのスポーンシステムは毎回新しいオブジェクトを生成して破壊する代わりにObjectPoolパターンというデザインパターンを使ってオブジェクトリサイクル機能を実施しました。",
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