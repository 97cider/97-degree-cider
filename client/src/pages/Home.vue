<template>
  <div id="app">
    <transition name="fade" appear="true">
        Woah
    </transition>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../components/Header.vue';
import Renderer from '../components/Renderer.vue';
export default {
  name: 'Home',
  components: {
    Renderer,
    Header
  },
  data () {
    return {
      greeting: null
    }
  },
  mounted () {
    console.log("Hey this is the store value for quality settings" + this.$store.state.qualitySettings);
  }
}
</script>