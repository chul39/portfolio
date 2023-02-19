<template>
  <div class="modal-wrapper" :class="{ 'show-modal': showModal }">
    <div class="modal">
      <div class="close-btn-wrapper">
        <button class="close-modal" @click="$emit('closeModal')">
          &times;
        </button>
      </div>
      <div v-if="!hideTitle" class="title content">
        <h2>
          <slot name="title"></slot>
        </h2>
      </div>
      <div class="carousel" v-if="!hideCarousel">
        <div class="carousel-track-container">
          <button class="carousel-button carousel-button-left" @click="toPrevSlide">
            <img src="@/assets/imgs/left-arrow-svgrepo-com.svg" />
          </button>
          <ul class="carousel-track">
            <slot name="carousel-slides"></slot>
          </ul>
          <button class="carousel-button carousel-button-right" @click="toNextSlide">
            <img src="@/assets/imgs/right-arrow-svgrepo-com.svg" />
          </button>
        </div>
      </div>
      <div class="carousel-nav">
        <div 
          v-for="i in carouselLength" 
          :key="i" 
          class="carousel-nav-item" 
          :class="{ 'carousel-nav-item-active': carouselPointer + 1 === i }"
          @click="changeSlide(i-1)">
        </div>
      </div>
      <div class="info content">
        <div v-if="!hideContent">
          <h3>{{ displayKeys.content }}</h3>
          <p>
            <slot name="content"></slot>
          </p>
        </div>
        <div v-if="!hideTechs">
          <h3>{{ displayKeys.technologies }}</h3>
          <div class="tech-list">
            <slot name="tech-list"></slot>
          </div>
        </div>
        <div v-if="!hideAbout">
          <h3>{{ displayKeys.aboutDev }}</h3>
          <p>
            <slot name="about-dev"></slot>
          </p>        
        </div>
        <div v-if="!hideSource">
          <h3>{{ displayKeys.sourceCode }}</h3>
          <p>
            <slot name="src-ref"></slot>
          </p>        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, inject, computed } from 'vue'
export default {
  name: "Modal",
  props: {
    showModal: Boolean,
    carouselLength: Number,
    hideCarousel: Boolean,
    hideTitle: Boolean,
    hideContent: Boolean,
    hideTechs: Boolean,
    hideAbout: Boolean,
    hideSource: Boolean
  },
  setup(props, context) {

    const store = inject('store')

    const keys = {
      "EN": {
        content: "Project Content",
        technologies: "Used Technologies",
        aboutDev: "About the Development",
        sourceCode: "Source Code"
      },
      "JP": {
        content: "プロジェクト内容",
        technologies: "使用技術",
        aboutDev: "開発について",
        sourceCode: "ソースコード"
      }
    }

    const displayKeys = computed(() => {
      return keys[store.state.currentLanguage]
    })

    const carouselPointer = ref(0)

    const toPrevSlide = () => {
      if (isNaN(props.carouselLength) || props.carouselLength <= 1) return
      if (carouselPointer.value === 0) carouselPointer.value = props.carouselLength - 1
      else carouselPointer.value--
      context.emit("updateCurrentSlide", carouselPointer.value)
    }

    const toNextSlide = () => {
      if (isNaN(props.carouselLength) || props.carouselLength <= 1) return
      if (carouselPointer.value === props.carouselLength - 1) carouselPointer.value = 0
      else carouselPointer.value++
      context.emit("updateCurrentSlide", carouselPointer.value)
    }

    const changeSlide = (target) => {
      carouselPointer.value = target
      context.emit("updateCurrentSlide", carouselPointer.value)
    }

    return { store, displayKeys, carouselPointer, toPrevSlide, toNextSlide, changeSlide }

  }
}
</script>

<style scoped>
div.close-btn-wrapper {
  float: right;
  margin-right: 3.5rem;
}
button.close-modal {
  position: fixed;
  margin-right: 5rem;
  line-height: 1em;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #000;
  font-size: 5rem;
  float: right;
  z-index: 10;
}
div.modal-wrapper {
  background:rgba(0,0,0,0.8);
  bottom:0;
  left:0;
  opacity:0;
  pointer-events: none;
  position: fixed;
  right:0;
  top:0;
  transition: opacity 500ms;
  z-index: 99;
}
div.show-modal {
  pointer-events: auto;
  opacity: 1;
}
div.modal {
  height: 100vh;
  width: 100vw;
  background-color: #FFF;
  overflow-y: scroll;
  position: relative;
  margin: 0 auto;
}
div.content {
  margin: 0rem 2rem;
}
div.title {
  margin-top: 2.5rem;
}
div.info div {
  margin-bottom: 2rem;
}
div.tech-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 1rem;
  flex: 0 1 auto;
  column-gap: 1.5rem;
  row-gap: 1rem;
}
@media (min-width: 1025px) {
  div.title {
    margin-top: 0rem;
  }
  div.modal {
    height: 90%;
    max-width: 750px;
    margin: 2.5rem auto;
  }
}
@media (min-width: 1920px) {
  div.title {
    margin-top: 0rem;
  }
}
</style>