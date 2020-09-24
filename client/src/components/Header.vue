<template>
  <div class="header-container" v-bind:style="{ backgroundColor: this.$root.getColorScheme().base}">
    <div class="header-content">
      <!-- <img class="icon settings" alt="97" src="public/svgs/settings-icon.svg"> -->
      <QuickAccess/>
      <img class="logo" alt="97 Degree Cider" src="public/svgs/logo-nondoodle.svg" v-bind:class="{ inverted: this.$root.getColorScheme().invertIcons}">
      <img class="icon" alt="97" src="public/svgs/dropdown-icon.svg" v-bind:class="{ inverted: this.$root.getColorScheme().invertIcons}">
    </div>
    <div class="shadow-bar" v-bind:style="{ backgroundColor: this.$root.getColorScheme().highlight}"></div>
  </div>
</template>

<script>
import QuickAccess from './QuickSettings.vue';

export default {
  name: 'Header',
  components: {
    QuickAccess,
  },
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
  
  @import "../scss/palettes.scss";

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
  }

  .header-container {
    background-color: $intro-light;
    transition: background-color 0.3s;
  }

  .icon {
    width: 30px;
    height: 30px;
    transition: all 0.3s;
    &.inverted {
      filter: invert(1.0);
    }
  }

  @keyframes rotating {
    from{
        -webkit-transform: rotate(0deg);
    }
    to{
        -webkit-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes rotating {
    from{
        -webkit-transform: rotate(0deg);
    }
    to{
        -webkit-transform: rotate(360deg);
    }
  }

  .logo {
    width: 253px;
    height: 50px;
    transition: all 0.3s;
    &.inverted {
      filter: invert(1.0);
    }
  }

  .blog-description {
    color: #4d4d4d;
    position: relative;
    padding-left:10px;
    width: 120px;
  }
  
  .blog-flavor-text {
    position:absolute;
    bottom: 10px;
    right:0;
  }

  .shadow-bar {
    width: 100%;
    height: 5px;
    background-color: tomato;
  }

  @media screen and (max-width: 600px) {
    .header-content {
      padding-left: 1%;
      padding-right: 1%;
      justify-content: space-between;
    }
  }

</style>
