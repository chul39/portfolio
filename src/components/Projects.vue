<template>
   <section id="projects">
    <h1>{{ displayKeys.header }}</h1>
      <div class="cards">
        <!-- PROJECT 0 -->
        <div class="card">
          <div class="card-image">
            <img src="@/assets/corgi-noodles.png" />
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
        <!-- PROJECT 1 -->
        <div class="card">
          <div class="card-image">
            <img src="@/assets/corgi-noodles.png" />
          </div>
          <div class="card-content">
            <div class="card-title">
              {{ displayKeys.titles[1] }}
            </div>
            <div class="card-info">
              <div class="card-tag">C#</div>
              <div class="card-tag">Node.js</div>
              <div class="card-tag">Unity</div>
              <div class="card-tag">Express</div>
              <div class="card-tag">Socket.io</div>
            </div>
          </div>
        </div>
        <!-- PROJECT 2 -->
        <div class="card">
          <div class="card-image">
            <img src="@/assets/corgi-noodles.png" />
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
        <div class="card">
          <div class="card-image">
            <img src="@/assets/corgi-noodles.png" />
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
        <div class="card">
          <div class="card-image">
            <img src="@/assets/corgi-noodles.png" />
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
        <div class="card">
          <div class="card-image">
            <img src="@/assets/corgi-noodles.png" />
          </div>
          <div class="card-content">
            <div class="card-title">
              {{ displayKeys.titles[5] }}
            </div>
            <div class="card-info">
              <div class="card-tag">HTML</div>
              <div class="card-tag">CSS</div>
              <div class="card-tag">Javascript</div>
              <div class="card-tag">Angular.js</div>
            </div>
          </div>
        </div>
      </div>
   </section>
</template>

<script>
import { inject, computed } from 'vue'
export default {
  name: "Projects",
  setup() {

    const store = inject('store')

    const keys = {
      "EN": {
        header: "projects",
        titles: [
          "Whatever",
          "Multiplayer Yacht-clone",
          "Blobfish (Mobile game)",
          "Rhythm-based Level Generator",
          "Web Portfolio",
          "ISE Admission Web Application"
        ]
      },
      "JP": {
        header: "ポートフォリオ",
        titles: [
          "未定",
          "ヨットのクローンゲーム",
          "スマホ向けの育成ゲーム",
          "音楽でゲームレベル自動生成システム",
          "WEBポートフォリオ",
          "ISE入学用のWEBアプリケーション"
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
.cards {
  grid-column: 2/span 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 40px;
}
.card {
  grid-column-end: span 4;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
.card:hover {
  transform: translateY(-7px);
}
.card-image {
  overflow: hidden;
  position: relative;
}
.card-image img {
  width: 100%;
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
  padding: 5px 10px;
  margin-top: 0.25rem;
  margin-right: 0.25rem;
  background-color: #303032;
  border-radius: 20px;
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