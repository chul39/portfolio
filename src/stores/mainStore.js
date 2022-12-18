import { reactive, readonly } from 'vue'

const state = reactive({
  currentLanguage: 'EN',
  isOverlayActive: false
})

const methods = {
  changeLanguage(targetLanguage) {
    state.currentLanguage = targetLanguage
  },
  toggleOverlay() {
    state.isOverlayActive = !state.isOverlayActive
  }
}

const getters = {
  // No code (yet)
}

export default {
  state: readonly(state),
  methods,
  getters
}