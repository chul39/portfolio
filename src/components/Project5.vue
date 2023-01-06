<template>
  <Modal 
    :hideSource="true"
    :showModal="showModal"
    :carouselLength="2"
    @updateCurrentSlide="updateCurrentSlide($event)"
    @closeModal="$emit('closeModal')"
  >
    <template v-slot:title>
      {{ projectTitle }}
    </template>
    <template v-slot:carousel-slides>
      <li v-if="showModal && currentSlide === 0" class="carousel-slide">
        <img src="@/assets/imgs/project5/lobby.png"/>
      </li>
      <li v-if="showModal && currentSlide === 1" class="carousel-slide">
        <img src="@/assets/imgs/project5/confirmation.png"/>
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
        <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
        <p>Bootstrap</p>
      </div>      
      <div class="tech-item">   
        <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <p>Javascript</p>
      </div>
      <div class="tech-item">    
        <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />                    
        <p>Angular.js</p>
      </div>    
    </template>
    <template v-slot:about-dev>
      {{ displayKeys.aboutDev }}
    </template>
  </Modal>
</template>

<script>
import { ref, inject, computed } from 'vue'
import Modal from "@/components/Modal.vue"
export default {
  name: "Project5",
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
        content: "I was responsible for the front-end development of the interview management application, which was used during the interview day to display the list of applicants according to their score and the remaining seats for each program on a big screen in the waiting room. I also created the management page in which the interviewee can check the applicant's information using the personal computer during the interview and then update the database through this application. Because of this application, the flow of the admission procedure became significantly smoother.",
        aboutDev: "During my 2nd year in the university, I teamed up with 6 other students to help International School of Engineering, Chulalongkorn University create web applications for online enrollment and interview management. As this was the first time my project has been used in real life, I've learned on how to work with a real client and also how to work as a team."
      },
      "JP": {
        content: "私はフロントエンド開発を担当していて入試面接管理ウェブアプリケーションのクライアントサイドを開発しました。入試面接の当日に面接官はこのアプリケーションを利用して待合室のモニターに試験成績順の受験者一覧と各学科の残席数を表示し、応募者を一人ずつ呼んで入試面接を行っていました。その後、面接官はパソコンの上で応募者の情報を確認して入試面接の結果を決定できます。このアプリケーションのおかけでISEの入学応募処理は以前より格段にスムーズになりました。",
        aboutDev: "大学2年生の時にチュラーロンコーン大学の工学部からISE(International School of Engineering)の入学用システム開発を依頼され、6人の同級生とチームを組んで入学応募用と入試面接管理用のウェブアプリケーションを作りました。人生初めての本番に使われたプロジェクトなので、クライアントの仕様によって開発方法やチームでの働き方を勉強しました。",
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