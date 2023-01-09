<template>
  <div id="contact" class="footer">
    <div class="footer-title">{{ displayKeys.title }}</div>
    <div class="footer-subtitle">{{ displayKeys.subtitle }}</div>
    <div class="footer-content">
      <a class="item-anchor" href="https://github.com/chul39">Github</a>
      <a class="item-anchor" href="https://www.linkedin.com/in/chunlaphat-suwannaat">Linkedin</a>
      <a class="item-anchor" href="https://www.wantedly.com/id/chunlaphat_suwannaat">Wantedly</a>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
export default {
  name: "Footer",
  setup() {
    const store = inject('store')

    const keys = {
      "EN": {
        title: "Contact",
        subtitle: "Let's work together!"
      },
      "JP": {
        title: "お問い合わせ",
        subtitle: "お気軽にご連絡ください！"
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
.footer {
  background-color: #000;
}
.footer-title {
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 70px;
  font-size: 2em;
  font-weight: 700;
  text-transform: uppercase;
  color: #6BD0FF;
}
.footer-subtitle {
  display: flex;
  justify-content: center;
  align-content: center;
  color: #fff;
  margin-bottom: 25px;
}
.footer-content {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 7rem;
  column-gap: 1.8rem; 
}
.item-anchor {
  color: #6BD0FF;
  text-decoration: none;
}
.item-anchor:hover {
  color: #bbe8fd;
}
</style>