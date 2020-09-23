<template>
  <router-view></router-view>
</template>

<script>
'use strict';

const conf = require('./scripts/config');

export default {
  name: 'App',
  data () {
    return {
      quality: conf.quality.MED
    };
  },
  methods: {
    setQualityLevel (quality) {
      this.quality = quality;
      this.$store.commit('updateQualitySettings', this.quality);
      console.log(this.quality);
      // fire off any events to children to change accordingly
    }
  },
  components: {
  }
}
</script>

<style>
</style>