<template>
  <Modal 
    :showModal="showModal"
    @closeModal="$emit('closeModal')"
  >
    <template v-slot:title>
      {{ projectTitle }}
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
      <div class="tech-item">   
        <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <p>Javascript</p>
      </div>
      <div class="tech-item">
        <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />      
        <p>Node.js</p>
      </div>
      <div class="tech-item">        
        <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />      
        <p>Express</p>
      </div>
      <div class="tech-item">
        <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" />  
        <p>Socket.io</p>
      </div>
    </template>
    <template v-slot:about-dev>
      {{ displayKeys.aboutDev }}
    </template>
    <template v-slot:src-ref>
      <p>Client: <a href="https://github.com/chul39/yacht-dice-game">https://github.com/chul39/yacht-dice-game</a></p>
      <p>Server: </p>
    </template>
  </Modal>
</template>

<script>
import { inject, computed } from 'vue'
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
        content: "A clone game of the board game “Yacht”. It can be simply explained as the game where players have to roll 5 dice each time to create a certain combination for the score, and the player with the highest score will win the game. The score will be calculated and kept track of by the system so players can focus more on the game.",
        aboutDev: "I was watching my favorite streamer playing this game and thought that it looked very interesting so I tried to make a clone version of it. From this project, I've learned many things such as the turn-base system and 3D physics."
      },
      "JP": {
        content: "ヨットというボードゲームのクローンゲームです。このゲームのルールを簡単に説明すると、プレイヤーは5つのサイコロを振って役を作って得点を得て、より高得点を得たプレイヤーが勝ちとなります。スコア計算や合算はシステムの処理にしましたので、勝の勝負に徹することができます。",
        aboutDev: "推し配信者からこのゲームについて知って、楽しそうと思ってクローンゲームを作ってみました。このプロジェクトを開発してターンベースシステムや3次元の物理をよく勉強しました。",
      }
    }

    const displayKeys = computed(() => {
      return keys[store.state.currentLanguage]
    })

    return { store, displayKeys }

  }
}
</script>

<style>

</style>