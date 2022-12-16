import { reactive, readonly } from 'vue'

const state = reactive({
  currentLanguage: 'EN',
  isMobileMenuOpen: false
})

const methods = {
  changeLanguage(targetLanguage) {
    state.currentLanguage = targetLanguage
  },
  toggleMobileMenu() {
    state.isMobileMenuOpen = !state.isMobileMenuOpen
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