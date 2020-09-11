<template>
  <div id="app">
    <svg preserveAspectRatio="none" viewBox="0 0 500 500">
        <text class="inner" transform="rotate(90)" y="-5" x="0">97° Cider</text>
    </svg>
    <svg preserveAspectRatio="none" viewBox="0 0 500 500">
        <text class="outer" transform="rotate(90)" y="-15" x="10">97° Cider</text>
    </svg>
    <svg preserveAspectRatio="none" viewBox="0 0 500 500">
        <text class="far-outer" transform="rotate(90)" y="-25" x="20">97° Cider</text>
    </svg>
    <div class="intro-bg "></div>
    <div class="intro" v-if="loaded" transition="slide-fade">
        <div class="intro-container">
            <div class="intro-header">97° Cider</div>
            <transition name="slide-fade">
                <div class="intro-item" v-show="delayedLoad">
                    <div class="intro-desc">
                        Welcome to the 97° Cider! 
                        This website acts as a personal blog, of sort. Customize your experience and share with others!
                    </div>
                </div>
            </transition>
            <transition name="slide-fade">
                <div class="intro-item" v-show="delayedLoadBody">
                    <div class="intro-warning">
                        Hey! This webiste contains interactive graphics and audio. If you are photosensitive or have a history of epilepsy, please take caution when browsing the site.<br>You can disable graphics and audio in the graphics setting below. Thanks!
                    </div>
                </div>
            </transition>
            <transition name="slide-fade">
                <div class="intro-header">Quality Settings</div>
                <div class="intro-item" v-show="finalizeLoad">
                    <router-link to="/cafe" tag="button" class="intro-button">Enter</router-link>
                </div>
        </transition>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data () {
      return {
          loaded: true,
          delayedLoad: false,
          delayedLoadBody: false,
          finalizeLoad: false
      }
  },
  methods: {
      updateDelayedLoad () {
        this.delayedLoad = true;
      },
      updateDelayedBodyLoad () {
          this.delayedLoadBody = true;
      },
      finalizeDelayedLoad () {
          this.finalizeLoad = true;
      }
  },
  mounted () {
      setTimeout( this.updateDelayedLoad, 500);
      setTimeout( this.updateDelayedBodyLoad, 750);
      setTimeout( this.finalizeDelayedLoad, 1000);
  }
}
</script>

<style lang="scss">

svg {
    position: absolute;
    z-index: 0;
    left: 0px;
    right: 0px;
    top: 0px;
    font-family: adobe-caslon-pro, serif;
    font-weight: 600;
    font-style: normal;
    font-size: 60px;
    pointer-events: none;
}

text {
    fill: none;
    stroke:  #494648;
    stroke-width:0.2px;
    stroke-linejoin: round;
    pointer-events: none;
}

.inner {
    stroke: #494648;
}

.outer {
    stroke: #494648b2;
}

.far-outer {
    stroke: #4946485b;
}

.intro-bg {
    height: 100vh;
    width: 100vw;
    z-index: -10;
    position: absolute;
    left: 0;
    right: 0;

    background: rgb(245,235,252);
    background: -moz-linear-gradient(180deg, rgba(245,235,252,1) 0%, rgba(238,218,255,1) 21%, rgba(220,201,228,1) 73%, rgba(199,172,212,1) 100%);
    background: -webkit-linear-gradient(180deg, rgba(245,235,252,1) 0%, rgba(238,218,255,1) 21%, rgba(220,201,228,1) 73%, rgba(199,172,212,1) 100%);
    background: linear-gradient(180deg, rgba(245,235,252,1) 0%, rgba(238,218,255,1) 21%, rgba(220,201,228,1) 73%, rgba(199,172,212,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f5ebfc",endColorstr="#c7acd4",GradientType=1);
}

.intro {
    height: 90vh;
    min-width: 240px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    font-size: 40px;
    padding-left: 30%;
    padding-right: 30%;
    padding-top: 5%;
    color: #494648;

    font-family: adobe-caslon-pro, serif;
    font-weight: 600;
    font-style: normal;
    font-size: 60px;
}

.intro-container {
 
}

.intro-bg-header {
    color: transparent;
    font-size: 180px;
    position: absolute;
    z-index: -10;
    left: 0px;
    right: 0px;

    font-family: adobe-caslon-pro, serif;
    font-weight: 600;
    font-style: normal;

    text-shadow:-1px 1px 0 #000,
                 1px 1px 0 #000,
                 1px -1px 0 #000,
                -1px -1px 0 #000;

}

.intro-header {
    text-align: center;
    padding-top: 3%;
    padding-bottom: 3%;
}

.intro-desc {
    font-size: 24px;
}

.intro-item {
    padding-top: 3%;
    padding-bottom: 3%;
    margin: 0 auto;

    min-height: 0;
    object-fit: contain;
    width: 100%;
}

.intro-button {
    font-size: 24px;
    color: #494648;
    padding-left: 20px;
    padding-right: 20px;

    padding-top: 10px;
    padding-bottom: 10px;

    text-align: center;
    text-decoration: none;
    display: inline-block;

    background-color: Transparent;

    border-radius: 5px;
    border-width: 1px;
    border-color: #494648;
    border-style: solid;

    margin: 4px 2px;
    cursor: pointer;
}

@media screen and (max-width: 600px) {
    .intro{
        padding-left:10%;
        padding-right: 10%;
    }
}

@media screen and (max-height: 600px) {
    .intro {
        padding-top: 10px;
    }
}

@media screen and (min-width: 600px) {
    .intro{
        padding-left:30%;
        padding-right: 30%;
    }
}

.intro-warning {
    font-size: 18px;
    padding: 10px;
    border-width: 1px;
    border-style: solid;
    border-radius: 7px;
    border-color: #494648;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 1s
}

.fade-enter, .fade-leave-active {
   opacity: 0
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}

</style>