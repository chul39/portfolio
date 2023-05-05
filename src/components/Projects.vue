<template>
   <section id="projects">
    <h1 class="section-header observer-target">Works</h1>
      <div class="cards">

        <!-- PROJECT 0 -->
        <!--
        <Project5
          :projectTitle="displayKeys.titles[0]"
          :showModal="showModal[0]"
          @closeModal="showModal[0] = false"
        />
        <div @click="showModal[0] = true" class="card observer-target">
          <div class="card-image">
            <img src="@/assets/imgs/corgi-noodles.png" />
          </div>
          <div class="card-content">
            <div class="card-title">
              {{ displayKeys.titles[0] }}
            </div>
            <div class="card-info">
              <div class="card-tag">TAG</div>
            </div>
          </div>
        </div>
        -->
        
        <!-- PROJECT 4 -->
        <Project4
          :projectTitle="displayKeys.titles[4]"
          :showModal="showModal[4]"
          @closeModal="showModal[4] = false"
        />
        <div @click="showModal[4] = true" class="card observer-target">
          <div class="card-content">
            <div class="card-title">
              {{ displayKeys.titles[4] }}
              <img class="card-title-popup" src="@/assets/imgs/popup-svgrepo-com.svg" />
            </div>
            <div class="card-info">
              <div class="card-tag">HTML</div>
              <div class="card-tag">CSS</div>
              <div class="card-tag">Javascript</div>
              <div class="card-tag">Vue.js</div>
            </div>
            <div class="card-description">
              {{ displayKeys.description[4] }}
            </div>
          </div>
        </div>

        <!-- PROJECT 3 -->
        <Project3
          :projectTitle="displayKeys.titles[3]"
          :showModal="showModal[3]"
          @closeModal="showModal[3] = false"
        />
        <div @click="showModal[3] = true" class="card observer-target">
          <div class="card-content">
            <div class="card-title">
              {{ displayKeys.titles[3] }}
              <img class="card-title-popup" src="@/assets/imgs/popup-svgrepo-com.svg" />
            </div>
            <div class="card-info">
              <div class="card-tag">C#</div>
              <div class="card-tag">Unity</div>
              <!--
              <div class="card-tag">Javascript(Node.js)</div>
              <div class="card-tag">Express</div>
              <div class="card-tag">Socket.io</div>
              -->
            </div>
            <div class="card-description">
              {{ displayKeys.description[3] }}
            </div>
          </div>
        </div>

        <!-- PROJECT 2 -->
        <Project2
          :projectTitle="displayKeys.titles[2]"
          :showModal="showModal[2]"
          @closeModal="showModal[2] = false"
        />
        <div @click="showModal[2] = true" class="card observer-target">
          <div class="card-content">
            <div class="card-title">
              {{ displayKeys.titles[2] }}
              <img class="card-title-popup" src="@/assets/imgs/popup-svgrepo-com.svg" />
            </div>
            <div class="card-info">
              <div class="card-tag">C#</div>
              <div class="card-tag">Unity</div>
            </div>
            <div class="card-description">
              {{ displayKeys.description[2] }}
            </div>
          </div>
        </div>

        <!-- PROJECT 1 -->
        <Project1
          :projectTitle="displayKeys.titles[1]"
          :showModal="showModal[1]"
          @closeModal="showModal[1] = false"
        />
        <div @click="showModal[1] = true" class="card observer-target">
          <div class="card-content">
            <div class="card-title">
              {{ displayKeys.titles[1] }}
              <img class="card-title-popup" src="@/assets/imgs/popup-svgrepo-com.svg" />
            </div>
            <div class="card-info">
              <div class="card-tag">C#</div>
              <div class="card-tag">Unity</div>
            </div>
            <div class="card-description">
              {{ displayKeys.description[1] }}            
            </div>
          </div>
        </div>

        <!-- PROJECT 0 -->
        <Project0 
          :projectTitle="displayKeys.titles[0]"
          :showModal="showModal[0]"
          @closeModal="showModal[0] = false"
        />
        <div @click="showModal[0] = true" class="card observer-target">
          <div class="card-content">
            <div class="card-title">
              {{ displayKeys.titles[0] }}
              <img class="card-title-popup" src="@/assets/imgs/popup-svgrepo-com.svg" />
            </div>
            <div class="card-info">
              <div class="card-tag">HTML</div>
              <div class="card-tag">CSS</div>
              <div class="card-tag">Bootstrap</div>
              <div class="card-tag">Javascript</div>
              <div class="card-tag">Angular.js</div>
            </div>
            <div class="card-description">
              {{ displayKeys.description[0] }}
            </div>
          </div>
        </div>

      </div>
   </section>
</template>

<script>
import { ref, inject, computed } from 'vue'
import Project0 from "@/components/Project0.vue"
import Project1 from "@/components/Project1.vue"
import Project2 from "@/components/Project2.vue"
import Project3 from "@/components/Project3.vue"
import Project4 from "@/components/Project4.vue"
import Project5 from "@/components/Project5.vue"
export default {
  name: "Projects",
  components: {
    Project0,
    Project1,
    Project2,
    Project3,
    Project4,
    Project5
  },
  setup() {

    const store = inject('store')

    const keys = {
      "EN": {
        titles: [
          "ISE Admission Web Application",
          "Rhythm-based Level Generator",
          "Blobfish",
          "Yacht",
          "My Web Portfolio",
          "Whatever"
        ],
        description: [
          "Web application used for university admission.",
          "Procedural generation of game levels with songs.",
          "Casual animal raising game.",
          "A clone of the famous dice game.",
          "Responsive personal portfolio website made with Vue.js.",
          ""
        ]
      },
      "JP": {
        titles: [
          "ISE Admission Web Application",
          "Rhythm-based Level Generator",
          "Blobfish",
          "Yacht",
          "My Portfolio",
          "Whatever"
        ],
        description: [
          "大学入学用のWEBアプリケーション",
          "音楽ファイルでランナーゲームのレベルを自動生成システム",
          "海底生物育成ゲーム",
          "「ヨット」のクローンゲーム",
          "レスポンシブ対応の個人ポートフォリオサイト",
          ""
        ]
      }
    }

    const displayKeys = computed(() => {
      return keys[store.state.currentLanguage]
    })

    const showModal = ref([ false, false, false, false, false, false ])

    return { store, displayKeys, showModal }

  }
}
</script>

<style scoped>
section {
  padding-bottom: 125px;
}
.cards {
  grid-column: 1/span 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
}
.card {
  grid-column-end: span 6;
  display: flex;
  flex-direction: column;
  background-color: #101010;
  cursor: pointer;
  padding: 15px;
  border-left: 3px solid #6BD0FF;
  border-radius: 5px;
}
.card:hover {
  transform: translateY(-0.5rem);
}
.card-content {
  margin: 0.5rem;
  margin-top: 0;
}
.card-title {
  margin-bottom: 0.2rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: #6BD0FF;
  width: 90%;
}
.card-title-popup {
  max-height: 1.7rem;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.75rem;
}
.card-description {
 color: #fff;
 font-size: 0.8rem;
 font-weight: 200;
 margin-top: 1rem;
}
.card-info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.card-tag {
  color: #6BD0FF;
  font-size: 0.75rem;
  padding: 2.5px 5px;
  margin-top: 0.5rem;
  margin-right: 0.25rem;
  border: 1px solid #6BD0FF;
  border-radius: 3px;
}
@media (max-width: 767px) {
  .cards {
    grid-template-columns: repeat(6, 1fr);
  }
  .card {
    grid-column-end: span 6;
  }
}
</style>