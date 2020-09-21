<template>
    <transition name="bounce" v-on:before-enter="disableContent" v-on:after-enter="enableContent" v-on:before-leave="disableContent">
      <div class="overlay" v-bind:class="{ fullscreen: overlay }" v-show="overlay">
          <div class="close-container" v-show="showContent">
            <button class="close-button" v-on:click="disableContent(); toggleOverlay();">X</button>
          </div>
            <div class="overlay-container">
              <transition name="slide-fade">
                <div v-show="showContent" class="overlay-content">
                  <slot></slot>
                </div>
              </transition>
            </div>
      </div>
    </transition>
</template>

<script>
export default {
  name: 'overlay',
  data () {
      return {
          overlay: false,
          showContent: false,
      }
  },
  methods: {
      toggleOverlay () {
          this.overlay = !this.overlay;
      },
      disableContent () {
          this.showContent = false;
      },
      enableContent () {
          this.showContent = true;
      }
  }
}
</script>

<style lang="scss">

@import "../scss/palettes.scss";

    .overlay {
        height: 100vh;
        width: 100vw;
        border-radius: 0px;
        z-index: 10;
        position: absolute;
        background: $intro;

        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
    }

    .close-container {
        position: absolute;
        right: 0;
        top: 0;
        margin-right: 20px;
        margin-top: 20px;
    }

    .close-button {
        text-align: center;
        text-decoration: none;
        display: inline-block;

        background-color: Transparent;

        border-radius: 25px;
        border-width: 2px;
        border-color: $intro-light;
        border-style: solid;

        color: $intro-light;
        font-size: 20px;

        margin: 4px 2px;
        cursor: pointer;
    }

    .overlay-container {
        height: 100vh;
        width: 100vw;
        overflow-y: auto;
    }

    .overlay-content {
        display: flex;
        flex-direction: column;
        font-size: 40px;
        padding-left: 30%;
        padding-right: 30%;
        padding-top: 5%;
        color: $intro-light;

        font-family: adobe-caslon-pro, serif;
        font-weight: 600;
        font-style: normal;
        font-size: 60px;

        overflow-y: auto;
    }

    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            width: 0vw;
            height: 0vw;
            border-radius: 100%;
        }
        25% {
            width: 50vw;
            height: 50vw;
            border-radius: 100%;
        }
        50% {
            width: 100vw;
            height: 100vw;
            border-radius: 100%;
        }
        100% {
            width: 100vw;
            height: 100vh;
        }
    }

    @media screen and (max-width: 600px) {
        .overlay-content {
            padding-left: 10%;
            padding-right: 10%;
        }
    }
</style>