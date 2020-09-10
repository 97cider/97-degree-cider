<template>
  <div id="app">
    <transition name="fade" appear="true">
        Hey cool this is a customize page that has nothign at the moment
    </transition>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Customize',
  components: {
      
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