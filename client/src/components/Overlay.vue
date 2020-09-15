<template>
  <div class="intro-overlay" v-show="overlay">
      <div class="close-container">
          <button v-on:click="toggleOverlay">close</button>
      </div>
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'overlay',
  data () {
      return {
          overlay: false,
      }
  },
  methods: {
      toggleOverlay () {
          this.overlay = !this.overlay;
      }
  }
}
</script>