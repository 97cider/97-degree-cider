<template>
  <router-view></router-view>
</template>

<script>
'use strict';

const conf = require('./scripts/config');
const themes = require('./scripts/themes');

export default {
  name: 'App',
  data () {
    return {
      colorScheme: themes.standardTheme,
    };
  },
  methods: {
    setQualityLevel (quality) {
      this.$store.commit('updateQualitySettings', quality);
    },
    setColorScheme (theme) {
      this.colorScheme = theme;
    }
  },
  components: {
  }
}
</script>

<style>
</style>