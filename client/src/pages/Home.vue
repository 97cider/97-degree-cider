<template>
  <div id="app">
    <Header />
    <transition name="fade" appear="true">
      <div class="main-container"> 
        <div class="main-blog">
          <div class="game-description">
            {{ greeting }}
          </div>
        </div>
        <div class="main-renderer-only-desktop">
          <Renderer />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import '../scss/style.scss';
import axios from 'axios';
import Header from '../components/Header.vue';
import HelloWorld from '../components/HelloWorld.vue';
import Renderer from '../components/Renderer.vue';
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Renderer,
    Header
  },
  data () {
    return {
      greeting: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:8080/test', { crossdomain: true })
      .then(response => (this.greeting = response.data))
  }
}
</script>