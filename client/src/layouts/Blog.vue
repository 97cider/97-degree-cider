<template>
  <div id="app">
    <Header/>
      <div class="main-container">
        <button v-on:click="updateQuality">Set Quality to High</button>
        <button v-on:click="disableGraphics">Set Quality to Low</button>
        <button v-on:click="viewQuality">View Quality Level</button>
        <div class="main-blog">
            <router-view/>
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

const conf = require('../scripts/config');

export default {
  name: 'Blog',
  components: {
      Header,
      Renderer
  },
  methods: {
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