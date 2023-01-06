<template>
   <section id="projects">
    <h1 class="observer-target">{{ displayKeys.header }}</h1>
      <div class="cards">

        <!-- PROJECT 0 -->
        <!--
        <Project0
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
        
        <!-- PROJECT 1 -->
        <Project1
          :projectTitle="displayKeys.titles[1]"
          :showModal="showModal[1]"
          @closeModal="showModal[1] = false"
        />
        <div @click="showModal[1] = true" class="card observer-target">
          <div class="card-image">
            <img src="@/assets/imgs/project1/ss1.png" />
          </div>
          <div class="card-content">
            <div class="card-title">
              {{ displayKeys.titles[1] }}
            </div>
            <div class="card-info">
              <div class="card-tag">C#</div>
              <div class="card-tag">Unity</div>
              <div class="card-tag">Javascript(Node.js)</div>
              <div class="card-tag">Express</div>
              <div class="card-tag">Socket.io</div>
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
          <div class="card-image">
            <img src="@/assets/imgs/project2/ss1.png" />
          </div>
          <div class="card-content">
            <div class="card-title">
              {{ displayKeys.titles[2] }}
            </div>
            <div class="card-info">
              <div class="card-tag">C#</div>
              <div class="card-tag">Unity</div>
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
          <div class="card-image">
            <img src="@/assets/imgs/project3/ss2.png" />
          </div>
          <div class="card-content">
            <div class="card-title">
              {{ displayKeys.titles[3] }}
            </div>
            <div class="card-info">
              <div class="card-tag">C#</div>
              <div class="card-tag">Unity</div>
            </div>
          </div>
        </div>

        <!-- PROJECT 4 -->
        <Project4
          :projectTitle="displayKeys.titles[4]"
          :showModal="showModal[4]"
          @closeModal="showModal[4] = false"
        />
        <div @click="showModal[4] = true" class="card observer-target">
          <div class="card-image">
            <img src="@/assets/imgs/corgi-noodles.png" />
          </div>
          <div class="card-content">
            <div class="card-title">
              {{ displayKeys.titles[4] }}
            </div>
            <div class="card-info">
              <div class="card-tag">HTML</div>
              <div class="card-tag">CSS</div>
              <div class="card-tag">Javascript</div>
              <div class="card-tag">Vue.js</div>
            </div>
          </div>
        </div>

        <!-- PROJECT 5 -->
        <Project5 
          :projectTitle="displayKeys.titles[5]"
          :showModal="showModal[5]"
          @closeModal="showModal[5] = false"
        />
        <div @click="showModal[5] = true" class="card observer-target">
          <div class="card-image">
            <img src="@/assets/imgs/project5/lobby.png" />
          </div>
          <div class="card-content">
            <div class="card-title">
              {{ displayKeys.titles[5] }}
            </div>
            <div class="card-info">
              <div class="card-tag">HTML</div>
              <div class="card-tag">CSS</div>
              <div class="card-tag">Bootstrap</div>
              <div class="card-tag">Javascript</div>
              <div class="card-tag">Angular.js</div>
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
        header: "projects",
        titles: [
          "Whatever",
          "Multiplayer Yacht-clone",
          "Blobfish",
          "Rhythm-based Level Generator",
          "Responsive Web Portfolio",
          "ISE Admission Web Application"
        ]
      },
      "JP": {
        header: "ポートフォリオ",
        titles: [
          "未定",
          "クローンゲーム：ヨット",
          "育成ゲーム：ブロブフィッシュ",
          "音楽でゲームレベル自動生成システム",
          "レスポンシブWEBポートフォリオ",
          "ISE入学用のWEBアプリケーション"
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
.cards {
  grid-column: 1/span 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 40px;
}
.card {
  grid-column-end: span 4;
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  cursor: pointer;
}
.card:hover {
  transform: translateY(-0.5rem);
  background-color: #F5B301;
}
.card-image {
  overflow: hidden;
  position: relative;
}
.card-image img {
  width: 100%;
  height: 12.5rem;
  object-fit: cover;
}
.card-content {
  margin: 0.5rem;
  margin-top: 0;
}
.card-title {
  margin-bottom: 0.2rem;
  font-size: 1rem;
  font-weight: 700;
}
.card-info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.card-tag {
  color: #ecf0f1;
  font-size: 0.75rem;
  padding: 2.5px 5px;
  margin-top: 0.25rem;
  margin-right: 0.25rem;
  background-color: #303032;
}
@media (max-width: 1365px) {
  .card {
    grid-column-end: span 6;
  }
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