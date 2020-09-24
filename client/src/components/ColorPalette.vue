<template>
  <div class="color-palette" v-on="{ mouseover: showTooltip, mouseleave: hideTooltip, click: selectPallete }">
    <transition name="slide">
        <div class="tooltip" v-show="tooltipEnabled">
            <div class="text">{{ this.colorPalette.name }}</div>
        </div>
    </transition>
    <div class="palette" v-bind:style="{ backgroundColor: this.colorPalette.base }">
      <div class="secondary-color" v-bind:style="{ borderTopColor: this.colorPalette.highlight }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPalette',
  data () {
      return {
          tooltipEnabled: false,
      };
  },
  methods : {
      selectPallete () {
          this.$root.setColorScheme(this.colorPalette);
      },
      showTooltip () {
          this.tooltipEnabled = true;
      },
      hideTooltip () {
          this.tooltipEnabled = false;
      }
  },
  props: {
    colorPalette: Object
  }
}
</script>

<style lang="scss" scoped>

  .tooltip {
    position: absolute;
    font-family: lemonde-courrier, serif;
    font-weight: 400;
    font-style: normal;
    border-radius: 5px;
    color: wheat;
    background-color: black;
    pointer-events:none;
    translate: 0px -20px;
    .text {
        padding: 6px;
    }
  }

  .color-palette {
    padding: 4px;
    background: rgb(70, 70, 70);
    border-radius: 5px;
  }

  .palette {
    background-color: black;
  }

  .secondary-color {
    border-top: 32px solid;
    border-left: 32px solid transparent;
    border-right: transparent;
    border-bottom: transparent;
    width: 0;
  }

  .slide-enter-active {
    animation: slide-in 0.3s;
  }
  .slide-leave-active {
    animation: slide-in 0.0s reverse;
  }
  @keyframes slide-in {
    0% {
      transform: translateY(6px);
      opacity: 0.0;
    }
    50% {
      transform: translateY(-3px);
      opacity: 0.3;
    }
    100% {
      transform: translateY(0px);
      opacity: 1.0;
    }
  }

</style>
