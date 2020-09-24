<template>
  <div id="app">
    <Header/>
    <div class="main-container">
      <div class="main-blog">
          <router-view/>
          <div class = "blog-header">Hello!</div>
           <button class="intro-button" v-on:click="getColorTheme">Test </button>
           <div class="theme-test">Color Theme Test</div>
      </div>
      <div class="main-renderer-only-desktop">
          <Renderer />
      </div>
   </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Renderer from '../components/Renderer.vue';
import Themes from '../scripts/themes';

const conf = require('../scripts/config');

export default {
  name: 'Blog',
  components: {
      Header,
      Renderer
  },
  methods: {
    getColorTheme() {
      console.log(Themes.standardTheme);
    },
    disableGraphics () {
      this.$store.commit('updateQualitySettings', conf.quality.DISABLED);
    },
    updateQuality() {
      this.$store.commit('updateQualitySettings', conf.quality.HIGH);
    },
    viewQuality() {
      alert("Quality " + this.$store.state.qualitySettings);
    }
  },
  mounted () {
    console.log("Hey this is the store value for quality settings: " + this.$store.state.qualitySettings);
  }
}
</script>