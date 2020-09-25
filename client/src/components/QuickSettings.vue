<template>
  <div class="quick-access-settings">
      <div  v-on:click="toggleMenu"><img class="icon-settings" v-bind:src=" collapsed ? 'public/svgs/settings-icon-open.svg' : 'public/svgs/settings-icon.svg'" v-bind:class="{ inverted: invertIcons}"></div>
      <transition name="bounce">
        <div class="quick-access-menu" v-show="!collapsed" v-bind:style="{ backgroundColor: getBaseColor}" >
          <div class="quick-access-header" v-bind:style="{ backgroundColor: getDetailColor}">
              <div class="header-text">Settings</div>
              <div class="header-close" v-on:click="toggleMenu();"><img alt="97" src="public/svgs/close-icon.svg"></div>
            </div>
          <div class="quick-access-items">
              <div class="quick-access-item single">
                  <div class="quick-access-item-header" v-bind:style="{ color: getTextColor}">Night Mode:</div>
                  <button class="toggleButton"></button>
              </div>
              <div class="quick-access-item">
                  <div class="quick-access-item-header" v-bind:style="{ color: getTextColor}">Color Theme:</div>
                  <div class="theme-grid-container">
                      <div class="theme-item" v-for="theme in this.themes" :key="theme.name">
                          <ColorPalette v-bind:colorPalette="theme" />
                      </div>
                  </div>
              </div>
              <div class="quick-access-item">
                <div class="quick-access-item-header" v-bind:style="{ color: getTextColor}">Quality</div>
                <div class="quality-settings-container">
                  <button class="quality-button" v-bind:class="{ disabled: compareToCurrentQuality('quality-disabled') }" v-on:click="selectQuality('quality-disabled')">X</button>
                  <button class="quality-button" v-bind:class="{ disabled: compareToCurrentQuality('quality-simple') }" v-on:click="selectQuality('quality-simple')">S</button>
                  <button class="quality-button" v-bind:class="{ disabled: compareToCurrentQuality('quality-default') }" v-on:click="selectQuality('quality-default')">M</button>
                  <button class="quality-button" v-bind:class="{ disabled: compareToCurrentQuality('quality-high') }" v-on:click="selectQuality('quality-high')">H</button>
                </div>
              </div>
          </div>
        </div>
      </transition>
  </div>
</template>

<script>
import ColorPalette from './ColorPalette.vue';
import conf from '../scripts/config';
import Themes from '../scripts/themes';

export default {
  name: 'QuickAccess',
  components: {
      ColorPalette
  },
  data () {
      return {
          collapsed: true,
          targetQuality: this.$store.state.qualitySettings,
          targetColorScheme: this.$store.state.colorSettings,
          themes: Themes.themes,
      };
  },
  methods : {
      toggleMenu () {
        this.collapsed = !this.collapsed;
      },

      selectQuality (quality) {
          this.targetQuality = quality;
          this.$root.setQualityLevel(this.targetQuality);
      },

       compareToCurrentQuality (name) {
            if(name == this.targetQuality)
                return true;
            return false;
      },
  },
  computed : {
    getTextColor: function () {
      return this.$root.getColorScheme().text;
    },
    getBaseColor: function () {
      return this.$root.getColorScheme().base;
    },
    getDetailColor: function () {
        return this.$root.getColorScheme().detail;
    },
    invertIcons:  function () {
      return this.$root.getColorScheme().invertIcons;
    },
    getHighlightColor: function () {
      return this.$root.getColorScheme().highlight;
    }
  },
  props: {
    colorTheme: Object
  }
}
</script>

<style lang="scss" scoped>
  
  @import "../scss/palettes.scss";

  .icon-settings {
    width: 40px;
    height: 40px;
    cursor: pointer;
    &.inverted {
        filter: invert(1.0)
    }
    &:hover {
        -webkit-animation: rotating 2s linear infinite;
        animation: rotating 2s linear infinite;
    }
  }

  .quick-access-menu {
    position: absolute;
    width: 250px;
    height: 400px;
    min-width: 120px;
    background-color: $intro-light;
    z-index: 100;

    font-family: adobe-caslon-pro, serif;
    font-weight: 600;
    font-style: normal;

    border-radius: 15px 15px 10px 10px;

    -webkit-box-shadow: 0px 11px 29px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 11px 29px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 11px 29px -10px rgba(0,0,0,0.75);

    transform-origin: center top;

  }

  .header-close {
    position: absolute;
    right: 5px;
    top: -8px;
    margin-right: 5px;
    margin-top: 5px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .menu-close-button {
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 5px;
    margin-top: 5px;

    width: 20px;
    height: 20px;

    display: inline-block;

    background-color: Transparent;
    color: #ffffff79;
  }

  .quick-access-header {
      background-color: tomato;
      font-size: 32px;
      border-radius: 10px 10px 0 0;
      color: $intro-light;
      .header-text {
        padding-left: 10px;
        font-family: lemonde-courrier, serif;
        font-weight: 400;
        font-style: normal;
        padding-bottom: 5px;
      }
  }

  .quality-settings-container {
      display: flex;
      justify-content: space-evenly;
  }

  .quality-button {

    text-align: center;
    text-decoration: none;
    display: inline-block;
    
    border-radius: 25px;
    border-width: 2px;
    border-color: $intro-dark;
    border-style: solid;

    font-size: 20px;

    margin: 4px 2px;
    cursor: pointer;

    &:hover {
        background-color: $intro-dark;
        color: white;
    }

    &.disabled {
        cursor: not-allowed;
        pointer-events: none;
        background-color: $intro-dark;
        color: white;
    }


  }

  .quick-access-items {
    display: flex;
    flex-direction: column;

    .quick-access-item-header {
        font-size: 24px;
        color: $intro-dark;
    }

    .quick-access-item {
        padding-top: 10px;
        padding-left: 10px;
        &.single {
            display: flex;
        }
    }
  }

  .theme-grid-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .theme-item {
      width: 40px;
      height: 40px;
      padding-right: 5px;
      padding-bottom: 5px;
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

  .bounce-enter-active {
  animation: bounce-in 0.2s;
}
  .bounce-leave-active {
    animation: bounce-in 0.1s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scaleY(0.9);
      opacity: 0.3;
    }
    50% {
      transform: scaleY(1.05);
      opacity: 1.0;
    }
    100% {
      transform: scaleY(1);
    }
  }
</style>
